import express from 'express'
import {productRoutes} from "./routes/product-router";
import {addressesRouter} from "./routes/addresses-router";

const app = express()
const port = process.env.PORT || 5000

const parserMiddleware = express.json()

app.use(parserMiddleware)

app.use('/products', productRoutes)
app.use('/addresses', addressesRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
