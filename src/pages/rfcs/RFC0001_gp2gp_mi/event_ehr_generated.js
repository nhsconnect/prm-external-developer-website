import React from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import WarningCallout from "nhsuk-react-components/lib/components/warning-callout"
import Pagination from "nhsuk-react-components/lib/components/pagination"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import { items, EHR_GENERATED } from "../../../menus/rfcmenu"
import ehrGenerated from "../../../../static/RFC0001_gp2gp_mi/payloads/ehrGenerated.json"
import "../../index.scss"

const Page = () => (
  <>
    <Helmet title="EHR Generated - Patient Record Migration" />
    <PageWithSideMenu
      sidemenu={{ items, selectedItem: EHR_GENERATED }}
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
      <h1>RFC0001 GP2GP MI</h1>
      <h2>EHR Generated</h2>
      <h3>Event Description</h3>
      <p>
        The EHR Generated event should be sent immediately <em>before</em> the
        sending system sends the EHR Extract (RCMR_MT030101UK04) message.
      </p>
      <h3>EHR Generated Event Example Payload</h3>
      <pre>{JSON.stringify(ehrGenerated, null, 2)}</pre>

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
              An object that contains information about the registration
              process.
            </td>
          </tr>
          <tr>
            <td>gpTransferMetadata</td>
            <td>
              An object that contains information about the GP2GP transfer.
            </td>
          </tr>
          <tr>
            <td>ehr</td>
            <td>
              An object that contains information about the EHR used in the
              GP2GP transfer.
            </td>
          </tr>
          <tr>
            <td>unsupportedDataItem</td>
            <td>
              An object that contains information about any unsupported data items that failed to transfer.
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
              The ConversationID used in the GP2GP process for this
              registration.
            </td>
          </tr>
          <tr>
            <td>transferEventDateTime</td>
            <td>
              The ISO 8601 Date time in UTC that the EHR used in the GP2GP
              transfer was generated by the system.
            </td>
          </tr>
        </tbody>
      </table>

      <h3>EHR Event Fields</h3>
      <table>
        <tbody>
          <tr>
            <th>Field</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>ehrTotalSizeBytes</td>
            <td>
              The total size in bytes of the GP2GP message BEFORE it is split
              for transfer including all attachments.
            </td>
          </tr>
          <tr>
            <td>ehrStructuredSizeBytes</td>
            <td>
              The total size in bytes of structured part of the GP2GP message
              (attachments are NOT to be included).
            </td>
          </tr>
          <tr>
            <td>attachment</td>
            <td>
              A list that contains information about ALL the attachments
              contained in the EHR. This should include all attachments that are
              either directly attached OR that are linked to from within the
              EHR.
            </td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>
              An list that contains information about the attachments that were
              in the EHR but not contained in the GP2GP message.
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

      <h3>Placeholder Event Fields</h3>
      <table>
        <tbody>
          <tr>
            <th>Field</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>placeholderId</td>
            <td>
              A unique id for the placeholder that can be resolved in the
              clinical system.
            </td>
          </tr>
          <tr>
            <td>attachmentId</td>
            <td>
              A reference to the attachment that the placeholder replaces
              (should be contained in the list of attachments).
            </td>
          </tr>
          <tr>
            <td>generatedBy</td>
            <td>
              The ODS code of the practice that generated the placeholder.
            </td>
          </tr>
          <tr>
            <td>reason</td>
            <td>
              The reason the placeholder was generated. These codes should match
              the values described in{" "}
              <a
                href={withPrefix(
                  "/NPFIT-PC-BLD-0099.04 GP2GP Handling Missing Attachments.pdf"
                )}
              >
                NPFIT-PC-BLD-0099.04 GP2GP Handling Missing Attachments
              </a>
              .
            </td>
          </tr>
          <tr>
            <td>originalMimeType</td>
            <td>
              The original mime type of the attachment this placeholder is for.
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Unsupported Data Item Event Fields</h3>
      <table>
        <tbody>
        <tr>
          <th>Field</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>type</td>
          <td>
            The type/category of the unsupported data item.
          </td>
        </tr>
        <tr>
          <td>uniqueIdentifier</td>
          <td>
            A unique id for the unsupported data item that can be resolved in the
            clinical system.
          </td>
        </tr>
        <tr>
          <td>reason</td>
          <td>
            The reason for being unsupported / why is it unsupported in gp2gp? / what would have to change in gp2gp to express this?
          </td>
        </tr>
        </tbody>
      </table>

      <Pagination>
        <Pagination.Previous
          href={withPrefix("rfcs/RFC0001_gp2gp_mi/event_ehr_requested")}
        >
          Event: EHR Requested
        </Pagination.Previous>
        <Pagination.Next
          href={withPrefix("rfcs/RFC0001_gp2gp_mi/event_ehr_sent")}
        >
          Event: EHR Sent
        </Pagination.Next>
      </Pagination>
    </PageWithSideMenu>
  </>
)

export default Page
