import React from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import WarningCallout from "nhsuk-react-components/lib/components/warning-callout"
import Pagination from "nhsuk-react-components/lib/components/pagination"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import { items, MIGRATE_DOCUMENT_REQUEST } from "../../../menus/rfc0002menu"
import migrateDocumentRequest from "../../../../static/RFC0002_patient_switching_standard_mi/payloads/migrateDocumentRequest.json"
import "../../index.scss"

const Page = () => (
  <>
    <Helmet title="Migrate Document Request - Patient Record Migration" />
    <PageWithSideMenu
      sidemenu={{ items, selectedItem: MIGRATE_DOCUMENT_REQUEST }}
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
      <h2>Migrate Document Request</h2>
      <h3>Event Description</h3>
      <p>
        The "Migrate Patient Record Bundle" response must contain a list of all documents that
        the Requesting System must attempt to retrieve. The Requesting System must attempt to retrieve all
        documents that are under 100mb and of supported MIME types.
        The Migrate Document Request event should be sent immediately <em>after</em> the Requesting System
        makes an individual request to retrieve each document via GP Connect using the ‘Migrate Document’
        end point.
      </p>
      <h3>EHR Sent Event Example Payload</h3>
      <pre>{JSON.stringify(migrateDocumentRequest, null, 2)}</pre>

      <Pagination>
        <Pagination.Previous
            href={withPrefix("rfcs/RFC0002_patient_switching_standard_mi/event_migrate_structured_record_response")}
            >
              Event: Migrate Structured Record Response
        </Pagination.Previous>
        <Pagination.Next
          href={withPrefix("rfcs/RFC0002_patient_switching_standard_mi/event_migrate_document_response")}
        >
          Event: Migrate Document Response
        </Pagination.Next>
      </Pagination>
    </PageWithSideMenu>
  </>
)

export default Page
