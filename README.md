

# Reservation API

<center><img src="./docs/logo.png" /></center>

Api para registro de reservas em geral. 

*Por se tratar de um projeto simples, algumas configurações também são simples ao que se refere a segurança. Sendo que em um ambiente real de produção, deveria-se optar por soluções mais robustas quanto a segurança.* 

<h3 align="center"> 
	🚧  Reservation API 🚀 Em construção...  🚧
</h3>

## Conteúdo 

- [Features](#requisitos)
- [Requisitos](#requisitos)
- [Banco de dados](#banco-de-dados)
- [Iniciar API localmente](#iniciar-api-localmente)
- [Testes](#testes)
- [Documentação](#documentação)
- [Autor](#autor)

<br>


## Features

- [x] Cadastro de cliente
- [x] Listagem de cliente
- [x] Cadastro de produto
- [ ] Edição de produto
- [ ] Cadastro de reserva
- [ ] Edição de reserva
- [ ] Listagem de reserva

<br>

## Requisitos 

Deve ter instalado em um computador as versões minimas abaixo:

> Node Js 12 

> Npm 6

> Docker 19

> Docker Compose 3.8

<br>

## Banco de dados

Para banco de dados, será utilizado o **Postgres** 

A bilbioteca para acesso ao banco é o [**Knex**](https://npmjs.org/package/knex).

As configurações do banco de dados ficam no arquivo *knexfile.js*

* *em um ambinte de produção as configurações do banco de dados deveria vir de um local mais seguro.*

<br>

## Iniciar API localmente

### Como um servidor local
Para rodar como um servidor local, é utilizado o docker-compose que irá criar as imagens docker e iniciará a seguinte estrutura : 

- db: Banco de dados Postgres
- nginx: Api Gateway para aplicação
- reservation: API de reservas

O comando abaixo irá rodar o docker-compose, além de rodar as migrations e seed: 

```
$ npm run server
```

> Url Local [http://localhost:3000](http://localhost:3000)

Para teste local, foi adicionado o nginx para adicionar uma camada de autenticação simples nas rotas */admin* com as seguintes credenciais : 

> Acesso Admin : 

> user: admin

> password: 54321

* *Em um ambiente de produção, deveria-se utilizar uma forma de autenticação mais robusta. (Ex: JWT, Oauth)*

### Como uma aplicação local
Para rodar como uma aplicaçao local, é utilizado o docker-compose que iniciará o Postgres : 
- db: Banco de dados Postgres

O comando abaixo irá rodar o docker-compose, além de rodar as migrations e seed: 

```
$ npm run local
```

> Url Local [http://localhost:3001](http://localhost:3001)

<br>

## Testes

Testes rodam utilizando a biblioteca [Mocha](https://www.npmjs.com/package/mocha).

### Estrutura
Os testes estão estruturados em duas partes: 
- Testes Unitário (tests/unit)
- Teste de Integração (tests/integration)

### Rodando testes
Para rodar os testes utilize o comando abaixo :

```
$ npm test
```

### Rodando cobertura de testes
Para rodar a cobertura de testes utilize o comando abaixo :

```
$ npm run coverage
```

<br>

## Documentação

### Documentação online

Documentação online da Reservation API [aqui](https://anderolimar.github.io/docs/)

### Documentação swagger para teste
Documentação da API em swagger [http://localhost:3000/docs](http://localhost:3000/docs).
* *necessário que a api estaja rodando [localmente](#iniciar-api-localmente)* 

<br>

## Issues

[Débito Técnico : Cadastro de Produtos](https://github.com/anderolimar/reservation-api/issues/1)

<br>

## Autor


<br>

 <img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/8864029?s=60&u=f1a66e43c0778b6148e77ad47c659482ceaaa5e5&v=4" width="100px;" alt=""/>

<br> 
 
 #### Anderson Oliveira

<br>

 [![Linkedin Badge](https://img.shields.io/badge/-Anderson-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/andersonoliveiramartins/)](https://www.linkedin.com/in/andersonoliveiramartins/) 
[![Gmail Badge](https://img.shields.io/badge/-anderolimar@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:anderolimar@gmail.com)](mailto:anderolimar@gmail.com)