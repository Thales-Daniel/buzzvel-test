import { NextFunction, Request, Response } from "express"
import GenerateQrService from "../Services/GenerateQrService"
import { IPayload } from "../shared/interfaces/IPayload"

class GenerateQrController {
  private req: Request
  private res: Response
  private next: NextFunction
  private service: GenerateQrService

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req
    this.res = res
    this.next = next
    this.service = new GenerateQrService()
  }

  public async generate() {
    const { name, linkedin, github } = this.req.body
    const user: IPayload = {
      name: name,
      linkedin: linkedin,
      github: github,
    }
    try {
      const userCard = this.service.GenerateQrPayload(user)
      return this.res.status(201).json(userCard)
    } catch (error) {
      this.next(error)
    }
  }
}

export default GenerateQrController
