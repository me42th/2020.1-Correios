# Requisitos Elicitados & Priorização

---

## Introdução

Esta página é destinada a armazenar todos os requisitos obtidos por meio das técnicas de elicitação utilizadas, bem como a priorização de cada desses requisitos.

---

## Tabelas

### Legenda

| Código | Significado             |
| ------ | ----------------------- |
| RF     | Requisito Funcional     |
| RNF    | Requisito Não Funcional |
| ENT    | Entrevista              |
| INT    | Introspecção            |
| ST     | Storytelling            |

### Requisitos Funcionais

| Identificador | Descrição                                                                      | Origem | Prioridade(MoSCoW) |
| ------------- | ------------------------------------------------------------------------------ | ------ | ------------------ |
| RF01          | O aplicativo deve permitir o cadastro de usuários                              | [INT04][link-int]  | Must               |
| RF02          | O aplicativo deve permitir o usuário alterar sua senha de acesso               | [INT05][link-int]  | Should             |
| RF03          | O aplicativo deve permitir o usuário fazer login                               | [INT03][link-int]  | Must               |
| RF04          | O aplicativo deve permitir o usuário sair da conta(logout)                     | [INT04][link-int]  | Should             |
| RF05          | O aplicativo deve permitir o usuário cancelar sua conta                        | [INT13][link-int]  | Could              |
| RF06          | O aplicativo deve permitir o usuário consultar os seus dados pessoais          | [INT12][link-int]  | Should             |
| RF07          | O aplicativo deve permitir o usuário alterar os seus dados pessoais            | [INT12][link-int]  | Should             |
| RF08          | O aplicativo deve permitir o usuário consultar as pré-postagens já cadastradas | [INT15][link-int]  | Must               |
| RF09          | O aplicativo deve permitir o usuário excluir suas pré-postagens                | [INT16][link-int]  | Could              |
| RF10 | Ao adicionar pré-postagem, o aplicativo deve permitir o usuário adicionar endereços de destinatários e remetentes | [INT17][link-int], [ENT09][link-ent] | Must |
|RF11| Ao adicionar pré-postagem, o aplicativo deve permitir o usuário adicionar e armazenar o tipo de objeto, dimensões e peso estimado do objeto ser postado |[INT17][link-int], [ENT09][link-ent] |Must|
|RF12| Ao adicionar pré-postagem, o aplicativo deve permitir o usuário adicionar o tipo de serviço de postagem que melhor lhe atenda | [INT18][link-int], [ENT09][link-ent] |Must|
|RF13| Ao adicionar pré-postagem, o aplicativo deve permitir o usuário adicionar serviços adicionais como Aviso de Recebimento, Declaração de Valor e Mão Própria etc |[INT18][link-int], [ENT09][link-ent]| Must|
|RF14| Ao finalizar pré-postagem, o aplicativo deve permitir o usuário visualizar número de identificação da pré-postagem que deverá ser apresentado em qualquer agência dos Correios, onde será finalizado o atendimento |[INT20][link-int], [ENT09][link-ent] |Must|
|RF15| Ao finalizar pré-postagem, o aplicativo deve permitir o usuário imprimir e salvar o rótulo de endereçamento |[INT20][link-int] |Must|
|RF16| Ao finalizar pré-postagem, o aplicativo deve permitir o usuário imprimir e salvar a declaração de conteúdo |[INT20][link-int]| Must|
|RF17| Ao finalizar pré-postagem, o aplicativo deve permitir o usuário visualizar o resumo da pré-postagem |[INT19][link-int] |Could|
|RF18| O aplicativo deve permitir o usuário consultar os endereços de destinatários salvos |[INT43][link-int] |Should|
|RF19| O aplicativo deve permitir o usuário cadastrar endereços de destinatários |[INT44][link-int] |Should|
|RF20| O aplicativo deve permitir o usuário editar endereços de destinatários |[INT45][link-int] |Could|
|RF21| O aplicativo deve permitir o usuário excluir endereços de destinatários |[INT46][link-int] |Could|
|RF22| O aplicativo deve permitir o usuário buscar as agências mais próximas de sua localização em um raio de até 10 km |[INT22][link-int], [INT23][link-int], [ENT07][link-ent] |Should|
|RF23| O aplicativo deve permitir o usuário buscar as agências mais próximas de um endereço ou cep em um raio de até 10 km |[INT21][link-int]| Should|
|RF24| Ao buscar agências, o aplicativo de exibir um mapa para exibir as agẽncias mais próximas |[INT25][link-int] |Should|
|RF25| Ao buscar agências, o aplicativo deve permitir o usuário selecionar as agências exibidas no mapa, assim tendo acesso as informações de uma agência |[INT26][link-int], [ENT08][link-ent] |Should|
|RF26| O aplicativo deve permitir o usuário adicionar agências aos favoritos |[INT26][link-int] |Could|
|RF27| O aplicativo deve permitir o usuário remover agências aos favoritos |[INT42][link-int] |Would|
|RF28| O aplicativo deve permitir o usuário consultar as suas agências favoritas |[INT42][link-int] |Could|
|RF29| O aplicativo deve permitir o usuário visualizar os objetos em trânsito| |Must|
|RF30| O aplicativo deve permitir o usuário visualizar os objetos entregues |[INT31][link-int] |Must|
|RF31| O aplicativo deve permitir o usuário buscar objetos por número do rastreio |[INT27][link-int] |Must|
|RF32| O aplicativo deve permitir o usuário buscar objetos por código de barras |[INT27][link-int] |Would|
|RF33| O aplicativo deve permitir o usuário buscar objetos a partir do seu cpf/cnpj |[INT30][link-int], [ENT04][link-ent] |Should|
|RF34| Ao rastrear um objeto, o aplicativo deve permitir o usuário visualizar o histórico de entrega de um objeto |[INT29][link-int], [ENT03][link-ent] |Must|
|RF35| Ao rastrear um objeto, o aplicativo deve permitir o usuário salvar um objeto na sua lista de objetos |[INT28][link-int], [ENT05][link-ent] |Could|
|RF36| Ao rastrear um objeto, o aplicativo deve enviar notificações, caso o usuário tenha interesse, referentes ao status de um objeto |[INT32][link-int], [ENT06][link-ent] |Must|
|RF37| Ao solicitar uma simulação, o aplicativo deve permitir o usuário adicionar o cep de origem e destino da simulação |[INT35][link-int] |Should|
|RF38| Ao solicitar uma simulação, o aplicativo deve permitir o usuário adicionar o tipo de objeto, peso estimado e dimensões do objeto |[INT36][link-int], [INT37][link-int] |Should|
|RF39| Ao realizar a simulação, o aplicativo deve permitir o usuário visualizar os serviços, preços e prazos referentes a postagem solicitada |[INT38][link-int], [INT39][link-int] |Should|


### Requisitos Não Funcionais

| Identificador | Descrição                                           | Origem | Prioridade(MoSCoW) |
| ------------- | --------------------------------------------------- | ------ | ------------------ |
|RNF01|		O aplicativo deve ser intuitivo e fácil de usar	|[ENT01][link-ent], [INT08][link-int], [INT11][link-int] |Must|
|RNF02|		O aplicativo deve ser fácil de aprender	|[ENT02][link-ent], [INT10][link-int], [INT11][link-int] |Must|
|RNF03|		O aplicativo deve seguro, assim protegendo os dados dos usuários |[INT07][link-int] |	Must|
|RNF04|		O aplicativo deve ficar disponível 24/7	|[ENT11][link-ent] |Must|
|RNF05|		O usuário deve consiguir acessar funcionalidades básicas, como buscar agências, rastrear objetos pelo código e simular preços e prazos sem fazer o login |[INT02][link-int]	|Should|
|RNF06|		O aplicativo deve agilizar o processo de postagem de um objeto |[ENT10][link-ent] |Must|


---

## Controle de versão

| Data     | Versão | Descrição                                              | Autor(es)        |
| -------- | ------ | ------------------------------------------------------ | ---------------- |
| 26/09/20 | 0.1    | Adição da primeira versão dos requisitos e priorização | Gustavo Nogueira |

---

## Referências

<!--Links-->
[link-int]: https://requisitos-de-software.github.io/2020.1-Correios/elicitacao/instrospeccao/#requisitos-elicitados
[link-ent]: https://requisitos-de-software.github.io/2020.1-Correios/elicitacao/entrevista/#requisitos-elicitados
