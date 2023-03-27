import { Response, Request, NextFunction } from "express"

import ErrorApp from "./ErrorApp"

class ValidateQrDatas {
  private req: Request
  private res: Response
  private next: NextFunction

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req
    this.res = res
    this.next = next
  }

  public validateQrDatas() {
    try {
      const { name, linkedin, github } = this.req.body
      if (!name || !linkedin || !github)
        throw new ErrorApp("Check all fields and try again", 400)
      return this.next()
    } catch (err) {
      this.next(err)
    }
  }
}

export default ValidateQrDatas
