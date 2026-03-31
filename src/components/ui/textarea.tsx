import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 transition-all duration-200 placeholder:text-slate-400 focus:border-blue-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/10 disabled:cursor-not-allowed disabled:opacity-50 resize-y",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
