import { Link as GatsbyLink } from "gatsby";
import { Link } from "evergreen-ui";
import React from "react";

export interface IAProps {
  to: string;
  href: string;
  textDecoration?: string;
}

export const A: React.FC<IAProps> = ({
  to,
  href,
  children,
  textDecoration,
}) => (
  <Link is={GatsbyLink} to={to || href} textDecoration={textDecoration}>
    {children}
  </Link>
);
