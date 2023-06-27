type RawPurchaseDataType = {
  customerId: string;
  date: string;
  items: string;
};

type FormattedDataUnit = {
  purchases: Purchase[]
};

type Purchase = {
  date: string;
  products: {
    food: string[];
    drinks: string[];
  };
};

export { RawPurchaseDataType, FormattedDataUnit, Purchase}
