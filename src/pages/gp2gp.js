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
      <main className="nhsuk-main-wrapper">
        <div className="nhsuk-grid-row">
          <div className="nhsuk-grid-column-full">
            <div className="app-pane">
              <div className="app-pane__side-bar">
                <PermenantMenu />
              </div>
              <div className="app-pane__main-content">
                <h1>GP2GP</h1>
              </div>
            </div>
          </div>
        </div>
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
    <ol className="nhsuk-list">
      <li className="app-side-nav__item">
        <a className="app-side-nav__link" href="#overview">
          GP2GP v2.2b
        </a>
      </li>
      <li className="app-side-nav__item">
        <a
          className="app-side-nav__link"
          href="/prm-external-developer-website/gp2gp_2.3/vision"
        >
          GP2GP v2.3 - "Enhanced MI"
        </a>
      </li>
    </ol>
  </nav>
)

export default Layout
