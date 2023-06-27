import {
  FormattedDataUnit,
  Purchase,
  RawPurchaseDataType,
} from "./types/types";

import rawData from "./purchase-file.json";

/**
 * parse items into food & drink,
 * split them
 * get an array of objects
 * key values is customer id
 */

const parseData = () => {
  const structuredData: Record<string, FormattedDataUnit> = {};

  rawData.forEach((element: RawPurchaseDataType) => {
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
    const purchase: Purchase = {
      date: element.date,
      products: {
        food,
        drinks,
      },
    };
    structuredData[element.customerId] = {
      purchases: [purchase],
    };
  });
  return structuredData;
};

console.log(JSON.stringify(parseData()));
