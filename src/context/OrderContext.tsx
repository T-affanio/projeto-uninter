"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { useAuth } from "./AuthContext";

export interface OrderItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: number;
  userEmail: string;
  date: string;
  payment: string;
  status: string;
  total: number;
  items: OrderItem[];
}

interface OrderContextType {
  orders: Order[];
  createOrder: (
    items: OrderItem[],
    total: number,
    payment: string
  ) => Order;
  getUserOrders: () => Order[];
  clearOrders: () => void;
}

const OrderContext = createContext({} as OrderContextType);

export function OrderProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { user } = useAuth();

  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("orders");

    if (saved) {
      setOrders(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );
  }, [orders]);

  function createOrder(
    items: OrderItem[],
    total: number,
    payment: string
  ) {
    if (!user) {
      throw new Error("Usuário não logado.");
    }

    const order: Order = {
      id: Math.floor(
        100000 + Math.random() * 900000
      ),
      userEmail: user.email,
      date: new Date().toLocaleString("pt-BR"),
      payment,
      status: "Pago",
      total,
      items,
    };

    setOrders((old) => [...old, order]);

    return order;
  }

  function getUserOrders() {
    if (!user) return [];

    return orders.filter(
      (order) => order.userEmail === user.email
    );
  }

  function clearOrders() {
    setOrders([]);
    localStorage.removeItem("orders");
  }

  return (
    <OrderContext.Provider
      value={{
        orders,
        createOrder,
        getUserOrders,
        clearOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  return useContext(OrderContext);
}