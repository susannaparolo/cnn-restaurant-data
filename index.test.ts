import { parseData } from "./index";

describe("Testing Parse Data Function", () => {
	const testData = [
		{ customerId: "1", date: "2023-02-2", items: "FOOD-45" },
		{ customerId: "1", date: "2023-06-30", items: "FOOD-23" },
		{ customerId: "2", date: "2023-01-2", items: "FOOD-233" },
	];

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

	it("parseData should group transactions with the same customerId", () => {
		expect(parseData(testData)).toBe(result);
	});
});
