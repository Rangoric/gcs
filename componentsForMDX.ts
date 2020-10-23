import { ListItem, OrderedList, Paragraph, Strong, UnorderedList } from "evergreen-ui";
import { A } from "./src/components/A";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "./src/components/Headings";

export const componentsForMDX = {
  a: A,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  p: Paragraph,
  ul: UnorderedList,
  ol:OrderedList,
  li: ListItem,
  strong: Strong,
};
