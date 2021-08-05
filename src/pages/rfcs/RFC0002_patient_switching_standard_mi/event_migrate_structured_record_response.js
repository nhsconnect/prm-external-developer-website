import React from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import WarningCallout from "nhsuk-react-components/lib/components/warning-callout"
import Pagination from "nhsuk-react-components/lib/components/pagination"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import { items, MIGRATE_STRUCTURED_RECORD_RESPONSE } from "../../../menus/rfc0002menu"
import migrateStructuredRecordResponse from "../../../../static/RFC0002_patient_switching_standard_mi/payloads/migrateStructuredRecordResponse.json"
import "../../index.scss"

const Page = () => (
  <>
    <Helmet title="Migrate Structured Record Response - Patient Record Migration" />
    <PageWithSideMenu
      sidemenu={{ items, selectedItem: MIGRATE_STRUCTURED_RECORD_RESPONSE }}
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
      <h2>Migrate Structured Record Response</h2>
      <h3>Event Description</h3>
      <p>
        The Migrate Structured Record Response event should be sent after the receiving system
        has received the Structured Record from the Sending practice on the GP Connect
        "Migrate Structured Record" Api.
      </p>
      <h3>Migrate Structured Record Response Event Example Payload</h3>
      <pre>{JSON.stringify(migrateStructuredRecordResponse, null, 2)}</pre>

      <Pagination>
        <Pagination.Previous
          href={withPrefix("rfcs/RFC0002_patient_switching_standard_mi/event_migrate_structured_record_request")}
        >
          Event: Migrate Structured Record Request
        </Pagination.Previous>
        <Pagination.Next
          href={withPrefix("rfcs/RFC0002_patient_switching_standard_mi/event_migrate_document_request")}
        >
          Event: Migrate Document Request
        </Pagination.Next>
      </Pagination>
    </PageWithSideMenu>
  </>
)

export default Page
