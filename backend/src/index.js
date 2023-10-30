import app from './app'
import './database'



const puerto = app.listen(8080)

console.log(`server puerto ${puerto}`)