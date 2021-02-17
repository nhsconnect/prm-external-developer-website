import React from "react"
import { withPrefix } from "gatsby"
import { PageWithSideMenu } from "../../components/pagelayouts/pagewithsidemenu"
import { items } from "../../menus/gp2gpmenu"
import "../index.scss"

const Page = () => (
  <PageWithSideMenu
    sidemenu={{ items }}
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
