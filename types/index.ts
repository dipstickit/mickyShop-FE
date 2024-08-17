export type CategoryType = {
  id: number;
  name?: string;
  image?: string;
  slug?: string;
  description?: string;
  isActive?: boolean;
};

export type AttributeValues = {
  id: number;
  value: string;
  attributes: {
    id: number;
    name: string;
  };
};
export type AttributeType = {
  id: number;
  name: string;
  attributeValues: AttributeValues[];
};

export type AttributeValueType = {
  id: number;
  value: string;
  attribute: {
    id: number;
    value: string;
  };
};
export type ImageType = {
  id?: number;
  publicId: string;
  url: string;
};
export type VariantType = {
  id: number;
  price: number;
  quantity: number;
  attributeValues: AttributeValueType[];
  product?: ProductType;
};
export type ProductType = {
  id: number;
  name: string;
  slug: string;
  description: string;
  isActive: boolean;
  isNew: boolean;
  isPopular: boolean;
  category: {
    id: number;
    name: string;
    slug: string;
    image: string;
  };
  images: ImageType[];
  variants: VariantType[];
};

export type ProductPaginateType = {
  items: ProductType[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
  links: {
    first: string;
    previous: string;
    next: string;
    last: string;
  };
};

export type CartItemType = {
  userId?: number;
  variantId: number;
  quantity: number;
};

export type CityType = {
  Id: string;
  Name: string;
  Districts: DistrictType[];
};

export type DistrictType = {
  Id: string;
  Name: string;
  Wards: WardType[];
};

export type WardType = {
  Id: string;
  Name: string;
};

export type UserType = {
  id: number;
  fullName: string;
  phone: string;
  address: string;
  username: string;
  roles: string[];
  createdDate: string;
  updatedDate: string;
};

export type UserPaginateType = {
  items: UserType[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
  links: {
    first: string;
    previous: string;
    next: string;
    last: string;
  };
};

export type OrderItemType = {
  id: number;
  orderId: number;
  variantId: number;
  orderedPrice: number;
  orderedQuantity: number;
  variant: VariantType;
};

export type OrderType = {
  id: number;
  totalPrice: number;
  fullName: string;
  address: string;
  phone: number;
  shippingCost: number;
  orderStatus: string;
  paymentMethod: string;
  isPaid: boolean;
  paidDate: string;
  note: string;
  createdDate: string;
  updatedDate: string;
  user: UserType;
  orderItems: OrderItemType[];
};

export type OrderPaginateType = {
  items: OrderType[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
  links: {
    first: string;
    previous: string;
    next: string;
    last: string;
  };
};

export type ArticleType = {
  publishedAt: string;
  slug: string;
  title: string;
  bannerImage: {
    url: string;
  };
  content: {
    json: {
      children: any;
    };
  };
  createdBy: {
    name: string;
    picture: string;
  };
};

export type FormValues = {
  fullName: string;
  phone: number;
  city: {
    value: number;
    label: string;
  };
  district: {
    value: number;
    label: string;
  };
  ward: {
    value: number;
    label: string;
  };
  address: string;
  note: string;
  paymentMethod: string;
  totalPrice: number;
};
