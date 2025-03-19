export type User = {
  _id: string;
  email: string;
  name: string;
  addressLine1: string;
  phone: string; // da sua
  idCard: string; // da sua
};

export type MenuItem = {
  _id: string;
  name: string;
  price: number;
};

export type Restaurant = {
  _id: string;
  user: string;
  restaurantName: string;
  city: string;
  country: string;
  deliveryPrice: number;
  estimatedDeliveryTime: number;
  cuisines: string[];
  menuItems: MenuItem[];
  imageUrl: string;
  lastUpdated: string;
};

export type OrderStatus =
  | "placed"
  | "paid"
  | "inProgress"
  | "outForDelivery"
  | "delivered";

export type Order = {
  _id: string;
  restaurant: Restaurant;
  user: User;
  cartItems: {
    menuItemId: string;
    name: string;
    quantity: string;
  }[];
  deliveryDetails: {
    name: string;
    addressLine1: string;
    phone: string;
    email: string;
  };
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
  restaurantId: string;
};

export type RestaurantSearchResponse = {
  data: Restaurant[];
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
};

export type Record = {
  _id: string;
  Study_ID: string;
  Patient_ID: string;
  Sample_ID: string;
  Diagnosis_Age: number;
  American_Joint_Committee_on_Cancer_Publication_Version_Type?: string;
  Biopsy_Site?: string;
  Cancer_Type: string;
  Cancer_Type_Detailed?: string;
  Disease_Free_Months?: string;
  Disease_Free_Status?: string;
  Disease_Type?: string;
  Ethnicity_Category?: string;
  Fraction_Genome_Altered?: number;
  ICD_10_Classification?: string;
  Is_FFPE?: string;
  Morphology?: string;
  Mutation_Count?: number;
  Oncotree_Code?: string;
  Overall_Survival_Months?: number;
  Overall_Survival_Status?: string;
  Other_Patient_ID?: string;
  Other_Sample_ID?: string;
  AJCC_Pathologic_M_Stage?: string;
  AJCC_Pathologic_N_Stage?: string;
  AJCC_Pathologic_Stage?: string;
  AJCC_Pathologic_T_Stage?: string;
  Primary_Diagnosis?: string;
  Patient_Primary_Tumor_Site?: string;
  Prior_Malignancy?: boolean;
  Prior_Treatment?: boolean;
  Project_Identifier?: string;
  Project_Name?: string;
  Project_State?: string;
  Race_Category?: string;
  Number_of_Samples_Per_Patient?: number;
  Sample_Type?: string;
  Sex?: string;
  Years_Smoked?: string;
  Person_Cigarette_Smoking_History_Pack_Year_Value?: number;
  Patients_Vital_Status?: string;
  Year_of_Death?: string;
  Year_of_Diagnosis?: number;
};

