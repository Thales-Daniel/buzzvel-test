import { Router } from "express"

import GenerateQrController from "../Controllers/GenerateQrController"

const routes = Router()

routes.post("/generate", (req, res, next) =>
  new GenerateQrController(req, res, next).generate()
)

export default routes
