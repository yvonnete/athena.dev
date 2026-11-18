import type { ReactNode } from "react";

interface SectionHeaderProps {
  label: string;
  title: ReactNode;
  description: string;
  centered?: boolean;
  reveal?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  centered = false,
  reveal = true,
}: SectionHeaderProps) {
  return (
    <div className={reveal ? "reveal" : undefined}>
      <p className={`section-label${centered ? " section-label-centered" : ""}`}>
        {label}
      </p>
      <h2 className={`section-title${centered ? " contact-title" : ""}`}>
        {title}
      </h2>
      <p className={`section-desc${centered ? " contact-desc" : ""}`}>
        {description}
      </p>
    </div>
  );
}
