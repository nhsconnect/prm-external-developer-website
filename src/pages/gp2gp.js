import React from "react"
import Header from "../components/header"
import "./index.scss"

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
    <div className="nhsuk-width-container ">
      <main className="nhsuk-main-wrapper main-content ">
        <PermenantMenu />
        <article>
          <h2>GP2GP</h2>
          <p></p>
        </article>
      </main>
    </div>
  </React.Fragment>
)

const PermenantMenu = ({ children }) => (
  <nav
    className="nhsuk-contents-list permenant-menu"
    role="navigation"
    aria-label="Pages in this guide"
  >
    <h2 className="nhsuk-u-visually-hidden">Contents</h2>
    <ol className="nhsuk-contents-list__list">
      <li className="nhsuk-contents-list__item">
        <a className="nhsuk-contents-list__link" href="gp2gp_2.2b">
          GP2GP v2.2b
        </a>
      </li>
      <li className="nhsuk-contents-list__item">
        <a className="nhsuk-contents-list__link" href="gp2gp_2.3">
          GP2GP v2.3 - "Enhanced MI"
        </a>
      </li>
    </ol>
  </nav>
)

export default Layout
