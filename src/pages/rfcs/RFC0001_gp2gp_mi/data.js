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
          url: withPrefix("/rfcs/RFC0001_gp2gp_mi/usecases"),
          label: "Use Cases",
        },
        {
          url: "#top",
          label: "New data to be collected",
          selected: true,
        },
        {
          url: withPrefix("/rfcs/RFC0001_gp2gp_mi/event_registration_started"),
          label: "Event: Registration Started",
        },
        {
          url: withPrefix("/rfcs/RFC0001_gp2gp_mi/event_ehr_generated"),
          label: "Event: EHR Generated",
        },
        {
          url: withPrefix("/rfcs/RFC0001_gp2gp_mi/event_ehr_validated"),
          label: "Event: EHR Validated",
        },
        {
          url: withPrefix("/rfcs/RFC0001_gp2gp_mi/event_ehr_integrated"),
          label: "Event: EHR Integrated",
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
    <h2>New data to be collected</h2>
    <p>
      What follows is an overview of the additional data we wish to acquire as
      part of the update to the MI.
    </p>
    <h3>Registration</h3>
    <p>
      As part of understanding the impact the wider registration processes have
      on GP2GP and its sucess or failure we wish to introduce the concept of a
      'Registration ID'. We intend for this to be unique id generated as the
      practice staff processing the registration starts the process.
    </p>
    <h3>EHR</h3>
    <p>
      We want to understand the size of EHRs being transferred both as a whole
      (ie. including attachments) and purely as structured information without
      reference to the attachments.
    </p>
    <p>
      We also want to know the number of degrades that the clinical staff have
      to resolve when integrating the record.
    </p>
    <p>
      This information is important to us to understand the impact of
      digitisation as paper is increasingly removed from GPs and is digitised.
    </p>
    <h3>Attachments</h3>
    <p>
      We want to understand what attachments are being sent via GP2GP, the
      nature of those attachments and if possible, why they are being attached.
      We believe this currently looks like:
    </p>
    <ul>
      <li>attachment file type</li>
      <li>attachment file size</li>
      <li>attachment nature (Code used in EHR when file attached?)</li>
      <li>attachment unique identifier</li>
      <li>attachment transfer status</li>
      <li>any uses of placeholders instead of the attachment</li>
    </ul>
    <p>
      This information is important to us as we see increasing amounts of
      attachments being added to the EHR and the impact of these failing to
      follow a patient to their new GP is increasingly risky.
    </p>
    <Pagination>
      <Pagination.Previous href={withPrefix("rfcs/RFC0001_gp2gp_mi/usecases")}>
        Usecases
      </Pagination.Previous>
      <Pagination.Next
        href={withPrefix("/rfcs/RFC0001_gp2gp_mi/event_registration_started")}
      >
        Event: Registration Started
      </Pagination.Next>
    </Pagination>
  </PageWithSideMenu>
)

export default Page
