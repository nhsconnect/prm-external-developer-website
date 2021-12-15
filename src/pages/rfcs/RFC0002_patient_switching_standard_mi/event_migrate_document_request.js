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
      <p>Event payload to be updated.</p>
      <pre>{JSON.stringify(migrateDocumentRequest, null, 2)}</pre>

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
          <td>attachment</td>
          <td>
            Information about the attachment this documentation request is attempting to receive.
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
            The ConversationID used in the transfer process for this
            registration.
          </td>
        </tr>
        <tr>
          <td>transferEventDateTime</td>
          <td>
            The ISO 8601 Date time in UTC of when the document migration was requested.
          </td>
        </tr>
        </tbody>
      </table>

      <h3>Attachment Event Fields</h3>
      <table>
        <tbody>
        <tr>
          <th>Field</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>attachmentId</td>
          <td>
            A unique id for the attachment that can be resolved in the
            clinical system.
          </td>
        </tr>
        <tr>
          <td>clinicalType</td>
          <td>
            (Optional) The text value corresponding to the value used in
            EhrAttachmentCode in the code element of ExternalDocument as
            defined in the MIM.
          </td>
        </tr>
        <tr>
          <td>mimeType</td>
          <td>
            The mime type of the attachment as used as part of the text
            element in ExternalDocument as defined in the MIM.
          </td>
        </tr>
        <tr>
          <td>sizeBytes</td>
          <td>The size in bytes of the attachment.</td>
        </tr>
        </tbody>
      </table>

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
