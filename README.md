# Execução do projeto com Docker

Na raiz do projeto frontend executar os dois comandos:

```sh
$ docker build -t pedido-front .
$ docker run -p 8000:8000 -d pedido-front
```

Na raiz do projeto backend executar os dois comandos:

```sh
$ docker build -t lindomar/imagem-projeto .
$ docker-compose up
```

# Execução do projeto em ambiente de desenvolvimento

Banco de dados:
ter instalado o banco de dados mysql com um banco criado com nome "pedido";

Backend:
Necessário rodar com o maven com comando spring-boot:run

Frontend:
Ter instalado o nodejs;
Na raiz do projeto pedido-front executar o copamndo http-server -a localhost -p 8000;
Acessar o endereço http://localhost:8000
