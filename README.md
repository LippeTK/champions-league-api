# 🏟️ Champions League API

API desenvolvida em **Node.js + TypeScript** para gerenciar jogadores de futebol e clubes, com operações completas de **CRUD**, com organização em camadas (controllers, services, repositories).

---

## 📌 Funcionalidades

- 🔍 Buscar todos os jogadores
- 🔍 Buscar jogador por ID
- ➕ Adicionar jogador
- ✏️ Atualizar estatísticas de um jogador
- ❌ Remover jogador
- 🏢 Listar clubes de futebol (dados via JSON externo)

---

## ⚙️ Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- File System (para leitura de clubes via JSON)

---

## 🧠 Estrutura do Projeto

```bash
.
├── app.ts                # Inicialização do Express
├── routes/               # Rotas de players e clubes
│   ├── playerRoutes.ts
│   └── clubsRoutes.ts
├── controllers/          # Controladores para lidar com requisições
│   ├── playersController.ts
│   └── clubsController.ts
├── services/             # Camada de serviços para regras de negócio
│   ├── playersService.ts
│   └── clubsService.ts
├── repositories/         # Simulação de banco de dados (in-memory e JSON)
│   ├── playersRepository.ts
│   └── clubsRepository.ts
├── models/               # Interfaces TypeScript
│   ├── playerModel.ts
│   ├── clubModel.ts
│   └── statisticsModel.ts
│   └── httpResponseModel.ts


├── data/
│   └── clubs.json        # Lista de clubes (mock)
└── utils/
    └── httpHelper.ts     # Helper para respostas HTTP padronizadas
```

---

## 🧪 Exemplo de requisições

### Buscar todos os jogadores
```http
GET /players
```

### Buscar jogador por ID
```http
GET /player/1
```

### Adicionar jogador
```http
POST /players
Content-Type: application/json

{
  "id": 21,
  "name": "Novo Jogador",
  "club": "Real Madrid",
  "nationality": "Espanha",
  "position": "Midfielder",
  "statistics": {
    "Overall": 85,
    "Pace": 78,
    "Shooting": 80,
    "Passing": 82,
    "Dribbling": 85,
    "Defending": 70,
    "Physical": 74
  }
}
```

### Atualizar estatísticas
```http
PATCH /player/1
Content-Type: application/json

{
  "Overall": 94,
  "Pace": 88,
  "Shooting": 96,
  "Passing": 93,
  "Dribbling": 95,
  "Defending": 40,
  "Physical": 70
}
```

---

## 🚀 Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   cd seu-repo
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o projeto:
   ```bash
   npm run start:dev
   ```

4. Acesse: `http://localhost:3333`

---

## ✅ Diferenciais do Projeto

- ✅ **Separação clara por camadas (controller, service, repository)**
- ✅ **Código limpo e legível**
- ✅ **Tratamento centralizado de respostas HTTP**
- ✅ **Mock de banco de dados em memória e leitura via JSON**
- ✅ Ideal para **testes de lógica**, **simulações de consumo de API** e **exercícios de front-end**.

---

## 👨‍💻 Autor

**Felipe Carvalho**  
Desenvolvedor FullStack apaixonado por tecnologia, em constante aprendizado.
---
