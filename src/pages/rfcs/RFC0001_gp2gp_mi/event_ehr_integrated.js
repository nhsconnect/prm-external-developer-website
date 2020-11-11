import React from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"

import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import InsetText from "nhsuk-react-components/lib/components/inset-text"
import Pagination from "nhsuk-react-components/lib/components/pagination"
import "../../index.scss"

const Page = ({ children }) => (
  <>
    <Helmet title="EHR Integrated - Patient Record Migration" />
    <PageWithSideMenu
      sidemenu={{
        items: [
          {
            url: withPrefix("/rfcs/RFC0001_gp2gp_mi/overview"),
            label: "Overview",
          },
          {
            url: withPrefix("/rfcs/RFC0001_gp2gp_mi/vision"),
            label: "Vision",
          },
          {
            url: withPrefix("/rfcs/RFC0001_gp2gp_mi/scope"),
            label: "Scope",
          },
          {
            url: withPrefix("/rfcs/RFC0001_gp2gp_mi/usecases"),
            label: "Use Cases",
          },
          {
            url: withPrefix("/rfcs/RFC0001_gp2gp_mi/data"),
            label: "New data to be collected",
          },
          {
            url: withPrefix(
              "/rfcs/RFC0001_gp2gp_mi/event_registration_started"
            ),
            label: "Event: Registration Started",
          },
          {
            url: withPrefix("/rfcs/RFC0001_gp2gp_mi/event_ehr_generated"),
            label: "Event: EHR Generated",
          },
          {
            url: withPrefix("/rfcs/RFC0001_gp2gp_mi/event_ehr_validated"),
            label: "Event: EHR Validated",
          },
          {
            url: "#top",
            label: "Event: EHR Integrated",
            selected: true,
          },
        ],
      }}
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
      <InsetText>
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
      </InsetText>
      <h1>RFC0001 GP2GP MI</h1>
      <h2>EHR Integrated</h2>
      <h3>Event Description</h3>
      <p>
        The EHR Integrated event should be sent immediately <em>after</em> the
        clinical staff member has chosen to integrate the GP2GP record into the
        system.
      </p>
      <h3>EHR Integrated Event Example Payload</h3>
      <pre>{`
{
  "event_id": "1234-123456-1234-123456",
  "event_type": "ehr_integrated",
  "event_generated_timestamp": 1575384234,
  "meta": {
    "system_supplier": "SYSTEM_SUPPLIER",
    "ods_code": "ABC1234"
  },  
  "payload": {
    "registration": {
      "registration_id": "",
      "requesting_ods_code": "ABC1234",
      "sending_ods_code": "XYZ4567"
    },
    "gp2gp": {
      "conversation_id": "4345-986959-4930-684038"
      "ehr_integrated_timestamp": 1575384000,
      "number_of_days_to_integrate": 4
    }
  }
}
    `}</pre>

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
            <td>The type of the event, in this case "ehr_integrated".</td>
          </tr>
          <tr>
            <td>event_generated_timestamp</td>
            <td>
              The unix timestamp in milliseconds of when the event was generated
              by the system.
            </td>
          </tr>
          <tr>
            <td>meta</td>
            <td>
              An object that contains information about the generation of the
              event.
            </td>
          </tr>
          <tr>
            <td>payload</td>
            <td>An object that contains the detailed payload of the event.</td>
          </tr>
        </tbody>
      </table>

      <h3>Meta Event Fields</h3>
      <table>
        <tbody>
          <tr>
            <th>Field</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>system_supplier</td>
            <td>
              The system supplier who generated the event. A unique identifier
              given to you as a supplier by NHSD
            </td>
          </tr>
          <tr>
            <td>ods_code</td>
            <td>The ODS code of the practice generating the event</td>
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
            <td>ehr_integrated_timestamp</td>
            <td>
              The unix timestamp in milliseconds of when the EHR transferred via
              GP2GP was integrated by the clinical staff in the recieving
              practice.
            </td>
          </tr>
          <tr>
            <td>number_of_days_to_integrate</td>
            <td>
              The number of days it took the practice staff to integrate the
              record as understood by the recieving system.
            </td>
          </tr>
        </tbody>
      </table>

      <Pagination>
        <Pagination.Previous
          href={withPrefix("rfcs/RFC0001_gp2gp_mi/event_ehr_validated")}
        >
          Event: EHR Validated
        </Pagination.Previous>
      </Pagination>
    </PageWithSideMenu>
  </>
)

export default Page
