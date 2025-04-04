# Documento de Modelos

## Modelo Conceitual

### Diagrama de Classes

```mermaid
classDiagram
    class item_ordem_servico {
        id : integer PK
        descricao : varchar
        status : enum
        equipamento_id : integer FK
        ordem_servico_id : integer FK

        +atualizarStatus(novo_status: enum) : void
        +getDescricao() : varchar
        +associarEquipamento(equipamento_id: integer) : void
    }

    class ordem_servico {
        id : integer PK
        descricao : varchar
        status : enum
        orcamento : float
        data_criacao : datetime
        pessoa_id : integer FK

        +atualizarStatus(novo_status: enum) : void
        +calcularOrcamento() : float
        +adicionarItem(item: item_ordem_servico) : void
        +removerItem(item_id: integer) : void
        +getDetalhes() : string
    }

    class equipamento {
        id : integer PK
        dispositivo : enum
        marca : varchar
        modelo : varchar
        numero_serie : varchar
        data_criacao : datetime
        pessoa_id : integer FK

        +getDetalhes() : string
        +associarCliente(cliente_id: integer) : void
        +atualizarInformacoes(marca: varchar, modelo: varchar, numero_serie: varchar) : void
    }

    class conta {
        id : inteiro PK
        valor : float
        metodo_pagamento : enum
        data_vencimento : datetime
        status : enum
        ordem_servico_id : integer FK

        +efetuarPagamento() : boolean
        +atualizarStatus(novo_status: enum) : void
        +calcularMulta(dias_atraso: integer) : float
        +getDetalhesPagamento() : string
    }

    class cliente {
        id : integer PK
        documento : varchar
        nome : varchar
        telefone : varchar
        email : varchar
        data_criacao : datetime

        +atualizarDados(nome: varchar, telefone: varchar, email: varchar) : void
        +getInformacoes() : string
        +listarOrdensServico() : list<ordem_servico>
        +listarEquipamentos() : list<equipamento>
    }

    class endereco {
        id : integer PK
        casa : varchar
        rua : varchar
        bairro : varchar
        cidade : varchar
        estado : varchar
        pessoa_id : integer FK

        +getEnderecoCompleto() : string
        +atualizarEndereco(casa: varchar, rua: varchar, bairro: varchar, cidade: varchar, estado: varchar) : void
    }

```

## Modelo de Dados (Entidade-Relacionamento)

```mermaid
erDiagram
    ordem_servico ||--o{ item_ordem_servico : "contém"
    equipamento ||--o{ item_ordem_servico : "utilizado em"
    cliente ||--o{ endereco : "possui"
    cliente ||--o{ equipamento : "cadastra"
    cliente ||--o{ ordem_servico : "solicita"
    ordem_servico ||--o{ conta : "gera"
```

# Dicionário de Dados

## Tabela: Cliente

| Campo        | Tipo     | Tamanho | Obrigatório? | Descrição           | Exemplo            |
| ------------ | -------- | ------- | ------------ | ------------------- | ------------------ |
| id           | SERIAL   | -       | PK           | ID único            | 1                  |
| documento    | VARCHAR  | 20      | Não          | CPF/CNPJ            | "123.456.789-09"   |
| nome         | VARCHAR  | 100     | Sim          | Nome completo       | "João da Silva"    |
| telefone     | VARCHAR  | 20      | Não          | Telefone de contato | "(11) 98765-4321"  |
| email        | VARCHAR  | 100     | Não          | E-mail válido       | "joao@email.com"   |
| data_criacao | DATETIME | -       | Sim          | Data de cadastro    | "2024-01-15 10:30" |

---

## Tabela: Endereço

| Campo       | Tipo    | Tamanho | Obrigatório? | Descrição                             | Exemplo          |
| ----------- | ------- | ------- | ------------ | ------------------------------------- | ---------------- |
| id          | SERIAL  | -       | PK           | ID único                              | 1                |
| complemento | VARCHAR | 30      | Não          | Caso precise informar algo pertinente | "AP 312"         |
| numero      | VARCHAR | 10      | Sim          | Número da casa, prédio ou condomínio  | "123A"           |
| rua         | VARCHAR | 100     | Sim          | Nome da rua                           | "Rua das Flores" |
| bairro      | VARCHAR | 50      | Sim          | Bairro                                | "Centro"         |
| cidade      | VARCHAR | 50      | Sim          | Cidade                                | "São Paulo"      |
| estado      | VARCHAR | 2       | Sim          | UF (sigla)                            | "SP"             |
| pessoa_id   | INTEGER | -       | FK           | ID da pessoa associada                | 1                |

---

## Tabela: Equipamento

| Campo        | Tipo     | Tamanho | Obrigatório? | Descrição             | Exemplo            |
| ------------ | -------- | ------- | ------------ | --------------------- | ------------------ |
| id           | SERIAL   | -       | PK           | ID único              | 1                  |
| dispositivo  | ENUM     | -       | Sim          | Tipo de dispositivo   | "Notebook"         |
| marca        | VARCHAR  | 50      | Sim          | Fabricante            | "Dell"             |
| modelo       | VARCHAR  | 50      | Sim          | Modelo específico     | "Inspiron 15"      |
| numero_serie | VARCHAR  | 50      | Sim          | Número de série único | "DEL123XYZ"        |
| data_criacao | DATETIME | -       | Sim          | Data de cadastro      | "2025-03-20 11:00" |
| pessoa_id    | INTEGER  | -       | FK           | ID do proprietário    | 1                  |

---

## Tabela: Ordem de Serviço

| Campo        | Tipo     | Tamanho | Obrigatório? | Descrição            | Exemplo            |
| ------------ | -------- | ------- | ------------ | -------------------- | ------------------ |
| id           | SERIAL   | -       | PK           | ID único             | 1                  |
| descricao    | VARCHAR  | 255     | Sim          | Descrição do serviço | "Troca de tela"    |
| status       | ENUM     | -       | Sim          | Status atual         | "Em andamento"     |
| orcamento    | FLOAT    | -       | Não          | Valor estimado       | 250.00             |
| data_criacao | DATETIME | -       | Sim          | Data de abertura     | "2025-03-20 09:15" |
| pessoa_id    | INTEGER  | -       | FK           | ID do cliente        | 1                  |

---

## Tabela: Item da Ordem de Serviço

| Campo            | Tipo    | Tamanho | Obrigatório? | Descrição              | Exemplo            |
| ---------------- | ------- | ------- | ------------ | ---------------------- | ------------------ |
| id               | SERIAL  | -       | PK           | ID único               | 1                  |
| descricao        | VARCHAR | 255     | Sim          | Detalhes do item       | "Troca de bateria" |
| status           | ENUM    | -       | Sim          | Status do item         | "Concluído"        |
| equipamento_id   | INTEGER | -       | FK           | ID do equipamento      | 1                  |
| ordem_servico_id | INTEGER | -       | FK           | ID da ordem de serviço | 1                  |

---

## Tabela: Conta

| Campo            | Tipo     | Tamanho | Obrigatório? | Descrição                  | Exemplo            |
| ---------------- | -------- | ------- | ------------ | -------------------------- | ------------------ |
| id               | SERIAL   | -       | PK           | ID único                   | 1                  |
| valor            | FLOAT    | -       | Sim          | Valor total                | 300.50             |
| metodo_pagamento | ENUM     | -       | Sim          | Forma de pagamento         | "Cartão"           |
| data_vencimento  | DATETIME | -       | Sim          | Data limite para pagamento | "2025-03-20 23:59" |
| status           | ENUM     | -       | Sim          | Status do pagamento        | "Pendente"         |
| ordem_servico_id | INTEGER  | -       | FK           | ID da ordem de serviço     | 1                  |

---
