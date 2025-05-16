import {Request, Response, Router} from "express";

const addresses = [{id: 1, value: 'KakoitoDom 12'}, {id: 2, value: 'MegaKosmos 15'}]


export const addressesRouter = Router({})


addressesRouter.get('/', (req: Request, res: Response) => {
    res.send(addresses)
})
addressesRouter.get('/:id', (req: Request, res: Response) => {
    let address = addresses.find((a) => a.id === +req.params.id)
    if (address) {
        res.send(address)
    } else {
        res.status(404).send('Address not found')
    }
})
