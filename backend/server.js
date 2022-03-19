import express from 'express'
import connectDB from './config/db.js'
import dotenv  from 'dotenv'
import colors from 'colors'
import productRoute from './routes/productsRoute.js'
import { errorHandler, notFound } from './middle/errorMiddle.js'


dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is runing...')
})

app.use('/api/v1/products', productRoute)

app.use(notFound)

app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))