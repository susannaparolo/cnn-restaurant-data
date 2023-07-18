// import { getProductsByPrefix } from "./utils/get-products-by-prefix";

import { getProductsByPrefix } from "./utils/get-products-by-prefix";

describe("Testing Parse Data Function", () => {
	const wrongData = { customerId: "2", date: "2021-01-05", items: "233" }

	it("check if a prefix is NOT FOOD or DRINK ", () => {
		expect(1).toBe(1)

		const result = getProductsByPrefix(wrongData.items);

		// 	console.log(getProductsByPrefix(testData[3].items));

		expect(result).rejects.toThrow(
			new Error(`This item has unknown prefix  -- not FOOD or DRINK`)
		);
	});
});

const result = {
	"1": {
		purchases: [
			{
				date: "2023-02-2",
				products: { food: ["FOOD-45"] },
			},

			{
				date: "2023-06-30",
				products: { food: ["FOOD-23"] },
			},
		],
	},

	"2": {
		purchases: [
			{
				date: "2023-01-2",

				products: { food: ["FOOD-233"] },
			},
		],
	},
};

