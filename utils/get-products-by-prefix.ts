/**
 * 
 * @param input  - all items data in one string
 * @returns formatted data for food and drinks separately
 */

export const getProductsByPrefix = (input: string) => {
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
