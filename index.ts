// import {
//   FormattedDataUnit,
//   Purchase,
//   RawPurchaseDataType,
// } from "./types/types";
import rawData from "./raw-data.json";
import fs from "fs";

const parseData = () => {
  return '✨🪄 casting a $pell 🪄✨';
};

const result = parseData()
console.log({ result })
fs.writeFile('formatted-data.json', JSON.stringify(result), err => {
  if (err) {
    console.error(err);
  }
});


