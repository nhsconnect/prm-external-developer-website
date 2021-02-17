import { withPrefix } from "gatsby"

export const OVERVIEW = "OVERVIEW"
export const VISION = "VISION"
export const SCOPE = "SCOPE"
export const USE_CASES = "USE_CASES"
export const NEW_DATA = "NEW_DATA"
export const REGISTRATION_STARTED = "REGISTRATION_STARTED"
export const EHR_REQUESTED = "EHR_REQUESTED"
export const EHR_GENERATED = "EHR_GENERATED"
export const EHR_SENT = "EHR_SENT"
export const EHR_VALIDATED = "EHR_VALIDATED"
export const EHR_INTEGRATED = "EHR_INTEGRATED"
export const REGISTRATION_COMPLETED = "REGISTRATION_COMPLETED"

export const items = [
  {
    url: withPrefix("/rfcs/RFC0001_gp2gp_mi/overview"),
    label: "Overview",
    id: OVERVIEW,
  },
  {
    url: withPrefix("/rfcs/RFC0001_gp2gp_mi/vision"),
    label: "Vision",
    id: VISION,
  },
  {
    url: withPrefix("/rfcs/RFC0001_gp2gp_mi/scope"),
    label: "Scope",
    id: SCOPE,
  },
  {
    url: withPrefix("/rfcs/RFC0001_gp2gp_mi/usecases"),
    label: "Use Cases",
    id: USE_CASES,
  },
  {
    url: withPrefix("/rfcs/RFC0001_gp2gp_mi/data"),
    label: "New data to be collected",
    id: NEW_DATA,
  },
  {
    url: withPrefix("/rfcs/RFC0001_gp2gp_mi/event_registration_started"),
    label: "Event: Registration Started",
    id: REGISTRATION_STARTED,
  },
  {
    url: withPrefix("/rfcs/RFC0001_gp2gp_mi/event_ehr_requested"),
    label: "Event: EHR Requested",
    id: EHR_REQUESTED,
  },
  {
    url: withPrefix("/rfcs/RFC0001_gp2gp_mi/event_ehr_generated"),
    label: "Event: EHR Generated",
    id: EHR_GENERATED,
  },
  {
    url: withPrefix("/rfcs/RFC0001_gp2gp_mi/event_ehr_sent"),
    label: "Event: EHR Sent",
    id: EHR_SENT,
  },
  {
    url: withPrefix("/rfcs/RFC0001_gp2gp_mi/event_ehr_validated"),
    label: "Event: EHR Validated",
    id: EHR_VALIDATED,
  },
  {
    url: withPrefix("/rfcs/RFC0001_gp2gp_mi/event_ehr_integrated"),
    label: "Event: EHR Integrated",
    id: EHR_INTEGRATED,
  },
  {
    url: withPrefix("/rfcs/RFC0001_gp2gp_mi/event_registration_completed"),
    label: "Event: Registration Completed",
    id: REGISTRATION_COMPLETED,
  },
]
