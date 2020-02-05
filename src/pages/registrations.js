import React from "react"
import { withPrefix } from "gatsby"
import Promo from "nhsuk-react-components/lib/components/promo"
import { ReadingPage } from "../components/pagelayouts/readingpage"
import "./index.scss"

const Page = ({ children }) => (
  <ReadingPage>
    <h1>Registrations in Primary Care</h1>
    <p>
      Registrations in Primary Care are complex and require multiple actors and
      systems to communicate, update and synchronise. From the point of view of
      Patient Record Migration, we care about the Primary Care registrations
      that involve a data transfer of patient data, that is, where a patient has
      a previous Health Care record within Primary Care and it should be made
      available to the GP Practice.
    </p>
    <Promo.Group>
      <Promo href={withPrefix("/registrations/process")}>
        <Promo.Heading>Registration process in Primary Care</Promo.Heading>
        <Promo.Content>
          Find out information about how to successfully integrate with all the
          systems required for Primary Care registrations.
        </Promo.Content>
      </Promo>
      <Promo href={withPrefix("/gp2gp/overview")}>
        <Promo.Heading>Migrating patient data using GP2GP</Promo.Heading>
        <Promo.Content>
          During a patient registration in Primary Care we currently use GP2GP
          to transfer the patients data. Find out how to implement a compliant
          solution here.
        </Promo.Content>
      </Promo>
    </Promo.Group>
  </ReadingPage>
)

export default Page
