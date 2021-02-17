import React from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import WarningCallout from "nhsuk-react-components/lib/components/warning-callout"
import Image from "nhsuk-react-components/lib/components/image"
import Pagination from "nhsuk-react-components/lib/components/pagination"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import { items, SCOPE } from "../../../menus/rfcmenu"
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
            url: withPrefix("/rfcs/RFC0001_gp2gp_mi/overview"),
            label: "RFC0001 GP2GP MI",
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
      <h1>RFC0001 GP2GP MI</h1>
      <h2>Scope</h2>
      <p>
        We believe that initially, we should focus on the areas where we want to
        gather new information first in order to prove out the solution.
        Therefore we will include within the scope 'Registration Started' as a
        new event and more detailed data when the EHR is generated and
        integrated.
      </p>
      <Image
        src={withPrefix("/RFC0001_gp2gp_mi/scope_example.png")}
        alt="Highlighting areas of focus for this RFC."
        caption="Our areas of focus."
        className="image-fullwidth"
      />
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
      <h3>Assurance</h3>
      <p>
        Assurance will intially take the form of collaboratively developing with
        suppliers against the use cases provided. We are then looking to explore
        how we might best continue assurance through to production and then
        ongoing.
      </p>
      <h3>Correlation to old MI data set</h3>
      <p>
        Whilst we intend to decommission the existing MI data as soon as
        possible, we know that for a period of time we need to dual run and be
        able to correlate data.
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
  </>
)

export default Page
