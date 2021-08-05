import React from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import WarningCallout from "nhsuk-react-components/lib/components/warning-callout"
import Image from "nhsuk-react-components/lib/components/image"
import Pagination from "nhsuk-react-components/lib/components/pagination"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import { items, SCOPE } from "../../../menus/rfc0002menu"
import "../../index.scss"

const Page = () => (
  <>
    <Helmet title="Scope - Patient Record Migration" />
    <PageWithSideMenu
      sidemenu={{ items, selectedItem: SCOPE }}
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
      <h2>Scope</h2>
      <p>
        As part of the new Patient Switching Standard, we want to evolve the way of
        collecting Management Information, via a GP Registrations Management Information API.
      </p>
      <h3>Event delivery method</h3>
      <p>
        We intend to provide a public internet facing HTTPS end point and make
        it available via the evolving NHS 'developer' website:{" "}
        <a
          href="https://digital.nhs.uk/developer"
          title="External link to NHS 'developer' website"
        >
          https://digital.nhs.uk/developer
        </a>
        .
      </p>
      <p>
        All data should be captured as close to the time of the real life event
        as possible.
      </p>
      <p>
        We are equally happy to explore other methods with suppliers if
        appropriate.
      </p>
      <h3>Authorisation and Authentication</h3>
      <p>
        We intend to provide authorisation and authentication via existing
        methods{" "}
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
        We intend to provide use cases that outline the events and data we
        expect to see for specific flows in the registration process.
      </p>
      <p>
      The events described in this RFC are not an exhausted list of
      all the MI events that will be required in the finalised version.
      </p>
      <h3>Assurance</h3>
      <p>
        Assurance will initially take the form of collaboratively developing with
        suppliers against the use cases provided. We are then looking to explore
        how we might best continue assurance through to production and then
        ongoing.
      </p>
      <Pagination>
        <Pagination.Previous href={withPrefix("rfcs/RFC0002_patient_switching_standard_mi/vision")}>
          Vision
        </Pagination.Previous>
        <Pagination.Next href={withPrefix("/rfcs/RFC0002_patient_switching_standard_mi/usecases")}>
          Usecases
        </Pagination.Next>
      </Pagination>
    </PageWithSideMenu>
  </>
)

export default Page
