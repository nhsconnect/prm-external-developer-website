import React from "react"
import { ReadingPage } from "../components/pagelayouts/readingpage"
import "./index.scss"

const Page = ({ children }) => (
  <ReadingPage>
    <h1>Patient Record Migration: Developer website</h1>
    <p>
      Welcome to the Patient Record Migration: Developer website. Please click a
      link to the area you are interested in.
    </p>
  </ReadingPage>
)

export default Page
