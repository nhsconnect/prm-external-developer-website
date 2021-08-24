import { withPrefix } from "gatsby"

export const OVERVIEW = "OVERVIEW"
export const VISION = "VISION"
export const SCOPE = "SCOPE"
export const USE_CASES = "USE_CASES"
export const REGISTRATION_STARTED = "REGISTRATION_STARTED"
export const MIGRATE_STRUCTURED_RECORD_REQUEST = "MIGRATE_STRUCTURED_RECORD_REQUEST"
export const MIGRATE_STRUCTURED_RECORD_RESPONSE = "MIGRATE_STRUCTURED_RECORD_RESPONSE"
export const MIGRATE_DOCUMENT_REQUEST = "MIGRATE_DOCUMENT_REQUEST"
export const MIGRATE_DOCUMENT_RESPONSE = "MIGRATE_DOCUMENT_RESPONSE"
export const EHR_READY_TO_INTEGRATE = "EHR_READY_TO_INTEGRATE"
export const EHR_INTEGRATED = "EHR_INTEGRATED"
export const REGISTRATION_COMPLETED = "REGISTRATION_COMPLETED"
export const INTERNAL_TRANSFER = "INTERNAL_TRANSFER"
export const ERROR = "ERROR"

export const items = [
  {
    url: withPrefix("/rfcs/RFC0002_patient_switching_standard_mi/overview"),
    label: "Overview",
    id: OVERVIEW,
  },
  {
    url: withPrefix("/rfcs/RFC0002_patient_switching_standard_mi/vision"),
    label: "Vision",
    id: VISION,
  },
  {
    url: withPrefix("/rfcs/RFC0002_patient_switching_standard_mi/scope"),
    label: "Scope",
    id: SCOPE,
  },
  {
    url: withPrefix("/rfcs/RFC0002_patient_switching_standard_mi/usecases"),
    label: "Use Cases",
    id: USE_CASES,
  },
  {
    url: withPrefix("/rfcs/RFC0002_patient_switching_standard_mi/event_registration_started"),
    label: "Event: Registration Started",
    id: REGISTRATION_STARTED,
  },
  {
    url: withPrefix("/rfcs/RFC0002_patient_switching_standard_mi/event_migrate_structured_record_request"),
    label: "Event: Migrate Structured Record Request",
    id: MIGRATE_STRUCTURED_RECORD_REQUEST,
  },
  {
    url: withPrefix("/rfcs/RFC0002_patient_switching_standard_mi/event_migrate_structured_record_response"),
    label: "Event: Migrate Structured Record Response",
    id: MIGRATE_STRUCTURED_RECORD_RESPONSE,
  },
  {
    url: withPrefix("/rfcs/RFC0002_patient_switching_standard_mi/event_migrate_document_request"),
    label: "Event: Migrate Document Request",
    id: MIGRATE_DOCUMENT_REQUEST,
  },
  {
    url: withPrefix("/rfcs/RFC0002_patient_switching_standard_mi/event_migrate_structured_record_response"),
    label: "Event: Migrate Document Response",
    id: MIGRATE_DOCUMENT_RESPONSE,
  },
  {
      url: withPrefix("/rfcs/RFC0002_patient_switching_standard_mi/event_ehr_ready_to_integrate"),
      label: "Event: EHR Ready To Integrate",
      id: EHR_READY_TO_INTEGRATE,
    },
  {
    url: withPrefix("/rfcs/RFC0002_patient_switching_standard_mi/event_ehr_integrated"),
    label: "Event: EHR Integrated",
    id: EHR_INTEGRATED,
  },
  {
    url: withPrefix("/rfcs/RFC0002_patient_switching_standard_mi/event_registration_completed"),
    label: "Event: Registration Completed",
    id: REGISTRATION_COMPLETED,
  },
  {
    url: withPrefix("/rfcs/RFC0002_patient_switching_standard_mi/event_internal_transfer"),
    label: "Event: Internal Transfer",
    id: INTERNAL_TRANSFER,
  },
  {
    url: withPrefix("/rfcs/RFC0002_patient_switching_standard_mi/event_error"),
    label: "Event: Error",
    id: ERROR,
  },
]
