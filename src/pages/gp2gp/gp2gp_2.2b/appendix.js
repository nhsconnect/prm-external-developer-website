import React from "react"
import { withPrefix } from "gatsby"
import Promo from "nhsuk-react-components/lib/components/promo"
import Pagination from "nhsuk-react-components/lib/components/pagination"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import sidemenudata from "./gp2gp_2.2b_menu"

const Page = ({ children }) => (
  <PageWithSideMenu
    sidemenu={sidemenudata}
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
    <h1>Appendix</h1>
    <p>
      Below is an alphabetical list of all the documents in GP2GP 2.2b specification:
    </p>
    <Promo
      href={withPrefix(
        "/NPFIT-PC-BLD-0173.01 GP2GP UC 2 Harvest and Prepare Management Information.pdf"
      )}
      small
    >
      <Promo.Heading>
        NPFIT-PC-BLD-0173.01 GP2GP UC 2 Harvest and Prepare Management
        Information
      </Promo.Heading>
      <Promo.Content>
        Describes the high level use case for reporting capability required by
        GP2GP 2.2b
      </Promo.Content>
    </Promo>

    <p>
      Detailed requirements for what information must be reported on can be
      found here:
    </p>
    <Promo
      href={withPrefix(
        "/NPFIT-PC-BLD-0171.02 GP2GP SS Harvesting Management Information.pdf"
      )}
      small
    >
      <Promo.Heading>
        NPFIT-PC-BLD-0171.02 GP2GP SS Harvesting Management Information
      </Promo.Heading>
      <Promo.Content>
        Describes the detailed data items that must be reported on during a
        registration as part of GP2GP 2.2b
      </Promo.Content>
    </Promo>

    <p>You may also find the defined responses codes useful at this point:</p>
    <Promo
      href={withPrefix("/NPFIT-PC-BLD-0083.08 GP2GP Response Codes.pdf")}
      small
    >
      <Promo.Heading>NPFIT-PC-BLD-0083.08 GP2GP Response Codes</Promo.Heading>
      <Promo.Content>
        Describes the detailed respomnse codes to be used as part of the GP2GP
        2.2b implementation
      </Promo.Content>
    </Promo>

    <p>
      To help aid understanding of how the Spine technical design and the
      Mangament information specifications link together we have produduced the
      following design document:
    </p>
    <Promo href={withPrefix("/GP2GP Service mapping.pdf")} small>
      <Promo.Heading>GP2GP Service mapping</Promo.Heading>
      <Promo.Content>
        Maps the MI specification to the Spine technical design
      </Promo.Content>
    </Promo>

    <Pagination>
      <Pagination.Previous
        href={withPrefix("gp2gp/gp2gp_2.2b/managment_infomation")}
      >
        Management Information
      </Pagination.Previous>
    </Pagination>
  </PageWithSideMenu>
)

export default Page
