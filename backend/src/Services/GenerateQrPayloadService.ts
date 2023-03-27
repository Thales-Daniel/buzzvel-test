import { IPayload } from "../shared/interfaces/IPayload"

class GenerateQrService {
  public GenerateQrPayload(payload: IPayload) {
    const { name, linkedin, github } = payload

    const formatedString = `${linkedin}-${github}-${name}`

    const urlQr = `https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${formatedString}`

    const payloadWithQrUrl = {
      name,
      linkedin,
      github,
      urlQr,
    }

    return payloadWithQrUrl
  }
}

export default GenerateQrService
