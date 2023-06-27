// Sample data extracted from provided dataset
// In future this will be replaced by the formatted json data from backend
export const testData = [
  {
    customerId: "6a6f2647-216a-4e59-b3e5-aa8babb212c6",
    date: "2022-12-29T13:42:40.396Z",
    items: "FOOD-C7F2C0611d,FOOD-ca1F288F3a",
  },
  {
    customerId: "bd5ccdbf-48c9-4ea5-806d-c5f089f9c03e",
    date: "2022-12-07T06:32:53.966Z",
    items: "FOOD-5276767F7b,FOOD-e3DB0645CB,FOOD-C7F2C0611d,FOOD-fb8aaab42F",
  },
  {
    customerId: "449cec3a-78ec-4fcd-922e-57b7ea714312",
    date: "2023-06-09T03:56:01.155Z",
    items:
      "FOOD-5276767F7b,FOOD-c4afE0725a,DRINK-EF1ECca83C,DRINK-FF3cdaFBeb,DRINK-EcCfAbb51f,DRINK-2cFc2DFa35,DRINK-8aB74dA1E4,DRINK-e80CF8D3Aa,DRINK-95A11Cb900,DRINK-5Ddad3bA20,DRINK-B5dCABCbC7,DRINK-199601cDF9,FOOD-5c0d7CAfB2,FOOD-CbfB655F2b,FOOD-fb8aaab42F,FOOD-ca1F288F3a",
  },
];

// Main table component
export function Table() {
  return (
    <table className="table">
      <thead>
        <tr className="thead">
          <th>CustomerId</th>
          <th>Date</th>
          <th>Items</th>
        </tr>
      </thead>
      <tbody>
        {/* testData provided above is mapped in each table row */}
        {testData.map((val, key) => {
          return (
            <tr className="trow" key={key}>
              <td>{val.customerId}</td>
              <td>{val.date}</td>
              <td>{val.items}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
