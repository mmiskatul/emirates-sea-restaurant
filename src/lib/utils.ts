import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Menu numbers are printed with a leading zero up to 99. Match the print. */
export function formatMenuNumber(no: number) {
  return no < 10 ? `0${no}` : String(no);
}
