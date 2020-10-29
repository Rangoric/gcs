import React, { createContext, useState } from "react";
import { graphql, StaticQuery } from "gatsby";
import { Button, minorScale, Pane } from "evergreen-ui";
import { A } from "./A";

const query = graphql`
  query MyQuery {
    allMdx {
      totalCount
      pageInfo {
        perPage
      }
      nodes {
        slug
        headings {
          value
        }
      }
    }
  }
`;

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <StaticQuery
      query={query}
      render={data => (
          <Pane background={"purpleTint"}>
            <Pane padding={minorScale(1)}><Button onClick={() => setIsOpen(!isOpen)}>Open Full Menu</Button></Pane>
            <Pane padding={minorScale(1)} display={isOpen ? 'grid' : 'none'} gridTemplateColumns={'1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'} gap={minorScale(1)}>{queryIntoData(data).map(t => <A key={t.slug} to={`/${t.page}`}>{t.title}</A>)}</Pane>
          </Pane>
      )}
    />
  );
};

const queryIntoData = (data:any) => {
  const pages = data.allMdx.nodes.map(t => ({page:t.slug, title: t.headings.map(title => title.value)[0] || t.slug}));
  return pages;
}