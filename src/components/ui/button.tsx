"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-150 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-55 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary-hover active:translate-y-px shadow-[0_1px_2px_rgba(16,35,79,0.08)] hover:shadow-[0_4px_12px_rgba(42,82,190,0.22)]",
        secondary:
          "bg-card text-primary border border-border-interactive hover:bg-secondary hover:border-primary active:translate-y-px",
        text: "text-primary hover:text-primary-hover underline-offset-4 hover:underline",
        ghost: "hover:bg-secondary hover:text-accent-foreground",
        outline:
          "border border-input bg-card hover:bg-secondary hover:text-accent-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:translate-y-px",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[46px] px-5",
        sm: "h-10 rounded-md px-4 text-[13px]",
        lg: "h-[52px] px-7 text-[15px]",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
