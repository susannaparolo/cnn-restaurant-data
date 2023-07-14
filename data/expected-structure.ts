const sample = {
    'customerID_123132': {
        purchases: [
            // purchase 1 for customer 1
            {
                date: '10/10/2020',
                products:
                {
                    food: ['food1', 'food2'],
                    drink: ['drink1', 'drink2'],
                }
            },
            // purchase 2 for customer 1
            {
                date: '12/01/2021',
                products:
                {
                    food: ['food1', 'food2'],
                    drink: ['drink1', 'drink2']
                }
            }
        ]
    },
    'customerID_1231322': {
        // purchase 1 for customer 2
        purchases: [
            {
                date: '03/09/2022',
                products:
                {
                    food: ['food1', 'food2'],
                    drink: ['drink1', 'drink2']
                }
            }
        ]
    }
}


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

// const data = formattedDataset();
// writeFile("./formatted-data.json", JSON.stringify(data), (err) => {
//     if (err) throw err;
//     console.log("✅ data written");
// });
