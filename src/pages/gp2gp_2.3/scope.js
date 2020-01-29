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
      <main className="nhsuk-main-wrapper">
        <div className="nhsuk-grid-row">
          <div className="nhsuk-grid-column-full">
            <div className="app-pane">
              <div className="app-pane__side-bar">
                <PermenantMenu />
              </div>
              <div className="app-pane__main-content">
                <h1>GP2GP 2.3: Enhanced Managment Information (MI)</h1>
                <a name="scope"></a>
                <h2>Scope</h2>
                <p>
                  When a sending system generates an EHR extract, the following
                  JSON MI event must be submitted. In the first instance we are
                  interested in capturing attachment metadata:
                </p>
                <pre>{`
{
  "id": "ABC123",
  "event_type": "ehr_generated",
  "registration_id": "DEF456",
  "timestamp": 1575384234,
  "attachments" : [
    {"id": "xyz", "mimetype": "application/pdf", "size_bytes": 3084322},
    {"id": "qrt", "mimetype": "audio/mpeg", "size_bytes": 24352346}
  ]
}
          `}</pre>

                <h3>Event fields</h3>
                <table>
                  <tbody>
                    <tr>
                      <th>Field</th>
                      <th>Description</th>
                    </tr>
                    <tr>
                      <td>id</td>
                      <td>Unique identifier for this event.</td>
                    </tr>
                    <tr>
                      <td>event_type</td>
                      <td>The type of this event: “ehr_generated”</td>
                    </tr>
                    <tr>
                      <td>registration_id</td>
                      <td>
                        Unique identifier of the registration this event belongs
                        to
                      </td>
                    </tr>
                    <tr>
                      <td>timestamp</td>
                      <td>
                        Unix epoch timestamp of when the EHR was generated
                      </td>
                    </tr>
                    <tr>
                      <td>attachment</td>
                      <td>
                        JSON list containing metadata for each attachment in the
                        EHR
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h3>Attachment metadata fields</h3>
                <table>
                  <tbody>
                    <tr>
                      <th>Field</th>
                      <th>Description</th>
                    </tr>
                    <tr>
                      <td>id</td>
                      <td>
                        The ID of the attachment (as found in the XML of the EHR
                        extract)
                      </td>
                    </tr>
                    <tr>
                      <td>mimetype</td>
                      <td>The mime type of the attachment</td>
                    </tr>
                    <tr>
                      <td>size_bytes</td>
                      <td>The size in bytes of the attachment</td>
                    </tr>
                    <tr>
                      <td>timestamp</td>
                      <td>
                        Unix epoch timestamp of when the EHR was generated
                      </td>
                    </tr>
                    <tr>
                      <td>attachment</td>
                      <td>
                        JSON list containing metadata for each attachment in the
                        EHR
                      </td>
                    </tr>
                  </tbody>
                </table>
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
      <a className="app-side-nav__link" href="/prm-external-developer-website/gp2gp_2.3">
        Overview
      </a>
    </li>
    <li className="app-side-nav__item">
      <a
        className="app-side-nav__link"
        href="/prm-external-developer-website/gp2gp_2.3/vision"
      >
        Vision
      </a>
    </li>
    <li className="app-side-nav__item app-side-nav__item--current">
      <a
        className="app-side-nav__link"
        href="#scope"
      >
        Scope
      </a>
    </li>
  </ol>
</nav>
)

export default Layout
