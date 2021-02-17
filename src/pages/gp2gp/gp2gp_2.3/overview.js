import React from "react"
import { withPrefix, Link } from "gatsby"
import Promo from "nhsuk-react-components/lib/components/promo"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import { items, OVERVIEW } from "../../../menus/gpgp23menu"
import "../../index.scss"

const Page = () => (
  <PageWithSideMenu
    sidemenu={{ items, selectedItem: OVERVIEW }}
    breadcrumb={{
      items: [
        {
          url: withPrefix("/registrations"),
          label: "Registrations",
        },
        {
          url: withPrefix("/gp2gp/overview"),
          label: "GP2GP",
        },
        {
          url: withPrefix("/gp2gp/gp2gp_2.3/overview"),
          label: "GP2GP 2.3",
        },
      ],
    }}
  >
    <h1>GP2GP 2.3</h1>
    <p>
      In GP2GP 2.3, we intend to improve the Management Information within GP2GP
      so that we can start to make good decisions about the future of
      registrations and how patient data is migrated between Primary Care
      providers.
    </p>
    <p>
      GP2GP 2.3 intends to change GP2GP 2.2b by implementing{" "}
      <Link to="/rfcs/RFC0001_gp2gp_mi/overview">RFC0001 GP2GP MI</Link>, which
      details the changes we intend to make to Management Information. The
      following documentation has been written AS IF that RFC has been accepted.
    </p>
    <p>
      Understanding the GP2GP 2.3 specification is difficult and complicated and
      involves reading lots of documentation. What follows is our current
      understanding of how best to read that documentation for those who are
      trying to implement GP2GP 2.3 from scratch.
    </p>
    <p>Here is the opening high level use case for GP2GP 2.3:</p>
    <Promo
      href={withPrefix(
        "/NPFIT-PC-BLD-0172.02 GP2GP UC1 Transfer Electronic Health Record.pdf"
      )}
      small
    >
      <Promo.Heading>
        NPFIT-PC-BLD-0172.02 GP2GP UC1 Transfer Electronic Health Record
      </Promo.Heading>
      <Promo.Content>
        Describes the initial use case for GP2GP and its use in the transfer of
        the EHR
      </Promo.Content>
    </Promo>
  </PageWithSideMenu>
)

export default Page
