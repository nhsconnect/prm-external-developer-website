import React from "react"
import { withPrefix } from "gatsby"
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
        <Header.Link href={withPrefix("/")} mobileOnly>
          Home
        </Header.Link>
        <Header.Link href={withPrefix("/registrations")}>
          Registrations
        </Header.Link>
        <Header.Link href={withPrefix("/deductions")}>
          Deductions
        </Header.Link>
        <Header.Link href={withPrefix("/practicemigration")}>
          Practice Migration
        </Header.Link>
      </Header.Navigation>
    </Header>
  )
}
