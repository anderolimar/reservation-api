# Reservation API

Api para registro de reservas em geral. 

*Por se tratar de um projeto simples, algumas configurações também são simples ao que se refere a segurança. Sendo que em um ambiente real de produção, deveria-se optar por soluções mais robustas quanto a segurança.* 

## Requisitos 

Versões minimas :

> Node Js 12 

> Npm 6

> Docker 19

> Docker Compose 3.8

## Banco de dados

Para banco de dados, será utilizado o **Postgres** 

A bilbioteca para acesso ao banco é o [**Knex**](https://npmjs.org/package/knex).

As configurações do banco de dados ficam no arquivo *knexfile.js*

* *em um ambinte de produção as configurações do banco de dados deveria vir de um local mais seguro.*

## Iniciar API localmente

### Docker Compose
Para rodar localmente, é utilizado o docker-compose que iniciará a seguinte estrutura : 
- db: Banco de dados Postgres
- nginx: Api Gateway para aplicação
- reservation: API de reservas

O comando abaixo irá rodar o docker-compose, além de rodar as migrations e seed: 

```
$ npm run local
```

### Url Local
A aplicação estará disponivel em [http://localhost:3000](http://localhost:3000)

### Acesso Admin
Para teste local, foi adicionado o nginx para adicionar uma camada de autenticação simples nas rotas */admin* com as seguintes credenciais : 

> user: admin

> password: 54321

* *Em um ambiente de produção, deveria-se utilizar uma forma de autenticação mais robusta. (Ex: JWT, Oauth)*

## Testes

Testes rodam utilizando a biblioteca [Mocha](https://www.npmjs.com/package/mocha).

Para rodar os testes utilize o comando abaixo :

```
$ npm test
```

## Documentação

### Documentação online

Documentação online da Reservation API [aqui](https://anderolimar.github.io/docs/)

### Documentação swagger para teste
Documentação da API em swagger [http://localhost:3000/docs](http://localhost:3000/docs).
* *necessário que a api estaja rodando [localmente](#iniciar-localmente)* 


