import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import CardPage from "../pages/CardPage"
import Home from "../pages/Home"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/card" element={<CardPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router
