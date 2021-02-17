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
            <td>event_id</td>
            <td>Unique identifier for this event.</td>
          </tr>
          <tr>
            <td>event_type</td>
            <td>The type of the event, in this case "EHR_GENERATED".</td>
          </tr>
          <tr>
            <td>event_generated_timestamp</td>
            <td>
              The unix timestamp in milliseconds of when the event was generated
              by the system.
            </td>
          </tr>
          <tr>
            <td>system_supplier</td>
            <td>
              The system supplier who generated the event. A unique identifier
              given to you as a supplier by NHSD.
            </td>
          </tr>
          <tr>
            <td>ods_code</td>
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
            <td>gp2gp</td>
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
            <td>attachments</td>
            <td>
              A list that contains information about ALL the attachments
              contained in the EHR. This should include all attachments that are
              either directly attached OR that are linked to from within the
              EHR.
            </td>
          </tr>
          <tr>
            <td>placeholders</td>
            <td>
              An list that contains information about the attachments that were
              in the EHR but not contained in the GP2GP message.
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
            <td>registration_id</td>
            <td>
              The unique identifier for this registration that can be resolved
              in the clinical system.
            </td>
          </tr>
          <tr>
            <td>requesting_ods_code</td>
            <td>The ODS code of the practice requesting the EHR.</td>
          </tr>
          <tr>
            <td>sending_ods_code</td>
            <td>The ODS code of the practice sending the EHR.</td>
          </tr>
        </tbody>
      </table>

      <h3>GP2GP Event Fields</h3>
      <table>
        <tbody>
          <tr>
            <th>Field</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>conversation_id</td>
            <td>
              The ConversationID used in the GP2GP process for this
              registration.
            </td>
          </tr>
          <tr>
            <td>ehr_generated_timestamp</td>
            <td>
              The unix timestamp in milliseconds that the EHR used in the GP2GP
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
            <td>ehr_total_size_bytes</td>
            <td>
              The total size in bytes of the GP2GP message BEFORE it is split
              for transfer including all attachments.
            </td>
          </tr>
          <tr>
            <td>ehr_structured_size_bytes</td>
            <td>
              The total size in bytes of structured part of the GP2GP message
              (attachments are NOT to be included).
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Attachments Event Fields</h3>
      <table>
        <tbody>
          <tr>
            <th>Field</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>attachment_id</td>
            <td>
              A unique id for the attachment that can be resolved in the
              clinical system.
            </td>
          </tr>
          <tr>
            <td>clinical_type</td>
            <td>
              The text value corresponding to the value used in
              EhrAttachmentCode in the code element of ExternalDocument as
              defined in the MIM.
            </td>
          </tr>
          <tr>
            <td>mime_type</td>
            <td>
              The mime type of the attachment as used as part of the text
              element in ExternalDocument as defined in the MIM.
            </td>
          </tr>
          <tr>
            <td>size_bytes</td>
            <td>The size in bytes of the attachment.</td>
          </tr>
          <tr>
            <td>code</td>
            <td>
              An object that contains the code given to the attachment by the
              clinician as the attachment was attached to the EHR.
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Code Event Fields</h3>
      <table>
        <tbody>
          <tr>
            <th>Field</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>coding</td>
            <td>
              A list of objects that contain the codes used when the clinician
              attached the object to the EHR.
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Coding Event Fields</h3>
      <table>
        <tbody>
          <tr>
            <th>Field</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>code</td>
            <td>
              The code entered by the clinican in the system as the attachment
              was attached.
            </td>
          </tr>
          <tr>
            <td>system</td>
            <td>The coding system used.</td>
          </tr>
        </tbody>
      </table>

      <h3>Placeholders Event Fields</h3>
      <table>
        <tbody>
          <tr>
            <th>Field</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>placeholder_id</td>
            <td>
              A unique id for the placeholder that can be resolved in the
              clinical system.
            </td>
          </tr>
          <tr>
            <td>attachment_id</td>
            <td>
              A reference to the attachment that the placeholder replaces
              (should be contained in the list of attachments).
            </td>
          </tr>
          <tr>
            <td>generated_by</td>
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
        </tbody>
      </table>

      <Pagination>
        <Pagination.Previous
          href={withPrefix("rfcs/RFC0001_gp2gp_mi/event_registration_started")}
        >
          Event: Registration Started
        </Pagination.Previous>
        <Pagination.Next
          href={withPrefix("rfcs/RFC0001_gp2gp_mi/event_ehr_validated")}
        >
          Event: EHR Validated
        </Pagination.Next>
      </Pagination>
    </PageWithSideMenu>
  </>
)

export default Page
