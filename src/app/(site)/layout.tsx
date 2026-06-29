import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { OrderProvider } from "@/context/OrderContext";
import { Header } from "@/layout/client/header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <CartProvider>
        <OrderProvider>
      <Header/>
          {children}
        </OrderProvider>
      </CartProvider>
    </AuthProvider>
  );
}