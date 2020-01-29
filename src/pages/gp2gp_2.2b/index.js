import React from "react"
import Header from "../../components/header"
import "../index.scss"

const Layout = ({ children }) => (
  <React.Fragment>
    <Header
      serviceName={"Patient Record Migration: Developer website"}
      phaseBanner={{
        text:
          "This website and the standards contained is in early development. Whilst we hope you find it useful we would not recommend using this as your only source of guidance for developing.",
        tag: "Development:",
      }}
    />
    <Layout>
      <div className="app-pane__side-bar">
        <PermenantMenu />
      </div>
      <div className="app-pane__main-content">
        <h1>GP2GP 2.2b</h1>
        <p>Here is the documentation that make up the GP2GP 2.2b standard:</p>
      </div>
    </Layout>
  </React.Fragment>
)

const PermenantMenu = ({ children }) => (
  <nav
    className="nhsuk-contents-list permenant-menu"
    role="navigation"
    aria-label="Pages in this guide"
  >
    <h2 className="nhsuk-u-visually-hidden">Contents</h2>
    <ol className="nhsuk-list">
      <li className="app-side-nav__item app-side-nav__item--current">
        <a className="app-side-nav__link" href="#top">
          GP2GP v2.2b
        </a>
      </li>
      <li className="app-side-nav__item">
        <a
          className="app-side-nav__link"
          href="/prm-external-developer-website/gp2gp_2.3"
        >
          GP2GP v2.3 - "Enhanced MI"
        </a>
      </li>
    </ol>
  </nav>
)

export default Layout
