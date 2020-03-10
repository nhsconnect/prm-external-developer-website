import React from "react"
import { withPrefix } from "gatsby"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import InsetText from "nhsuk-react-components/lib/components/inset-text"
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
          url: withPrefix("/rfcs/RFC0001_gp2gp_mi/data"),
          label: "New data to be collected",
        },
        {
          url: "#top",
          label: "Event: EHR Generated",
          selected: true,
        },
        {
          url: withPrefix("/rfcs/RFC0001_gp2gp_mi/event_ehr_recieved"),
          label: "Event: EHR Recieved",
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
    <h2>EHR Generated</h2>
    <h3>Event Description</h3>
    <p>
      The EHR Generated event should be sent when a sending system has generated
      the GP2GP EHR Extract message but <em>before</em> it has started to send
      the content to the receiving system.
    </p>
    <h3>EHR Generated Event Example Payload</h3>
    <pre>{`
{
  "event_id": "1234-123456-1234-123456",
  "event_type": "ehr_generated",
  "event_generated_timestamp": 1575384234,  
  "payload": {
    "registration_id": "4567-456789-4567-456789",
    "gp2gp": {
        "conversation_id": "4345-986959-4930-684038"
    }
    "ehr": {
        "ehr_generated_timestamp": 1575384000,
        "ehr_size_bytes": 5699433  
    },
    "attachments" : [
      {
        "id": "3424-342456-3424-342456", 
        "mimetype": "application/pdf", 
        "size_bytes": 3084322,
        "code": {
          "coding": [{
            "code": "886721000000107",
            "system": "http://snomed.info/sct"
          }]
        },        
        {"id": "1323-132345-1323-132345", "mimetype": "audio/mpeg", "size_bytes": 24352346}
      ],
      "placeholders" : [
        {"id": "9876-987654-9876-987654", "mimetype": "application/pdf", "size_bytes": 3084322},
        {
          "id": "6785-678543-6785-678543", 
          "mimetype": "audio/mpeg", 
          "size_bytes": 24352346, 
          "code": {
            "coding": [{
                "code": "886721000000107",
                "system": "http://snomed.info/sct"
            }]
          },
        }
      ]
  }
}
    `}</pre>

    <h3>Event Fields</h3>
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

    <h3>Attachment Metadata Fields</h3>
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
    <Pagination>
      <Pagination.Previous href={withPrefix("rfcs/RFC0001_gp2gp_mi/scope")}>
        Scope
      </Pagination.Previous>
      <Pagination.Next
        href={withPrefix("rfcs/RFC0001_gp2gp_mi/event_ehr_recieved")}
      >
        Event: EHR Recieved
      </Pagination.Next>
    </Pagination>
  </PageWithSideMenu>
)

export default Page
