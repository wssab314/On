"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { Product, products } from "@/data/store";

export type BagLine = {
  id: string;
  productSlug: string;
  size: string;
  color: string;
  quantity: number;
};

export type Address = {
  id: string;
  label: string;
  recipient: string;
  line1: string;
  line2?: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
  isDefault: boolean;
};

export type PaymentMethod = {
  id: string;
  label: string;
  detail: string;
  type: "card" | "apple-pay" | "klarna";
  isDefault: boolean;
};

export type OrderItem = {
  productSlug: string;
  quantity: number;
  size: string;
  color: string;
  price: number;
};

export type Order = {
  id: string;
  placedAt: string;
  total: number;
  status: "Processing" | "Completed";
  shippingSpeed: string;
  addressId: string;
  paymentMethodId: string;
  items: OrderItem[];
  giftCardCode?: string;
};

export type GiftCard = {
  code: string;
  amount: number;
};

type StoreContextValue = {
  bagLines: BagLine[];
  bagItems: (BagLine & { product: Product })[];
  bagCount: number;
  bagSubtotal: number;
  favorites: string[];
  addresses: Address[];
  paymentMethods: PaymentMethod[];
  orders: Order[];
  giftCard: GiftCard | null;
  defaultAddressId: string | null;
  defaultPaymentMethodId: string | null;
  addToBag: (product: Product, options: { size: string; color: string }) => void;
  updateBagQuantity: (lineId: string, quantity: number) => void;
  removeFromBag: (lineId: string) => void;
  toggleFavorite: (slug: string) => void;
  applyGiftCard: (code: string) => { success: boolean; message: string };
  removeGiftCard: () => void;
  addAddress: (
    address: Omit<Address, "id" | "isDefault"> & { isDefault?: boolean }
  ) => { success: boolean; message: string; id: string };
  setDefaultAddress: (id: string) => void;
  placeOrder: (params: {
    addressId: string;
    paymentMethodId: string;
    shippingSpeed: string;
  }) => { success: boolean; message: string; orderId?: string };
};

const defaultAddresses: Address[] = [
  {
    id: "addr-home",
    label: "Home",
    recipient: "Alex Fischer",
    line1: "Badenerstrasse 55",
    city: "Zurich",
    postalCode: "8004",
    country: "Switzerland",
    phone: "+41 78 555 21 11",
    isDefault: true,
  },
  {
    id: "addr-office",
    label: "Studio",
    recipient: "Alex Fischer",
    line1: "Hardturmstrasse 181",
    line2: "On Lab, Floor 4",
    city: "Zurich",
    postalCode: "8005",
    country: "Switzerland",
    phone: "+41 78 555 21 11",
    isDefault: false,
  },
];

const defaultPaymentMethods: PaymentMethod[] = [
  {
    id: "card-visa",
    label: "Visa •••• 4218",
    detail: "Expires 04/28",
    type: "card",
    isDefault: true,
  },
  {
    id: "apple-pay",
    label: "Apple Pay",
    detail: "Face ID enabled",
    type: "apple-pay",
    isDefault: false,
  },
  {
    id: "klarna",
    label: "Klarna",
    detail: "Pay in 4",
    type: "klarna",
    isDefault: false,
  },
];

const defaultOrders: Order[] = [
  {
    id: "ON-10853",
    placedAt: "2024-04-18",
    total: 289.9,
    status: "Completed",
    shippingSpeed: "Express",
    addressId: "addr-home",
    paymentMethodId: "card-visa",
    items: [
      {
        productSlug: "cloudmonster-2",
        quantity: 1,
        size: "EU 42",
        color: "Eclipse / Black",
        price: 189.95,
      },
      {
        productSlug: "performance-tee",
        quantity: 1,
        size: "M",
        color: "Night / Lunar",
        price: 99.95,
      },
    ],
  },
];

const giftCardCatalog: Record<string, number> = {
  ONRUN25: 25,
  CLOUDSURFER: 40,
  MEMBER10: 10,
};

const StoreContext = createContext<StoreContextValue | undefined>(undefined);

function resolveProduct(slug: string): Product {
  const product = products.find((item) => item.slug === slug);
  if (!product) {
    throw new Error(`Product with slug ${slug} not found`);
  }
  return product;
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [bagLines, setBagLines] = useState<BagLine[]>([]);
  const [favorites, setFavorites] = useState<string[]>(["cloudboom-echo-4"]);
  const [addresses, setAddresses] = useState<Address[]>(defaultAddresses);
  const [paymentMethods] = useState<PaymentMethod[]>(defaultPaymentMethods);
  const [orders, setOrders] = useState<Order[]>(defaultOrders);
  const [giftCard, setGiftCard] = useState<GiftCard | null>(null);

  const defaultAddressId = useMemo(() => addresses.find((address) => address.isDefault)?.id ?? null, [addresses]);
  const defaultPaymentMethodId = useMemo(
    () => paymentMethods.find((method) => method.isDefault)?.id ?? null,
    [paymentMethods]
  );

  const bagItems = useMemo(
    () =>
      bagLines.map((line) => ({
        ...line,
        product: resolveProduct(line.productSlug),
      })),
    [bagLines]
  );

  const bagSubtotal = useMemo(
    () => bagItems.reduce((total, line) => total + line.product.price * line.quantity, 0),
    [bagItems]
  );

  const bagCount = useMemo(() => bagLines.reduce((total, line) => total + line.quantity, 0), [bagLines]);

  const addToBag = useCallback((product: Product, options: { size: string; color: string }) => {
    if (!options.size || !options.color) {
      return;
    }
    const id = `${product.slug}-${options.size}-${options.color}`;
    setBagLines((current) => {
      const existing = current.find((line) => line.id === id);
      if (existing) {
        return current.map((line) =>
          line.id === id ? { ...line, quantity: line.quantity + 1 } : line
        );
      }
      return [
        ...current,
        {
          id,
          productSlug: product.slug,
          size: options.size,
          color: options.color,
          quantity: 1,
        },
      ];
    });
  }, []);

  const updateBagQuantity = useCallback((lineId: string, quantity: number) => {
    setBagLines((current) => {
      if (quantity <= 0) {
        return current.filter((line) => line.id !== lineId);
      }
      return current.map((line) => (line.id === lineId ? { ...line, quantity } : line));
    });
  }, []);

  const removeFromBag = useCallback((lineId: string) => {
    setBagLines((current) => current.filter((line) => line.id !== lineId));
  }, []);

  const toggleFavorite = useCallback((slug: string) => {
    setFavorites((current) =>
      current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [...current, slug]
    );
  }, []);

  const applyGiftCard = useCallback((code: string) => {
    const normalized = code.trim().toUpperCase();
    const amount = giftCardCatalog[normalized];
    if (!amount) {
      return { success: false, message: "Gift card not recognised" };
    }
    setGiftCard({ code: normalized, amount });
    return { success: true, message: `Gift card applied: CHF ${amount.toFixed(2)}` };
  }, []);

  const removeGiftCard = useCallback(() => {
    setGiftCard(null);
  }, []);

  const addAddress = useCallback(
    (address: Omit<Address, "id" | "isDefault"> & { isDefault?: boolean }) => {
      const id = `addr-${Math.random().toString(36).slice(2, 8)}`;
      setAddresses((current) => {
        const next = current.map((item) =>
          address.isDefault ? { ...item, isDefault: false } : item
        );
        return [
          ...next,
          {
            id,
            label: address.label,
            recipient: address.recipient,
            line1: address.line1,
            line2: address.line2,
            city: address.city,
            postalCode: address.postalCode,
            country: address.country,
            phone: address.phone,
            isDefault: Boolean(address.isDefault),
          },
        ];
      });
      return { success: true, message: "Address saved", id };
    },
    []
  );

  const setDefaultAddress = useCallback((id: string) => {
    setAddresses((current) =>
      current.map((address) => ({ ...address, isDefault: address.id === id }))
    );
  }, []);

  const placeOrder = useCallback(
    ({ addressId, paymentMethodId, shippingSpeed }: {
      addressId: string;
      paymentMethodId: string;
      shippingSpeed: string;
    }) => {
      if (!bagLines.length) {
        return { success: false, message: "Your bag is empty" };
      }
      const addressExists = addresses.some((address) => address.id === addressId);
      const paymentExists = paymentMethods.some((method) => method.id === paymentMethodId);
      if (!addressExists || !paymentExists) {
        return { success: false, message: "Select a valid address and payment method" };
      }

      const subtotal = bagItems.reduce((total, line) => total + line.product.price * line.quantity, 0);
      const discount = giftCard?.amount ?? 0;
      const total = Math.max(subtotal - discount, 0);
      const orderId = `ON-${Math.floor(10000 + Math.random() * 89999)}`;

      setOrders((current) => [
        {
          id: orderId,
          placedAt: new Date().toISOString().slice(0, 10),
          total: Number(total.toFixed(2)),
          status: "Processing",
          shippingSpeed,
          addressId,
          paymentMethodId,
          items: bagItems.map((line) => ({
            productSlug: line.productSlug,
            quantity: line.quantity,
            size: line.size,
            color: line.color,
            price: line.product.price,
          })),
          giftCardCode: giftCard?.code,
        },
        ...current,
      ]);

      setBagLines([]);
      setGiftCard(null);

      return { success: true, message: "Order placed successfully", orderId };
    },
    [addresses, bagItems, bagLines.length, giftCard?.amount, giftCard?.code, paymentMethods]
  );

  const value = useMemo(
    () => ({
      bagLines,
      bagItems,
      bagCount,
      bagSubtotal,
      favorites,
      addresses,
      paymentMethods,
      orders,
      giftCard,
      defaultAddressId,
      defaultPaymentMethodId,
      addToBag,
      updateBagQuantity,
      removeFromBag,
      toggleFavorite,
      applyGiftCard,
      removeGiftCard,
      addAddress,
      setDefaultAddress,
      placeOrder,
    }),
    [
      addAddress,
      addToBag,
      addresses,
      applyGiftCard,
      bagCount,
      bagItems,
      bagLines,
      bagSubtotal,
      defaultAddressId,
      defaultPaymentMethodId,
      favorites,
      giftCard,
      orders,
      paymentMethods,
      placeOrder,
      removeFromBag,
      removeGiftCard,
      setDefaultAddress,
      toggleFavorite,
      updateBagQuantity,
    ]
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}
