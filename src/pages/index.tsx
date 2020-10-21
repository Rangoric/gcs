import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <h1>Do you want to play a game?</h1>
    <p>Here we have the rules for 2 games for now.</p>
    <p>One is the d20 SRD. This is a good baseline set of rules. You could also do Pathfinder, or Starfinder, or something else. But those rules are elsewhere already and well maintained.</p>
    <p>The other is my set of rules. It's a mix of everything mentioned above, in addition to things I like, with changes I like.</p>
  </>
)

export default IndexPage
