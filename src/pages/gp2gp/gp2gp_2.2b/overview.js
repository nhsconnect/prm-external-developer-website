import React from "react"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import "../../practicemigration"
import { withPrefix } from "gatsby"

const Page = ({ children }) => (
  <PageWithSideMenu
    sidemenu={{
      items: [
        {
          url: "#top",
          label: "Overview",
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
        {
          url: withPrefix("/gp2gp/gp2gp_2.2b/overview"),
          label: "GP2GP 2.2b",
        },
      ],
    }}
  >
    <h1>GP2GP 2.2b</h1>
    <p>Here is the documentation that make up the GP2GP 2.2b standard:</p>
  </PageWithSideMenu>
)

export default Page
