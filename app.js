const express = require('express')
const app = express()
const path = require('path')
const port = 4000

// Configuración para renderizar vistas EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(express.urlencoded( { extended: true }))
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
   res.render('index')
})



app.listen(port, () => {
    console.log(`!Server UP! en http://localhost:${port}`)
})