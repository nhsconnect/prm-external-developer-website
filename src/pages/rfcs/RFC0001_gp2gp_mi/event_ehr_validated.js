import React from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import WarningCallout from "nhsuk-react-components/lib/components/warning-callout"
import Pagination from "nhsuk-react-components/lib/components/pagination"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import { items, EHR_VALIDATED } from "../../../menus/rfcmenu"
import ehrValidated from "../../../../static/RFC0001_gp2gp_mi/payloads/ehrValidated.json"
import "../../index.scss"

const Page = () => (
  <>
    <Helmet title="EHR Validated - Patient Record Migration" />
    <PageWithSideMenu
      sidemenu={{ items, selectedItem: EHR_VALIDATED }}
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
      <h2>Event: EHR Validated</h2>
      <h3>Event Description</h3>
      <p>
        The EHR Validated event should be emitted when a requesting system has
        validated an incoming EHR and the EHR is ready to be reviewed for
        integration by clinical staff. In practice, this will be as the EHR
        enters the GP2GP WorkFlow for integration by the clinical system.
      </p>
      <h3>EHR Validated Event Example Payload</h3>
      <pre>{JSON.stringify(ehrValidated, null, 2)}</pre>
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
            <td>The type of the event, in this case "EHR_VALIDATED".</td>
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
            <td>An object that contains the detailed payload of the event</td>
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
            <td>gp2gp</td>
            <td>
              An object that contains information about the GP2GP transfer
            </td>
          </tr>
          <tr>
            <td>ehr</td>
            <td>
              An object that contains information about the EHR used in the
              GP2GP transfer
            </td>
          </tr>
          <tr>
            <td>attachments</td>
            <td>
              A list that contains information about ALL the attachments
              contained in the EHR as received by the receiving system. This
              should include all attachments that are either directly attached
              OR that are linked to from within the EHR.
            </td>
          </tr>
          <tr>
            <td>placeholders</td>
            <td>
              A list that contains information about all the placeholders in the
              EHR as received by the recieving system AND any placeholders that
              have been created by the recieving system.
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
            <td>The ODS code of the practice requesting the EHR</td>
          </tr>
          <tr>
            <td>sending_ods_code</td>
            <td>The ODS code of the practice sending the EHR</td>
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
            <td>ehr_validated_timestamp</td>
            <td>
              The unix timestamp in milliseconds that the EHR used in the GP2GP
              transfer was added to the GP2GP workflow to be integrated by the
              clinical staff.
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
              The total size in bytes of the GP2GP message as reconstituted by
              the recieving system including all attachments recieved.
            </td>
          </tr>
          <tr>
            <td>ehr_structured_size_bytes</td>
            <td>
              The total size in bytes of structured part of the GP2GP message as
              received by the recieving system (attachments are NOT to be
              included).
            </td>
          </tr>
          <tr>
            <td>number_of_degrades</td>
            <td>
              The total number of degrades that the clinical staff will need to
              resolve.
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
              (should be contained in the list of attachments)
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
            </td>
          </tr>
        </tbody>
      </table>

      <Pagination>
        <Pagination.Previous
          href={withPrefix("rfcs/RFC0001_gp2gp_mi/event_ehr_generated")}
        >
          Event: EHR Generated
        </Pagination.Previous>
        <Pagination.Next
          href={withPrefix("rfcs/RFC0001_gp2gp_mi/event_ehr_integrated")}
        >
          Event: EHR Integrated
        </Pagination.Next>
      </Pagination>
    </PageWithSideMenu>
  </>
)

export default Page
