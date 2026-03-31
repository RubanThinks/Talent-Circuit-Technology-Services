import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-blue-900 to-sky-500 text-white shadow-lg shadow-blue-900/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-900/30",
        outline:
          "border-2 border-white/40 text-white hover:bg-white/10 hover:border-white hover:-translate-y-0.5",
        white:
          "bg-white text-blue-900 shadow-md hover:-translate-y-0.5 hover:shadow-lg",
        outlineWhite:
          "border-2 border-white/50 text-white hover:bg-white/15 hover:border-white",
        ghost:
          "hover:bg-blue-50 text-slate-600 hover:text-blue-900",
        link: "text-blue-900 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-7 text-sm",
        sm: "h-9 px-5 text-xs",
        lg: "h-13 px-9 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
