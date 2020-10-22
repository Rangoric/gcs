import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/state/store";
import Layout from "./src/components/layout";
import { A } from "./src/components/A";
import { Heading } from "evergreen-ui";
import { MDXProvider } from "@mdx-js/react"

const componentsForMDX = {
  a: A,
  h1: Heading,
};

export const wrapPageElement = ({ element }) => (
  <Provider store={store}>
    <MDXProvider components={componentsForMDX}>
      <Layout>{element}</Layout>
    </MDXProvider>
  </Provider>
);
