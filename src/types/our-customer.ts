export interface Customer {
    id: number;
    imageSrc: string;
    alt: string; // Added alt property

  }
  export interface OurCustomerSection {
    sectionTitle: string;
    customer: Customer[];
  }
  
  export const customersData: OurCustomerSection = {
    sectionTitle: "Our Customers",
    customer: [

      {
        id: 1,
        imageSrc: "https://magic-rainbow-app-01.s3.eu-west-1.amazonaws.com/external+logos/jp%26m.jpg",
        alt: "JPM Logo", 
        
      },
      {
        id: 2,
        imageSrc: "https://magic-rainbow-app-01.s3.eu-west-1.amazonaws.com/external+logos/tm_blinds_limited_logo.jpeg",
        alt: "TM Blinds Limited Logo", 
      },
      {
        id: 3,
        imageSrc: "https://magic-rainbow-app-01.s3.eu-west-1.amazonaws.com/external+logos/HEATWAVE-EXTENSIONS-LOGO.webp",
        alt: "Heatwave Extensions Logo", 
      },
      {
        id: 4,
        imageSrc: "https://magic-rainbow-app-01.s3.eu-west-1.amazonaws.com/external+logos/m%26k.png",
        alt: "M&K Logo", 
      },
      {
        id: 5,
        imageSrc: "https://magic-rainbow-app-01.s3.eu-west-1.amazonaws.com/external+logos/life-pharmacy.png",
        alt: "Life Pharmacy Logo", 
      },
    ]
  }
