import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...args: (string | false | undefined | null)[]): string {
  return args.filter(Boolean).join(" ");
}
