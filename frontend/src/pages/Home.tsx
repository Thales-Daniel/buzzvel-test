import React, { useState } from "react"
import GenericInput from "../components/GenericInput/Index"

function Home() {
  const [linkedin, setLinkedin] = useState("")
  const [github, setGithub] = useState("")
  const [name, setName] = useState("")

  return (
    <form className="w-full h-screen border bg-light-blue flex flex-col justify-center items-center">
      <div className="w-3/5 xl:w-4/5 2mini:w-[95%] gap-12 h-2/3 border rounded-xl bg-semi-white flex flex-col justify-center items-center">
        <h1 className="text-3xl 2mini:text-2xl">QR Code Image Generator</h1>
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
        <button
          type="submit"
          className="text-2xl border border-black-not-strong rounded py-2 px-8"
        >
          Generate Image
        </button>
      </div>
    </form>
  )
}

export default Home
