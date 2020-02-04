import React from "react"
import { withPrefix } from "gatsby"
import { PageWithSideMenu } from "../../components/pagelayouts/pagewithsidemenu"
import "../index.scss"

const Page = ({ children }) => (
  <PageWithSideMenu
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
          url: withPrefix("/registrations"),
          label: "Registrations",
        },
        {
          url: withPrefix("/gp2gp/overview"),
          label: "GP2GP",
        },
      ],
    }}
  >
    <h1>GP2GP</h1>
    <p>
      GP2GP is the standard that currently defines the process that you must
      adhere to to retrieve the patients data from their previous practice and
      the data model used when the data is transferred. For more details pick
      the version you wish to know more about from the menu.
    </p>
  </PageWithSideMenu>
)

export default Page
