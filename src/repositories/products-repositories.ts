const products = [{id: 1,title: 'tomato'}, {id: 2,title: 'orange'}]


export const productsRepositories = {
    findProducts(title: string | null | undefined) {
        if(title){
            const filteredProducts = products.filter(p => p.title.indexOf(title) > -1)
            return filteredProducts
        } else {
            return products
        }
    },
    findProductsById(id: number | null | undefined) {
        let product = products.find(p => p.id === id)
        return product
    },
    createProduct(title: string | null | undefined) {
        const id = new Date().getTime()
        if(title){
            const newProduct = {
                id: id,
                title,
            }
            products.push(newProduct)
            return newProduct
        }
    },
    deleteProduct(id: number | null | undefined) {
        if (id) {
            for (let i = 0; i < products.length; i++) {
                if (products[i].id === id) {
                    products.splice(i, 1)
                    return true;
                }
            }
        }
        return false;
    },
    updateProduct(id: number | null | undefined, title: string | null | undefined) {
        if (id && title){
            const index = products.findIndex((p) => p.id === id)
            products[index].title = title
            return true
        }
        return false
    }
}