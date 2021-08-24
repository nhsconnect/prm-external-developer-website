import React from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import WarningCallout from "nhsuk-react-components/lib/components/warning-callout"
import Pagination from "nhsuk-react-components/lib/components/pagination"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import { items, ERROR } from "../../../menus/rfc0002menu"
import errorPayload from "../../../../static/RFC0002_patient_switching_standard_mi/payloads/error.json"
import "../../index.scss"

const Page = () => (
  <>
    <Helmet title="EHR Integrated - Patient Record Migration" />
    <PageWithSideMenu
      sidemenu={{ items, selectedItem: ERROR }}
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
            href="https://github.com/nhsconnect/prm-external-developer-website/issues/2"
            title="External website where RFC comments are allowed"
          >
            Github site
          </a>
          .
        </p>
      </WarningCallout>
      <h1>RFC0002 Patient Switching Standard MI</h1>
      <h2>Error</h2>
      <h3>Event Description</h3>
      <p>
        The Error event should be sent immediately <em>after</em> an error has occurred, or has been detected by
        the Supplier System.
      </p>
      <h3>Error Event Example Payload</h3>
      <p>Event payload to be updated.</p>
      <pre>{JSON.stringify(errorPayload, null, 2)}</pre>

      <Pagination>
        <Pagination.Previous
          href={withPrefix("rfcs/RFC0002_patient_switching_standard_mi/event_registration_completed")}
        >
          Event: Registration Completed
        </Pagination.Previous>
      </Pagination>
    </PageWithSideMenu>
  </>
)

export default Page
