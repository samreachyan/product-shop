const express = require('express')
const path = require('path')
const cors = require('cors')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const orderRoutes = require('./routes/orderRoutes')
const uploadRoutes = require('./routes/uploadRoutes')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

dotenv.config()

connectDB()

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID)
})

const ___dirname = path.resolve()
app.use('/uploads', express.static(path.join(___dirname, '/uploads')))

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold))
