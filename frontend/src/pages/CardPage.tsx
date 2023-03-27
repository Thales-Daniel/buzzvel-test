import React from "react"

import { VscGithubInverted } from "react-icons/vsc"
import GenericCardLink from "../components/GenericCardLink/Index"

function CardPage() {
  return (
    <div>
      <GenericCardLink title="GitHub" link="https://github.com/Thales-Daniel">
        <VscGithubInverted className="text-2xl" />
      </GenericCardLink>
      <GenericCardLink
        title="Linkedin"
        link="https://www.linkedin.com/in/thales-daniel/"
      >
        <VscGithubInverted className="text-2xl" />
      </GenericCardLink>
    </div>
  )
}

export default CardPage
