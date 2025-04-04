# Documento Lista de User Stories

Documento construído a partido do **Modelo BSI - Doc 004 - Lista de User Stories** que pode ser encontrado no
link: [Modelo](https://docs.google.com/document/d/1Ns2J9KTpLgNOpCZjXJXw_RSCSijTJhUx4zgFhYecEJg/edit?usp=sharing)

## Descrição

Este documento descreve os User Stories criados a partir da Lista de Requisitos no [Documento de Visão](https://github.com/quirinof/techFix-backend/blob/main/docs/doc-visao.md).

## Histórico de revisões

| Data       | Versão |             Descrição             | Autor   |
| :--------- | :----: | :-------------------------------: | :------ |
| 01/04/2025 | 0.0.1  | Template e descrição do documento | Matheus |
| 03/04/2025 | 0.0.2  |  Detalhamento de user story US01  | Matheus |

### User Story US01 - Manter cliente

|               |                                                                                                                                                                                                                                            |
| ------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Descrição** | Esse processo é responsável por fazer cadastro, exclusão, edição e visualização dos clientes da assistência técnica. As informações neste cadastro são: nome, telefone, e-mail, data de criação, e os endereços e equipamentos associados. |

| **Requisitos envolvidos** |                    |
| ------------------------- | :----------------- |
| US01.RF01.01              | Cadastrar clientes |
| US01.RF01.02              | Consultar clientes |
| US01.RF01.03              | Editar clientes    |
| US01.RF01.04              | Excluir clientes   |

|                       |                  |
| --------------------- | ---------------- |
| **Prioridade**        | Essencial        |
| **Estimativa**        | 7-9 h            |
| **Tamanho Funcional** | 8 PF             |
| **Analista**          | Artur            |
| **Desenvolvedor**     | Halyson, Matheus |
| **Testador**          | Isayan           |

| Testes de Aceitação (TA) |                                                                                                    |
| ------------------------ | -------------------------------------------------------------------------------------------------- |
| **Código**               | **Descrição**                                                                                      |
| **TA01.01**              | Inserção de dados válidos e completos para cadastro de cliente, esperando retorno positivo         |
| **TA01.02**              | Inserção de dados inválidos ou incompletos, esperando mensagens de erro e bloqueio do cadastro     |
| **TA01.03**              | Exclusão de cliente existente, com confirmação                                                     |
| **TA01.04**              | Edição dos dados de um cliente previamente cadastrado                                              |
| **TA01.05**              | Visualização das informações completas de um cliente, incluindo endereço e equipamentos associados |
