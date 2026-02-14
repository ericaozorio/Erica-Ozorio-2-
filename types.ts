import { ReactNode } from "react";

export interface AnimatedComponentProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  colSpan: string;
  variant: "dark" | "light" | "outline" | "accent";
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}
