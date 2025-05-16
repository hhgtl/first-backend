import express, {Request, Response} from 'express'

const app = express()
const port = process.env.PORT || 5000

const products = [{id: 1,title: 'tomato'}, {id: 2,title: 'orange'}]
const addresses = [{id: 1, value: 'KakoitoDom 12'}, {id: 2, value: 'MegaKosmos 15'}]

const parserMiddleware = express.json()

app.use(parserMiddleware)

app.get('/products', (req: Request, res: Response) => {
    if(req.query.title){
        const searchString = req.query.title.toString()
        res.send(products.filter(p => p.title.indexOf(searchString) > -1))
    } else {
        res.send(products)
    }

})
app.get('/products/:productTitle', (req: Request, res: Response) => {
    let product = products.find((p) => p.title === req.params.productTitle)
    if (product) {
        res.send(product)
    } else {
        res.status(404).send('Product not found')
    }
})
app.delete('/products/:id', (req: Request, res: Response) => {
    for (let i = 0 ; i < products.length; i++) {
        if (products[i].id === +req.params.id) {
            products.splice(i, 1)
            res.status(204).send('Product deleted successfully')
            return;
        }
    }
    res.status(404).send('Product not found')
})
app.post('/products', (req: Request, res: Response) => {
    const id = new Date().getTime()
    const newProduct = {
        id: id,
        title: req.body.title,
    }
    products.push(newProduct)
    res.status(201).send(newProduct)

})
app.put('/products/:id', (req: Request, res: Response) => {
  const id = products.findIndex((p) => p.id === +req.params.id)
    products[id].title = req.body.title
    res.status(200).send('Product updated successfully')
})
app.get('/addresses', (req: Request, res: Response) => {
    res.send(products)
})
app.get('/addresses/:id', (req: Request, res: Response) => {
    let address = addresses.find((a) => a.id === Number(req.params.id))
    if (address) {
        res.send(address)
    } else {
        res.status(404).send('Address not found')
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
