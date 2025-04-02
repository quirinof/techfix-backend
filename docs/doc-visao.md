# Documento de Visão

Documento construído a partido do **Modelo BSI - Doc 001 - Documento de Visão** que pode ser encontrado no
link: https://docs.google.com/document/d/1DPBcyGHgflmz5RDsZQ2X8KVBPoEF5PdAz9BBNFyLa6A/edit?usp=sharing

## Descrição do Projeto

O projeto "TechFix" consiste no desenvolvimento de um sistema de gestão de assistência
técnica de informática, que permitirá o gerenciamento eficiente das atividades
relacionadas ao reparo, manutenção e suporte técnico de equipamentos e sistemas
de informática. Ele será voltado para empresas ou profissionais que oferecem
serviços na área, proporcionando uma ferramenta ideal para administrar as operações
do negócio. Contará com funcionalidades como controle de clientes, controle de ordens
de serviço, emissão de relatórios e um controle de contas a receber.

## Equipe e Definição de Papéis

| Membro  | Papel             | E-mail                          |
| ------- | ----------------- | ------------------------------- |
| Taciano | Cliente Professor | taciano@bsi.ufrn.br             |
| Artur   | Analista          | artur.candeia.086@ufrn.edu.br   |
| Halyson | Desenvolvedor     | halysonsa@gmail.com             |
| Isayan  | Testador          | isayannogueira@gmail.com        |
| Matheus | Líder técnico     | matheus.quirino.122@ufrn.edu.br |

### Matriz de Competências

| Membro  | Competências                                                                    |
| ------- | ------------------------------------------------------------------------------- |
| Taciano | Desenvolvedor Java, Junit, Eclipse, JSP, JSF, Hibernate, Matemática, Latex, etc |
| Artur   | Desenvolvedor Next.js                                                           |
| Halyson | Desenvolvedor Node, Nest, Express, Fastify, PostgreSQL, MySQL                   |
| Isayan  | Desenvolvedor Next.js                                                           |
| Matheus | Desenvolvedor js - node, react, next                                            |

## Perfis dos Usuários

O sistema poderá ser utilizado por um único usuário, ele será o administrador geral.

| Perfil        | Descrição                                                               |
| ------------- | ----------------------------------------------------------------------- |
| Administrador | Este usuário realiza os cadastros base e pode realizar qualquer função. |

## Lista de Requisitos Funcionais

### Entidade cliente/pessoa - US01 - Manter cliente/pessoa

Um cliente é uma pessoa física que solicita serviços de assistência técnica. Informa documento(cpf), nome, telefone, e-mail, endereço.

| Requisito                  | Descrição                                                                      | Ator          |
| -------------------------- | ------------------------------------------------------------------------------ | ------------- |
| RF01.01 - Cadastrar pessoa | Adiciona nova pessoa informando: documento, nome, telefone, e-mail, endereço.  | Administrador |
| RF01.02 - Consultar pessoa | Lista pessoas com filtros por nome                                             | Administrador |
| RF01.03 - Alterar pessoa   | Atualiza dados de um cliente existente (exceto CPF).                           | Administrador |
| RF01.04 - Excluir pessoa   | Remove cliente do sistema (apenas se não houver ordens de serviço vinculadas). | Administrador |

---

### Entidade Endereço - US02 - Manter Endereço

Gerenciar endereços vinculados a clientes, onde é informado estado, cidade, bairro, rua, numero, complemento.

| Código  | Descrição                                 | Ator          |
| ------- | ----------------------------------------- | ------------- |
| RF02.01 | Vincular endereço a um cliente existente  | Administrador |
| RF02.02 | Editar informações de endereço            | Administrador |
| RF02.03 | Listar endereços de um cliente específico | Administrador |

---

### Entidade Equipamento - US03 - Manter Equipamento

Um equipamento é um dispositivo pertencente a uma pessoa. Possui dispositivo (tipo), marca, modelo e número de série.

| Requisito                       | Descrição                                                                                                     | Ator          |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------- |
| RF03.01 - Cadastrar Equipamento | Adiciona novo equipamento informando: dispositivo, marca, modelo, número de série e cliente/pessoa vinculado. | Administrador |
| RF03.02 - Consultar Equipamento | Lista equipamentos com filtros por: cliente, tipo, marca ou modelo.                                           | Administrador |
| RF03.03 - Excluir Equipamento   | Remove equipamento (apenas se não estiver vinculado a OS ativa).                                              | Administrador |

---

### Entidade Ordem de Serviço (OS) - US04 - Manter OS

Uma ordem de serviço (OS) registra a solicitação de serviço para reparo técnico. Possui número único, status, data de abertura, descrição do problema e valor.

| Requisito                  | Descrição                                                                                          | Ator          |
| -------------------------- | -------------------------------------------------------------------------------------------------- | ------------- |
| RF02.01 - Abrir OS         | Cria nova OS vinculada a um cliente e equipamento, informando: descrição do problema e prioridade. | Administrador |
| RF02.02 - Consultar OS     | Lista OS com filtros por: número, cliente, status ou data.                                         | Administrador |
| RF02.03 - Editar OS        | Atualiza dados da OS (exceto número), apenas se status for "Em andamento".                         | Administrador |
| RF02.04 - Encerrar OS      | Finaliza OS informando: solução aplicada, peças utilizadas e valor final.                          |
| RF02.05 - Emitir Relatório | Gera PDF da OS com detalhes do serviço, valores e assinatura do técnico.                           | Administrador |

---

### Entidade Item de OS - US05 - Gerenciar Itens

Detalhar serviços específicos realizados em cada OS.

| Código  | Descrição                          | Ator          |
| ------- | ---------------------------------- | ------------- |
| RF05.01 | Adicionar item de serviço à OS     | Administrador |
| RF05.02 | Atualizar descrição/status do item | Administrador |
| RF05.03 | Listar itens de uma OS específica  | Administrador |

---

### Entidade Conta - US06 - Manter Conta

Gerenciar pagamentos de serviços realizados. A conta é gerada a partir de uma ordem de serviço e possui valor, método e status de pagamento, data.

| Código  | Descrição                               | Ator          |
| ------- | --------------------------------------- | ------------- |
| RF05.01 | Gerar fatura vinculada à OS             | Administrador |
| RF05.02 | Registrar pagamento e atualizar status  | Administrador |
| RF05.03 | Consultar faturas por status ou período | Administrador |

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
