import Script from "next/script";

/**
 * One inline script, no hydration cost: adds `js` to <html> so reveal styles
 * only apply when they can be undone, then reveals blocks as they scroll in.
 *
 * It fails open in every direction — reduced motion, no IntersectionObserver, a
 * tab that starts hidden, or an observer that never fires all leave the content
 * plainly visible. A reveal animation is never worth hiding content over.
 */
const source = `
(function () {
  var root = document.documentElement;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function revealAll() {
    root.classList.remove('js');
  }

  // Hidden tabs don't fire IntersectionObserver, so never hide anything there.
  if (reduced || !('IntersectionObserver' in window) || document.visibilityState !== 'visible') {
    return;
  }

  root.classList.add('js');

  var revealed = 0;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.setAttribute('data-reveal', 'in');
      observer.unobserve(entry.target);
      revealed++;
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  function scan() {
    document.querySelectorAll('[data-reveal=""]').forEach(function (el) {
      observer.observe(el);
    });
  }
  scan();
  document.addEventListener('esr:rescan', scan);

  // Safety net: if nothing has revealed shortly after load, the observer is not
  // doing its job — drop the whole mechanism rather than leave a blank page.
  window.setTimeout(function () {
    if (revealed === 0) {
      observer.disconnect();
      revealAll();
    }
  }, 2500);

  // Printing and back/forward cache restores both bypass scroll entirely.
  window.addEventListener('beforeprint', revealAll);
})();
`;

export function RevealScript() {
  return (
    <Script id="esr-reveal" strategy="afterInteractive">
      {source}
    </Script>
  );
}
