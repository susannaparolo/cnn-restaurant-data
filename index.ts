import rawData from './purchase-file.json'



/**
 * parse items into food & drink,
 * split them
 * get an array of objects 
 * key values is customer id
 */


type RawPurchaseDataType = {
    customerId: string
    date: string
    items: string
}
type FormattedDataUnit = {

}
const parseData = () => {
    const structuredData: any = {}

    rawData.forEach((element: RawPurchaseDataType) => {
        const allItems = element.items.split(",")
        const food: Array<string> = []
        const drink: Array<string> = []

        allItems.forEach((item: string) => {
            if (item.includes("FOOD")) {
                food.push(item)
            }
            else {
                drink.push(item)
            }
        })

        const purchase = {
            date: element.date,
            products: {
                food, drink
            }
        }
        structuredData[element.customerId].purchases = [purchase]


        // const hasCustomerData = Boolean(structuredData[element.customerId])
        // if (hasCustomerData) {
        //     const existingData = structuredData[element.customerId].purchases
        //     existingData.push(purchase)
        //     structuredData[element.customerId].purchases = existingData
        // } else {
        //     structuredData[element.customerId] = {}
        //     structuredData[element.customerId].purchases = [purchase]
        // }

        // console.log({ structuredData })

    })
}

parseData()

