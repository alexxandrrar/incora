export interface IItems {
  _id: string;
  name: string;
  trips: number;
}

export interface IData {
  data: IItems[];
  totalPages: number;
  totalPassengers: number;
}
