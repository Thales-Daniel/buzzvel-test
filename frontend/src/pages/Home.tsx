import React, { useState } from "react"

import InputContainer from "../components/InputContainer/Index"
import QrModal from "../components/QrModal"

function Home() {
  const [open, setOpen] = useState(false)
  const [linkedin, setLinkedin] = useState("")
  const [github, setGithub] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = (event: any) => {
    event?.preventDefault()
    setOpen(true)
  }

  return (
    <form
      onSubmit={(event) => handleSubmit(event)}
      className="w-full h-screen border bg-light-blue flex flex-col justify-center items-center"
    >
      <div className="w-3/5 xl:w-4/5 2mini:w-[95%] gap-12 h-2/3 border rounded-xl bg-semi-white flex flex-col justify-center items-center">
        <h1 className="text-3xl 2mini:text-2xl">QR Code Image Generator</h1>
        <InputContainer
          linkedin={linkedin}
          setLinkedin={setLinkedin}
          github={github}
          setGithub={setGithub}
          name={name}
          setName={setName}
        />
        <button
          type="submit"
          className="text-2xl border border-black-not-strong rounded py-2 px-8"
        >
          Generate Image
        </button>
        <QrModal open={open} setOpen={setOpen}>
          Hello World
        </QrModal>
      </div>
    </form>
  )
}

export default Home
