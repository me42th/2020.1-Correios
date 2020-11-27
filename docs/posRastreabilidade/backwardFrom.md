# Backward-From
---

## Introdução


---

## Legenda

| Código | Significado           |
| ------ | --------------------- |
| RF     | Requisitos Funcionais |
| UC     | Use Case(Caso de Uso) |
| FP     | Fluxo Principal       |
| FA     | Fluxo Alternativo     |
| FE     | Fluxo de Exceção      |
| PE     | Ponto de Extensão     |
| CE     | Cenário               |
| US     | User Story            |


## Tabela de Requisitos Funcionais

| Código | Descrição | Cenário(s) | Caso(s) de Uso | História de Usuário |
| ------ | --------- | ---------- | -------------- | ------------------- |
| RF01 | O aplicativo deve permitir o cadastro de usuários | [CE03][link-ce] | [UC02-PE02][link-uc] | [US01][link-us] |
| RF02 | O aplicativo deve permitir o usuário fazer login | [CE05][link-ce] | [UC01][link-uc] | [US02][link-us] |
| RF03 | O aplicativo deve permitir o usuário alterar sua senha de acesso | - | [UC01-PE01][link-uc] |	[US03][link-us] |
| RF04 | O aplicativo deve permitir o usuário sair da conta(logout)	| -	| - | [US04][link-us] |
| RF05 | O aplicativo deve permitir o usuário cancelar sua conta | - | [UC10][link-uc] | [US05][link-us] | 
| RF06 | O aplicativo deve permitir o usuário consultar os seus dados pessoais | [CE04][link-ce] | [UC09][link-uc] | [US06][link-us] |
| RF07 | O aplicativo deve permitir o usuário alterar os seus dados pessoais | [CE04][link-ce] | [UC09-PE09][link-uc] | [US07][link-us] |
| RF08 | O aplicativo deve permitir o usuário consultar as pré-postagens já cadastradas | [CE08][link-ce] | [UC06][link-uc], [UC06-FP06][link-uc], [UC06-FA04][link-uc] | [US08][link-us] |
| RF09 | O aplicativo deve permitir o usuário cadastrar pré-postagens | [CE06][link-ce] | [UC06][link-uc], [UC07-FP10][link-uc] | [US09][link-us] | 
| RF10 | O aplicativo deve permitir o usuário excluir suas pré-postagens | [CE08][link-ce]	| [UC06][link-uc], [UC06-FP08][link-uc] | [US10][link-us] |
| RF11 | O aplicativo deve permitir o usuário buscar/rastrear objetos  | [CE09][link-ce], [CE10][link-ce]	| [UC03][link-uc] | [US11][link-us] |
| RF12 | Ao rastrear um objeto, o aplicativo deve permitir o usuário salvar um objeto na sua lista de objetos | - | [UC03-PE04][link-uc] | [US12][link-us] |
| RF13 | O aplicativo deve permitir o usuário visualizar os objetos entregues | [CE11][link-ce] | [UC03-PE05][link-uc] | [US13][link-us] |
| RF14 | O aplicativo deve permitir o usuário visualizar os objetos em trânsito | [CE11][link-ce] | [UC03-PE04][link-uc] | [US14][link-us] |
| RF15 | Ao rastrear um objeto, o aplicativo deve enviar notificações, caso o usuário tenha interesse, referentes ao status de um objeto | - | [UC03][link-uc] | [US15][link-us] |
| RF16 | O aplicativo deve permitir o usuário realizar simulações de postagens, assim conhecendo os preços e os prazos de cada modalidade de entrega | [CE12][link-ce] | [UC05][link-uc] | [US16][link-us] |
| RF17 | O aplicativo deve permitir o usuário consultar os endereços cadastrados | [CE06][link-ce] | [UC07-FP09][link-uc], [UC07-FA06][link-uc] | [US17][link-us] |
| RF18 | O aplicativo deve permitir o usuário cadastrar endereços | [CE06][link-ce] | [UC07-FP10][link-uc] | [US18][link-us] |
| RF19 | O aplicativo deve permitir o usuário editar endereços | [CE06][link-ce] | [UC07-FP11][link-uc] | [US19][link-us] |
| RF20 | O aplicativo deve permitir o usuário excluir endereços | [CE06][link-ce] | [UC07-FP12][link-uc] | [US20][link-us] |
| RF21 | O aplicativo deve permitir o usuário buscar as agências mais próximas em um raio de até 10 km | [CE02][link-ce] | [UC04-FA03][link-uc], [UC04-FP04][link-uc] | [US21][link-us] |
| RF22 | Ao buscar agências, o aplicativo deve permitir o usuário selecionar as agências exibidas no mapa, assim tendo acesso as informações de uma agência | [CE02][link-ce] | [UC04-PE06][link-uc] | [US22][link-us] |
| RF23 | O aplicativo deve permitir o usuário consultar as suas agências favoritas | [CE01][link-ce] | [UC08-FP13][link-uc] | [US23][link-us] |
| RF24 | O aplicativo deve permitir o usuário adicionar agências aos favoritos | [CE01][link-ce] | [UC04-PE07][link-uc] | [US24][link-us] |
| RF25 | O aplicativo deve permitir o usuário remover agências aos favoritos | [CE01][link-ce] | [UC08-PE08][link-uc] | [US25][link-us] |


## Controle de versão

| Data     | Versão | Descrição                                               | Autor(es)        |
| -------- | ------ | ------------------------------------------------------- | ---------------- |
| 26/11/20 | 0.1    | Adição da primeira versão da página                     | Nícalo Ribeiro   |

---

## Referências


<!--Links-->
[link-ce]: https://requisitos-de-software.github.io/2020.1-Correios/modelagem/cenarios/cenarios-v2/
[link-uc]: https://requisitos-de-software.github.io/2020.1-Correios/modelagem/casosDeUso/casosDeUso/
[link-us]: https://requisitos-de-software.github.io/2020.1-Correios//modelagem/historiasDeUsuario/historiasDeUsuario/