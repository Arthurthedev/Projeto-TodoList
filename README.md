# 📝 To-Do List Fullstack (React + API própria)

<img src="public/images/exemplo-ToDoList.gif" alt="exemplo de todolist">

## 📌 Sobre o Projeto

Este projeto é uma **lista de tarefas (To-Do List)** desenvolvida para praticar conceitos modernos de **React com TypeScript**, agora evoluído para um **projeto fullstack**, consumindo uma API própria.

O frontend foi integrado a uma API desenvolvida separadamente, permitindo persistência real dos dados em banco.

---

## Tecnologias utilizadas

### 🖥️ Frontend

* React + TypeScript → construção dos componentes e tipagem estática
* Context API → gerenciamento global do tema (dark/light)
* Custom Hook (`useTodo`) → centraliza a lógica da aplicação e integração com API
* Tailwind CSS → estilização rápida e responsiva
* Vite → bundler para desenvolvimento

### 🔧 Backend (API própria)

* Node.js + Express
* Prisma ORM
* PostgreSQL

📌 Repositório da API:
👉 https://github.com/seu-usuario/Quest-todo-s-api

---

## ⚙️ Funcionalidades

* ➕ Adicionar novas tarefas (persistidas no banco)
* ✅ Marcar e desmarcar tarefas como concluídas
* ❌ Deletar tarefas individualmente
* 🧹 Remover todas as tarefas concluídas
* 🔍 Filtrar por:

  * Todas
  * Ativas
  * Concluídas
* 🌙 Alternar entre tema claro e escuro

---

## 🧠 Arquitetura

O projeto segue uma arquitetura simples de aplicação fullstack:

Frontend (React)
↓
Fetch API
↓
Backend (Node + Express)
↓
Prisma
↓
Banco de Dados (PostgreSQL)

---

## 🎯 Objetivo

Este projeto foi construído para consolidar conceitos importantes como:

* Integração entre frontend e backend
* Consumo de APIs REST
* CRUD completo (Create, Read, Update, Delete)
* Organização de código com hooks e componentes
* Boas práticas com TypeScript

---

# 🔧  Como rodar o projeto

## 🔧 1. Clonar o repositório do frontend

```bash
git clone https://github.com/Arthurthedev/Projeto-TodoList
```

---

## 🔧 2. Clonar e rodar a API (OBRIGATÓRIO)

```bash
git clone https://github.com/Arthurthedev/Quest-Todo-s-API
cd Quest-todo-s-api
npm install
npm run dev
```

👉 A API deve estar rodando em:

```
http://localhost:3000
```

---

## 🔧 3. Rodar o frontend

```bash
npm install
npm run dev
```

---

## 🌐 4. Acessar no navegador

```
http://localhost:5173
```

---

## ⚠️ Observação importante

O frontend depende da API para funcionar corretamente.
Sem a API rodando, não será possível:

* Criar tarefas
* Deletar tarefas
* Atualizar status

---

##  Status do Projeto

✅ CRUD completo funcionando
✅ Integração frontend + backend
✅ Persistência em banco de dados

