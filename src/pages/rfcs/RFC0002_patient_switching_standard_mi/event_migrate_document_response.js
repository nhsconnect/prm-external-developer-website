import React from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import WarningCallout from "nhsuk-react-components/lib/components/warning-callout"
import Pagination from "nhsuk-react-components/lib/components/pagination"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import { items, MIGRATE_DOCUMENT_RESPONSE } from "../../../menus/rfc0002menu"
import migrateDocumentResponse from "../../../../static/RFC0002_patient_switching_standard_mi/payloads/migrateDocumentResponse.json"
import "../../index.scss"

const Page = () => (
  <>
    <Helmet title="Migrate Document Response - Patient Record Migration" />
    <PageWithSideMenu
      sidemenu={{ items, selectedItem: MIGRATE_DOCUMENT_RESPONSE }}
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
      <h2>Migrate Document Response</h2>
      <h3>Event Description</h3>
      <p>
        The Migrate Document Response event should be sent immediately <em>after</em> the Requesting System
        receives a response on every individual request to retrieve each document via GP Connect using the
        ‘Migrate Document’ end point.
      </p>
      <h3>Migrate Document Response Event Example Payload</h3>
      <pre>{JSON.stringify(migrateDocumentResponse, null, 2)}</pre>

      <Pagination>
        <Pagination.Previous
            href={withPrefix("rfcs/RFC0002_patient_switching_standard_mi/event_migrate_document_request")}
            >
              Event: Migrate Document Request
        </Pagination.Previous>
        <Pagination.Next
          href={withPrefix("rfcs/RFC0002_patient_switching_standard_mi/event_ehr_ready_to_integrate")}
        >
          Event: EHR Ready To Integrate
        </Pagination.Next>
      </Pagination>
    </PageWithSideMenu>
  </>
)

export default Page
