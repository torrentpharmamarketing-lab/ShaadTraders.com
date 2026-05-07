export interface ProductVariant {
  id: string;
  name: string;
  packSize: number;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  type: string;
  description: string;
  colorName: string;
  colorCode: string;
  variants: ProductVariant[];
  image: string;
}

export const products: Product[] = [
  {
    id: "mixfun-banana",
    name: "MixFUN Banana Flavor",
    type: "Condoms",
    description: "Experience enhanced pleasure and comfort with our premium banana-flavored condoms. Designed with smooth lubrication for a natural feel.",
    colorName: "Yellow",
    colorCode: "#F6D000",
    image: "/product1.jpeg",
    variants: [
      { id: "mb-3", name: "3 Pack", packSize: 3, price: 150 },
      { id: "mb-12", name: "12 Pack", packSize: 12, price: 550 },
    ]
  },
  {
    id: "mixfun-ribbed",
    name: "MixFUN Ribbed",
    type: "Condoms",
    description: "Specially designed with ribbed texture to increase stimulation and provide a climax like never before. Maximum reliability and comfort.",
    colorName: "Blue",
    colorCode: "#0076CE",
    image: "/product2.jpeg",
    variants: [
      { id: "mr-3", name: "3 Pack", packSize: 3, price: 180 },
      { id: "mr-12", name: "12 Pack", packSize: 12, price: 650 },
    ]
  },
  {
    id: "mixfun-dotted",
    name: "MixFUN Dotted",
    type: "Condoms",
    description: "Specially designed with raised dots to increase stimulation and provide a climax like never before. Maximum reliability and comfort.",
    colorName: "Dark Blue",
    colorCode: "#1B365D",
    image: "/product3.jpeg",
    variants: [
      { id: "md-3", name: "3 Pack", packSize: 3, price: 180 },
      { id: "md-12", name: "12 Pack", packSize: 12, price: 650 },
    ]
  },
  {
    id: "mixfun-strawberry",
    name: "MixFUN Strawberry Flavor",
    type: "Condoms",
    description: "Get the closest connection possible. Strawberry flavored, designed for extreme sensitivity without compromising protection.",
    colorName: "Red",
    colorCode: "#D12127",
    image: "/product4.jpeg",
    variants: [
      { id: "ms-3", name: "3 Pack", packSize: 3, price: 200 },
      { id: "ms-12", name: "12 Pack", packSize: 12, price: 750 },
      { id: "ms-30", name: "30 Bulk Pack", packSize: 30, price: 1600 }
    ]
  },
  {
    id: "mixfun-vanilla",
    name: "MixFUN Vanilla Flavor",
    type: "Condoms",
    description: "Soft vanilla scent for a sweet and intimate experience. Premium quality and thoroughly tested.",
    colorName: "Light Yellow",
    colorCode: "#FDE68A",
    image: "/product5.jpeg",
    variants: [
      { id: "mv-3", name: "3 Pack", packSize: 3, price: 200 }
    ]
  },
  {
    id: "shaad-gloves-latex",
    name: "Premium Latex Gloves",
    type: "Gloves",
    description: "High-quality, durable latex exploration gloves for clinical, medical, and personal use. Powder-free.",
    colorName: "White",
    colorCode: "#FFFFFF",
    image: "https://images.unsplash.com/photo-1584989656461-12c8ff4a3e29?auto=format&fit=crop&q=80&w=800",
    variants: [
      { id: "sg-100", name: "Box of 100", packSize: 100, price: 950 }
    ]
  }
];
