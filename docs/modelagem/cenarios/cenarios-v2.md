# Cenários v2
- - -
> Essa é a **segunda** versão dos Cenários  
> A primeira versão pode ser encontrada aqui : [Cenários v1](./cenarios.md)

## Introdução 

Cenários são exemplos reais de como um sistema pode ser usado;  
Eles devem incluir :  

- Uma descrição da situação inicial;  
- Uma descrição do fluxo normal de eventos;  
- Uma descrição do que pode dar errado;  
- Informação sobre outras atividades concorrentes;  
- Uma descrição do estado quando o cenário termina.  

- - -

## C&L
C&L foi a ferramenta utilizada para desenvolver os cenários encontrados no app dos Correios.	
O C&L:
Foi inicialmente desenvolvido como um trabalho acadêmico e hoje evolui para um projeto de Software Livre. Sua responsabilidade é do Grupo de Engenharia de Requisitos, da Puc-Rio.

O objetivo desse projeto é estudar e analisar técnicas de evolução de software através de um experimento prático. 

A aplicação utilizada como projeto inicial a ser 'evoluído' foi uma ferramenta de Edição de Cenários e Léxico disponibilizada em http://springfield.genesis.puc-rio.br:81/~pes/.

<a href= "http://pes.inf.puc-rio.br/cel/index_old.htm" target="blank"> Página da ferramenta </a>

- - -
## Cenários Desenvolvidos

**Resumo:**  

| Tipo   | Quantidade              |
| ------ | ----------------------- |
| Total  | 12                      |

#### Cenário 01 - C01  
|Cenário 01 | C01 |
| ----------|-----|
|Título | agências favoritas |
|Objetivo| Visualizar agências favoritadas e acessar detalhadamente suas informações|
|Contexto| Selecionar a opção no menu lateral <br> Ter acesso à *internet* <br> Possuir conta e estar *logado* |
|Atores  | Usuário cadastrado e *logado*|
|Recursos| Acesso à *internet* <br> Aplicativo instalado no *smartphone* <br> Possuir conta e *logar* <br> Possuir agências previamente favoritadas|
|Exceção | Indisponibilidade do aplicativo<br> *Internet* indisponível <br> Não possuir conta ou não estar *logado* <br> Nenhuma agência favoritada vinculada à conta |
|Episódios| Usuário abrir o aplicativo <br> Usuário acessar o ícone no menu lateral <br> Usuário visualizar e obter informações sobre a agência desejada <br> Caso não exista agências salvas, é possível favoritá-las em <u>buscar agência</u>     |

- - - 
#### Cenário 02 - C02  
|Cenário 02 | C02 |
| ----------|-----|
|Título | buscar agência |
|Objetivo| Encontrar agências próximas à localidade atual do usuário ou por endereço desejado |
|Contexto| Selecionar a opção na tela inicial <br> Ter acesso à *internet* |
|Atores  |Usuário cadastrado e não cadastrado|
|Recursos|Acesso à *internet* <br> Aplicativo instalado no *smartphone* <br> Permitir o aplicativo acessar a localização do dispositivo|
|Exceção |Indisponibilidade do aplicativo <br> *Internet* indisponível <br> Nenhum endereço informado ou aplicativo sem acesso à localização do dispositivo|
|Episódios|Usuário abrir o aplicativo <br> Usuário acessar o ícone de buscar agências <br> Usuário informar o endereço desejado <br> Usuário permitir acesso à localização do dispositivo|

- - - 
#### Cenário 03 - C03    
|Cenário 03 | C03 |
| ----------|-----|
|Título | cadastro |
|Objetivo| Se cadastrar no aplicativo para ter acesso a certos recursos |
|Contexto|Selecionar a opção no canto superior da tela <br> Ter acesso à *internet*|
|Atores  |Usuário não cadastrado|
|Recursos|Acesso à *internet* <br> Conhecimento de todos os dados pessoais requisitados|
|Exceção |Indisponibilidade do aplicativo <br> *Internet* indisponível <br> Dados inválidos|
|Episódios|Usuário abrir o aplicativo <br> Usuário desejar acessar alguma das funcionalidades do aplicativo que necessitam de cadastro <br> Usuário selecionar o ícone na parte superior ou no menu lateral do aplicativo <br> Informar os dados necessários <br> Confirmar o cadastro no *e-mail*|

- - - 
#### Cenário 04 - C04  
|Cenário 04 | C04 |
| ----------|-----|
|Título | dados pessoais |
|Objetivo|Verificar e atualizar os dados pessoais da conta|
|Contexto|Selecionar a opção na tela inicial <br> Ter acesso à *internet* <br> Possuir e estar logado na conta|
|Atores  |Usuários cadastrados e logados|
|Recursos|Acesso à *internet* <br> Aplicativo instalado|
|Exceção |Indisponibilidade do aplicativo <br> *Internet* indisponível <br> Usuário não cadastrado|
|Episódios|Usuário abrir o aplicativo <br> Usuário acessar o ícone do perfil <br> Usuário atualizar dados que estão incorretos ou inserir dados faltantes|

- - - 
#### Cenário 05 - C05  
|Cenário 05 | C05 |
| ----------|-----|
|Título |login|
|Objetivo|Efetuar login no aplicativo|
|Contexto|Selecionar opção na parte superior da tela ou menu lateral <br> Ter acerro à *internet* <br> Possuir <u>cadastro</u>|
|Atores  |Usuário cadastrado e não logado|
|Recursos|Acesso à *internet* <br> Cadastro previamente concluído|
|Exceção |Indisponibilidade do aplicativo<br> *Internet* indisponível <br> Não possuir <u>cadastro</u> <br> Esquecer login e/ou senha|
|Episódios|Usuário abrir o aplicativo <br> Usuário desjar utilizar alguma funcionalidade que necessita de login <br> Usuário acessar a opção de login na parte superior ou menu lateral do aplicativo <br> Informar corretamente os dados|

- - - 
#### Cenário 06 - C06  
|Cenário 06 | C06 |
| ----------|-----|
|Título | meus endereços |
|Objetivo| Adicionar e vizualizar endereços para usos futuros|
|Contexto|Selecionar a opção no menu lateral <br> Ter acesso à *internet* <br> Conhecer os dados do endereço a ser salvo|
|Atores  |Usuário cadastrado e logado|
|Recursos|Acesso à *internet* <br> Aplicativo instalado|
|Exceção |Indisponibilidade do aplicativo <br> *Internet* indisponível <br> Usuário desconhecer os dados necessários para cadastrar um novo endereço <br> Usuário não possuir endereços salvos|
|Episódios|Usuário abrir o aplicativo <br> Usuário acessar o ícone no menu lateral <br> Usuário visualizar detalhadamente endereços já salvos <br> Usuário cadastrar novos endereços|

- - - 
#### Cenário 07 - C07  
|Cenário 07 | C07 |
| ----------|-----|
|Título |minhas mensagens|
|Objetivo|Visualizar as mensagens trocadas dentro do aplicativo|
|Contexto|Selecionar a opção na tela inicial <br> Ter acesso à *internet* <br> Estar logado|
|Atores  |Usuários cadastrados e logados|
|Recursos|Acesso à *internet* <br> Aplicativo instalado <br> Dados pessoais atualizados|
|Exceção |Indisponibilidade do aplicativo <br> *Internet* indisponível <br> <u>Dados pessoais</u> desatualizados <br> Destinatário das mensagens não ser cadastrado|
|Episódios|Usuário abrir o aplicativo <br> Usuário acessar o ícone de "Minhas mensagens" <br> Usuário se comunicar com outros usuários|

- - - 
#### Cenário 08 - C08  
|Cenário 08 | C08 |
| ----------|-----|
|Título |pré-postagem|
|Objetivo|Realizar a pré-postagem de uma encomenda|
|Contexto|Selecionar a opção na tela inicial do aplicativo|
|Atores  |Usuários cadastrados e não cadastrados|
|Recursos|Acesso à *internet* <br> Aplicativo instalado|
|Exceção |Indisponibilidade do aplicativo <br> *Internet* indisponível|
|Episódios|Usuário abrir o aplicativo <br> Usuário acessar o ícone da pré-postagem <br> Usuário realizar as etapas solicitadas para concluir o procedimento|

- - - 
#### Cenário 09 - C09  
|Cenário 09 | C09 |
| ----------|-----|
|Título |rastreamento 01|
|Objetivo|Rastrear alguma encomenda por código de rastreio|
|Contexto|Selecionar a opção na tela inicial|
|Atores  |Usuário cadastrado e não cadastrado|
|Recursos|Acesso à *internet* <br> Aplicativo instalado|
|Exceção |Indisponibilidade do aplicativo <br>*Internet* indisponível<br>Desconhecimento do código de rastreio|
|Episódios|Usuário abrir o aplicativo<br>Usuário acessar o ícone de rastreio<br>Usuário informar o código da encomenda ou escanear o código pela câmera|

- - - 
#### Cenário 10 - C10  
|Cenário 10 | C10 |
| ----------|-----|
|Título |rastreamento 02|
|Objetivo|Rastrear encomenda vinculada ao CPF/CNPJ do usuário|
|Contexto|Selecionar a opção na tela inicial <br> Ter acesso à *internet* <br>Selecionar a oção de rastreio por encomenda vinculada ao CPF/CNPJ|
|Atores  |Usuário cadastrado e logado|
|Recursos|Acesso à *internet*<br> Aplicativo instalado <br> CPF/CNPJ válido<br> Conta no aplicativo atualizada|
|Exceção |Indisponibilidade do aplicativo <br> *Internet* indisponível<br> Nenhuma encomenda vinculada <br> CPF/CNPJ inválidos|
|Episódios|Usuário abrir o aplicativo<br>Usuário acessar o ícone de rastreio<br>Usuário verificar se está logado<br>Usuário acompanhar encomendas previamente já rastreadas pelo CPF/CNPJ<br>Usuário rastrear novas encomendas via CPF/CNPJ|

- - - 
#### Cenário 11 - C11  
|Cenário 11 | C11 |
| ----------|-----|
|Título |rastreamento 03|
|Objetivo|Acompanhar o histórico das ecomendas|
|Contexto|Selecionar a opção na tela inicial<br>Ter acesso à *internet*|
|Atores  |Usuário cadastrado e logado|
|Recursos|Acesso à *internet* <br>Aplicativo instalado <br>CPF/CNPJ válido<br> Conta atualizada <br> Encomendas no aplicativo|
|Exceção |Indisponibilidade do aplicativo <br> *Internet* indisponível<br>Nenhuma encomenda vinculada ao CPF/CNPJ<br>CPF/CNPJ inválidos<br>Nenhuma encomenda acompanhada|
|Episódios|Usuário abrir o aplicativo<br>Usuário acessar o ícone de rastreio<br>Usuário acompanhar as encomendas que estão em trânsito <br>Usuário visualizar as encomendas que já foram entregues|

- - - 
#### Cenário 12 - C12  
|Cenário 12 | C12 |
| ----------|-----|
|Título |simular prazos e preços|
|Objetivo|Simular o prazo e o preço de uma possível encomenda a ser postada|
|Contexto|Selecionar a opção na tela inicial<br>Ter acesso à *internet*|
|Atores  |Usuários cadastrados e não cadastrados|
|Recursos|Acesso à *internet* <br> Aplicativo instalado|
|Exceção |Indisponibilidade do aplicativo <br> *Internet* indisponível<br> Usuário não conhecer os dados necessários para a operação|
|Episódios|Usuário abrir o aplicativo <br> Usuário acessar o ícone de "Simular preços e preazos" <br> Usuário conhecer os endereços de origem e destino <br> Usuário informar as características da encomenda<br> Usuário informar os serviços adicionais desejados|

- - - 


## Controle de versão

| Data     | Versão | Descrição                                               | Autor(es)           |
| -------- | ------ | ------------------------------------------------------- | ------------------- |
| 01/11/20 | 0.1    | Criação das tabelas de Cenário  | Nícalo Ribeiro |
| 02/11/20 | 0.2    | Criação da página  | Nícalo Ribeiro |
| 08/11/20 | 0.3    | Revisão e formatação da página  | Nícalo Ribeiro |
| 08/11/20 | 0.4    | Adição de novas tabelas  | Nícalo Ribeiro |