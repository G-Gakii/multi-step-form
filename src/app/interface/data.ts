export interface Data {
  img: string;
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  isPlan: boolean;
}
