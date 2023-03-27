import React from "react"
import InputTypes from "../../shared/interfaces/InputTypes"
import GenericInput from "../GenericInput/Index"

function InputContainer({
  linkedin,
  setLinkedin,
  github,
  setGithub,
  name,
  setName,
}: InputTypes) {
  return (
    <div className="w-full">
      <GenericInput
        value={name}
        setValue={setName}
        title="Name"
        placeholder="John Doe"
      />
      <GenericInput
        value={github}
        setValue={setGithub}
        title="Linkedin"
        placeholder="https://www.linkedin.com/in/******"
      />
      <GenericInput
        value={linkedin}
        setValue={setLinkedin}
        title="GitHub"
        placeholder="https://github.com/******"
      />
    </div>
  )
}

export default InputContainer
