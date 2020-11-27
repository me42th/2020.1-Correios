# Requisitos Elicitados & Priorização - Versão 02

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

| Identificador	| Descrição	| Origem | Prioridade |
| -------------	| ---------	| ------ | ---------- |
| RF01 | O aplicativo deve permitir o cadastro de usuários	| [INT04][link-int] | Must |
| RF02 | O aplicativo deve permitir o usuário fazer login	| [INT05][link-int]	| Should |
| RF03 | O aplicativo deve permitir o usuário alterar sua senha de acesso	| [INT03][link-int] | Must |
| RF04 | O aplicativo deve permitir o usuário sair da conta(logout)	| [INT04][link-int] | Should |
| RF05 | O aplicativo deve permitir o usuário cancelar sua conta | [INT13][link-int] | Could |
| RF06 | O aplicativo deve permitir o usuário consultar os seus dados pessoais | [INT12][link-int] | Should |
| RF07 | O aplicativo deve permitir o usuário alterar os seus dados pessoais | [INT12][link-int] | Should |
| RF08 | O aplicativo deve permitir o usuário consultar as pré-postagens já cadastradas	| [INT15][link-int] | Must |
| RF09 | O aplicativo deve permitir o usuário cadastrar pré-postagens	| [INT17][link-int], [INT18][link-int], [ST11][link-st], [ST12][link-st], [ST14][link-st], [ENT09][link-ent]	| Must | 
| RF10 | O aplicativo deve permitir o usuário excluir suas pré-postagens | [INT16][link-int] | Could |
| RF11 | O aplicativo deve permitir o usuário buscar/rastrear objetos | [INT27][link-int], [INT30][link-int], [ST01][link-st], [ENT04][link-ent] | Must |
| RF12 | Ao rastrear um objeto, o aplicativo deve permitir o usuário salvar um objeto na sua lista de objetos | [INT28][link-int], [ENT05][link-ent]| Could |
| RF13 | O aplicativo deve permitir o usuário visualizar os objetos entregues	| [INT31][link-int], [ST03][link-st], [ST05][link-st] | Must |
| RF14 | O aplicativo deve permitir o usuário visualizar os objetos em trânsito	| [INT31][link-int], [ST02][link-st], [ST03][link-st], [ST05][link-st] | Must |
| RF15 | Ao rastrear um objeto, o aplicativo deve enviar notificações, caso o usuário tenha interesse, referentes ao status de um objeto | [INT32][link-int], [ENT06][link-ent]	| Must |
| RF16 | O aplicativo deve permitir o usuário realizar simulações de postagens, assim conhecendo os preços e os prazos de cada modalidade de entrega | [INT35][link-int], [INT36][link-int], [INT37][link-int], [INT38][link-int], [ST09][link-st], [ST10][link-st] | Should |
| RF17 | O aplicativo deve permitir o usuário consultar os endereços cadastrados | [INT43][link-int] | Should |
| RF18 | O aplicativo deve permitir o usuário cadastrar endereços 	| [INT44][link-int] | Should |
| RF19 | O aplicativo deve permitir o usuário editar endereços 	| [INT45][link-int] | Could |
| RF20 | O aplicativo deve permitir o usuário excluir endereços  | [INT46][link-int] | Could |
| RF21 | O aplicativo deve permitir o usuário buscar as agências mais próximas em um raio de até 10 km | [INT21][link-int], [INT22][link-int], [INT23][link-int], [ST06][link-st], [ENT07][link-ent]	| Should |
| RF22 | Ao buscar agências, o aplicativo deve permitir o usuário selecionar as agências exibidas no mapa, assim tendo acesso as informações de uma agência  | [INT26][link-int], [ST07][link-st], [ST08][link-st], [ENT08][link-ent] | Should |
| RF23 | O aplicativo deve permitir o usuário consultar as suas agências favoritas | [INT26][link-int] | Could |
| RF24 | O aplicativo deve permitir o usuário adicionar agências aos favoritos | [INT42][link-int] | Would |
| RF25 | O aplicativo deve permitir o usuário remover agências aos favoritos | [INT42][link-int] | Could |


### MoSCoW - Requisitos Não Funcionais

| Identificador | Descrição | Origem | Prioridade |
| ------------- | --------- | ------ | ---------- |
| RNF01	| O aplicativo deve ser intuitivo e fácil de usar | [ENT01][link-ent], [INT08][link-int], [INT11][link-int] | Must |
| RNF02	| O aplicativo deve ser fácil de aprender | [ENT02][link-ent], [INT10][link-int], [INT11][link-int] | Must |
| RNF03	| O aplicativo deve seguro, assim protegendo os dados dos usuários | [INT07][link-int] | Must |
| RNF04	| O aplicativo deve ficar disponível 24/7 | [ENT11][link-ent]  | Must |
| RNF05	| O usuário deve consiguir acessar funcionalidades básicas, como buscar agências, rastrear objetos pelo código e simular preços e prazos sem fazer o login | [INT02][link-int] | Should |
| RNF06	| O aplicativo deve agilizar o processo de postagem de um objeto | [ENT10][link-ent] | Must |

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

Observações: As estimativas devem ser feitas em uma escala de 1 a 9; Foi adotado o valor pardrão 1 para o peso custo e peso risco.

### First Things First - Tabela

| Código | Beneficio Relativo | Penalidade Relativa | Valor Total | Valor % | Custo Relativo | Custo % | Risco Relativo | Risco % | Prioridade |
| ------ | ------------------ | ------------------- | ----------- | ------- | -------------- | ------- | -------------- | ------- | ---------- |
| RF02 | 8 | 8 | 16 | 4,8% | 3 | 2,85% | 1 | 1,12% | 1,20 |
| RF04 | 7 | 5 | 12 | 3,6% | 2 | 1,90% | 1 | 1,12% | 1,19 |
| RF08 | 9 | 8 | 17 | 5,1% | 3 | 2,85% | 2 | 2,24% | 1,00 |
| RF06 | 7 | 5 | 12 | 3,6% | 2 | 1,90% | 2 | 2,24% | 0,86 |
| RF12 | 9 | 8 | 17 | 5,1% | 3 | 2,85% | 3 | 3,37% | 0,81 |
| RF16 | 7 | 6 | 13 | 3,9% | 3 | 2,85% | 3 | 3,37% | 0,62 |
| RF17 | 7 | 6 | 13 | 3,9% | 3 | 2,85% | 3 | 3,37% | 0,62 |
| RF18 | 7 | 6 | 13 | 3,9% | 3 | 2,85% | 3 | 3,37% | 0,62 |
| RF10 | 6 | 4 | 10 | 3,0% | 3 | 2,85% | 2 | 2,24% | 0,58 |
| RF23 | 5 | 5 | 10 | 3,0% | 3 | 2,85% | 2 | 2,24% | 0,58 |
| RF24 | 5 | 5 | 10 | 3,0% | 3 | 2,85% | 2 | 2,24% | 0,58 |
| RF09 | 9 | 8 | 17 | 5,1% | 5 | 4,76% | 4 | 4,49% | 0,55 |
| RF03 | 7 | 6 | 13 | 3,9% | 4 | 3,80% | 3 | 3,37% | 0,54 |
| RF20 | 5 | 4 | 09 | 2,7% | 3 | 2,85% | 2 | 2,24% | 0,53 |
| RF11 | 9 | 9 | 18 | 5,4% | 6 | 5,71% | 5 | 5,61% | 0,47 |
| RF13 | 7 | 7 | 14 | 4,2% | 5 | 4,76% | 4 | 4,49% | 0,45 |
| RF22 | 8 | 7 | 15 | 4,5% | 5 | 4,76% | 5 | 5,61% | 0,43 |
| RF19 | 5 | 4 | 09 | 2,7% | 3 | 2,85% | 3 | 3,37% | 0,43 |
| RF05 | 6 | 6 | 12 | 3,6% | 5 | 4,76% | 4 | 4,49% | 0,38 |
| RF07 | 7 | 5 | 12 | 3,6% | 5 | 4,76% | 4 | 4,49% | 0,38 |
| RF14 | 9 | 9 | 18 | 5,4% | 7 | 6,66% | 7 | 7,86% | 0,37 |
| RF01 | 8 | 8 | 16 | 4,8% | 7 | 6,66% | 6 | 6,74% | 0,35 |
| RF15 | 9 | 8 | 17 | 5,1% | 8 | 7,61% | 8 | 8,98% | 0,30 |
| RF25 | 3 | 2 | 05 | 1,5% | 3 | 2,85% | 2 | 2,24% | 0,29 |
| RF21 | 8 | 7 | 15 | 4,5% | 8 | 7,61% | 8 | 8,98% | 0,27 |
| TOTAL | 177 | 156 | 333 | 100% | 105 | 100% | 89 | 100% |	- |



## Controle de versão

| Data     | Versão | Descrição                                               | Autor(es)        |
| -------- | ------ | ------------------------------------------------------- | ---------------- |
| 26/11/20 | 0.1    | Adição da segunda versão dos requisitos e priorização   | Gustavo Nogueira |

---

## Referências

- LEONHARDT, Rodrigo. Priorização #02 — MoSCoW. Medium. Disponível em: <https://medium.com/gerindo-produtos-digitais/prioriza%C3%A7%C3%A3o-02-moscow-84362fbc9350>. Acesso em: 26 de setembro de 2020.
- VARGAS, Ana. Priorização de requisitos. Matera. Disponível em: <http://www.matera.com/blog/post/priorizacao-de-requisitos>. Acesso em: 26 de setembro de 2020.

<!--Links-->
[link-int]: https://requisitos-de-software.github.io/2020.1-Correios/elicitacao/instrospeccao/#requisitos-elicitados
[link-ent]: https://requisitos-de-software.github.io/2020.1-Correios/elicitacao/entrevista/#requisitos-elicitados
[link-st]: https://requisitos-de-software.github.io/2020.1-Correios/elicitacao/storytelling/#requisitos-elicitados