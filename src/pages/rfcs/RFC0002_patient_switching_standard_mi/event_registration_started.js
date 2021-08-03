import React from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import WarningCallout from "nhsuk-react-components/lib/components/warning-callout"
import Pagination from "nhsuk-react-components/lib/components/pagination"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import { items, REGISTRATION_STARTED } from "../../../menus/rfcmenu"
import registrationStarted from "../../../../static/RFC0002_patient_switching_standard_mi/payloads/registrationStarted.json"
import "../../index.scss"

const Page = () => (
  <>
    <Helmet title="Registration Started - Patient Record Migration" />
    <PageWithSideMenu
      sidemenu={{ items, selectedItem: REGISTRATION_STARTED }}
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
      <h2>Registration Started</h2>
      <h3>Event Description</h3>
      <p>
        The Registration Started event should be sent immediately <em>after</em>{" "}
        the clinical staff member has selected to start a registration in the
        software. This is regardless of whether the registration results in a
        GP2GP transfer.
      </p>
      <h3>Registration Started Event Example Payload</h3>
      <pre>{JSON.stringify(registrationStarted, null, 2)}</pre>
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
            <td>The type of the event, in this case "REGISTRATION_STARTED".</td>
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
            <td>registrationStartedTimestamp</td>
            <td>
              The unix timestamp in milliseconds of when the registration
              started.
            </td>
          </tr>
        </tbody>
      </table>

      <Pagination>
        <Pagination.Previous href={withPrefix("rfcs/RFC0002_patient_switching_standard_mi/data")}>
          New data to be collected
        </Pagination.Previous>
        <Pagination.Next
          href={withPrefix("rfcs/RFC0002_patient_switching_standard_mi/event_ehr_requested")}
        >
          Event: EHR Requested
        </Pagination.Next>
      </Pagination>
    </PageWithSideMenu>
  </>
)

export default Page
