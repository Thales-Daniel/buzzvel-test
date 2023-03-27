import { NextFunction, Request, Response } from "express"
import GenerateQrSvgServices from "../Services/GenerateQrSvgServices"

class GenerateQrSvgController {
  private req: Request
  private res: Response
  private next: NextFunction
  private service: GenerateQrSvgServices

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req
    this.res = res
    this.next = next
    this.service = new GenerateQrSvgServices()
  }

  public async generate() {
    const { url } = this.req.params

    try {
      const svg = this.service.GenerateQrPayload(url)
      this.res.type("svg")
      svg.pipe(this.res)
    } catch (error) {
      this.next(error)
    }
  }
}

export default GenerateQrSvgController
