// User related types
export interface IUser {
  _id: string;
  name: string;
  email: string;
  phoneNumber?: string;
  addresses?: IAddress[];
  role?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IAddress {
  _id?: string;
  country: string;
  city: string;
  address1: string;
  address2?: string;
  zipCode: string;
  addressType: string;
}

export interface IUserState {
  isAuthenticated: boolean;
  loading?: boolean;
  addressloading?: boolean;
  usersLoading?: boolean;
  user?: IUser;
  users?: IUser[];
  error?: string | null;
  successMessage?: string | null;
}

// Seller related types
export interface ISeller {
  _id: string;
  name: string;
  email: string;
  description?: string;
  address?: string;
  phoneNumber?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ISellerState {
  isLoading: boolean;
  isSeller?: boolean;
  seller?: ISeller;
  sellers?: ISeller[];
  error?: string | null;
}

// Product related types
export interface IProduct {
  _id: string;
  name: string;
  description: string;
  category: string;
  tags?: string[];
  originalPrice: number;
  discountPrice: number;
  stock: number;
  images: string[];
  shopId: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IProductState {
  isLoading: boolean;
  product?: IProduct;
  products?: IProduct[];
  allProducts?: IProduct[];
  success?: boolean;
  error?: string | null;
  message?: string;
}

// Event related types
export interface IEvent {
  _id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: string;
  images: string[];
  shopId: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IEventState {
  isLoading: boolean;
  event?: IEvent;
  events?: IEvent[];
  allEvents?: IEvent[];
  success?: boolean;
  error?: string | null;
  message?: string;
}

// Cart related types
export interface ICartItem extends IProduct {
  qty: number;
}

export interface ICartState {
  cart: ICartItem[];
}

// Wishlist related types
export interface IWishlistState {
  wishlist: IProduct[];
}

// Order related types
export interface IOrderItem {
  _id?: string;
  product: IProduct;
  qty: number;
  price: number;
}

export interface IOrder {
  _id: string;
  userId: string;
  shopId?: string;
  items: IOrderItem[];
  totalPrice: number;
  status: string;
  paymentInfo: {
    id: string;
    status: string;
    type: string;
  };
  shippingAddress: IAddress;
  createdAt: string;
  updatedAt?: string;
}

export interface IOrderState {
  isLoading: boolean;
  adminOrderLoading?: boolean;
  orders?: IOrder[];
  adminOrders?: IOrder[];
  error?: string | null;
}

// RootState type
export interface RootState {
  user: IUserState;
  seller: ISellerState;
  products: IProductState;
  events: IEventState;
  cart: ICartState;
  wishlist: IWishlistState;
  order: IOrderState;
}
