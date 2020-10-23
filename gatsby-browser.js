import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/state/store";
import Layout from "./src/components/layout";
import { componentsForMDX } from "./componentsForMDX";
import { MDXProvider } from "@mdx-js/react";

export const wrapPageElement = ({ element }) => (
  <Provider store={store}>
    <MDXProvider components={componentsForMDX}>
      <Layout>{element}</Layout>
    </MDXProvider>
  </Provider>
);
