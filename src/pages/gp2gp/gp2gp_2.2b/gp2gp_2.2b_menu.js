import { withPrefix } from "gatsby"

const sidemenudata = {
  items: [
    {
      url: withPrefix("gp2gp/gp2gp_2.2b/overview"),
      label: "Overview",
    },
    {
      url: withPrefix("gp2gp/gp2gp_2.2b/spine_technical_design"),
      label: "Spine techhnical design",
    },
    {
      url: withPrefix("gp2gp/gp2gp_2.2b/management_information"),
      label: "Management Information",
    },
    {
        url: withPrefix("gp2gp/gp2gp_2.2b/appendix"),
        label: "Appendix",
      },    
  ],
}

export default sidemenudata
