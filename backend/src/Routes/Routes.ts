import { Router } from "express"

import GenerateQrController from "../Controllers/GenerateQrPayloadController"
import GenerateQrSvgController from "../Controllers/GenerateQrSvgController"

import ValidateQrDatas from "../Middlewares/ValidateQrDatas"

const routes = Router()

routes.post(
  "/generateQrPayload",
  (req, res, next) => new ValidateQrDatas(req, res, next).validateQrDatas(),
  (req, res, next) => new GenerateQrController(req, res, next).generate()
)

routes.get("/generateQrSvg/:url", (req, res, next) =>
  new GenerateQrSvgController(req, res, next).generate()
)

export default routes
