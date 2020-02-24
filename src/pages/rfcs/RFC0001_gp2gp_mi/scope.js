import React from "react"
import { withPrefix } from "gatsby"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import InsetText from "nhsuk-react-components/lib/components/inset-text"
import Image from "nhsuk-react-components/lib/components/image"
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
          url: "#top",
          label: "Scope",
          selected: true,
        },
        {
          url: withPrefix("/rfcs/RFC0001_gp2gp_mi/event_ehr_generated"),
          label: "Event: EHR Generated",
        },
        {
          url: withPrefix("/rfcs/RFC0001_gp2gp_mi/event_ehr_recieved"),
          label: "Event: EHR Recieved",
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
    <h2>Scope</h2>
    <p>
      We believe that initially, we should focus on the areas where we want to
      gather new information first, to prove out the solution, as such we will
      be focusing on the events around when the EHR is sent, and then when then
      EHR is received.
    </p>
    <Image
      src={withPrefix("/RFC0001_gp2gp_mi/scope_example.png")}
      alt="Highlighting the area of focus for this RFC around the EHR being sent and received"
      caption="Our area of focus around the EHR being sent and received"
      className="image-fullwidth"
    />
    <p>Delivery method</p>
    <p>Data model</p>
    <p>Authorisation/Authentication</p>
    <p>Assurance</p>
    <p>Use cases</p>
    <Pagination>
      <Pagination.Previous href={withPrefix("rfcs/RFC0001_gp2gp_mi/vision")}>
        Vision
      </Pagination.Previous>
      <Pagination.Next
        href={withPrefix("rfcs/RFC0001_gp2gp_mi/mandatory_events")}
      >
        Mandatory Events
      </Pagination.Next>
    </Pagination>
  </PageWithSideMenu>
)

export default Page
