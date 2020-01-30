import React from "react"
import Header from "../components/header"
import { Layout } from "../components/layout"
import { PermenantMenu } from "../components/permenantmenu"
import "./index.scss"

const Page = ({ children }) => (
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
        <PermenantMenu
          data={{
            items: [
              {
                url: "/prm-external-developer-website/gp2gp",
                label: "GP2GP",
              },
            ],
          }}
        />
      </div>
      <div className="app-pane__main-content">
        <h1>Patient Record Migration: Developer website</h1>
        <p>
          Welcome to the Patient Record Migration: Developer website. Please
          click a link to the area you are interested in.
        </p>
      </div>
    </Layout>
  </React.Fragment>
)

export default Page
