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

describe("Testing Parse Data Function", () => {
	const testData = [
		{ customerId: "1", date: "2023-02-02", items: "FOOD-45" },
		{ customerId: "1", date: "2023-06-30", items: "FOOD-23" },
		{ customerId: "2", date: "2022-10-12", items: "Raw-233" },
        { customerId: "2", date: "2021-01-05", items: "233" },
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

	it("check if a prefix is NOT FOOD or DRINK ", () => {
        test()
        // https://jestjs.io/docs/expect#tothrowerror
		expect(parseData(testData)).toBe(result);
	});
});

// "bd5ccdbf-48c9-4ea5-806d-c5f089f9c03e":
// this customer has multiple transactions with the same datestamp