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
    customerId: Array<Purchase>
}

type Purchase = {
    date: string
    products: {
        food: string[]
        drinks: string[]
    }

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

        structuredData[element.customerId] = [purchase]


    })
    return structuredData
}

const result = parseData()
console.log(result)
