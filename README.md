# NLW Agents

Projeto desenvolvido durante o evento **NLW da Rocketseat**, demonstrando o uso de **agentes inteligentes** integrados à web. A aplicação conta com um **frontend moderno em React** e um **backend performático com Node.js**, utilizando tecnologias de ponta para construção de interfaces e APIs escaláveis.

---

## 🚀 Tecnologias

### Frontend (Web)
- **React 19.1** – Biblioteca para construção de interfaces
- **TypeScript 5.8** – Superset do JavaScript com tipagem estática
- **Vite 7.0** – Ferramenta de build e servidor de desenvolvimento
- **TailwindCSS 4.1** – Framework CSS utility-first
- **React Router Dom 7.6** – Roteamento de páginas
- **TanStack React Query 5.8** – Gerenciamento de estado do servidor e cache
- **Radix UI** – Componentes primitivos acessíveis
- **Shadcn/ui** – Sistema de componentes UI
- **Lucide React** – Biblioteca de ícones modernos

### Backend (API)
- **Node.js** com TypeScript nativo (`--experimental-strip-types`)
- **Fastify** – Framework web rápido e minimalista
- **PostgreSQL** com **pgvector** – Suporte a dados vetoriais
- **Drizzle ORM** – ORM type-safe
- **Zod** – Validação de dados e schemas
- **Docker** e **Docker Compose** – Containerização da aplicação
- **Biome** – Linter e formatador de código moderno

---

## 📂 Estrutura do Projeto

### Frontend

src/
<br>├── components/ui/ # Componentes reutilizáveis de interface 
<br>├── pages/ # Páginas da aplicação
<br>├── lib/ # Funções utilitárias e configurações
<br>└── app.tsx # Componente raiz da aplicação


### Backend

server/
<br>├── routes/ # Definição das rotas da API
<br>├── schemas/ # Schemas com validações usando Zod
<br>├── db/ # Conexão e migrações com Drizzle ORM
<br>├── env.ts # Validação centralizada de variáveis de ambiente
<br>└── server.ts # Arquivo principal do servidor Fastify


---

## ⚙️ Requisitos

- Node.js 18+
- Docker e Docker Compose
- npm ou yarn

---

## 🧩 Instalação e Execução

### 🔹 Backend (API)

1. Clone o repositório e acesse a pasta:
```bash
git clone <url-do-repositorio>
cd server
```
2. Suba o banco de dados com Docker:
```bash
docker-compose up -d
```
3. Crie um arquivo .env:
```bash
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
```
4. Instale as dependências:
```bash
npm install
```
5.Rode as migrações do banco:
```bash
npx drizzle-kit migrate
```
6. (Opcional) Popule com dados de exemplo:
```bash
npm run db:seed
```
7.Inicie o servidor:
```bash
npm run dev
# ou em produção:
npm start
```

### 🔹 Frontend (Web)

1. Em outra aba do terminal, acesse a pasta do frontend:
```bash
cd web
```
2. Instale as dependências:
```bash
npm install
```
3. Crie um arquivo .env:
```bash
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
```
4. Instale as dependências:
```bash
npm install
```
5.Rode as migrações do banco:
```bash
npx drizzle-kit migrate
```
6. (Opcional) Popule com dados de exemplo:
```bash
npm run db:seed
```
7.Inicie o servidor:
```bash
npm run dev
# ou em produção:
npm start
```
## 📚 Scripts Úteis

### 🔹 Frontend

- `npm run dev` – Inicia o ambiente de desenvolvimento
- `npm run build` – Gera build de produção
- `npm run preview` – Visualiza o build de produção localmente

### 🔹 Backend

- `npm run dev` – Executa o servidor com hot reload
- `npm start` – Executa o servidor em produção
- `npm run db:seed` – Popula o banco com dados iniciais

---

## 🌐 Endpoints da API

| Método | Rota     | Descrição                       |
|--------|----------|----------------------------------|
| GET    | /health  | Verifica o status da API         |
| GET    | /rooms   | Lista as salas disponíveis       |

---

## 🧠 Padrões e Boas Práticas

- **Component-based Architecture** – Organização modular por componentes
- **File-based Routing** – Roteamento baseado na estrutura de arquivos
- **Server State Management** – Sincronização eficiente de dados com React Query
- **Composition Pattern** – Composição com `<Slot />` via Radix UI
- **Variant-based Components** – Estilização com variantes usando `cva`
- **Path Aliasing** – Alias `@/` apontando para `src/`

---

## 💡 Conceitos em Destaque

- **APIs com foco em performance e validação robusta**
- **Integração com banco vetorial para inteligência artificial**
- **Arquitetura limpa e escalável**
- **Experiência moderna de UI/UX**


   




