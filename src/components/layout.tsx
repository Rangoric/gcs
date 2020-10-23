/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link as GatsbyLink, navigate } from "gatsby";
import {
  Heading,
  majorScale,
  minorScale,
  Pane,
  Link,
  Position,
  Popover,
  Menu,
  Button,
} from "evergreen-ui";
import "./layout.css";
import { A } from "./A";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Pane display={"grid"}>
      <Pane
        background={"purpleTint"}
        padding={minorScale(1)}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <A to="/" textDecoration={"none"}>
          <Heading>{data.site.siteMetadata.title}</Heading>
        </A>
        <Popover
          position={Position.BOTTOM_RIGHT}
          content={
            <Menu>
              <Menu.Group>
                <Menu.Item onSelect={() => navigate("/srd")}>3.5 SRD</Menu.Item>
                <Menu.Item onSelect={() => navigate("/darian")}>
                  Darian SRD
                </Menu.Item>
              </Menu.Group>
            </Menu>
          }
        >
          <Button>Ruleset</Button>
        </Popover>{" "}
      </Pane>
      <Pane is={"main"} background={"tealTint"} padding={majorScale(1)}>
        {children}
      </Pane>
      <Pane is={"footer"} background={"purpleTint"} padding={minorScale(1)}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Pane>
    </Pane>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
