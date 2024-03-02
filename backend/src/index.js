import app from './app'
import './database'



const puerto = app.listen(4000)

console.log(`server puerto ${puerto}`)