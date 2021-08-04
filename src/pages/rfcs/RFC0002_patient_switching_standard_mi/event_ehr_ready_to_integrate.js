import React from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import WarningCallout from "nhsuk-react-components/lib/components/warning-callout"
import Pagination from "nhsuk-react-components/lib/components/pagination"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import { items, EHR_READY_TO_INTEGRATE } from "../../../menus/rfc0002menu"
import ehrReadyToIntegrate from "../../../../static/RFC0002_patient_switching_standard_mi/payloads/ehrReadyToIntegrate.json"
import "../../index.scss"

const Page = () => (
  <>
    <Helmet title="EHR Ready To Integrate - Patient Record Migration" />
    <PageWithSideMenu
      sidemenu={{ items, selectedItem: EHR_READY_TO_INTEGRATE }}
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
            href="https://github.com/nhsconnect/prm-external-developer-website/issues/1"
            title="External website where RFC comments are allowed"
          >
            Github site
          </a>
          .
        </p>
      </WarningCallout>
      <h1>RFC0002 Patient Switching Standard MI</h1>
      <h2>EHR Ready To Integrate</h2>
      <h3>Event Description</h3>
      <p>
        The EHR Ready To Integrate event should be sent immediately <em>after</em> the Requesting
        System allows the user to see a pre-processed view of the Record Bundle and all associated
        documents so they can determine whether to integrate.
      </p>
      <h3>EHR Ready To Integrate Event Example Payload</h3>
      <pre>{JSON.stringify(ehrReadyToIntegrate, null, 2)}</pre>
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
            <td>eventType</td>
            <td>The type of the event, in this case "EHR_READY_TO_INTEGRATE".</td>
          </tr>
          <tr>
            <td>eventGeneratedTimestamp</td>
            <td>
              The unix timestamp in milliseconds of when the event was generated
              by the system.
            </td>
          </tr>
          <tr>
            <td>systemSupplier</td>
            <td>
              The system supplier who generated the event. A unique identifier
              given to you as a supplier by NHSD.
            </td>
          </tr>
          <tr>
            <td>odsCode</td>
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
              An object that contains information about the GP2GP transfer
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
            <td>registrationId</td>
            <td>
              The unique identifier for this registration that can be resolved
              in the clinical system.
            </td>
          </tr>
          <tr>
            <td>requestingOdsCode</td>
            <td>The ODS code of the practice requesting the EHR</td>
          </tr>
          <tr>
            <td>sendingOdsCode</td>
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
            <td>conversationId</td>
            <td>
              The ConversationID used in the GP2GP process for this
              registration.
            </td>
          </tr>
          <tr>
            <td>ehrIntegratedTimestamp</td>
            <td>
              The unix timestamp in milliseconds of when the EHR transferred via
              GP2GP was integrated by the clinical staff in the recieving
              practice.
            </td>
          </tr>
          <tr>
            <td>numberOfDaysToIntegrate</td>
            <td>
              The number of days it took the practice staff to integrate the
              record as understood by the recieving system.
            </td>
          </tr>
        </tbody>
      </table>

      <Pagination>
        <Pagination.Previous
            href={withPrefix("rfcs/RFC0002_patient_switching_standard_mi/event_migrate_document_response")}
            >
              Event: Migrate Document Response
        </Pagination.Previous>
        <Pagination.Next
          href={withPrefix("rfcs/RFC0002_patient_switching_standard_mi/event_ehr_integrated")}
        >
          Event: EHR Integrated
        </Pagination.Next>
      </Pagination>
    </PageWithSideMenu>
  </>
)

export default Page
