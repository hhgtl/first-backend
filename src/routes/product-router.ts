import {Request, Response, Router} from "express";
import {productsRepositories} from "../repositories/products-repositories";


export const productRoutes = Router({})

productRoutes.get('/', (req: Request, res: Response) => {
    const foundProducts = productsRepositories.findProducts(req.params.title)
    res.send(foundProducts);
})
productRoutes.post('/', (req: Request, res: Response) => {
    const newProduct = productsRepositories.createProduct(req.body.title)
    res.status(201).send(newProduct)

})
productRoutes.get('/:id', (req: Request, res: Response) => {
    let product = productsRepositories.findProductsById(+req.params.id)
    if (product) {
        res.send(product)
    } else {
        res.send(404)
    }
})
productRoutes.delete('/:id', (req: Request, res: Response) => {
    const isDeleted = productsRepositories.deleteProduct(+req.params.id)
    if (isDeleted) {
        res.status(204).send('Product deleted successfully')
    } else {
        res.status(404).send('Product not found')
    }
})

productRoutes.put('/:id', (req: Request, res: Response) => {
    const id = +req.params.id;
    const title = req.body.title;
    const isUpdated = productsRepositories.updateProduct(id, title)
    if(isUpdated){
        const product = productsRepositories.findProductsById(id)
        res.send(product)
    } else {
        res.status(404).send('Product not found')
    }
})