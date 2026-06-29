import { Suspense } from "react";
import CardapioClient from "./cardapioClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Carregando cardápio...</div>}>
      <CardapioClient />
    </Suspense>
  );
}