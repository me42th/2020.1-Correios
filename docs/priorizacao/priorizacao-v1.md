# Requisitos Elicitados & Priorização - Versão 01

---

## Introdução

Esta página é destinada a armazenar todos os requisitos obtidos por meio das técnicas de elicitação utilizadas, bem como a priorização de cada desses requisitos utilizando as técnicas de priorização MoSCoW e First Things First.

---

## Legenda

| Código | Significado             |
| ------ | ----------------------- |
| RF     | Requisito Funcional     |
| RNF    | Requisito Não Funcional |
| ENT    | Entrevista              |
| INT    | Introspecção            |
| ST     | Storytelling            |

## MoSCoW

Esta técnica consiste em dividir os requisitos em quatro níveis de prioridade definidos de acordo com as letras que compõem o MoSCoW, sendo eles:

- **Must:** Nesta categoria são atribuídos os itens que devem necessariamente ser realizados. São considerados obrigatórios, vitais, essenciais e inegociáveis;

- **Should:** Nesta categoria estão os itens necessários, importantes e valorosos; porém não obrigatórios e negociáveis. São itens de segunda prioridade que podem ser realizados num segundo momento;

- **Could:** Nesta categoria estão inseridos os itens desejados, mas com menor impacto ou menor valor para o objetivo estratégico. São itens de terceira prioridade que não apresentam problemas caso não sejam realizados;

- **Would:** São os itens de menor prioridade. Podem ser reconsiderados no futuro, mas não ocuparão os recursos da organização no momento atual.

### MoSCoW - Requisitos Funcionais

| Identificador | Descrição                                                                                                                                                                                                          | Origem                                                                   | Prioridade |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ---------- |
| RF01          | O aplicativo deve permitir o cadastro de usuários                                                                                                                                                                  | [INT04][link-int]                                                        | Must       |
| RF02          | O aplicativo deve permitir o usuário alterar sua senha de acesso                                                                                                                                                   | [INT05][link-int]                                                        | Should     |
| RF03          | O aplicativo deve permitir o usuário fazer login                                                                                                                                                                   | [INT03][link-int]                                                        | Must       |
| RF04          | O aplicativo deve permitir o usuário sair da conta(logout)                                                                                                                                                         | [INT04][link-int]                                                        | Should     |
| RF05          | O aplicativo deve permitir o usuário cancelar sua conta                                                                                                                                                            | [INT13][link-int]                                                        | Could      |
| RF06          | O aplicativo deve permitir o usuário consultar os seus dados pessoais                                                                                                                                              | [INT12][link-int]                                                        | Should     |
| RF07          | O aplicativo deve permitir o usuário alterar os seus dados pessoais                                                                                                                                                | [INT12][link-int]                                                        | Should     |
| RF08          | O aplicativo deve permitir o usuário consultar as pré-postagens já cadastradas                                                                                                                                     | [INT15][link-int]                                                        | Must       |
| RF09          | O aplicativo deve permitir o usuário excluir suas pré-postagens                                                                                                                                                    | [INT16][link-int]                                                        | Could      |
| RF10          | Ao adicionar pré-postagem, o aplicativo deve permitir o usuário adicionar endereços de destinatários e remetentes                                                                                                  | [INT17][link-int], [ENT09][link-ent]                                     | Must       |
| RF11          | Ao adicionar pré-postagem, o aplicativo deve permitir o usuário adicionar e armazenar o tipo de objeto, dimensões e peso estimado do objeto ser postado                                                            | [INT17][link-int], [ENT09][link-ent], [ST11][link-st]                    | Must       |
| RF12          | Ao adicionar pré-postagem, o aplicativo deve permitir o usuário adicionar o tipo de serviço de postagem que melhor lhe atenda                                                                                      | [INT18][link-int], [ENT09][link-ent], [ST12][link-st]                    | Must       |
| RF13          | Ao adicionar pré-postagem, o aplicativo deve permitir o usuário adicionar serviços adicionais como Aviso de Recebimento, Declaração de Valor e Mão Própria etc                                                     | [INT18][link-int], [ENT09][link-ent], [ST12][link-st]                    | Must       |
| RF14          | Ao finalizar pré-postagem, o aplicativo deve permitir o usuário visualizar número de identificação da pré-postagem que deverá ser apresentado em qualquer agência dos Correios, onde será finalizado o atendimento | [INT20][link-int], [ENT09][link-ent]                                     | Must       |
| RF15          | Ao finalizar pré-postagem, o aplicativo deve permitir o usuário imprimir e salvar o rótulo de endereçamento                                                                                                        | [INT20][link-int], [ST14][link-st]                                       | Must       |
| RF16          | Ao finalizar pré-postagem, o aplicativo deve permitir o usuário imprimir e salvar a declaração de conteúdo                                                                                                         | [INT20][link-int], [ST15][link-st]                                       | Must       |
| RF17          | Ao finalizar pré-postagem, o aplicativo deve permitir o usuário visualizar o resumo da pré-postagem                                                                                                                | [INT19][link-int]                                                        | Could      |
| RF18          | O aplicativo deve permitir o usuário consultar os endereços de destinatários salvos                                                                                                                                | [INT43][link-int]                                                        | Should     |
| RF19          | O aplicativo deve permitir o usuário cadastrar endereços de destinatários                                                                                                                                          | [INT44][link-int]                                                        | Should     |
| RF20          | O aplicativo deve permitir o usuário editar endereços de destinatários                                                                                                                                             | [INT45][link-int]                                                        | Could      |
| RF21          | O aplicativo deve permitir o usuário excluir endereços de destinatários                                                                                                                                            | [INT46][link-int]                                                        | Could      |
| RF22          | O aplicativo deve permitir o usuário buscar as agências mais próximas de sua localização em um raio de até 10 km                                                                                                   | [INT22][link-int], [INT23][link-int], [ENT07][link-ent], [ST06][link-st] | Should     |
| RF23          | O aplicativo deve permitir o usuário buscar as agências mais próximas de um endereço ou cep em um raio de até 10 km                                                                                                | [INT21][link-int], [ST06][link-st]                                       | Should     |
| RF24          | Ao buscar agências, o aplicativo de exibir um mapa para exibir as agẽncias mais próximas                                                                                                                           | [INT25][link-int], [ST08][link-st]                                       | Should     |
| RF25          | Ao buscar agências, o aplicativo deve permitir o usuário selecionar as agências exibidas no mapa, assim tendo acesso as informações de uma agência                                                                 | [INT26][link-int], [ENT08][link-ent], [ST07][link-st], [ST08][link-st]   | Should     |
| RF26          | O aplicativo deve permitir o usuário adicionar agências aos favoritos                                                                                                                                              | [INT26][link-int]                                                        | Could      |
| RF27          | O aplicativo deve permitir o usuário remover agências aos favoritos                                                                                                                                                | [INT42][link-int]                                                        | Would      |
| RF28          | O aplicativo deve permitir o usuário consultar as suas agências favoritas                                                                                                                                          | [INT42][link-int]                                                        | Could      |
| RF29          | O aplicativo deve permitir o usuário visualizar os objetos em trânsito                                                                                                                                             | [ST02][link-st]                                                          | Must       |
| RF30          | O aplicativo deve permitir o usuário visualizar os objetos entregues                                                                                                                                               | [INT31][link-int]                                                        | Must       |
| RF31          | O aplicativo deve permitir o usuário buscar objetos por número do rastreio                                                                                                                                         | [INT27][link-int], [ST01][link-st]                                       | Must       |
| RF32          | O aplicativo deve permitir o usuário buscar objetos por código de barras                                                                                                                                           | [INT27][link-int], [ST01][link-st]                                       | Would      |
| RF33          | O aplicativo deve permitir o usuário buscar objetos a partir do seu cpf/cnpj                                                                                                                                       | [INT30][link-int], [ENT04][link-ent], [ST01][link-st]                    | Should     |
| RF34          | Ao rastrear um objeto, o aplicativo deve permitir o usuário visualizar o histórico de entrega e o prazo de entrega do objeto                                                                                       | [INT29][link-int], [ENT03][link-ent], [ST03][link-st], [ST05][link-st]   | Must       |
| RF35          | Ao rastrear um objeto, o aplicativo deve permitir o usuário salvar um objeto na sua lista de objetos                                                                                                               | [INT28][link-int], [ENT05][link-ent]                                     | Could      |
| RF36          | Ao rastrear um objeto, o aplicativo deve enviar notificações, caso o usuário tenha interesse, referentes ao status de um objeto                                                                                    | [INT32][link-int], [ENT06][link-ent]                                     | Must       |
| RF37          | Ao solicitar uma simulação, o aplicativo deve permitir o usuário adicionar o cep de origem e destino da simulação                                                                                                  | [INT35][link-int]                                                        | Should     |
| RF38          | Ao solicitar uma simulação, o aplicativo deve permitir o usuário adicionar o tipo de objeto, peso estimado e dimensões do objeto                                                                                   | [INT36][link-int], [INT37][link-int]                                     | Should     |
| RF39          | Ao realizar a simulação, o aplicativo deve permitir o usuário visualizar os serviços, preços e prazos referentes a postagem solicitada                                                                             | [INT38][link-int], [INT39][link-int], [ST09][link-st], [ST10][link-st]   | Should     |


### MoSCoW - Requisitos Não Funcionais

| Identificador | Descrição                                                                                                                                                | Origem                                                  | Prioridade |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ---------- |
| RNF01         | O aplicativo deve ser intuitivo e fácil de usar                                                                                                          | [ENT01][link-ent], [INT08][link-int], [INT11][link-int] | Must       |
| RNF02         | O aplicativo deve ser fácil de aprender                                                                                                                  | [ENT02][link-ent], [INT10][link-int], [INT11][link-int] | Must       |
| RNF03         | O aplicativo deve seguro, assim protegendo os dados dos usuários                                                                                         | [INT07][link-int]                                       | Must       |
| RNF04         | O aplicativo deve ficar disponível 24/7                                                                                                                  | [ENT11][link-ent]                                       | Must       |
| RNF05         | O usuário deve consiguir acessar funcionalidades básicas, como buscar agências, rastrear objetos pelo código e simular preços e prazos sem fazer o login | [INT02][link-int]                                       | Should     |
| RNF06         | O aplicativo deve agilizar o processo de postagem de um objeto                                                                                           | [ENT10][link-ent]                                       | Must       |

## First Things First

Esta técnica de priorização busca definir os requisitos devem ser feitos primeiro e os que podem ser feitos depois. Esta técnica consiste basicamente na execução dos seguintes passos: 

1. Faça uma lista de todos os requisitos, características, ou casos de uso que você deseja priorizar.
2. Estime o benefício relativo que cada recurso fornece ao cliente ou ao negócio.
3. Estimar a penalidade que o negócio sofreria se o recurso não for incluído.
4. A coluna Valor Total é a soma do (Benefício Relativo * Peso Relativo) e da (Penalidade Relativa * Peso Relativo). Por padrão, benefício e pena devem ser ponderados de forma igual.
5. Estime o custo relativo de implementação de cada característica. Os desenvolvedores devem classificar os custos com base em fatores como a complexidade de implementação, a interface de usuário necessária, a capacidade potencial de reutilização de código etc.
6. Os desenvolvedores estimam o grau relativo de risco técnico ou outro associado a cada requisito. Uma estimativa de 1 significa que eles podem ´programar dormindo´, enquanto que 9 indica sérias preocupações sobre a viabilidade, uso de tecnologias desconhecidas etc.
7. Calcular um número de prioridade para cada requisito. A fórmula para a coluna Prioridade é: Prioridade = valor % / (custo % * Peso custo + riscos % * Peso Risco).
8. Ordenar a lista de recursos por ordem decrescente de prioridade calculada.

Observação: As estimativas devem ser feitas em uma escala de 1 a 9. 

### First Things First - Tabela

| Identificador | Beneficio Relativo | Penalidade Relativa | Valor Total | Valor % | Custo Relativo | Custo % | Risco Relativo | Risco % | Prioridade |
| ------------- | ------------------ | ------------------- | ----------- | ------- | -------------- | ------- | -------------- | ------- | ---------- |
| RF03          | 8                  | 8                   | 16          | 2,49%   | 3              | 1,42%   | 1              | 0,52%   | 1,28       |
| RF04          | 7                  | 5                   | 12          | 1,87%   | 2              | 0,94%   | 1              | 0,52%   | 1,28       |
| RF08          | 9                  | 8                   | 17          | 2,65%   | 3              | 1,42%   | 2              | 1,05%   | 1,07       |
| RF06          | 7                  | 5                   | 12          | 1,87%   | 2              | 0,94%   | 2              | 1,05%   | 0,93       |
| RF14          | 9                  | 9                   | 18          | 2,8%    | 3              | 1,42%   | 3              | 1,58%   | 0,93       |
| RF35          | 9                  | 8                   | 17          | 2,65%   | 3              | 1,42%   | 3              | 1,58%   | 0,88       |
| RNF05         | 9                  | 7                   | 16          | 2,49%   | 4              | 1,89%   | 2              | 1,05%   | 0,84       |
| RF18          | 7                  | 6                   | 13          | 2,02%   | 3              | 1,42%   | 2              | 1,05%   | 0,81       |
| RF10          | 9                  | 9                   | 18          | 2,8%    | 4              | 1,89%   | 3              | 1,58%   | 0,80       |
| RF15          | 9                  | 9                   | 18          | 2,8%    | 4              | 1,89%   | 4              | 2,11%   | 0,70       |
| RF16          | 9                  | 9                   | 18          | 2,8%    | 4              | 1,89%   | 4              | 2,11%   | 0,70       |
| RF11          | 9                  | 8                   | 17          | 2,65%   | 5              | 2,36%   | 3              | 1,58%   | 0,67       |
| RF37          | 7                  | 6                   | 13          | 2,02%   | 3              | 1,42%   | 3              | 1,58%   | 0,67       |
| RF38          | 7                  | 6                   | 13          | 2,02%   | 3              | 1,42%   | 3              | 1,58%   | 0,67       |
| RF39          | 7                  | 6                   | 13          | 2,02%   | 3              | 1,42%   | 3              | 1,58%   | 0,67       |
| RF19          | 7                  | 6                   | 13          | 2,02%   | 3              | 1,42%   | 3              | 1,58%   | 0,67       |
| RF09          | 6                  | 4                   | 10          | 1,56%   | 3              | 1,42%   | 2              | 1,05%   | 0,63       |
| RF26          | 5                  | 5                   | 10          | 1,56%   | 3              | 1,42%   | 2              | 1,05%   | 0,63       |
| RF17          | 6                  | 4                   | 10          | 1,56%   | 3              | 1,42%   | 2              | 1,05%   | 0,63       |
| RF28          | 5                  | 5                   | 10          | 1,56%   | 3              | 1,42%   | 2              | 1,05%   | 0,63       |
| RF34          | 9                  | 9                   | 18          | 2,8%    | 4              | 1,89%   | 5              | 2,64%   | 0,61       |
| RF02          | 7                  | 6                   | 13          | 2,02%   | 4              | 1,89%   | 3              | 1,58%   | 0,58       |
| RF21          | 5                  | 4                   | 9           | 1,4%    | 3              | 1,42%   | 2              | 1,05%   | 0,56       |
| RF31          | 9                  | 9                   | 18          | 2,8%    | 6              | 2,84%   | 5              | 2,64%   | 0,51       |
| RF12          | 9                  | 8                   | 17          | 2,65%   | 6              | 2,84%   | 5              | 2,64%   | 0,48       |
| RF13          | 9                  | 8                   | 17          | 2,65%   | 6              | 2,84%   | 5              | 2,64%   | 0,48       |
| RF30          | 7                  | 7                   | 14          | 2,18%   | 5              | 2,36%   | 4              | 2,11%   | 0,48       |
| RF20          | 5                  | 4                   | 9           | 1,4%    | 3              | 1,42%   | 3              | 1,58%   | 0,46       |
| RF25          | 8                  | 7                   | 15          | 2,34%   | 5              | 2,36%   | 5              | 2,64%   | 0,46       |
| RNF03         | 8                  | 9                   | 17          | 2,65%   | 6              | 2,84%   | 6              | 3,17%   | 0,44       |
| RF05          | 6                  | 6                   | 12          | 1,87%   | 5              | 2,36%   | 4              | 2,11%   | 0,41       |
| RF07          | 7                  | 5                   | 12          | 1,87%   | 5              | 2,36%   | 4              | 2,11%   | 0,41       |
| RF29          | 9                  | 9                   | 18          | 2,8%    | 7              | 3,31%   | 7              | 3,7%    | 0,39       |
| RF01          | 8                  | 8                   | 16          | 2,49%   | 7              | 3,31%   | 6              | 3,17%   | 0,38       |
| RF33          | 9                  | 8                   | 17          | 2,65%   | 7              | 3,31%   | 7              | 3,7%    | 0,37       |
| RNF01         | 9                  | 8                   | 17          | 2,65%   | 7              | 3,31%   | 7              | 3,7%    | 0,37       |
| RNF02         | 9                  | 8                   | 17          | 2,65%   | 7              | 3,31%   | 7              | 3,7%    | 0,37       |
| RNF04         | 9                  | 9                   | 18          | 2,8%    | 8              | 3,79%   | 8              | 4,23%   | 0,34       |
| RF36          | 9                  | 8                   | 17          | 2,65%   | 8              | 3,79%   | 8              | 4,23%   | 0,33       |
| RNF06         | 8                  | 7                   | 15          | 2,34%   | 7              | 3,31%   | 7              | 3,7%    | 0,33       |
| RF27          | 3                  | 2                   | 5           | 0,78%   | 3              | 1,42%   | 2              | 1,05%   | 0,31       |
| RF22          | 8                  | 7                   | 15          | 2,34%   | 8              | 3,79%   | 8              | 4,23%   | 0,29       |
| RF23          | 7                  | 5                   | 12          | 1,87%   | 6              | 2,84%   | 7              | 3,7%    | 0,28       |
| RF24          | 8                  | 5                   | 13          | 2,02%   | 7              | 3,31%   | 7              | 3,7%    | 0,28       |
| RF32          | 4                  | 2                   | 6           | 0,93%   | 7              | 3,31%   | 7              | 3,7%    | 0,13       |

---

## Controle de versão

| Data     | Versão | Descrição                                               | Autor(es)        |
| -------- | ------ | ------------------------------------------------------- | ---------------- |
| 26/09/20 | 0.1    | Adição da primeira versão dos requisitos e priorização  | Gustavo Nogueira |
| 26/09/20 | 0.2    | Adição de ajustes e referências da técnica storytelling | Gustavo Nogueira |
| 27/09/20 | 0.3    | Adição da técnica de priorização first things first     | Gustavo Nogueira |

---

## Referências

- LEONHARDT, Rodrigo. Priorização #02 — MoSCoW. Medium. Disponível em: <https://medium.com/gerindo-produtos-digitais/prioriza%C3%A7%C3%A3o-02-moscow-84362fbc9350>. Acesso em: 26 de setembro de 2020.
- VARGAS, Ana. Priorização de requisitos. Matera. Disponível em: <http://www.matera.com/blog/post/priorizacao-de-requisitos>. Acesso em: 26 de setembro de 2020.

<!--Links-->
[link-int]: https://requisitos-de-software.github.io/2020.1-Correios/elicitacao/instrospeccao/#requisitos-elicitados
[link-ent]: https://requisitos-de-software.github.io/2020.1-Correios/elicitacao/entrevista/#requisitos-elicitados
[link-st]: https://requisitos-de-software.github.io/2020.1-Correios/elicitacao/storytelling/#requisitos-elicitados