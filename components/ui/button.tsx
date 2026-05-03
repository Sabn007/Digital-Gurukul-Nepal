import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "outlineAccent";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#db2537] text-white shadow-[0_4px_0_0] shadow-[#6b1520]/35 hover:translate-y-0.5 hover:shadow-[0_2px_0_0] active:translate-y-1 active:shadow-none",
  secondary:
    "bg-[#2a96de] text-white shadow-[0_4px_0_0] shadow-[#164a6e]/35 hover:translate-y-0.5 hover:shadow-[0_2px_0_0] active:translate-y-1 active:shadow-none",
  ghost: "bg-white/80 text-foreground ring-1 ring-slate-200/80 hover:bg-white",
  outline:
    "border-2 border-[#db2537]/45 bg-white text-[#db2537] hover:border-[#db2537] hover:bg-[#db2537]/8",
  outlineAccent:
    "border-2 border-[#2a96de]/45 bg-white text-[#2a96de] hover:border-[#2a96de] hover:bg-[#2a96de]/10",
};

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-bold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
