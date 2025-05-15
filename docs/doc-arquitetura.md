# Projeto Arquitetural

Documento construído a partido do **Modelo BSI - Doc 005 - Documento de Projeto Arquitetual do Software** que pode ser encontrado no
link:[Projeto Arquitetural](https://docs.google.com/document/d/1i80vPaInPi5lSpI7rk4QExnO86iEmrsHBfmYRy6RDSM/edit?usp=sharing)

## Descrição

O projeto seguirá o padrão de arquitetura cliente-servidor, utilizando REST api.

## Mecanismos

| Mecanismo de Análise | Mecanismo de Design       | Mecanismo de Implementação      |
| -------------------- | ------------------------- | ------------------------------- |
| Persistência         | Banco de dados relacional | PostgreSQL                      |
| Camada de Dados      | Mapeamento OR             | Prisma ORM                      |
| Frontend             | Interface Usuário         | Next.js, Typescript, CSS        |
| Backend              | REST                      | Node.js, Express.js, Typescript |
| Build                | Imagem Docker             | Docker e Dockerfile             |
| Deploy               | Container Docker          | Docker compose                  |

## Representação dos Mecanismos

```mermaid
graph TD

subgraph Frontend [Frontend - Next.js + TypeScript]
    UI[Usuário]
    App[Next.js App]
    Axios[Axios HTTP Client]
    UI --> App --> Axios
end

subgraph Backend [Backend - Node.js + Express]
    ExpressApp[Express App - REST API]
    Service[Serviços - Use Cases]
    Repo[Repositórios - Prisma]
    DBConn[Prisma ORM]
    Axios --> ExpressApp
    ExpressApp --> Service --> Repo --> DBConn
end

subgraph Database [Banco de Dados]
    PostgreSQL[(PostgreSQL)]
    DBConn --> PostgreSQL
end
```


