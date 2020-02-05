import React from "react"
import { withPrefix } from "gatsby"
import Promo from "nhsuk-react-components/lib/components/promo"
import Pagination from "nhsuk-react-components/lib/components/pagination"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"

const Page = ({ children }) => (
  <PageWithSideMenu
    sidemenu={{
        items: [
          {
            url: withPrefix("gp2gp/gp2gp_2.2b/overview"),
            label: "Overview",
          },
          {
            url: withPrefix("gp2gp/gp2gp_2.2b/spine_technical_design"),
            label: "Spine techhnical design",
            selected: true,
          },
          {
            url: withPrefix("gp2gp/gp2gp_2.2b/management_information"),
            label: "Management Information",
          },
          {
              url: withPrefix("gp2gp/gp2gp_2.2b/appendix"),
              label: "Appendix",
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
    <h1>Spine Technical Design</h1>
    <p>
      Underpinning the use case is the design. This documents the overall
      picture of how the GP2GP process should be implemented.
    </p>
    <Promo
      href={withPrefix(
        "/NPFIT-PC-BLD-0069 24 GP2GP Spine Technical Design v7.1.pdf"
      )}
      small
    >
      <Promo.Heading>
        NPFIT-PC-BLD-0069 24 GP2GP Spine Technical Design v7.1
      </Promo.Heading>
      <Promo.Content>
        Describes the design of GP2GP and the requirements of implementation
      </Promo.Content>
    </Promo>

    <Pagination>
      <Pagination.Previous href={withPrefix("gp2gp/gp2gp_2.2b/overview")}>
        Overview
      </Pagination.Previous>
      <Pagination.Next
        href={withPrefix("gp2gp/gp2gp_2.2b/management_information")}
      >
        Management Information
      </Pagination.Next>
    </Pagination>
  </PageWithSideMenu>
)

export default Page
