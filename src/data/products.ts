export interface ProductVariant {
  id: string;
  name: string;
  packSize: number;
  price: number;
  image?: string;
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
    description: "Experience enhanced pleasure and comfort with our premium banana-flavored condoms. Designed with smooth lubrication for a natural feel. Made from premium Natural Rubber Latex extracted from rubber trees, providing unmatched elasticity, strength, and flexibility.",
    colorName: "Yellow",
    colorCode: "#F6D000",
    image: "/MaxfunBanana.png",
    variants: [
      { id: "mb-3", name: "3 Pack", packSize: 3, price: 150 },
      { id: "mb-12", name: "12 Pack", packSize: 12, price: 550, image: "/Maxfunbanana12pcs.png" },
    ]
  },
  {
    id: "mixfun-ribbed",
    name: "MixFUN Ribbed",
    type: "Condoms",
    description: "Specially designed with ribbed texture to increase stimulation and provide a climax like never before. Maximum reliability and comfort. Made from premium Natural Rubber Latex extracted from rubber trees, providing unmatched elasticity, strength, and flexibility.",
    colorName: "Blue",
    colorCode: "#0076CE",
    image: "/MaxfunRibbed.png",
    variants: [
      { id: "mr-3", name: "3 Pack", packSize: 3, price: 180 },
      { id: "mr-12", name: "12 Pack", packSize: 12, price: 650, image: "/Maxfunribbed12pcs.png" },
    ]
  },
  {
    id: "mixfun-dotted",
    name: "MixFUN Dotted",
    type: "Condoms",
    description: "Specially designed with raised dots to increase stimulation and provide a climax like never before. Maximum reliability and comfort. Made from premium Natural Rubber Latex extracted from rubber trees, providing unmatched elasticity, strength, and flexibility.",
    colorName: "Dark Blue",
    colorCode: "#1B365D",
    image: "/MaxfunDotted.png",
    variants: [
      { id: "md-3", name: "3 Pack", packSize: 3, price: 180 },
      { id: "md-12", name: "12 Pack", packSize: 12, price: 650, image: "/Maxfundotted12pcs.png" },
    ]
  },
  {
    id: "mixfun-strawberry",
    name: "MixFUN Strawberry Flavor",
    type: "Condoms",
    description: "Get the closest connection possible. Strawberry flavored, designed for extreme sensitivity without compromising protection. Made from premium Natural Rubber Latex extracted from rubber trees, providing unmatched elasticity, strength, and flexibility.",
    colorName: "Red",
    colorCode: "#D12127",
    image: "/Maxfunstrawberry.png",
    variants: [
      { id: "ms-3", name: "3 Pack", packSize: 3, price: 200 },
      { id: "ms-12", name: "12 Pack", packSize: 12, price: 750, image: "/maxfunstrawberry12pcs.png" },
      { id: "ms-30", name: "30 Bulk Pack", packSize: 30, price: 1600 }
    ]
  },
  {
    id: "mixfun-vanilla",
    name: "MixFUN Vanilla Flavor",
    type: "Condoms",
    description: "Soft vanilla scent for a sweet and intimate experience. Premium quality and thoroughly tested. Made from premium Natural Rubber Latex extracted from rubber trees, providing unmatched elasticity, strength, and flexibility.",
    colorName: "Light Yellow",
    colorCode: "#FDE68A",
    image: "/MaxfunVanila.png",
    variants: [
      { id: "mv-3", name: "3 Pack", packSize: 3, price: 200 }
    ]
  },
  {
    id: "shaad-gloves-nitrile",
    name: "Shaad Nitrile Examination Gloves (Powder Free)",
    type: "Gloves",
    description: "Made from 100% synthetic nitrile rubber. Latex-free & powder-free (ideal for sensitive users). High resistance to punctures, chemicals, and tears. Excellent fit and flexibility for extended use with textured fingertips for enhanced grip. Ambidextrous design. Single-use disposable. Non-sterile.",
    colorName: "Blue / Black",
    colorCode: "#1e293b",
    image: "/Shaadgloves1.png",
    variants: [
      { id: "sgn-s", name: "Size S (100 pcs)", packSize: 100, price: 1250 },
      { id: "sgn-m", name: "Size M (100 pcs)", packSize: 100, price: 1250 },
      { id: "sgn-l", name: "Size L (100 pcs)", packSize: 100, price: 1250 },
      { id: "sgn-xl", name: "Size XL (100 pcs)", packSize: 100, price: 1250 }
    ]
  },
  {
    id: "shaad-gloves-latex-powdered",
    name: "Shaad Latex Examination Gloves (Powdered)",
    type: "Gloves",
    description: "Made from premium natural rubber latex. Lightly powdered for easy donning. Excellent fit and flexibility for extended use. High resistance to tears. Ambidextrous design. Single-use disposable. Non-sterile.",
    colorName: "White",
    colorCode: "#FFFFFF",
    image: "/Shaadgloves2.png",
    variants: [
      { id: "sglp-s", name: "Size S (100 pcs)", packSize: 100, price: 950 },
      { id: "sglp-m", name: "Size M (100 pcs)", packSize: 100, price: 950 },
      { id: "sglp-l", name: "Size L (100 pcs)", packSize: 100, price: 950 },
      { id: "sglp-xl", name: "Size XL (100 pcs)", packSize: 100, price: 950 }
    ]
  },
  {
    id: "shaad-gloves-latex-powder-free",
    name: "Shaad Latex Examination Gloves (Powder Free)",
    type: "Gloves",
    description: "Made from premium natural rubber latex. Powder-free to reduce the risk of contamination and allergies. Excellent fit and flexibility for extended use. High resistance to tears. Ambidextrous design. Single-use disposable. Non-sterile.",
    colorName: "White",
    colorCode: "#FFFFFF",
    image: "/Shaadgloves2.png",
    variants: [
      { id: "sglpf-s", name: "Size S (100 pcs)", packSize: 100, price: 1100 },
      { id: "sglpf-m", name: "Size M (100 pcs)", packSize: 100, price: 1100 },
      { id: "sglpf-l", name: "Size L (100 pcs)", packSize: 100, price: 1100 },
      { id: "sglpf-xl", name: "Size XL (100 pcs)", packSize: 100, price: 1100 }
    ]
  }
];
