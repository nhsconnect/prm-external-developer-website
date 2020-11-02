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
          url: "#top",
          label: "Usecases",
          selected: true,
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
        contribute to this RFC then go to our <a
          href="https://github.com/nhsconnect/prm-external-developer-website/issues/1"
          title="External website where RFC comments are allowed"
        >Github site</a>
        .
      </p>
    </InsetText>
    <h1>RFC0001 GP2GP MI</h1>
    <h2>Usecases</h2>
    <h3>Registering a new-born via GMS1</h3>

    <p>A parent/guardian registers a new-born at a practice. </p>

    <p>
      As they wish the practice to be the primary care provider for the
      new-born, they fill in a GMS1 form.
    </p>

    <p>
      The practice staff initiate a new GMS1 registration in their system and a
      registration started event is emitted.
    </p>

    <p>
      If a child were to be registered as a temporary patient (GSM3), this would
      not trigger a registration started event.
    </p>

    <p>Currently, no other events would be generated by this use case. </p>

    <p>In the future, we may seek to capture events for: </p>

    <ul>
      <li>Patient not found on PDS </li>
      <li>Patient not eligible for GP2GP </li>
    </ul>

    <h3>Registration failing due to lack of Large Messaging support</h3>

    <p>
      A patient transferring from another practice begins the registration
      process causing a registration started event to be emitted.
    </p>

    <p>
      The registration is GP2GP eligible and a request is made. The EHR is
      generated by the sending practice causing an EHR generated event to be
      emitted.
    </p>

    <p>
      Patient’s record is 10MB and the transfer fails due to the lack of Large
      Messaging support by the requesting practice.
    </p>

    <p>Currently, no other events would be generated by this use case. </p>

    <p>In the future, we might seek to capture events for: </p>

    <ul>
      <li>The EHR failed to generate </li>
      <li>The EHR failed to send </li>
    </ul>

    <h3>EHR rejected by requesting practice</h3>

    <p>
      A patient transferring from another practice begins the registration
      process causing a registration started event to be emitted.
    </p>

    <p>
      The registration is GP2GP eligible and a request is made. The EHR is
      generated by the sending practice causing an EHR generated event to be
      emitted.
    </p>

    <p>
      The requesting system receives the EHR, maps it to its internal data
      model. As the record becomes available for review by the practice staff,
      an EHR validated event is emitted.
    </p>

    <p>
      Upon reviewing the record, the practice staff realise they have received
      the wrong patient and therefore reject it.
    </p>

    <p>Currently, no other events would be generated by this use case. </p>

    <p>In the future, we might seek to capture events for: </p>

    <ul>
      <li>EHR Rejected </li>
    </ul>

    <h3>Successful transfer of an EHR</h3>

    <p>
      A patient transferring from another practice begins the registration
      process causing a registration started event to be emitted.
    </p>

    <p>
      The registration is GP2GP eligible and a request is made. The EHR is
      generated by the sending practice causing an EHR generated event to be
      emitted.
    </p>

    <p>
      The requesting system receives the EHR, maps it to its internal data
      model. As the record becomes available for review by the practice staff,
      an EHR validated event is emitted.
    </p>

    <p>
      The patient has not been registered at this practice before and the
      practice staff decides to integrate the EHR causing an EHR integrated
      event to be emitted.
    </p>

    <h3>Successful transfer of an EHR with degrades</h3>

    <p>
      A patient transferring from another practice begins the registration
      process causing a registration started event to be emitted.
    </p>

    <p>
      The registration is GP2GP eligible and a request is made. The EHR is
      generated by the sending practice causing an EHR generated event to be
      emitted.
    </p>

    <p>
      The requesting system receives the EHR, maps it to its internal data
      model. During the mapping process several of the patient’s recorded
      allergies become degraded. As the record becomes available for review by
      the practice staff, an EHR validated event is emitted. The event will
      contain the number of degrades that the clinical staff will need to
      resolve.
    </p>

    <p>
      The patient has not been registered at this practice before and the
      practice staff decides to integrate the EHR causing an EHR integrated
      event to be emitted.
    </p>

    <h3>Successful transfer of an EHR with attachments</h3>

    <p>
      A patient transferring from another practice begins the registration
      process causing a registration started event to be emitted.
    </p>

    <p>
      The registration is GP2GP eligible and a request is made. Patient’s record
      contains several attachments. The EHR is generated by the sending practice
      causing an EHR generated event to be emitted. The event will contain the
      list of all attachments’ details including id, their size, clinical type,
      mime type and clinical coding (e.g. SNOMED).
    </p>

    <p>
      The requesting system receives the EHR, maps it to its internal data
      model. As the record becomes available for review by the practice staff,
      an EHR validated event is emitted. The event will contain the list of
      attachments’ details including id, their size, clinical type and mime
      type.
    </p>

    <p>
      The patient has not been registered at this practice before and the
      practice staff decides to integrate the EHR causing an EHR integrated
      event to be emitted.
    </p>

    <h3>Successful transfer of an EHR with attachments and placeholders</h3>

    <p>
      A patient transferring from another practice begins the registration
      process causing a registration started event to be emitted.
    </p>

    <p>
      The registration is GP2GP eligible and a request is made. Patient’s record
      contains five attachments, two of which are currently inaccessible, and
      one of which was a placeholder generated by a previous practice (and never
      subsequently fixed). The EHR is generated by the sending practice causing
      an EHR generated event to be emitted. The event will list information
      about the three attachments that have been substituted with a placeholder.
      This includes the two new placeholders as well as the previous one carried
      over. The event will also describe all four original attachments in the
      current system, including their clinical coding (e.g. SNOMED).
    </p>

    <p>
      The requesting system receives the EHR, maps it to its internal data
      model. As the record becomes available for review by the practice staff,
      an EHR validated event is emitted. The event will contain the details of
      the two attachments it has received in full and the three placeholders for
      which the original attachments are not available.
    </p>

    <p>
      The patient has not been registered at this practice before and the
      practice staff decides to integrate the EHR causing an EHR integrated
      event to be emitted.
    </p>
    <Pagination>
      <Pagination.Previous href={withPrefix("rfcs/RFC0001_gp2gp_mi/scope")}>
        Scope
      </Pagination.Previous>
      <Pagination.Next href={withPrefix("rfcs/RFC0001_gp2gp_mi/data")}>
        New data to be collected
      </Pagination.Next>
    </Pagination>
  </PageWithSideMenu>
)

export default Page