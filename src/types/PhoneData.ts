export type Description = {
  title: string;
  text: string[];
};

export type PhoneData = {
  capacityAvailable: string[];
  colorsAvailable: string[];
  images: string[];
  cell: string[];
  namespaceId: string;
  name: string;
  description: Array<Description>;
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  color: string;
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
};
