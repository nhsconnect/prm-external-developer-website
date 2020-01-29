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
    <div className="nhsuk-width-container ">
      <main className="nhsuk-main-wrapper main-content ">
        <PermenantMenu />
        <article>
          <h2>GP2GP 2.3: Enhanced Managment Information (MI)</h2>
          <a name="overview"></a>
          <h3>Overview</h3>
          <p>
            In GP2GP we currently see a lot of errors that we either:
            <ul>
              <li>cannot currently measure</li>
              <li>or when we can measure, cannot currently understand.</li>
            </ul>
            The aim of the "Enhanced MI" specification update is to provide
            visibility in these key areas in a timely fashion.
          </p>
          <p>
            The goal is to provide additional information that is not currently
            provided in the 2.2b MI specification:
          </p>
          <h4>Sending Practice specific</h4>
          <ul>
            <li>
              For each attachment that is in the EHR:
              <ul>
                <li>Size</li>
                <li>Type</li>
                <li>Code</li>
              </ul>
            </li>
            <li>Whether that attachment was included in thhe GP2GP message</li>
            <li>Usage of 'Placeholders' when attachments are not sent</li>
          </ul>
          <h4>Recieving Practice specifc</h4>
          <ul>
            <li>
              For each attachment that is in the GP2GP message:
              <ul>
                <li>Size</li>
                <li>Type</li>
                <li>Code</li>
              </ul>
            </li>
            <li>Whether that attachment was integrated into the record</li>
            <li>
              For each degrade:
              <ul>
                <li>the code that was degraded</li>
                <li>The number of times it was degraded</li>
              </ul>
            </li>
          </ul>
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
        <a className="nhsuk-contents-list__link" href="#overview">
          Overview
        </a>
      </li>
      <li className="nhsuk-contents-list__item">
        <a className="nhsuk-contents-list__link" href="gp2gp_2.3/vision">
          Vision
        </a>
      </li>
      <li className="nhsuk-contents-list__item">
        <a className="nhsuk-contents-list__link" href="gp2gp_2.3/scope">
          Scope
        </a>
      </li>   
    </ol>
  </nav>
)

export default Layout
