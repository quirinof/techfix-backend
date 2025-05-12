# Documento de Visão

Documento construído a partido do **Modelo BSI - Doc 001 - Documento de Visão** que pode ser encontrado no
link: [Modelo](https://docs.google.com/document/d/1DPBcyGHgflmz5RDsZQ2X8KVBPoEF5PdAz9BBNFyLa6A/edit?usp=sharing)

## Descrição do Projeto

O projeto "TechFix" consiste no desenvolvimento de um sistema de gestão de assistência
técnica de informática, que permitirá o gerenciamento eficiente das atividades
relacionadas ao reparo, manutenção e suporte técnico de equipamentos e sistemas
de informática. Ele será voltado para empresas ou profissionais que oferecem
serviços na área, proporcionando uma ferramenta ideal para administrar as operações
do negócio. Contará com funcionalidades como controle de clientes, controle de ordens
de serviço, emissão de relatórios e um controle de contas a receber.

## Equipe e Definição de Papéis

| Membro  | Papel         | E-mail                          |
| ------- | ------------- | ------------------------------- |
| Artur   | Analista      | artur.candeia.086@ufrn.edu.br   |
| Halyson | Desenvolvedor | halysonsa@gmail.com             |
| Isayan  | Testador      | isayannogueira@gmail.com        |
| Matheus | Desenvolvedor | matheus.quirino.122@ufrn.edu.br |

### Matriz de Competências

| Membro  | Competências                                                                   |
| ------- | ------------------------------------------------------------------------------ |
| Artur   | HTML, CSS, JavaScript, React, Next                                             |
| Halyson | HTML, CSS, JavaScript, Node, Nest, Express, Fastify, Prisma, PostgreSQL, MySQL |
| Isayan  | HTML, CSS, JavaScript, React, Next                                             |
| Matheus | HTML, CSS, JavaScript, Node, React, Next, Prisma, PostgreSQL                   |

## Perfis dos Usuários

O sistema poderá ser utilizado por um único usuário, ele será o administrador geral.

| Perfil        | Descrição                                                               |
| ------------- | ----------------------------------------------------------------------- |
| Administrador | Este usuário realiza os cadastros base e pode realizar qualquer função. |

## Lista de Requisitos Funcionais

### Entidade cliente/pessoa - US01 - Manter cliente

| Requisito                    | Descrição                              | Ator          |
| ---------------------------- | -------------------------------------- | ------------- |
| RF01.01 - Cadastrar clientes | Adiciona novo cliente                  | Administrador |
| RF01.02 - Consultar clientes | Lista de clientes com filtros por nome | Administrador |
| RF01.03 - Editar clientes    | Atualiza dados de um cliente existente | Administrador |
| RF01.04 - Excluir clientes   | Remove cliente do sistema              | Administrador |

---

### Entidade Endereço - US02 - Manter Endereço

| Código                        | Descrição                                   | Ator          |
| ----------------------------- | ------------------------------------------- | ------------- |
| RF02.01 - Cadastrar endereços | Adiciona endereço a um cliente existente    | Administrador |
| RF02.02 - Consultar endereços | Lista endereços de um cliente específico    | Administrador |
| RF02.03 - Editar endereços    | Edita informações de um endereço            | Administrador |
| RF02.04 - Excluir endereços   | Exclui um endereço específico de um cliente | Administrador |

---

### Entidade Equipamento - US03 - Manter Equipamento

| Requisito                       | Descrição                                                | Ator          |
| ------------------------------- | -------------------------------------------------------- | ------------- |
| RF03.01 - Cadastrar Equipamento | Adiciona novo equipamento                                | Administrador |
| RF03.02 - Consultar Equipamento | Lista de equipamentos existentes                         | Administrador |
| RF03.03 - Editar Equipamento    | Edita um equipamento que precisa ser alterado/atualizado | Administrador |
| RF03.04 - Excluir Equipamento   | Remove um equipamento do sistema                         | Administrador |

---

### Entidade Ordem de Serviço (OS) - US04 - Manter OS

| Requisito                  | Descrição                      | Ator          |
| -------------------------- | ------------------------------ | ------------- |
| RF02.01 - Cadastrar OS     | Cria nova ordem de serviço     | Administrador |
| RF02.02 - Consultar OS     | Lista ordes de serviço abertas | Administrador |
| RF02.03 - Editar OS        | Atualiza dados da OS           | Administrador |
| RF02.04 - Excluir OS       | Finaliza uma ordem de serviço  | Administrador |
| RF02.05 - Emitir Relatório | Gera detalhes do serviço       | Administrador |

---

### Entidade Item de OS - US05 - Gerenciar Itens

| Código                   | Descrição                         | Ator          |
| ------------------------ | --------------------------------- | ------------- |
| RF05.01 - Adicionar item | Adiciona item de serviço a uma OS | Administrador |
| RF05.02 - Consultar item | Listar itens de uma OS específica | Administrador |
| RF05.03 - Editar item    | Atualiza descrição/status do item | Administrador |
| RF05.04 - Excluir item   | Deleta um item de OS              | Administrador |

---

### Entidade Conta - US06 - Manter Conta

| Código                     | Descrição                          | Ator          |
| -------------------------- | ---------------------------------- | ------------- |
| RF05.01 - Adicionar contas | Adiciona conta a partir de uma OS  | Administrador |
| RF05.01 - Consultar contas | Lista contas existentes            | Administrador |
| RF05.02 - Editar contas    | Atualiza status/pagamento da conta | Administrador |
| RF05.03 - Encerrar contas  | Encerra uma conta criada           | Administrador |

## Lista de Requisitos Não-Funcionais

| Requisito           | Descrição                                                           |
| ------------------- | ------------------------------------------------------------------- |
| RNF01 - Agilidade   | Tempo de resposta do sistema < 2s para 95% das operações.           |
| RNF02 - Usabilidade | Interface deve seguir diretrizes de usabilidade simples e intuitiva |

## Riscos

Tabela com o mapeamento dos riscos do projeto, as possíveis soluções e os responsáveis.

| Data       | Risco                                                                 | Prioridade | Responsável | Status  | Providência/Solução                                                                     |
| ---------- | --------------------------------------------------------------------- | ---------- | ----------- | ------- | --------------------------------------------------------------------------------------- |
| 23/03/2025 | Não aprendizado das ferramentas utilizadas pelos componentes do grupo | Alta      | Todos       | Solucionado | Reforçar estudos sobre as ferramentas e aulas com a integrante que conhece a ferramenta |
| 23/03/2025 | Divisão de tarefas mal sucedida                                       | Alta      | Todos       | Vigente     | Acompanhar de perto o desenvolvimento de cada membro da equipe                          |
| 12/05/2025 | Não participação de integrantes do grupo nas atividades do projeto    | Alta      | Alguns      | Vigente     | Comprometimento das partes envolvidas                                                   |
