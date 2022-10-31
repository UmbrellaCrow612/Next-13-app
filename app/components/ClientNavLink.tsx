"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface clientNavLinkProps {
  children: React.ReactNode;
  href: string;
}

export const ClientNavLink: React.FC<clientNavLinkProps> = ({
  children,
  href,
}) => {
  const pathname = usePathname();
  return <Link className={pathname == href ? "underline" : ""} href={href}>{children}</Link>;
};
