const express = require("express")
const path = require("path")

const app = express()

const PORT = process.env.PORT || 4444

app.use(express.static("build"))

app.get("/*", (req, resp) => {
    resp.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`)
})