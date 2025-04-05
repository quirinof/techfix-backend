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
| 04/04/2025 | 0.0.3  |  Detalhamento de user story US02  | Matheus |
| 04/04/2025 | 0.0.4  |  Detalhamento de user story US03  | Matheus |

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
| **Estimativa**        | 10h              |
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

### User Story US02 - Manter Endereço

|               |                                                                                                                                                                                                                                  |
| ------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Descrição** | Esse processo é responsável por cadastrar, editar, excluir e visualizar os endereços associados a um cliente. Cada cliente pode ter múltiplos endereços, com informações como rua, número, complemento, bairro, cidade e estado. |

| **Requisitos envolvidos** |                     |
| ------------------------- | :------------------ |
| US02.RF02.01              | Cadastrar endereço  |
| US02.RF02.02              | Consultar endereços |
| US02.RF02.03              | Editar endereço     |
| US02.RF02.04              | Excluir endereço    |

|                       |                  |
| --------------------- | ---------------- |
| **Prioridade**        | Essencial        |
| **Estimativa**        | 6 h              |
| **Tamanho Funcional** | 5 PF             |
| **Analista**          | Artur            |
| **Desenvolvedor**     | Halyson, Matheus |
| **Testador**          | Isayan           |

| Testes de Aceitação (TA) |                                                                         |
| ------------------------ | ----------------------------------------------------------------------- |
| **Código**               | **Descrição**                                                           |
| **TA02.01**              | Cadastro de endereço válido associado a um cliente existente            |
| **TA02.02**              | Cadastro de endereço com dados incompletos, esperando mensagens de erro |
| **TA02.03**              | Edição de um endereço existente                                         |
| **TA02.04**              | Exclusão de endereço, com confirmação                                   |
| **TA02.05**              | Visualização da lista de endereços associados a um cliente              |

### User Story US03 - Manter Equipamento

|               |                                                                                                                                                                                                                                                                                          |
| ------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Descrição** | Esse processo é responsável por cadastrar, editar, excluir e visualizar os equipamentos associados a um cliente. Cada cliente pode possuir vários equipamentos cadastrados. As informações do equipamento incluem: tipo (dispositivo), marca, modelo, número de série e data de criação. |

| **Requisitos envolvidos** |                        |
| ------------------------- | :--------------------- |
| US03.RF03.01              | Cadastrar equipamento  |
| US03.RF03.02              | Consultar equipamentos |
| US03.RF03.03              | Editar equipamento     |
| US03.RF03.04              | Excluir equipamento    |

|                       |                  |
| --------------------- | ---------------- |
| **Prioridade**        | Essencial        |
| **Estimativa**        | 8 h              |
| **Tamanho Funcional** | 7 PF             |
| **Analista**          | Artur            |
| **Desenvolvedor**     | Halyson, Matheus |
| **Testador**          | Isayan           |

| Testes de Aceitação (TA) |                                                                       |
| ------------------------ | --------------------------------------------------------------------- |
| **Código**               | **Descrição**                                                         |
| **TA03.01**              | Cadastro de equipamento válido associado a um cliente existente       |
| **TA03.02**              | Cadastro com dados ausentes ou inválidos, esperando mensagens de erro |
| **TA03.03**              | Edição dos dados de um equipamento existente                          |
| **TA03.04**              | Exclusão de equipamento, com confirmação                              |
| **TA03.05**              | Visualização da lista de equipamentos cadastrados por um cliente      |
