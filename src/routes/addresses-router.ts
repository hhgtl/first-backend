import {Request, Response, Router} from "express";
import {addressesRepositories} from "../repositories/addresses-repositories";



export const addressesRouter = Router({})


addressesRouter.get('/', (req: Request, res: Response) => {
    const addresses = addressesRepositories.getAddresses()
    res.send(addresses)
})
addressesRouter.get('/:id', (req: Request, res: Response) => {
    const addresses = addressesRepositories.getAddressById(+req.params.id)
    if (addresses) {
        res.send(addresses)
    } else {
        res.send(404)
    }
})
