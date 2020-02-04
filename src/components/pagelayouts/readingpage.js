import React from "react"

import { Layout } from "../layout"
import { SharedHeader } from "../sharedheader"

export const PageWithSideMenu = function({ children }) {
  return (
    <React.Fragment>
      <SharedHeader />
      <Layout>
        <div className="app-pane__main-content">{children}</div>
      </Layout>
    </React.Fragment>
  )
}
