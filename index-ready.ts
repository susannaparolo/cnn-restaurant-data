import {
  FormattedDataUnit,
  Purchase,
  RawPurchaseDataType,
} from "./types/types";
import rawData from "./raw-data.json";
import fs from "fs";

const parseData = () => {
  // creating an empty obj with specified types
  const structuredData: Record<string, FormattedDataUnit> = {};

  // traversing through the raw data array
  rawData.forEach((element: RawPurchaseDataType) => {
    // formatting food & drinks data
    const allItems = element.items.split(",");
    const food: Array<string> = [];
    const drinks: Array<string> = [];
    allItems.forEach((item: string) => {
      if (item.includes("FOOD")) {
        food.push(item);
      } else {
        drinks.push(item);
      }
    });
    // joining all the data to fit the preffered type "Purchase"
    const purchase: Purchase = {
      date: element.date,
      products: {
        food,
        drinks,
      },
    };

    // check if we already have some data for this customer
    const hasCustomerData = Boolean(structuredData[element.customerId])
    if (hasCustomerData) {
      const existingData = structuredData[element.customerId].purchases
      existingData.push(purchase)
      // adding purchase data to property "purchases" with pre existing data
      structuredData[element.customerId].purchases = existingData
    } else {
      structuredData[element.customerId] = {} as FormattedDataUnit
      // adding purchase data to property "purchases"
      structuredData[element.customerId].purchases = [purchase]
    }
  });
  return structuredData;
};

// calling function 
const result = parseData()

// printing results in console
console.log({ result })

// writing result to file
fs.writeFile('formatted-data.json', JSON.stringify(result), err => {
  if (err) {
    console.error(err);
  }
});


