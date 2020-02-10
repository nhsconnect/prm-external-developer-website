import React from "react"
import { withPrefix } from "gatsby"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import InsetText from "nhsuk-react-components/lib/components/inset-text"
import Image from "nhsuk-react-components/lib/components/image"
import Pagination from "nhsuk-react-components/lib/components/pagination"
import "../../index.scss"

const Page = ({ children }) => (
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
          url: "#top",
          label: "Mandatory Events",
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
    <h2>Mandatory Events</h2>
    <h3>EHR Generated</h3>
    <h4>Event Description</h4>
    <p>
      The EHR Generated event should be sent when a sending system has generated
      the GP2GP EHR Extract message but <em>before</em> it has started to send
      the content to the receiving system.
    </p>
    <h4>Event Example Payload</h4>
    <pre>{`
{
"id": "ABC123",
  "event_type": "ehr_generated",
  "registration_id": "DEF456",
  "timestamp": 1575384234,
  "attachments" : [
    {"id": "xyz", "mimetype": "application/pdf", "size_bytes": 3084322},
    {"id": "qrt", "mimetype": "audio/mpeg", "size_bytes": 24352346}
  ]
}
    `}</pre>

    <h4>Event Fields</h4>
    <table>
      <tbody>
        <tr>
          <th>Field</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>id</td>
          <td>Unique identifier for this event.</td>
        </tr>
        <tr>
          <td>event_type</td>
          <td>The type of this event: “ehr_generated”</td>
        </tr>
        <tr>
          <td>registration_id</td>
          <td>Unique identifier of the registration this event belongs to</td>
        </tr>
        <tr>
          <td>timestamp</td>
          <td>Unix epoch timestamp of when the EHR was generated</td>
        </tr>
        <tr>
          <td>attachment</td>
          <td>JSON list containing metadata for each attachment in the EHR</td>
        </tr>
      </tbody>
    </table>

    <h4>Attachment Metadata Fields</h4>
    <table>
      <tbody>
        <tr>
          <th>Field</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>id</td>
          <td>
            The ID of the attachment (as found in the XML of the EHR extract)
          </td>
        </tr>
        <tr>
          <td>mimetype</td>
          <td>The mime type of the attachment</td>
        </tr>
        <tr>
          <td>size_bytes</td>
          <td>The size in bytes of the attachment</td>
        </tr>
        <tr>
          <td>timestamp</td>
          <td>Unix epoch timestamp of when the EHR was generated</td>
        </tr>
        <tr>
          <td>attachment</td>
          <td>JSON list containing metadata for each attachment in the EHR</td>
        </tr>
      </tbody>
    </table>
    <h3>EHR Integrated</h3>
    <h4>Event Description</h4>
    <p>
      The EHR Integrated event should be sent when a receiving system has
      accepted the record into its EHR.
    </p>
    <Pagination>
      <Pagination.Previous href={withPrefix("rfcs/RFC0001_gp2gp_mi/scope")}>
        Scope
      </Pagination.Previous>
    </Pagination>
  </PageWithSideMenu>
)

export default Page
