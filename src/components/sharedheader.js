import React from "react"
import Header from "nhsuk-react-components/lib/components/header"

export const SharedHeader = () => {
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
