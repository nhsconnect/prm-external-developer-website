import React from "react"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import WarningCallout from "nhsuk-react-components/lib/components/warning-callout"
import Pagination from "nhsuk-react-components/lib/components/pagination"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import { items, OVERVIEW } from "../../../menus/rfc0002menu"
import "../../index.scss"

const Page = () => (
  <>
    <Helmet title="Overview - Patient Record Migration" />
    <PageWithSideMenu
      sidemenu={{ items, selectedItem: OVERVIEW }}
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
            href="https://github.com/nhsconnect/prm-external-developer-website/issues/1"
            title="External website where RFC comments are allowed"
          >
            Github site
          </a>
          .
        </p>
      </WarningCallout>
      <h1>RFC0002 Patient Switching Standard MI</h1>
      <h2>Overview</h2>
      <p>In the current GP2GP implementation we currently see a large number of errors
      that we either:</p>
      <ul>
        <li>cannot currently measure</li>
        <li>or when we can measure, cannot currently understand.</li>
      </ul>
      <p>
        We are proposing a new MI solution to be implemented by all suppliers.
        This solution would be for suppliers to send events across the registrations
        flow in JSON format via a RESTful API. The aim of the Management Information (MI) API
        is to provide visibility in these key areas in a timely fashion.
      </p>
      <p>This RFC outlines the proposal.</p>
      <Pagination>
        <Pagination.Next href={withPrefix("rfcs/RFC0002_patient_switching_standard_mi/vision")}>
          Vision
        </Pagination.Next>
      </Pagination>
    </PageWithSideMenu>
  </>
)

export default Page
