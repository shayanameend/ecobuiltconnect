export interface IUser {
  _id: string;

  avatar: string;
  name: string;
  email: string;
  phone: string;
  role: string;

  addresses: IAddress[];

  createdAt: string;
  updatedAt: string;
}

export interface IAddress {
  _id: string;

  country: string;
  city: string;
  address: string;
  zip: string;
  type: string;

  createdAt: string;
  updatedAt: string;
}

export interface IShop {
  _id: string;

  avatar: string;
  name: string;
  email: string;
  description: string;
  phone: string;
  role: string;

  address: IAddress;

  createdAt: string;
  updatedAt: string;
}

export interface IProduct {
  _id: string;

  images: string[];
  name: string;
  description: string;
  category: string;
  price: number;
  salePrice?: number | null;
  stock: number;

  shopId: string;

  createdAt: string;
  updatedAt: string;
}

export interface IEvent {
  _id: string;

  images: string[];
  name: string;
  description: string;
  status: string;
  startDate: string;
  endDate: string;

  shopId: string;

  createdAt: string;
  updatedAt: string;
}

export interface ICartItem extends IProduct {
  qty: number;
}

export interface IOrderItem {
  _id: string;

  price: number;
  qty: number;

  product: IProduct;
}

export interface IOrder {
  _id: string;

  totalPrice: number;
  status: string;

  userId: string;
  shopId: string;
  items: IOrderItem[];
  shippingAddress: IAddress;

  createdAt: string;
  updatedAt?: string;
}

export interface IUserState {
  isLoading: boolean;
  user?: IUser | null;
  users: IUser[];
  error?: string | null;
}

export interface IShopState {
  isLoading: boolean;
  shop?: IShop | null;
  shops: IShop[];
  error?: string | null;
}

export interface IProductState {
  isLoading: boolean;
  product?: IProduct | null;
  products: IProduct[];
  error?: string | null;
}

export interface IEventState {
  isLoading: boolean;
  event?: IEvent | null;
  events: IEvent[];
  error?: string | null;
}

export interface ICartState {
  cartItems: ICartItem[];
}

export interface IWishlistState {
  wishlistItems: IProduct[];
}

export interface IOrderState {
  isLoading: boolean;
  order?: IOrder | null;
  orders: IOrder[];
  error?: string | null;
}

export interface RootState {
  user: IUserState;
  shop: IShopState;
  product: IProductState;
  event: IEventState;
  cart: ICartState;
  wishlist: IWishlistState;
  order: IOrderState;
}
