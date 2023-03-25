function GeradorQr(likedin: string, github: string) {
  const urlQr = "https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl="
  const conteudo = urlQr + "Linkedin: " + likedin + " Github: " + github
  return conteudo
}

export default GeradorQr
