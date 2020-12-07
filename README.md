# Reservation API

Api para registro de reservas em geral. 

## Requisitos 

Versões minimas :

> Node Js 12 

> Npm 6

> Docker 19

> Docker Compose 3.8

## Banco de dados

Para banco de dados, será utilizado o **Postgres** 

A bilbioteca para acesso ao banco é o [**Knex**](https://npmjs.org/package/knex).

## Iniciar localmente

### Estrutura
Para rodar localmente, é utilizado o docker-compose que iniciará a seguinte estrutura : 
- db: Banco de dados Postgres
- nginx: Api Gateway para aplicação
- reservation: API de reservas

O comando abaixo irá rodar o docker-compose : 

```
$ npm run local
```

### Url Local
A aplicação estará disponivel em [http://localhost:3000](http://localhost:3000)

### Acesso Admin
Para teste local, foi adicionado o nginx para adicionar uma camada de autenticação simples nas rotas /admin com as seguintes credenciais : 

> user: admin

> password: 54321

*Em um ambiente de produção, deverá utilizar uma forma de autenticação mais robusta*

## Testes

Testes rodam utilizando a biblioteca [Mocha](https://www.npmjs.com/package/mocha).

Para rodar os testes utilize o comando abaixo :

```
$ npm test
```

## Documentação