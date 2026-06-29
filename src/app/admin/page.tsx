export default function DashboardPage() {
  return (
    <main className="space-y-6 p-4 md:p-6">
      <header>
        <h1 className="text-2xl font-bold md:text-3xl">Dashboard</h1>

        <p className="text-sm text-muted-foreground md:text-base">
          Visão geral da franquia.
        </p>
      </header>

      {/* KPIs */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card title="Receita Hoje" value="R$ 12.450" />
        <Card title="Pedidos Hoje" value="127" />
        <Card title="Ticket Médio" value="R$ 58,90" />
        <Card title="Lojas Ativas" value="5" />
      </section>

      {/* Financeiro + Pedidos */}
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <Box title="Financeiro">
          <Item label="Receita" value="R$ 12.450" />
          <Item label="Despesas" value="R$ 4.300" />
          <Item label="Lucro" value="R$ 8.150" />
        </Box>

        <Box title="Pedidos">
          <Item label="Em preparo" value="18" />
          <Item label="Prontos" value="7" />
          <Item label="Entrega" value="11" />
          <Item label="Cancelados" value="2" />
        </Box>
      </section>

      {/* Gestão */}
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Box title="Estoque">
          <Item label="Produtos críticos" value="4" />
          <Item label="Reposições" value="12" />
        </Box>

        <Box title="Cardápio">
          <Item label="Itens ativos" value="120" />
          <Item label="Itens pausados" value="8" />
          <Item label="Categorias" value="14" />
        </Box>

        <Box title="Promoções">
          <Item label="Ativas" value="5" />
          <Item label="Expiram hoje" value="2" />
        </Box>
      </section>

      {/* Lojas + Atividades */}
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <Box title="Lojas">
          <Item label="Centro" value="34 pedidos" />
          <Item label="Shopping" value="27 pedidos" />
          <Item label="Zona Sul" value="Fechada" />
        </Box>

        <Box title="Atividades Recentes">
          <Item label="09:31" value="Pedido #231 entregue" />
          <Item label="09:28" value="Produto pausado" />
          <Item label="09:10" value="Promoção criada" />
        </Box>
      </section>
    </main>
  );
}

type CardProps = {
  title: string;
  value: string;
};

function Card({ title, value }: CardProps) {
  return (
    <article className="rounded-xl border bg-background p-5 shadow-sm">
      <p className="text-sm text-muted-foreground">{title}</p>

      <h2 className="mt-2 text-2xl font-bold">{value}</h2>
    </article>
  );
}

type BoxProps = {
  title: string;
  children: React.ReactNode;
};

function Box({ title, children }: BoxProps) {
  return (
    <section className="rounded-xl border bg-background p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">{title}</h2>

      <div className="space-y-3">{children}</div>
    </section>
  );
}

type ItemProps = {
  label: string;
  value: string;
};

function Item({ label, value }: ItemProps) {
  return (
    <div className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0">
      <span className="text-sm text-muted-foreground">{label}</span>

      <span className="text-sm font-semibold">{value}</span>
    </div>
  );
}