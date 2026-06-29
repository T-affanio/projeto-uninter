🌵 Raízes do Nordeste - Sistema de gestão para expansões

🚀 Visão Geral

O sistema foi desenvolvido para facilitar a operação do restaurante, oferecendo:

📱 Cardápio digital completo
🛒 Carrinho de compras
💳 Checkout com múltiplos pagamentos
👤 Autenticação de clientes
🧾 Histórico de pedidos
🛠️ Painel administrativo completo
📦 Controle de estoque e produtos
🎟️ Sistema de promoções e cupons
🏪 Gestão de unidades/restaurantes
👤 Área do Cliente (Site)

O cliente pode navegar, escolher produtos e finalizar pedidos de forma simples e rápida.

🔐 Autenticação
Cadastro de usuário
Login no sistema
Histórico de pedidos por usuário
🍽️ Cardápio
Visualização de produtos por categoria
Listagem de itens disponíveis
Detalhes do produto

📍 Rota:

/cardapio
🏪 Restaurantes / Unidades
Seleção da unidade
Visualização de informações da loja

📍 Rota:

/restaurantes
🛒 Carrinho
Adicionar/remover produtos
Ajuste de quantidade
Cálculo automático do total

📍 Rota:

/cart
💳 Checkout
Confirmação do pedido
Escolha de pagamento:
Pix
Cartão de crédito
Débito
Dinheiro (se disponível)

📍 Rota:

/checkout
📦 Pedidos
Visualizar pedidos realizados
Acompanhar status:
Pendente
Em preparo
Enviado
Finalizado
Cancelado

📍 Rota:

/pedidos
🎟️ Promoções
Visualizar promoções ativas
Aplicação de cupons no checkout

📍 Rota:

/promos
🍔 Produto
Página detalhada do produto
Informações completas e preço

📍 Rota:

/produto
🛠️ Área Administrativa (Admin Panel)

Painel interno para gestão completa do restaurante.

📦 Produtos
Cadastro e edição de produtos
Preço, descrição e imagens
Organização por categoria

📍 Rota:

/admin/produtos
📦 Estoque
Controle de quantidade disponível
Alertas de estoque baixo
Atualização automática via pedidos

📍 Rota:

/admin/estoque
🧾 Pedidos
Lista de todos os pedidos
Atualização de status em tempo real
Detalhes completos do cliente

📍 Rota:

/admin/pedidos
🎟️ Promoções
Criar e gerenciar cupons
Definir descontos (% ou valor fixo)
Limite de uso e validade

📍 Rota:

/admin/promos
🏪 Unidades
Gerenciamento das lojas/restaurantes
Configurações por unidade

📍 Rota:

/admin/unidades
⚙️ Estrutura do Projeto (Next.js App Router)
app/
 ├── (admin)/
 │    ├── estoque/
 │    ├── pedidos/
 │    ├── produtos/
 │    ├── promos/
 │    └── unidades/
 │
 ├── (site)/
 │    ├── cardapio/
 │    ├── cart/
 │    ├── checkout/
 │    ├── pedidos/
 │    ├── produto/
 │    ├── promos/
 │    └── restaurantes/
💳 Pagamentos
Pix (instantâneo)
Cartão de crédito
Cartão de débito
Dinheiro (opcional por unidade)
🎯 Objetivo do Sistema

O Raízes do Nordeste foi desenvolvido para:

Digitalizar o processo de pedidos do restaurante
Reduzir filas e tempo de atendimento
Centralizar gestão de produtos e pedidos
Melhorar experiência do cliente
Aumentar eficiência operacional