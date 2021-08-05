import React from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import WarningCallout from "nhsuk-react-components/lib/components/warning-callout"
import Pagination from "nhsuk-react-components/lib/components/pagination"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import { items, EHR_INTEGRATED } from "../../../menus/rfc0002menu"
import ehrIntegrated from "../../../../static/RFC0002_patient_switching_standard_mi/payloads/ehrIntegrated.json"
import "../../index.scss"

const Page = () => (
  <>
    <Helmet title="EHR Integrated - Patient Record Migration" />
    <PageWithSideMenu
      sidemenu={{ items, selectedItem: EHR_INTEGRATED }}
      breadcrumb={{
        items: [
          {
            url: withPrefix("/rfcs"),
            label: "RFCs",
          },
          {
            url: withPrefix("/rfcs/RFC0002_patient_switching_standard_mi/overview"),
            label: "RFC0002 Patient Switching Standard MI",
          },
        ],
      }}
    >
      <WarningCallout heading="In progress">
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
      </WarningCallout>
      <h1>RFC0002 Patient Switching Standard MI</h1>
      <h2>EHR Integrated</h2>
      <h3>Event Description</h3>
      <p>
        The EHR Integrated event should be sent immediately <em>after</em> the
        clinical staff member has chosen to integrate the GP2GP record into the
        system.
      </p>
      <h3>EHR Integrated Event Example Payload</h3>
      <pre>{JSON.stringify(ehrIntegrated, null, 2)}</pre>

      <Pagination>
        <Pagination.Previous
          href={withPrefix("rfcs/RFC0002_patient_switching_standard_mi/event_ehr_ready_to_integrate")}
        >
          Event: EHR Ready To Integrate
        </Pagination.Previous>
        <Pagination.Next
          href={withPrefix("rfcs/RFC0002_patient_switching_standard_mi/event_registration_completed")}
        >
          Event: Registration Completed
        </Pagination.Next>
      </Pagination>
    </PageWithSideMenu>
  </>
)

export default Page
