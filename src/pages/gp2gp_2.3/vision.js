import React from "react"
import { PageWithSideMenu } from "../../components/pagelayouts/pagewithsidemenu"
import "../index.scss"

const Page = ({ children }) => {
  return (
    <PageWithSideMenu
      sidemenu={{
        items: [
          {
            url: "/prm-external-developer-website/gp2gp_2.3",
            label: "Overview",
          },
          {
            url: "#top",
            label: "Vision",
            selected: true,
          },
          {
            url: "/prm-external-developer-website/gp2gp_2.3/scope",
            label: "Scope",
          },
        ],
      }}
      breadcrumb={{
        items: [
          {
            url: "/prm-external-developer-website/registrations",
            label: "Registrations",
          },
          {
            url: "/prm-external-developer-website/gp2gp",
            label: "GP2GP",
          },
          {
            url: "/prm-external-developer-website/gp2gp_2.3",
            label: "GP2GP 2.3",
          },
        ],
      }}
    >
      <h1>GP2GP 2.3: Enhanced Managment Information (MI)</h1>
      <h2>Vision</h2>
      <h3>Motivation</h3>
      <p>
        While the existing management information specification provides some
        usable data for tracking trends in GP2GP, there are several drawbacks we
        have experienced working with it in practice:
      </p>
      <ul>
        <li>
          Lack of extensibility - Due to the high amount of cross referencing to
          the structure and numbering scheme of the MI fields, it is hard to add
          new data to the existing specification.
        </li>
        <li>
          Inability to represent structured data - Because CSV is used as a
          serialisation format, it's not easy to add data that is structured or
          list like (e.g attachment metadata)
        </li>
        <li>
          Unreported information - Not all suppliers are sending all state
          changes associated with a registration, so data is often missing and
          the accuracy of our analysis is reduced. (eg TPP missing
          acknowledgements)
        </li>
        <li>
          Challenges de-duplicating records - There is no unique identifier that
          can be used to de-duplicate the MI records in the way outlined by the
          existing specification
        </li>
        <li>
          Lack of fidelity - While representing the state of each registration
          as a single MI record allows for analysis to be somewhat simplified,
          it is often hard to determine the exact sequence of events that lead
          to GP2GP succeeding or failing.
        </li>
        <li>
          Scope of data capture - When considering patient record migration as a
          whole, registration data is important for measuring the overall
          quality of the patient experience. Failures in GP2GP are often
          conflated with registration failures. It would be desirable to
          increase the scope of what we capture to include this information
          also.
        </li>
        <li>
          Delay in receiving updates - Currently we have to wait at least a
          month to get the MI data from all practices. This limits our ability
          to build useful data products on top of the MI data.{" "}
        </li>
      </ul>
      <h3>Technical Design</h3>
      <p>
        To address the above concerns, we propose the following technical design
        choices for capturing enhanced management information.
      </p>
      <h4>JSON instead of CSV</h4>
      <p>
        JSON objects are to be used as the serialisation format for MI data.
        When serialising data to a CSV, the ordering of the columns is used to
        attribute meaning to each data value (especially if there is not a
        header row in the CSV file). This can make it harder to insert a new
        column in the logically correct place, as any code which processes this
        CSV now potentially needs to be updated to take into account the new
        ordering. In the existing specification, this is further complicated as
        the order of the requirements is directly reflected by the CSV. Encoding
        the same information into a JSON record does not suffer from this
        limitation as the order of values are not used for conveying meaning. It
        will therefore be considerably easier to evolve the schema. In addition
        to this we also recommend fully decoupling the numbering and ordering of
        the requirements from the data schema. For example, if the specification
        dictates in requestor requirement 2 that a requesting system records the
        conversation id, the field in the data schema should be something like
        ‘conversation_id’ instead of ‘RR2’. The enhanced MI specification will
        contain a data schema mandating what these fields should be named.
      </p>
      <h4>Distinct records for different events</h4>
      <p>
        Instead of representing management information as a single record,
        different parts of the MI will be captured at various points throughout
        GP2GP . This data will be modeled using an event sourcing style
        methodology in which data is organised into events that align closely to
        the business process. Capturing data in this way will improve our
        ability to analyse different kinds of GP2GP failure modes. This will
        also make it simpler to capture new kinds of information, as instead
        placing more data into a single record, new events can be created as
        needed.
      </p>
      <h4>Capture every event (aka capture each state change)</h4>
      <p>
        Every user or system activity triggers a new event or otherwise
        progresses the registration through the service flow, MI information
        must be captured for reporting.
      </p>
      <h4>Registration ID</h4>
      <p>
        To allow events related to a single registration to be correlated, each
        event must have a field containing an anonymous identifier that is
        unique to each registration.
      </p>
      <h4>Near real time</h4>
      <p>
        MI Events must be submitted when the corresponding action they expose
        data for has been completed. For example a ‘ehr_integrated’ event must
        be sent as soon as the requesting system integrates an EHR. Events are
        to be submitted via HTTPS POST request to the GP2GP enhanced MI
        endpoint. To simplify the initial implementation, systems do not have to
        retry if this request fails.
      </p>
    </PageWithSideMenu>
  )
}

export default Page
