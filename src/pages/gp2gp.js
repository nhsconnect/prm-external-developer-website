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
                url: "/prm-external-developer-website/gp2gp_2.2b",
                label: "GP2GP v2.2b",
              },
              {
                url: "/prm-external-developer-website/gp2gp_2.3",
                label: "GP2GP v2.3 - 'Enhanced MI'",
              },
            ],
          }}
        />
      </div>
      <div className="app-pane__main-content">
        <h1>GP2GP</h1>
      </div>
    </Layout>
  </React.Fragment>
)

export default Page
