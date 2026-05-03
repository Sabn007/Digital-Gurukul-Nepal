import type {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-medium text-foreground shadow-inner shadow-slate-100 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-[140px] w-full resize-y rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-medium text-foreground shadow-inner shadow-slate-100 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25",
        className,
      )}
      {...props}
    />
  );
}

export function Label({
  className,
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("mb-1.5 block text-sm font-bold text-foreground", className)}
      {...props}
    >
      {children}
    </label>
  );
}
