import React from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import WarningCallout from "nhsuk-react-components/lib/components/warning-callout"
import Pagination from "nhsuk-react-components/lib/components/pagination"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import { items, EHR_SENT } from "../../../menus/rfcmenu"
import ehrSent from "../../../../static/RFC0001_gp2gp_mi/payloads/ehrSent.json"
import "../../index.scss"

const Page = () => (
  <>
    <Helmet title="EHR Sent - Patient Record Migration" />
    <PageWithSideMenu
      sidemenu={{ items, selectedItem: EHR_SENT }}
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
      <h2>EHR Sent</h2>
      <h3>Event Description</h3>
      <p>
        The EHR sent event should be sent when a sending practice has sent a
        GP2GP transfer to the receiving practice. This should be sent before the
        EHR validated event, and after all message fragments have been sent.
      </p>
      <h3>EHR Sent Event Example Payload</h3>
      <pre>{JSON.stringify(ehrSent, null, 2)}</pre>
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
            <td>eventGeneratedTimestamp</td>
            <td>
              The unix timestamp in milliseconds of when the event was generated
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
              An object that contains information about the registration process.
            </td>
          </tr>
          <tr>
            <td>gp2gp</td>
            <td>
              An object that contains information about the GP2GP transfer.
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

      <h3>GP2GP Event Fields</h3>
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
            <td>ehrSentTimestamp</td>
            <td>
              The unix timestamp in milliseconds that the EHR used in the GP2GP
              transfer was sent by the system.
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
          href={withPrefix("rfcs/RFC0001_gp2gp_mi/event_ehr_validated")}
        >
          Event: EHR Validated
        </Pagination.Next>
      </Pagination>
    </PageWithSideMenu>
  </>
)

export default Page
