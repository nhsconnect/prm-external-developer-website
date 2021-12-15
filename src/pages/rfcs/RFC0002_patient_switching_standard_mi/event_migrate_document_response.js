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
      <p>Event payload to be updated.</p>
      <pre>{JSON.stringify(migrateDocumentResponse, null, 2)}</pre>

      <h3>Top Level Event Fields</h3>
      <table>
        <tbody>
        <tr>
          <th>Field</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>eventId</td>
          <td>Unique identifier for this event.</td>
        </tr>
        <tr>
          <td>eventGeneratedDateTime</td>
          <td>
            The ISO 8601 Date time in UTC of when the event was generated
            by the system.
          </td>
        </tr>
        <tr>
          <td>registrationId</td>
          <td>
            The unique identifier for this registration that can be resolved in the clinical system.
          </td>
        </tr>
        <tr>
          <td>reportingSystemSupplier</td>
          <td>
            The system supplier who generated the event. A unique identifier
            given to you as a supplier by NHSD.
          </td>
        </tr>
        <tr>
          <td>reportingPracticeOdsCode</td>
          <td>The ODS code of the practice generating the event.</td>
        </tr>
        <tr>
          <td>payload</td>
          <td>An object that contains the detailed payload of the event.</td>
        </tr>
        </tbody>
      </table>

      <h3>Payload Event Fields</h3>
      <table>
        <tbody>
        <tr>
          <th>Field</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>registration</td>
          <td>
            An object that contains information about the registration process
          </td>
        </tr>
        <tr>
          <td>gpTransferMetadata</td>
          <td>
            An object that contains information about the transfer
          </td>
        </tr>
        <tr>
          <td>documentMigration</td>
          <td>
            An object that contains details about the document migration
          </td>
        </tr>
        </tbody>
      </table>

      <h3>Registration Event Fields</h3>
      <table>
        <tbody>
        <tr>
          <th>Field</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>requestingPracticeOdsCode</td>
          <td>The ODS code of the practice requesting the EHR.</td>
        </tr>
        <tr>
          <td>sendingPracticeOdsCode</td>
          <td>The ODS code of the practice sending the EHR.</td>
        </tr>
        </tbody>
      </table>

      <h3>GP Transfer Metadata Event Fields</h3>
      <table>
        <tbody>
        <tr>
          <th>Field</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>conversationId</td>
          <td>
            The ConversationID used in the process for this
            registration.
          </td>
        </tr>
        <tr>
          <td>transferEventDateTime</td>
          <td>
            The ISO 8601 Date time in UTC of document migration response.
          </td>
        </tr>
        </tbody>
      </table>

      <h3>Document Migration Event Fields</h3>
      <table>
        <tbody>
        <tr>
          <th>Field</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>status</td>
          <td>
            The status of this document migration (SUCCESS/FAILURE).
          </td>
        </tr>
        <tr>
          <td>reason</td>
          <td>
            The reason for the status of this document migration.
          </td>
        </tr>
        </tbody>
      </table>

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
