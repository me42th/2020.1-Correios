# Introspecção
É uma técnica rica e profunda que visa entender quais propriedades o sistema deve possuir. Demanda imaginação de quem está levantando os requisitos para estabelecer o que ele gostaria que estivesse no sistema, a fim de executar uma determinada tarefa. Apesar de ser uma técnica útil, a instrospeccção de um especialista, por exemplo, pode não ser reflitida na experiência real do usuário.

- - -  
  
## Introspecção - Versão 1  

### Ao acessar o aplicativo
* Visualizar uma mensagem de boas vindas
* Visualizar as funcionalidades disponíveis sem cadastro
* Visualizar facilmente o local de *login*/cadastro

### Ao se cadastrar
* O cadastro deve ser intuitivo
* Opção para se cadastrar utilizando e-mail
* Deve permitir acesso aos termos de política e privacidade

### Ao realizar login
* Realizar *login* utilizando *username* do próprio aplicativo
* Realizar *login* com e-mail cadastrado

### Na tela principal
* Deve ter uma interface agradável
* Deve informar claramente as funcionaidades
* Sem *login*, deve exibir só as funcionalidades permitidas
* Com *login*, deve exibir todas as funcionalidades
* Deve possuir um menu de navegação intuitivo

### Ao acessar meu Perfil
* Deve ser possível visulizar meus dados pessoais, assim como editá-los
* Deve ser possível excluir minha conta
* Deve ser possível editar preferências do aplicativo
* Deve ser possível deslogar

### Ao escolher fazer Pré-Postagem
* Deve ser possível visualizar as pré-postagens abertas 
* Deve ser possível preencher as informações de maneira intuitiva 
* Deve ser possível personalizar ao máximo a pré-postagem
* Deve ser possível saber o orçamento da pré-postagem
* Deve ser possível acessar os dados e informações da pré-postagem
  
### Ao escolher Buscar Agência
* Deve ser possível identificar as agências próximas com base na atual localização
* Deve ser possível buscar agências próximas a um endereço
* Deve ser possível selecionar a agência e obter informações mais completa(Endereço completo, telefone, horário de funcionamento, serviços...)

### Ao escolher Rastreamento
* Deve ser possível buscar ecomendas por número de rastreio
* Deve ser possível visualizar as encomendas já pesquisadas para melhor acompanhamento
* Deve ser possível acompanhar as encomendas que enviei
* Deve ser possível acompanhar as encomentas enviadas para mim ( com base no meu CPF)
* Deve ser possível saber se as encomendas que acompanho foram entregues

### Ao escolher Simular Preços e Praços
* Deve ser possível simular a origem e destino
* Deve ser possível selecionar o tipo de objeto que será enviado
* Deve ser possível especificar as características do objeto com base no que se quer ser enviado
* Deve ser possível obter diferentes formas de envio assim como serviços adicionais ao envio

### Ao escolher Minhas Mensagens
* Deve ser possível visualizar as mensagens trocadas, assim como enviar novas
* Deve ser possível entrar em contato com outros usuários com quem estou enviando ou recebendo algo

### Ao escolher Senhas de Atendimento
* Deve ser possível receber uma senha de adentimento com base na agência que estou

### Ao escolher Agências Favoritas
* Deve ser possível ter acesso às agências salvas

### Ao escolher Endereços Destinatários
* Deve ser possível visualizar os endereços que salvei
* Deve ser possível editar, adicionar e excluir endereços
* Deve ser possível identificar a quem pertence o endereço
* Deve ser possível identificar os dados de quem o endereço pertence
* Deve ser possível realizar busca dos endereços salvos
  
- - -

## Requisitos Elicitados
### Legenda :
*   INT : Introspecção
*   RF : Requisito funcional
*   RN : Requisito não funcional

### Resumo:
* Total de requisitos identificados via introspecção : 39
* Requisitos Funcionais : 32
* Requisitos Não Funcionais : 7
  

| Identificador| Descrição  | Tipo             |  
| ----- | ----------------- | ---------------- |  
| INT01 | Deve aparecer uma mensagem de boas-vindas | RF01 | 
| INT02 | Deve aparecer a funcionalidades sem login | RF02 |  
| INT03 | Deve ser possível identificar local de *login*/cadastro | RNF01 |
| INT04 | Deve ser possível *logar*/cadastrar | RNF02 |
| INT05 | Deve informar os termos de política e privacidade no momento do cadastro | RNF03 |
| INT06 | Deve ter uma interface agradável/intuitiva | RNF04 |
| INT07 | Deve ser possível identificar as funcionalidades que não precisam de login | RNF05 |
| INT08 | Deve ser possível visualizar meus dados pessoais e editá-los | RF03 |
| INT09 | Deve ser possível deslogar | RF04 |
| INT10 | Deve ser possível excluir a conta | RF05 |
| INT11 | Deve ser possível editar as preferências do aplicativo | RN06 |
| INT12 | Deve apresentar pré-postagens abertas | RF06 |
| INT13 | Deve ser possível adicionar o máximo de informações possíveis | RF07 |
| INT14 | Deve apresentar o orçamento da pré-postagem | RF08 |
| INT15 | Deve informar os dados da pré-postagem | RF09 |
| INT16 | Deve realizar buscar por CEP/Endereço | RF10 |
| INT17 | Deve ser possível acessar sua localização atual | RF11 |
| INT18 | Deve pedir acesso à localização atual | RNF07 |
| INT19 | Deve exibir um mapa na tela | RF12 |
| INT20 | Deve permitir selecionar a agência no mapa | RF13 |
| INT21 | Deve ser possível visualizar os dados da agência | RF14 |
| INT22 | Deve ser possível pesquisar por código de rastreio | RF15 |
| INT23 | Deve informar encomendas já pesquisadas | RF16 |
| INT24 | Deve informar o andamento das encomendas enviadas| RF17 |
| INT25 | Deve ser possível visualizar as encomendas enviadas diretamente ao usuário | RF18 |
| INT26 | Deve ser informado se as encomendas já foram entregues | RF19 |
| INT27 | Deve ser possível simular preços | RF20 |
| INT28 | Deve ser possível simular prazos | RF21 |
| INT29 | Deve ser possível inserir origem e destino da encomenda | RF22 |
| INT30 | Deve ser possível selcionar o tipo de encomenda| RF23 |
| INT31 | Deve ser possível informar as características físicas da encomenda (Peso, tamanho ...) | RF24 |
| INT32 | Deve ser possível selecionar a forma de envio dentre as disponíveis  | RF25 |
| INT33 | Deve ser possível incluir serviços adicionais | RF26 |
| INT34 | Deve ser possível enviar e receber mensagens | RF27 |
| INT35 | Deve ser possível obter uma senha de atendimento | RF28 |
| INT36 | Deve ser possível acessar as agências salvas | RF29 |
| INT37 | Deve ser possível visualizar endereços salvos | RF30 |
| INT38 | Deve ser possível adicionar, editar e excluir endereços salvos | RF31 |
| INT39 | Deve ser possível buscar o endereço | RF32 |





## Controle de versão

| Data     | Versão | Descrição         | Autor(es)        |
| -------- | ------ | ----------------- | ---------------- |
|22/09/2020| 0.1    | Criação do Documento| Nícalo Ribeiro |
|22/09/2020| 0.2    | Adição da definição| Nícalo Ribeiro |
|22/09/2020| 0.3    | Adição dos primeiros tópicos da introspecção| Nícalo Ribeiro |
|23/09/2020| 0.4    | Finalização da primeira versão do documento| Nícalo Ribeiro |
|23/09/2020| 0.5    | Criação de tabela com requisitos identificados | Nícalo Ribeiro |

- - -

### Referências
SERRANO, Maurício; SERRANO, Milene. Requisitos - Aula 07. 1º/2019. 50 slides. Material apresentado para a disciplina de Requisitos de Software no curso de Engenharia de Software da UnB, FGA.