# Definições do projeto

## **Estrutura do Projeto**

O projeto está estuturado da seguinte forma : 

|  Pasta | Descrição                                                                |
|--------|--------------------------------------------------------------------------|
|  /app  | Esta pasta contém todo o código referente a aplicação        |                             
|  /docs | Esta pasta contém arquivos de documentação |    
|  /migrations | Esta pasta contém scripts para gerar estrutura do banco de dados |    
|  /nginx | Esta pasta contém arquivos para gerar imagem docker no Nginx localmente |  
|  /seed | Esta pasta contém scripts para gerar dados de teste |  
|  /server | Esta pasta contém código referente ao servidor |  
|  /swagger | Esta pasta contém arquivos de documentação no formato swagger |  
|  /teste | Esta pasta contém arquivos de testes |  

<br>


## **Aplicação**

A aplicação esta estruturada da seguinte forma : 

### **Controllers** 

Responsáveis por tratar a requisição e repassar para a classe 'business' correspondente.

Na requisição, através de um middleware, é adicionado a propriedade *resources*, que contém recursos como os 'repositories'
na forma de Service Locator, tornando os serviços abstratos. Assim, evitando aclopamento entre classes.
<br>	

### **Business**

Classes responsáveis pela lógica de negócio.

As classes de *business*, recebem por parâmetro, uma instancia de *repository* e uma instancia de *logger*.
Dessa forma, utiliza-se o padrão de injeção de dependência, com o objetivo de evitar aclopamento e também auxiliar os testes.

Essa classe são responsáveis por:  
- receber a requisição do controller, 
- validar parâmetros e acesso, 
- requisitar dados ao repository e 
- retornar 	os dados correspondente, 
- tratar erros 
<br>
	
### **Repositories**

Classe responsáveis pela interação como banco de dados.

As classes business, recebem por parâmetro, uma instancia de DbClient, como forma de injeção de dependencia.
Essa estratégia facilita testes como os de interação, onde podemos testar o fluxo até a chamada ao banco de dados.	
<br>
	
### **Acesso ao banco de dados**
	
O Acesso ao banco de dados é feito pela biblioteca Knex.

A opção por utilizar ela foi devido a facilidade para criar queries condicionais em forma de código, além de já disponibilizar
sistema de migrations e configuração de credencais.
	
	