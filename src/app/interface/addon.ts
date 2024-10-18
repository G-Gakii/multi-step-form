export interface Addon {
  name: String;
  des: String;
  price: {
    monthly: number;
    yearly: number;
  };
  isSelected: boolean;
}
