export interface Coffee {
  name: string;
  description: string;
  imgUrl: string;
}

export const coffeeCollection: Coffee[] = [
  {
    name: "Gran Espresso",
    description:
      "Light and flavorful blend with cocoa and black pepper for an intense experience.",
    imgUrl: "/coffee/image-gran-espresso.png",
  },
  {
    name: "Planalto",
    description:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.",
    imgUrl: "/coffee/image-planalto.png",
  },
  {
    name: "Piccollo",
    description:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry.",
    imgUrl: "/coffee/image-piccollo.png",
  },
  {
    name: "Danche",
    description:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes.",
    imgUrl: "/coffee/image-danche.png",
  },
];
