import React from "react"
import { PageWithSideMenu } from "../components/pagelayouts/pagewithsidemenu"
import "./index.scss"

const Page = ({ children }) => (
  <PageWithSideMenu
    sidemenu={{
      items: [
        {
          url: "/prm-external-developer-website/gp2gp_2.2b",
          label: "GP2GP v2.2b",
        },
        {
          url: "/prm-external-developer-website/gp2gp_2.3",
          label: "GP2GP v2.3 - 'Enhanced MI'",
        },
      ],
    }}
    breadcrumb={{
      items: [
        {
          url: "/prm-external-developer-website/registrations",
          label: "Registrations",
        },
        {
          url: "/prm-external-developer-website/gp2gp",
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
