# Documento de Visão

Documento construído a partido do **Modelo BSI - Doc 001 - Documento de Visão** que pode ser encontrado no
link: https://docs.google.com/document/d/1DPBcyGHgflmz5RDsZQ2X8KVBPoEF5PdAz9BBNFyLa6A/edit?usp=sharing

## Descrição do Projeto

O projeto consiste no desenvolvimento de um sistema de gestão de assistência
técnica de informática, que permitirá o gerenciamento eficiente das atividades
relacionadas ao reparo, manutenção e suporte técnico de equipamentos e sistemas
de informática. O sistema será voltado para empresas ou profissionais que oferecem
serviços na área, proporcionando uma ferramenta ideal para administrar as operações
do negócio. Contará com funcionalidades como controle de clientes, controle de ordens
de serviço, emissão de relatórios e um controle de contas a receber.

## Equipe e Definição de Papéis

| Membro  | Papel             | E-mail                          |
| ------- | ----------------- | ------------------------------- |
| Taciano | Cliente Professor | taciano@bsi.ufrn.br             |
| Artur   | Analista          | artur.candeia.086@ufrn.edu.br   |
| Halyson | Líder técnico     | halysonsa@gmail.com             |
| Isayan  | Testador          | isayannogueira@gmail.com        |
| Matheus | Desenvolvedor     | matheus.quirino.122@ufrn.edu.br |

### Matriz de Competências

| Membro  | Competências                                                                    |
| ------- | ------------------------------------------------------------------------------- |
| Taciano | Desenvolvedor Java, Junit, Eclipse, JSP, JSF, Hibernate, Matemática, Latex, etc |
| Artur   | ...                                                                             |
| Halyson | Desenvolvedor Node, Nest, Express, Fastify, PostgreSQL, MySQL                   |
| Isayan  | ...                                                                             |
| Matheus | Desenvolvedor React, Next                                                       |

## Perfis dos Usuários

O sistema poderá ser utilizado por um único usuário, ele será o administrador geral.

| Perfil        | Descrição                                                               |
| ------------- | ----------------------------------------------------------------------- |
| Administrador | Este usuário realiza os cadastros base e pode realizar qualquer função. |

## Lista de Requisitos Funcionais

### Entidade Cliente - US01 - Manter Cliente

Um cliente é uma pessoa física que solicita serviços de assistência técnica. Possui CPF, nome, telefone, e-mail e endereço.

| Requisito                    | Descrição                                                                                                                             | Ator          |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| RF01.01 - Cadastrar Cliente  | Adiciona novo cliente informando: CPF (opcional), nome (obrigatório), telefone (obrigatório), e-mail (opcional), endereço (opcional). | Administrador |
| RF01.02 - Consultar Clientes | Lista clientes com filtros por: nome, CPF, telefone ou e-mail.                                                                        | Administrador |
| RF01.03 - Alterar Cliente    | Atualiza dados de um cliente existente (exceto CPF).                                                                                  | Administrador |
| RF01.04 - Excluir Cliente    | Remove cliente do sistema (apenas se não houver ordens de serviço vinculadas).                                                        | Administrador |

---

### Entidade Funcionário - US02 - Manter Funcionário

Um funcionário é um técnico ou administrador do sistema. Possui CPF, nome, cargo, telefone e e-mail.

| Requisito                       | Descrição                                                                                                           | Ator          |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------- |
| RF02.01 - Cadastrar Funcionário | Adiciona novo funcionário informando: CPF (obrigatório), nome (obrigatório), cargo (obrigatório), telefone, e-mail. | Administrador |
| RF02.02 - Consultar Funcionário | Lista funcionários com filtros por: nome, CPF ou cargo.                                                             | Administrador |
| RF02.03 - Alterar Funcionário   | Atualiza dados de um funcionário (exceto CPF).                                                                      | Administrador |
| RF02.04 - Excluir Funcionário   | Desativa cadastro do funcionário (não remove fisicamente).                                                          | Administrador |

---

### Entidade Ordem de Serviço (OS) - US03 - Manter OS

Uma ordem de serviço (OS) registra a solicitação de reparo de um equipamento. Possui número único, status, data de abertura, descrição do problema e valor.

| Requisito                  | Descrição                                                                                          | Ator          |
| -------------------------- | -------------------------------------------------------------------------------------------------- | ------------- |
| RF03.01 - Abrir OS         | Cria nova OS vinculada a um cliente e equipamento, informando: descrição do problema e prioridade. | Administrador |
| RF03.02 - Consultar OS     | Lista OS com filtros por: número, cliente, status ou data.                                         | Administrador |
| RF03.03 - Editar OS        | Atualiza dados da OS (exceto número), apenas se status for "Em andamento".                         | Administrador |
| RF03.04 - Encerrar OS      | Finaliza OS informando: solução aplicada, peças utilizadas e valor final.                          |
| RF03.05 - Emitir Relatório | Gera PDF da OS com detalhes do serviço, valores e assinatura do técnico.                           | Administrador |

---

### Entidade Equipamento - US04 - Manter Equipamento

Um equipamento é um dispositivo pertencente a um cliente. Possui tipo (ex: notebook, smartphone), marca, modelo e número de série.

| Requisito                       | Descrição                                                                                                                                            | Ator          |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| RF04.01 - Cadastrar Equipamento | Adiciona novo equipamento informando: tipo (obrigatório), marca (obrigatório), modelo (obrigatório), número de série (opcional) e cliente vinculado. | Administrador |
| RF04.02 - Consultar Equipamento | Lista equipamentos com filtros por: cliente, tipo, marca ou modelo.                                                                                  | Administrador |
| RF04.03 - Excluir Equipamento   | Remove equipamento (apenas se não estiver vinculado a OS ativa).                                                                                     | Administrador |

---

### Entidade Visita Técnica - US05 - Agendar Visita

Uma visita técnica é um deslocamento agendado para reparo em campo. Possui data, horário, endereço e técnico responsável.

| Requisito             | Descrição                                                                                                   | Ator          |
| --------------------- | ----------------------------------------------------------------------------------------------------------- | ------------- |
| RF05 - Agendar Visita | Agenda visita informando: cliente (obrigatório), equipamento (opcional), data, horário (8h–18h) e endereço. | Administrador |

---

### Entidade Financeiro - US06/US07 - Gestão Financeira

Registra transações financeiras (contas a receber e despesas).

| Requisito                      | Descrição                                                                                                                           | Ator          |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| RF06 - Registrar Conta Receber | Vincula pagamento a uma OS encerrada, informando: valor (obrigatório), forma de pagamento (à vista/parcelado) e data de vencimento. | Administrador |
| RF07 - Pagar Conta             | Registra despesa informando: fornecedor (obrigatório), valor (obrigatório), descrição e data.                                       | Administrador |

#### Descrição das Entidades

## Lista de Requisitos Não-Funcionais

| Requisito           | Descrição                                                 |
| ------------------- | --------------------------------------------------------- |
| RNF01 - Ágil        | Tempo de resposta do sistema < 2s para 95% das operações. |
| RNF02 - Usabilidade | Interface deve seguir diretrizes de usabilidade           |

## Riscos

Tabela com o mapeamento dos riscos do projeto, as possíveis soluções e os responsáveis.

| Data       | Risco                                                                 | Prioridade | Responsável | Status  | Providência/Solução                                                                     |
| ---------- | --------------------------------------------------------------------- | ---------- | ----------- | ------- | --------------------------------------------------------------------------------------- |
| 25/03/2025 | Não aprendizado das ferramentas utilizadas pelos componentes do grupo | Alta       | Todos       | Vigente | Reforçar estudos sobre as ferramentas e aulas com a integrante que conhece a ferramenta |
| 25/03/2025 | Divisão de tarefas mal sucedida                                       | Alta       | Todos       | Vigente | Acompanhar de perto o desenvolvimento de cada membro da equipe                          |
