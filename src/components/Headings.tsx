import React from "react";
import { Heading } from "evergreen-ui";

export const Heading1: React.FC<{}> = ({ children }) => (
  <Heading is={"h1"} size={900}>
    {children}
  </Heading>
);
export const Heading2: React.FC<{}> = ({ children }) => (
  <Heading is={"h1"} size={800}>
    {children}
  </Heading>
);
export const Heading3: React.FC<{}> = ({ children }) => (
  <Heading is={"h1"} size={700}>
    {children}
  </Heading>
);
export const Heading4: React.FC<{}> = ({ children }) => (
  <Heading is={"h1"} size={600}>
    {children}
  </Heading>
);
export const Heading5: React.FC<{}> = ({ children }) => (
  <Heading is={"h1"} size={500}>
    {children}
  </Heading>
);
export const Heading6: React.FC<{}> = ({ children }) => (
  <Heading is={"h1"} size={400}>
    {children}
  </Heading>
);
