import React from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import WarningCallout from "nhsuk-react-components/lib/components/warning-callout"
import Pagination from "nhsuk-react-components/lib/components/pagination"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import { items, INTERNAL_TRANSFER } from "../../../menus/rfc0002menu"
import internalTransfer from "../../../../static/RFC0002_patient_switching_standard_mi/payloads/internalTransfer.json"
import "../../index.scss"

const Page = () => (
  <>
    <Helmet title="EHR Integrated - Patient Record Migration" />
    <PageWithSideMenu
      sidemenu={{ items, selectedItem: INTERNAL_TRANSFER }}
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
            href="https://github.com/nhsconnect/prm-external-developer-website/issues/2"
            title="External website where RFC comments are allowed"
          >
            Github site
          </a>
          .
        </p>
      </WarningCallout>
      <h1>RFC0002 Patient Switching Standard MI</h1>
      <h2>Internal Transfer</h2>
      <h3>Event Description</h3>
      <p>
        The Internal Transfer event should be sent immediately <em>after</em> a patient transfer has occurred between two
        practices using the same Supplier System.
      </p>
      <h3>Internal Transfer Event Example Payload</h3>
      <p>Event payload to be updated.</p>
      <pre>{JSON.stringify(internalTransfer, null, 2)}</pre>

      <Pagination>
        <Pagination.Previous
          href={withPrefix("rfcs/RFC0002_patient_switching_standard_mi/event_registration_completed")}
        >
          Event: Registration Completed
        </Pagination.Previous>
        <Pagination.Next
          href={withPrefix("rfcs/RFC0002_patient_switching_standard_mi/event_error")}
        >
          Event: Error
        </Pagination.Next>
      </Pagination>
    </PageWithSideMenu>
  </>
)

export default Page
