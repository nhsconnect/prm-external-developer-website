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
          selected: true
        },
        {
          url: withPrefix("gp2gp/gp2gp_2.2b/spine_technical_design"),
          label: "Spine techhnical design",
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
    <h1>GP2GP 2.2b</h1>
    <p>
      Understanding the GP2GP 2.2b specification is difficult and complicated
      and involves reading lots of documentation. What follows is our current
      understanding of how best to read that documentation for those who are
      trying to implement GP2GP 2.2 from scratch.
    </p>
    <p>Here is the opening high level use case for GP2GP 2.2:</p>
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

    <Pagination>
      <Pagination.Next
        href={withPrefix("/gp2gp/gp2gp_2.2b/spine_technical_design")}
        description="Next"
      >
        Spine technical design
      </Pagination.Next>
    </Pagination>
  </PageWithSideMenu>
)

export default Page
