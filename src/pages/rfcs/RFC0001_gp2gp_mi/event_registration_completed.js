import React from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import WarningCallout from "nhsuk-react-components/lib/components/warning-callout"
import Pagination from "nhsuk-react-components/lib/components/pagination"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import { items, REGISTRATION_COMPLETED } from "../../../menus/rfcmenu"
import registrationCompleted from "../../../../static/RFC0001_gp2gp_mi/payloads/registrationCompleted.json"
import "../../index.scss"

const Page = () => (
  <>
    <Helmet title="Registration Completed - Patient Record Migration" />
    <PageWithSideMenu
      sidemenu={{ items, selectedItem: REGISTRATION_COMPLETED }}
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
      <h2>Registration Completed</h2>
      <h3>Event Description</h3>
      <p>
        The Registration completed event should be sent once a receiving
        practice has successfully registered a practice. This should be sent
        after the EHR integrated event.
      </p>
      <p>
        <strong>Remaining Question: </strong>
        Is there a trigger / an event happening in the supplier systems after
        the EHR integrated event that could trigger this Registration completed?
      </p>
      <h3>Registration Completed Event Example Payload</h3>
      <pre>{JSON.stringify(registrationCompleted, null, 2)}</pre>
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
            <td>registrationCompletedDateTime</td>
            <td>
              The ISO 8601 Date time in UTC of when the registration
              completed.
            </td>
          </tr>
        </tbody>
      </table>


      <Pagination>
        <Pagination.Previous
          href={withPrefix("rfcs/RFC0001_gp2gp_mi/event_ehr_integrated")}
        >
          Event: EHR Integrated
        </Pagination.Previous>
      </Pagination>
    </PageWithSideMenu>
  </>
)

export default Page
