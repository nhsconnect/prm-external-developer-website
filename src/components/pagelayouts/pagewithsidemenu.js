import React from "react"
import Breadcrumbs from "nhsuk-react-components/lib/components/breadcrumbs"
import BackLink from "nhsuk-react-components/lib/components/back-link"
import { useMediaQuery } from "react-responsive"

import { Layout } from "../layout"
import { PermenantMenu } from "../permenantmenu"
import { SharedHeader } from "../sharedheader"

const SharedBreadcrumb = props => {
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  })
  const lastItem = props.data.items[props.data.items.length - 1]
  return isMobile ? (
    <BackLink className="nhsuk-breadcrumb" href={lastItem.url}>
      Go back to {lastItem.label}
    </BackLink>
  ) : (
    <Breadcrumbs>
      {props.data.items.map((item, key) => {
        return (
          <Breadcrumbs.Item href={item.url} key={key}>
            {item.label}
          </Breadcrumbs.Item>
        )
      })}
    </Breadcrumbs>
  )
}

export const PageWithSideMenu = function({ sidemenu, breadcrumb, children }) {
  return (
    <React.Fragment>
      <SharedHeader />
      <SharedBreadcrumb data={breadcrumb} />
      <Layout>
        <div className="app-pane__side-bar">
          <PermenantMenu data={sidemenu} />
        </div>
        <div className="app-pane__main-content">{children}</div>
      </Layout>
    </React.Fragment>
  )
}
