import React from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import WarningCallout from "nhsuk-react-components/lib/components/warning-callout"
import Image from "nhsuk-react-components/lib/components/image"
import Pagination from "nhsuk-react-components/lib/components/pagination"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import { items, VISION } from "../../../menus/rfcmenu"
import "../../index.scss"

const Page = () => {
  return (
    <>
      <Helmet title="Vision - Patient Record Migration" />
      <PageWithSideMenu
        sidemenu={{ items, selectedItem: VISION }}
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
            This RFC is currently 'Being discussed'. As such, it may be
            undergoing significant change and should not be used as the basis of
            an implementation at the moment. If you want to have your say and
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
        <h2>Vision</h2>
        <h3>Technical Design</h3>
        <p>
          To address concerns found in the old GP2GP implementation of the standard,
          we propose moving to real time events for capturing management information.
        </p>
        <Image
          src={withPrefix("/RFC0002_patient_switching_standard_mi/events_example.png")}
          alt="An example of events being raised by the registration process"
          caption="An example of raising different events during the registration process"
          className="image-fullwidth"
        />
        <h4>Distinct records for different events</h4>
        <p>
          Instead of representing management information as a single record,
          different parts of the MI will be captured at various points
          throughout the registration process. This data will be modeled using
          an event sourcing style methodology in which data is organised into
          events that align closely to the business process. Capturing data in
          this way will improve our ability to analyse different kinds of
          failure modes that happen during the GP Registration process.
          This will also make it simpler to capture new kinds of
          information, because new events can be created as needed.
        </p>
        <h4>Capture every event (aka capture each state change)</h4>
        <p>
          Every user or system activity triggers a new event or otherwise
          progresses the registration through the service flow, MI information
          must be captured for reporting.
        </p>
        <h4>JSON</h4>
        <p>
          JSON objects are to be used as the serialisation format for MI data.
          This allows the event schema to be easier to evolve over time as needed.
        </p>
        <h4>Near real time</h4>
        <p>
          MI Events must be submitted when the corresponding action they expose
          data for has been completed. For example an event must be sent as soon
          as the requesting system makes a call on the GP Connect
          'Migrate Structured Record' API.

          Events are to be submitted via HTTPS POST request to the GP Registrations
          Management Information endpoint, using one API call per event.
        </p>
        <p>

        </p>
        <h4>End to end view of the registration process</h4>
        <p>
          To allow events related to a single registration to be correlated,
          each event raised in the requesting system must have a field
          containing an anonymous identifier that is unique to each
          registration. In the GP2GP implementation we only get this unique identifier
          when a GP2GP conversation is started (via the 'ConversationID').
        </p>
        <p>
          This will allow us to understand where errors that happen at different
          points in the process in different systems impact the overall registration
          process.
        </p>
        <Pagination>
          <Pagination.Previous
            href={withPrefix("rfcs/RFC0002_patient_switching_standard_mi/overview")}
          >
            Overview
          </Pagination.Previous>
          <Pagination.Next href={withPrefix("rfcs/RFC0002_patient_switching_standard_mi/scope")}>
            Scope
          </Pagination.Next>
        </Pagination>
      </PageWithSideMenu>
    </>
  )
}

export default Page
