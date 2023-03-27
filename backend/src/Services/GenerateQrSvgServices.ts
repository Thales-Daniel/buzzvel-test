import qr from "qr-image"

class GenerateQrSvgServices {
  public GenerateQrPayload(text: string) {
    const svg = qr.image(text, { type: "svg" })

    return svg
  }
}

export default GenerateQrSvgServices
