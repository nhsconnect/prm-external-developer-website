import React from "react"
import { PageWithSideMenu } from "../../components/pagelayouts/pagewithsidemenu"
import "../index.scss"

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
          url: "/prm-external-developer-website/registrations",
          label: "Registrations",
        },
        {
          url: "/prm-external-developer-website/gp2gp",
          label: "GP2GP",
        },
        {
          url: "/prm-external-developer-website/gp2gp_2.2b",
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
