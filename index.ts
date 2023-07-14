import {
	FormattedDataUnit,
	Purchase,
	RawPurchaseDataType,
} from "./types/types";
import rawData from "./data/raw-data.json";
import fs from "fs";
import { getProductsByPrefix } from "./utils/get-products-by-prefix";

const parseData = (data: RawPurchaseDataType[]): Record<string, FormattedDataUnit> => {
	// creating an empty obj with specified types
	const initialData: Record<string, FormattedDataUnit> = {};

	// traversing through the raw data array
	data.forEach((dataElement: RawPurchaseDataType) => {
		const productsData = getProductsByPrefix(dataElement.items);

		// joining all the data to fit the preffered type "Purchase"
		const purchase: Purchase = {
			date: dataElement.date,
			products: productsData,
		};

		// check if we already have some data for this customer
		const hasThisCustomerAlready = Boolean(initialData[dataElement.customerId]);

		if (hasThisCustomerAlready) {
			const existingPurchases = initialData[dataElement.customerId].purchases;
			existingPurchases.push(purchase);
			// adding purchase data to property "purchases" with pre existing data
			initialData[dataElement.customerId].purchases = existingPurchases;
		} else {
			initialData[dataElement.customerId] = {} as FormattedDataUnit;
			// adding purchase data to property "purchases"
			initialData[dataElement.customerId].purchases = [purchase];
		}
	});

	return initialData;
};


const result = parseData(rawData);
fs.writeFile("./data/formatted-data.json", JSON.stringify(result), (err) => {
	if (err) {
		console.error(err);
	}
});