import React from "react"

import IGenericInput from "../../shared/interfaces/IGenericInput"

function GenericInput({ setValue, value, title, placeholder }: IGenericInput) {
  return (
    <label
      htmlFor={title}
      className="flex p-4 w-full justify-center items-center"
    >
      <h2 className="input-title">{title}</h2>
      <input
        className="outline-none border-l-0 border rounded-r border-gray-400 px-4 py-2 w-[70%]"
        type="text"
        id={title}
        name={title}
        value={value}
        placeholder={placeholder}
        onChange={(event) => setValue(event.target.value)}
      />
    </label>
  )
}

export default GenericInput
