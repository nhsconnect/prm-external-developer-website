import React from "react"
import { withPrefix } from "gatsby"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import InsetText from "nhsuk-react-components/lib/components/inset-text"
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
          url: "#top",
          label: "Scope",
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
        This RFC is currently 'Being discussed'. If you want to have your say
        then go to our{" "}
        <a
          href="https://github.com/nhsconnect/prm-external-developer-website/issues/1"
          title="External website where RFC comments are allowed"
        >
          Github site
        </a>
        .
      </p>
    </InsetText>    
    <h1>GP2GP 2.3</h1>
    <h2>Scope</h2>
    <p>
      When a sending system generates an EHR extract, the following JSON MI
      event must be submitted. In the first instance we are interested in
      capturing attachment metadata:
    </p>
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

    <h3>Event fields</h3>
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

    <h3>Attachment metadata fields</h3>
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
  </PageWithSideMenu>
)

export default Page
