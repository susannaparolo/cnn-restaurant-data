import {
	FormattedDataUnit,
	Purchase,
	RawPurchaseDataType,
} from "./types/types";
import rawData from "./raw-data.json";
import fs from "fs";

const getProductsByPrefix = (input: string) => {
	const allItems = input.split(",");
	const food: Array<string> = [];
	const drinks: Array<string> = [];
	allItems.forEach((item: string) => {
		if (item.includes("FOOD")) {
			food.push(item);
		} else if (item.includes("DRINK")) {
			drinks.push(item);
		} else {
			throw new Error(
				`This item has unknown prefix ${item} -- not FOOD or DRINK`
			);
		}
	});
	return { food, drinks };
};

const parseData = (data: RawPurchaseDataType[]) => {
	const initialData: any = {};

	data.forEach((dataElement: RawPurchaseDataType) => {
		const productsData = getProductsByPrefix(dataElement.items);

		const purchase = {
			date: dataElement.date,
			products: productsData,
		};
		const hasThisCustomerAlready = Boolean(initialData[dataElement.customerId]);

		if (hasThisCustomerAlready) {
			const existingPurchases = initialData[dataElement.customerId].purchases;
			existingPurchases.push(purchase);
			initialData[dataElement.customerId].purchases = existingPurchases;
		} else {
			initialData[dataElement.customerId] = {};
			initialData[dataElement.customerId].purchases = [purchase];
		}
	});

	return initialData;
};

const result = parseData(rawData);

console.log({ result });
fs.writeFile("formatted-data.json", JSON.stringify(result), (err) => {
	if (err) {
		console.error(err);
	}
});
