import React from "react"
import { withPrefix } from "gatsby"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import InsetText from "nhsuk-react-components/lib/components/inset-text"
import Pagination from "nhsuk-react-components/lib/components/pagination"
import "../../index.scss"

const Page = ({ children }) => (
  <PageWithSideMenu
    sidemenu={{
      items: [
        {
          url: withPrefix("/rfcs/RFC0001_gp2gp_mi/overview"),
          label: "Overview",
        },
        {
          url: withPrefix("/rfcs/RFC0001_gp2gp_mi/vision"),
          label: "Vision",
        },
        {
          url: withPrefix("/rfcs/RFC0001_gp2gp_mi/scope"),
          label: "Scope",
        },
        {
          url: withPrefix("/rfcs/RFC0001_gp2gp_mi/event_ehr_generated"),
          label: "Event: EHR Generated",
        },        
        {
          url: "#top",
          label: "Event: EHR Recieved",
          selected: true,
        },
      ],
    }}
    breadcrumb={{
      items: [
        {
          url: withPrefix("/rfcs"),
          label: "RFCs",
        },
        {
          url: withPrefix("/rfcs/RFC0001_gp2gp_mi/overview"),
          label: "RFC0001 GP2GP MI",
        },
      ],
    }}
  >
    <InsetText>
      <p>
        This RFC is currently 'Being discussed'. As such, it may be undergoing
        significant change and should not be used as the basis of an
        implementation at the moment. If you want to have your say and
        contribute to this RFC then go to our{" "}
        <a
          href="https://github.com/nhsconnect/prm-external-developer-website/issues/1"
          title="External website where RFC comments are allowed"
        >
          Github site
        </a>
        .
      </p>
    </InsetText>
    <h1>RFC0001 GP2GP MI</h1>
    <h2>Event: EHR Recieved</h2>
    <h4>Event Description</h4>
    <p>
      The EHR Integrated event should be sent when a receiving system has
      received the EHR but it has not yet integrated it.
    </p>
    <Pagination>
      <Pagination.Previous href={withPrefix("rfcs/RFC0001_gp2gp_mi/event_ehr_generated")}>
        Event: EHR Generated
      </Pagination.Previous>
    </Pagination>
  </PageWithSideMenu>
)

export default Page
