import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-background/40 backdrop-blur hover:bg-muted text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-muted hover:text-foreground text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-brand text-primary-foreground font-semibold shadow-glow hover:shadow-[0_0_60px_-5px_hsl(var(--brand-mint)/0.7)] hover:-translate-y-0.5",
        glass: "bg-foreground/5 border border-foreground/10 text-foreground backdrop-blur-md hover:bg-foreground/10",
        block: "!rounded-none bg-[hsl(var(--brand-mint))] text-primary-foreground font-pixel uppercase tracking-wider block-3d border-2 border-[hsl(150_30%_10%)] hover:bg-[hsl(var(--brand-mint))]/95",
        blockAlt: "!rounded-none bg-[hsl(28_55%_35%)] text-foreground font-pixel uppercase tracking-wider block-3d border-2 border-[hsl(28_50%_15%)] hover:bg-[hsl(28_55%_38%)]",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-7 text-base",
        xl: "h-14 px-9 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
