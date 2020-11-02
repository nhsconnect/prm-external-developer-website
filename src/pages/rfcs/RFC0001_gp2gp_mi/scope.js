import React from "react"
import { withPrefix, Link } from "gatsby"
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
          url: "#top",
          label: "Scope",
          selected: true,
        },
        {
          url: withPrefix("/rfcs/RFC0001_gp2gp_mi/usecases"),
          label: "Usecases",
        },
        {
          url: withPrefix("/rfcs/RFC0001_gp2gp_mi/data"),
          label: "New data to be collected",
        },
        {
          url: withPrefix("/rfcs/RFC0001_gp2gp_mi/event_registration_started"),
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
          url: withPrefix("/rfcs/RFC0001_gp2gp_mi/event_ehr_integrated"),
          label: "Event: EHR Integrated",
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
    <h2>Scope</h2>
    <p>
      We believe that initially, we should focus on the areas where we want to
      gather new information first, to prove out the solution, as such we will
      be focusing on the events around when the EHR is sent and when the EHR is
      received.
    </p>
    <Image
      src={withPrefix("/RFC0001_gp2gp_mi/scope_example.png")}
      alt="Highlighting the area of focus for this RFC around the EHR being sent and received"
      caption="Our area of focus around the EHR being sent and received"
      className="image-fullwidth"
    />
    <h3>Event delivery method</h3>
    <p>
      We intend to provide a public internet facing HTTPS end point and make it
      available via the evolving NHS 'developer' website:{" "}
      <a
        href="https://digital.nhs.uk/developer"
        title="External link to NHS 'developer' website"
      >
        https://digital.nhs.uk/developer
      </a>
      .
    </p>
    <p>
      All data should be captured as close to the time of the real life event as
      possible.
    </p>
    <p>
      We are equally happy to explore other methods with suppliers if
      appropriate.
    </p>
    <h3>Authorisation and Authentication</h3>
    <p>
      We intend to provide authorisation and authentication via existing methods{" "}
      <a
        href="https://digital.nhs.uk/developer/guides-and-documentation/security-and-authorisation"
        title="External link to NHS 'developer' website on security and authorisation"
      >
        https://digital.nhs.uk/developer/guides-and-documentation/security-and-authorisations
      </a>
      . We are equally happy to explore other methods with suppliers if
      appropriate.
    </p>
    <h3>Use cases</h3>
    <p>
      We intend to provide use cases that outline the events and data we expect
      to see for specific flows in the registration process.
    </p>
    <h3>Assurance</h3>
    <p>
      Assurance will intially take the form of collaboratively developing with
      suppliers against the use cases provided. We are then looking to explore
      how we might best continue assurance through to production and then
      ongoing.
    </p>
    <h3>Correlation to old MI data set</h3>
    <p>
      Whilst we intend to decomission the existing MI data as soon as possible,
      we know that for a period of time we need to dual run and be able to
      correlate data.
    </p>
    <Pagination>
      <Pagination.Previous href={withPrefix("rfcs/RFC0001_gp2gp_mi/vision")}>
        Vision
      </Pagination.Previous>
      <Pagination.Next href={withPrefix("/rfcs/RFC0001_gp2gp_mi/usecases")}>
        Usecases
      </Pagination.Next>
    </Pagination>
  </PageWithSideMenu>
)

export default Page
