import React from "react"
export const Layout = ({ children }) => (
  <div className="nhsuk-width-container ">
    <main className="nhsuk-main-wrapper">
      <div className="nhsuk-grid-row">
        <div className="nhsuk-grid-column-full">
          <div className="app-pane">{children}</div>
        </div>
      </div>
    </main>
  </div>
)
