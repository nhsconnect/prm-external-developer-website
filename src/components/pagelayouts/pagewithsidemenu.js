import React from "react"
import { Layout } from "../layout"
import { PermenantMenu } from "../permenantmenu"
import Breadcrumbs from "nhsuk-react-components/lib/components/breadcrumbs"
import Header from "nhsuk-react-components/lib/components/header"
import BackLink from "nhsuk-react-components/lib/components/back-link"
import { useMediaQuery } from "react-responsive"

const SharedHeader = () => {
    return (
      <Header>
        <Header.Container>
          <Header.Logo />
          <Header.Title>Patient Record Migration: Developer website</Header.Title>
          <Header.Content>
            <Header.MenuToggle />
          </Header.Content>
        </Header.Container>
        <Header.Navigation title="Menu">
          <Header.Link href="/prm-external-developer-website" mobileOnly>
            Home
          </Header.Link>
          <Header.Link href="/prm-external-developer-website/registrations">
            Registrations
          </Header.Link>
          <Header.Link href="/prm-external-developer-website/deductions">
            Deductions
          </Header.Link>
          <Header.Link href="/prm-external-developer-website/practicemigration">
            Practice Migration
          </Header.Link>
        </Header.Navigation>
      </Header>
    )
  }
  
  const SharedBreadcrumb = () => {
    const isMobile = useMediaQuery({
      query: "(max-width: 640px)",
    })
    return isMobile ? (
      <BackLink
        className="nhsuk-breadcrumb"
        href="/prm-external-developer-website/gp2gp"
      >
        Go back to GP2GP
      </BackLink>
    ) : (
      <Breadcrumbs>
        <Breadcrumbs.Item href="/prm-external-developer-website/registrations">
          Registrations
        </Breadcrumbs.Item>
        <Breadcrumbs.Item href="/prm-external-developer-website/gp2gp">
          GP2GP
        </Breadcrumbs.Item>
        <Breadcrumbs.Item href="/prm-external-developer-website/gp2gp_2.3">
          GP2GP 2.3
        </Breadcrumbs.Item>
      </Breadcrumbs>
    )
  }
  
  export const PageWithSideMenu = function({ sidemenu, children }) {
    return (
      <React.Fragment>
        <SharedHeader />
        <SharedBreadcrumb />
        <Layout>
          <div className="app-pane__side-bar">
            <PermenantMenu data={sidemenu} />
          </div>
          <div className="app-pane__main-content">{children}</div>
        </Layout>
      </React.Fragment>
    )
  }