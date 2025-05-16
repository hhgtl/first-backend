const addresses = [{id: 1, value: 'KakoitoDom 12'}, {id: 2, value: 'MegaKosmos 15'}]



export const addressesRepositories = {
    getAddresses() {
        return addresses
    },
    getAddressById(id: number | null | undefined) {
        let address = addresses.find((a) => a.id === id)
        return address
    }
}