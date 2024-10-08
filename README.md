
# 📦 API de Cadastro de Produtos

Esta é uma API desenvolvida em Node.js com TypeScript para gerenciar o cadastro de produtos. A API utiliza o Prisma como ORM para interagir com um banco de dados MongoDB, permitindo um CRUD eficiente e organizado. A estrutura do projeto é baseada na arquitetura MVC (Model-View-Controller), seguindo as melhores práticas de Clean Code.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipagem estática.
- **Express**: Framework web para Node.js.
- **Prisma**: ORM para interagir com o MongoDB.
- **MongoDB Atlas**: Serviço de banco de dados na nuvem.
- **dotenv**: Para gerenciar variáveis de ambiente.

## 📂 Estrutura do Projeto

```plaintext
src
├── controllers      # Controladores que gerenciam as requisições e respostas
├── middlewares      # Middlewares para tratamento de erros e autenticação
├── routes           # Definição das rotas da API
├── services         # Lógica de negócios da aplicação
├── prisma           # Configuração do Prisma e geração do cliente
└── server.ts        # Arquivo principal que inicia a aplicação
```

## 🔌 Funcionalidades da API

### CRUD de Produtos

- **Criar Produto**: Adiciona um novo produto ao banco de dados.
- **Ler Produtos**: Retorna a lista de produtos cadastrados.
- **Ler Produto por ID**: Retorna um produto específico pelo ID.
- **Atualizar Produto**: Atualiza os detalhes de um produto existente.
- **Excluir Produto**: Remove um produto do banco de dados.

### Estrutura do Produto

A tabela `Produto` possui os seguintes campos:

- `id`: string (identificador único do produto)
- `nome`: string (nome do produto)
- `fornecedor`: string (fornecedor do produto)
- `categoria`: number (categoria do produto)
- `subcategoria`: number (subcategoria do produto)
- `preco`: float (preço do produto)
- `promocao`: boolean (indica se o produto está em promoção)
- `bucket`: string (URL da imagem do produto, futura implementação com S3)
- `created_at`: datetime (data de criação)
- `updated_at`: datetime (data da última atualização)

## ⚙️ Middlewares

A API inclui middlewares para tratamento de erros, que garantem que os erros sejam manipulados de forma centralizada, melhorando a manutenção e a legibilidade do código.

## 📦 Futura Implementação

- **Integração com Amazon S3**: Futuramente, a API será ampliada para incluir o upload de imagens de produtos para o Amazon S3. Isso permitirá que as imagens sejam armazenadas de forma segura e acessível.

## 🏁 Como Rodar o Projeto Localmente

Siga os passos abaixo para configurar e rodar a API em sua máquina:

1. **Clone o repositório**:
   ```bash
   git clone <URL do repositório>
   cd <nome do diretório>
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Crie um arquivo `.env`** na raiz do projeto com as seguintes variáveis:
   ```plaintext
   DATABASE_URL="mongodb+srv://<usuário>:<senha>@<cluster>.mongodb.net/<nome-do-banco>?retryWrites=true&w=majority"
   PORT=3000
   ```
   - Substitua `<usuário>`, `<senha>`, `<cluster>` e `<nome-do-banco>` com suas credenciais do MongoDB Atlas.

4. **Inicie a aplicação**:
   ```bash
   npm run dev
   ```

5. **Teste a API** usando ferramentas como Postman ou Insomnia, acessando `http://localhost:3000/produtos`.

## ✨ Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
