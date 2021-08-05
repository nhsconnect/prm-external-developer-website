import React from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import WarningCallout from "nhsuk-react-components/lib/components/warning-callout"
import Pagination from "nhsuk-react-components/lib/components/pagination"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import { items, MIGRATE_STRUCTURED_RECORD_REQUEST } from "../../../menus/rfc0002menu"
import migrateStructuredRecordRequest from "../../../../static/RFC0002_patient_switching_standard_mi/payloads/migrateStructuredRecordRequest.json"
import "../../index.scss"

const Page = () => (
  <>
    <Helmet title="Migrate Structured Record Request - Patient Record Migration" />
    <PageWithSideMenu
      sidemenu={{ items, selectedItem: MIGRATE_STRUCTURED_RECORD_REQUEST }}
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
      <h2>Migrate Structured Record Request</h2>
      <h3>Event Description</h3>
      <p>
        The Migrate Structured Record Request event should be sent immediately <em>after</em> the Requesting System
        will make a request via GP Connect using the ‘Migrate Structured Record’ end point using the previous
        Health Care Provider code that was cached.
      </p>
      <h3>Migrate Structured Record Request Event Example Payload</h3>
      <pre>{JSON.stringify(migrateStructuredRecordRequest, null, 2)}</pre>

      <Pagination>
        <Pagination.Previous
          href={withPrefix("rfcs/RFC0002_patient_switching_standard_mi/event_registration_started")}
        >
          Event: Registration Started
        </Pagination.Previous>
        <Pagination.Next
          href={withPrefix("rfcs/RFC0002_patient_switching_standard_mi/event_migrate_structured_record_response")}
        >
          Event: Migrate Structured Record Response
        </Pagination.Next>
      </Pagination>
    </PageWithSideMenu>
  </>
)

export default Page
