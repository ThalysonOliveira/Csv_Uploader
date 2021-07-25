<p align="center">
  <a href="#tecnologia">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#pre-requisitos">Pre-requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#rotas">Rotas</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

<a id="tecnologia"></a>
## 🚀 Tecnologias

Esse projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [PostgresSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)

<a id="pre-requisitos"></a>
## :fire: **Pré-requisitos**

- [Node.js](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/)

<a id="como-usar"></a>
## :zap: Como usar

- Faça um clone desse repositório: `https://github.com/ThalysonOliveira/csv_uploader.git`
- Instale as dependências: `npm i`
- Configurando o banco para uso:
   - `No arquivo .env adicione suas permissões de banco no DATABASE_URL`
   - `npx prisma db push`
- Inicie a aplicação:
   - Rode o comando de inicialização: `npm run dev`

<a id="funcionalidades"></a>
## 🛠️ Funcionalidades

API desenvolvida em node, utilizando typescript para por em pratica os conceitos de stream e prisma
- Upload de arquivos csv, onde os dados são armazenados no banco de dados.

<a id="rotas"></a>
### ↪︎ Rotas
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=csv%20uploader&uri=https%3A%2F%2Fgithub.com%2FThalysonOliveira%2Fcsv_uploader%2Fblob%2Fmain%2Fcsv_uploader.json)
