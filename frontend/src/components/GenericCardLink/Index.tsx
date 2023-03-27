import React from "react"

import CardLinksTypes from "../../shared/interfaces/CardLinksTypes"

function GenericCardLink({ children, title, link }: CardLinksTypes) {
  return (
    <div className="flex px-4 py-2 gap-6 items-center justify-center border w-52 rounded-md border-black-not-strong">
      {children}
      <a className="text-2xl" target="_blank" href={link} rel="noreferrer">
        {title}
      </a>
    </div>
  )
}

export default GenericCardLink
