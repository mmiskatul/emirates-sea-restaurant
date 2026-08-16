export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is built from our own typed objects, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
