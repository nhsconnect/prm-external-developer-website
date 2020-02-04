import React from "react"
import { withPrefix } from "gatsby"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import "../../index.scss"


const Page = ({ children }) => (
  <PageWithSideMenu
    sidemenu={{
      items: [
        {
          url: "#top",
          label: "Overview",
          selected: true,
        },
        {
          url: withPrefix("gp2gp/gp2gp_2.3/vision"),
          label: "Vision",
        },
        {
          url: withPrefix("gp2gp/gp2gp_2.3/scope"),
          label: "Scope",
        },
      ],
    }}
    breadcrumb={{
      items: [
        {
          url: withPrefix("registrations"),
          label: "Registrations",
        },
        {
          url: withPrefix("gp2gp/overview"),
          label: "GP2GP",
        },
        {
          url: withPrefix("gp2gp/gp2gp_2.3/overview"),
          label: "GP2GP 2.3",
        },
      ],
    }}
  >
    <h1>GP2GP 2.3: Enhanced Managment Information (MI)</h1>
    <h2>Overview</h2>
    <p>In GP2GP we currently see a lot of errors that we either:</p>
    <ul>
      <li>cannot currently measure</li>
      <li>or when we can measure, cannot currently understand.</li>
    </ul>
    <p>
      The aim of the "Enhanced MI" specification update is to provide visibility
      in these key areas in a timely fashion.
    </p>
    <p>
      The goal is to provide additional information that is not currently
      provided in the 2.2b MI specification:
    </p>
    <h3>Sending Practice specific</h3>
    <ul>
      <li>
        For each attachment that is in the EHR:
        <ul>
          <li>Size</li>
          <li>Type</li>
          <li>Code</li>
        </ul>
      </li>
      <li>Whether that attachment was included in thhe GP2GP message</li>
      <li>Usage of 'Placeholders' when attachments are not sent</li>
    </ul>
    <h3>Recieving Practice specifc</h3>
    <ul>
      <li>
        For each attachment that is in the GP2GP message:
        <ul>
          <li>Size</li>
          <li>Type</li>
          <li>Code</li>
        </ul>
      </li>
      <li>Whether that attachment was integrated into the record</li>
      <li>
        For each degrade:
        <ul>
          <li>the code that was degraded</li>
          <li>The number of times it was degraded</li>
        </ul>
      </li>
    </ul>
  </PageWithSideMenu>
)

export default Page
