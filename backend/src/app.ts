import express from "express"
import cors from "cors"

import routes from "./Routes/Routes"

const app = express()
app.use(express.json())
app.use(cors())
app.use(routes)

const PORT = process.env.PORT || 3333

app.listen(PORT, () => console.log(`Server is running in PORT ${PORT}`))

export default app
