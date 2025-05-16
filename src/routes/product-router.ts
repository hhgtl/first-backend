import {Request, Response, Router} from "express";

const products = [{id: 1,title: 'tomato'}, {id: 2,title: 'orange'}]

export const productRoutes = Router({})

productRoutes.get('/', (req: Request, res: Response) => {
    if(req.query.title){
        const searchString = req.query.title.toString()
        res.send(products.filter(p => p.title.indexOf(searchString) > -1))
    } else {
        res.send(products)
    }

})
productRoutes.get('/:productTitle', (req: Request, res: Response) => {
    let product = products.find((p) => p.title === req.params.productTitle)
    if (product) {
        res.send(product)
    } else {
        res.status(404).send('Product not found')
    }
})
productRoutes.delete('/:id', (req: Request, res: Response) => {
    for (let i = 0 ; i < products.length; i++) {
        if (products[i].id === +req.params.id) {
            products.splice(i, 1)
            res.status(204).send('Product deleted successfully')
            return;
        }
    }
    res.status(404).send('Product not found')
})
productRoutes.post('/', (req: Request, res: Response) => {
    const id = new Date().getTime()
    const newProduct = {
        id: id,
        title: req.body.title,
    }
    products.push(newProduct)
    res.status(201).send(newProduct)

})
productRoutes.put('/:id', (req: Request, res: Response) => {
    const id = products.findIndex((p) => p.id === +req.params.id)
    products[id].title = req.body.title
    res.status(200).send('Product updated successfully')
})