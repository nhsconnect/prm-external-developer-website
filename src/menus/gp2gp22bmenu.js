import { withPrefix } from "gatsby"

export const OVERVIEW = "OVERVIEW"
export const SPINE_TECH_DESIGN = "SPINE_TECH_DESIGN"
export const MANAGEMENT_INFORMATION = "MANAGEMENT_INFORMATION"
export const APPENDIX = "APPENDIX"

export const items = [
  {
    url: withPrefix("gp2gp/gp2gp_2.2b/overview"),
    label: "Overview",
    id: OVERVIEW,
  },
  {
    url: withPrefix("gp2gp/gp2gp_2.2b/spine_technical_design"),
    label: "Spine technical design",
    id: SPINE_TECH_DESIGN,
  },
  {
    url: withPrefix("gp2gp/gp2gp_2.2b/management_information"),
    label: "Management Information",
    id: MANAGEMENT_INFORMATION,
  },
  {
    url: withPrefix("gp2gp/gp2gp_2.2b/appendix"),
    label: "Appendix",
    id: APPENDIX,
  },
]
