import React from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"

import Promo from "nhsuk-react-components/lib/components/promo"
import { ReadingPage } from "../../components/pagelayouts/readingpage"
import "../index.scss"

const Page = ({ children }) => (
  <>
    <Helmet title="RFCs - Patient Record Migration" />
    <ReadingPage
      sidemenu={{
        items: [
          {
            url: withPrefix("/gp2gp/gp2gp_2.2b/overview"),
            label: "GP2GP v2.2b",
          },
          {
            url: withPrefix("/gp2gp/gp2gp_2.3/overview"),
            label: "GP2GP v2.3",
          },
        ],
      }}
      breadcrumb={{
        items: [
          {
            url: withPrefix("/rfcs"),
            label: "RFCs",
          },
        ],
      }}
    >
      <h1>RFCs</h1>
      <p>
        Below is time ordered, latest first, list of the RFCs across Patient
        Record Migration.
      </p>
      <Promo href={withPrefix("/rfcs/RFC0002_patient_switching_standard_mi/overview")} small>
        <Promo.Heading>RFC0002: Patient Switching Standard - Management Information</Promo.Heading>
        <Promo.Content>
          Describes the process of collecting Management Information in the New Patient Switching Standard
        </Promo.Content>
      </Promo>
      <Promo href={withPrefix("/rfcs/RFC0001_gp2gp_mi/overview")} small>
        <Promo.Heading>RFC0001: GP2GP MI</Promo.Heading>
        <Promo.Content>
          Describes the changes to the Management Information specification for
          GP2GP
        </Promo.Content>
      </Promo>
    </ReadingPage>
  </>
)

export default Page
