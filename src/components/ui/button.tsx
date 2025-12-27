import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/30 hover:scale-[1.02]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-[1.02]",
        outline: "border border-border bg-transparent hover:bg-secondary hover:text-secondary-foreground hover:border-primary/30",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-[1.02]",
        ghost: "hover:bg-secondary hover:text-secondary-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "relative bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground font-semibold overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-accent before:via-primary before:to-primary before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 hover:scale-[1.03] [&>*]:relative [&>*]:z-10",
        heroOutline: "relative border-2 border-primary/40 bg-transparent text-foreground overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/10 before:to-accent/10 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 hover:border-primary/60 hover:scale-[1.02]",
        premium: "relative bg-card border border-border/50 text-foreground overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:to-accent/5 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 hover:border-primary/30 hover:shadow-card-hover hover:scale-[1.02]",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-lg px-4",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-2xl px-10 text-lg",
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
