# Backward-From
---

## Introdução

O rastreamento de requisitos é utilizado para prover relacionamentos entre requisitos, arquitetura e implementação final do sistema e possibilita uma adequada compreensão dos relacionamentos de dependência entre requisitos e através dos artefatos de requisitos, de arquitetura e de implementação.

Rastreabilidade backward-from (para trás, a partir de), ligando requisitos às suas fontes.

---

## Legenda

| Código | Significado             |
| ------ | ----------------------- |
| RF     | Requisito Funcional     |
| RNF    | Requisito Não Funcional |
| ENT    | Entrevista              |
| INT    | Introspecção            |
| ST     | Storytelling            |

## Matriz de Rastreabilidade

### Requisitos Funcionais

| Identificador	| Descrição	| Origem |
| -------------	| ---------	| ------ | 
| RF01 | O aplicativo deve permitir o cadastro de usuários	| [INT04][link-int] | 
| RF02 | O aplicativo deve permitir o usuário fazer login	| [INT05][link-int]	|
| RF03 | O aplicativo deve permitir o usuário alterar sua senha de acesso	| [INT03][link-int] | 
| RF04 | O aplicativo deve permitir o usuário sair da conta(logout)	| [INT04][link-int] |
| RF05 | O aplicativo deve permitir o usuário cancelar sua conta | [INT13][link-int] | 
| RF06 | O aplicativo deve permitir o usuário consultar os seus dados pessoais | [INT12][link-int] |
| RF07 | O aplicativo deve permitir o usuário alterar os seus dados pessoais | [INT12][link-int] |
| RF08 | O aplicativo deve permitir o usuário consultar as pré-postagens já cadastradas	| [INT15][link-int] | 
| RF09 | O aplicativo deve permitir o usuário cadastrar pré-postagens	| [INT17][link-int], [INT18][link-int], [ST11][link-st], [ST12][link-st], [ST14][link-st], [ENT09][link-ent]	|  
| RF10 | O aplicativo deve permitir o usuário excluir suas pré-postagens | [INT16][link-int] | 
| RF11 | O aplicativo deve permitir o usuário buscar/rastrear objetos | [INT27][link-int], [INT30][link-int], [ST01][link-st], [ENT04][link-ent] | 
| RF12 | Ao rastrear um objeto, o aplicativo deve permitir o usuário salvar um objeto na sua lista de objetos | [INT28][link-int], [ENT05][link-ent]| 
| RF13 | O aplicativo deve permitir o usuário visualizar os objetos entregues	| [INT31][link-int], [ST03][link-st], [ST05][link-st] | 
| RF14 | O aplicativo deve permitir o usuário visualizar os objetos em trânsito	| [INT31][link-int], [ST02][link-st], [ST03][link-st], [ST05][link-st] | 
| RF15 | Ao rastrear um objeto, o aplicativo deve enviar notificações, caso o usuário tenha interesse, referentes ao status de um objeto | [INT32][link-int], [ENT06][link-ent]	| 
| RF16 | O aplicativo deve permitir o usuário realizar simulações de postagens, assim conhecendo os preços e os prazos de cada modalidade de entrega | [INT35][link-int], [INT36][link-int], [INT37][link-int], [INT38][link-int], [ST09][link-st], [ST10][link-st] |
| RF17 | O aplicativo deve permitir o usuário consultar os endereços cadastrados | [INT43][link-int] |
| RF18 | O aplicativo deve permitir o usuário cadastrar endereços 	| [INT44][link-int] |
| RF19 | O aplicativo deve permitir o usuário editar endereços 	| [INT45][link-int] | 
| RF20 | O aplicativo deve permitir o usuário excluir endereços  | [INT46][link-int] | 
| RF21 | O aplicativo deve permitir o usuário buscar as agências mais próximas em um raio de até 10 km | [INT21][link-int], [INT22][link-int], [INT23][link-int], [ST06][link-st], [ENT07][link-ent]	|
| RF22 | Ao buscar agências, o aplicativo deve permitir o usuário selecionar as agências exibidas no mapa, assim tendo acesso as informações de uma agência  | [INT26][link-int], [ST07][link-st], [ST08][link-st], [ENT08][link-ent] |
| RF23 | O aplicativo deve permitir o usuário consultar as suas agências favoritas | [INT26][link-int] | 
| RF24 | O aplicativo deve permitir o usuário adicionar agências aos favoritos | [INT42][link-int] | 
| RF25 | O aplicativo deve permitir o usuário remover agências aos favoritos | [INT42][link-int] | 


### Requisitos Não Funcionais

| Identificador | Descrição | Origem | 
| ------------- | --------- | ------ | 
| RNF01	| O aplicativo deve ser intuitivo e fácil de usar | [ENT01][link-ent], [INT08][link-int], [INT11][link-int] | 
| RNF02	| O aplicativo deve ser fácil de aprender | [ENT02][link-ent], [INT10][link-int], [INT11][link-int] | 
| RNF03	| O aplicativo deve seguro, assim protegendo os dados dos usuários | [INT07][link-int] | 
| RNF04	| O aplicativo deve ficar disponível 24/7 | [ENT11][link-ent]  | 
| RNF05	| O usuário deve consiguir acessar funcionalidades básicas, como buscar agências, rastrear objetos pelo código e simular preços e prazos sem fazer o login | [INT02][link-int] |
| RNF06	| O aplicativo deve agilizar o processo de postagem de um objeto | [ENT10][link-ent] | 


## Controle de versão

| Data     | Versão | Descrição                                               | Autor(es)        |
| -------- | ------ | ------------------------------------------------------- | ---------------- |
| 26/11/20 | 0.1    | Adição da primeira versão da página                     | Gustavo Nogueira |

---

## Referências

* SERRANO, Maurício; SERRANO, Milene. Requisitos - Aula 26. 2º/2019. 44 slides. Material apresentado para a disciplina de Requisitos de Software no curso de Engenharia de Software da UnB, FGA.

* LEITE, Julio. Rastreabilidade de Requisitos. Disponível em: <http://www.dbd.puc-rio.br/depto_informatica/05_20_sayao.pdf>. Acesso em: 26 de novembro de 2020.

<!--Links-->
[link-int]: https://requisitos-de-software.github.io/2020.1-Correios/elicitacao/instrospeccao/#requisitos-elicitados
[link-ent]: https://requisitos-de-software.github.io/2020.1-Correios/elicitacao/entrevista/#requisitos-elicitados
[link-st]: https://requisitos-de-software.github.io/2020.1-Correios/elicitacao/storytelling/#requisitos-elicitados