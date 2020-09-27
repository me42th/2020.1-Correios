# Introspecção

---

## Introdução

É uma técnica rica e profunda que visa entender quais propriedades o sistema deve possuir. Demanda imaginação de quem está levantando os requisitos para estabelecer o que ele gostaria que estivesse no sistema, a fim de executar uma determinada tarefa. Apesar de ser uma técnica útil, a instrospeccção de um especialista, por exemplo, pode não ser reflitida na experiência real do usuário.

---

## Introspecção - Versão 1

### Ao acessar o aplicativo

- Visualizar uma mensagem de boas-vindas
- Visualizar as funcionalidades disponíveis sem cadastro
- Visualizar facilmente o local de _login_/cadastro

### Ao se cadastrar

- O cadastro deve ser intuitivo
- Deve progeter os dados pessoais
- Opção para se cadastrar utilizando e-mail
- Deve permitir acesso aos termos de política e privacidade

### Ao realizar login

- Realizar _login_ utilizando _username_ do próprio aplicativo
- Realizar _login_ com e-mail cadastrado
- Deve ser possível recuperar a senha de acesso

### Na tela principal

- Deve ter uma interface agradável
- Deve informar claramente as funcionaidades
- Sem _login_, deve exibir só as funcionalidades permitidas
- Com _login_, deve exibir todas as funcionalidades
- Deve possuir um menu de navegação intuitivo e fácil de entender

### Ao acessar meu Perfil

- Deve ser possível visualizar meus dados pessoais, assim como editá-los
- Deve ser possível excluir minha conta
- Deve ser possível editar preferências do aplicativo
- Deve ser possível sair da conta(_logout_)

### Ao acessar Pré-Postagem

- Deve ser possível visualizar as pré-postagens abertas
- Deve ser possível excluir uma pré-postagem aberta

### Ao escolher fazer Pré-Postagem

- Deve ser possível preencher as informações necessárias de maneira intuitiva
- Deve ser possível personalizar ao máximo a pré-postagem
- Deve ser possível saber o orçamento da pré-postagem
- Deve ser possível acessar um resumo com as informações da pré-postagem
- Deve ser possível acessar os dados necessários para a agência finalizar a postagem

### Ao escolher Buscar Agência

- Deve ser possível identificar as agências próximas com base na atual localização
- Deve ser possível buscar agências próximas a um endereço
- Deve ser possível selecionar a agência(por meio de um mapa), assim acessar informações completas(Endereço completo, telefone, horário de funcionamento, serviços...) e também podendo favoritar a agência

### Ao escolher Rastreamento

- Deve ser possível buscar encomendas por número de rastreio
- Deve ser possível visualizar as encomendas já pesquisadas para melhor acompanhamento
- Deve ser possível acompanhar as encomendas que enviei
- Deve ser possível acompanhar as encomentas enviadas para mim (com base no meu CPF)
- Deve ser possível saber se as encomendas que acompanho foram entregues
- Deve ser possível ativar as notificações de uma encomenda

### Ao escolher Simular Preços e Praços

- Deve ser possível simular a origem e destino
- Deve ser possível selecionar o tipo de objeto que será enviado
- Deve ser possível especificar as características do objeto com base no que se quer ser enviado
- Deve ser possível obter diferentes formas de envio assim como serviços adicionais ao envio

### Ao escolher Minhas Mensagens

- Deve ser possível visualizar as mensagens trocadas, assim como enviar novas
- Deve ser possível entrar em contato com outros usuários com quem estou enviando ou recebendo algo

### Ao escolher Senhas de Atendimento

- Deve ser possível receber uma senha de atendimento com base na agência que estou

### Ao escolher Agências Favoritas

- Deve ser possível ter acesso às agências salvas
- Deve ser possível remover uma agência dos favoritos

### Ao escolher Endereços Destinatários

- Deve ser possível visualizar os endereços que salvei
- Deve ser possível editar, adicionar e excluir endereços
- Deve ser possível identificar a quem pertence o endereço
- Deve ser possível identificar os dados de quem o endereço pertence
- Deve ser possível realizar busca dos endereços salvos

---

## Requisitos Elicitados

### Legenda :

- INT : Introspecção
- RF : Requisito funcional
- RN : Requisito não funcional

### Resumo:

- Total de requisitos identificados via introspecção : 46
- Requisitos Funcionais : 41
- Requisitos Não Funcionais : 5

| Identificador | Descrição                                                                              | Tipo  |
| ------------- | -------------------------------------------------------------------------------------- | ----- |
| INT01         | Deve aparecer uma mensagem de boas-vindas                                              | RF01  |
| INT02         | Deve aparecer as funcionalidades básicas sem necessidade de login                      | RNF01 |
| INT03         | Deve ser possível fazer login                                                          | RF02  |
| INT04         | Deve ser possível fazer logout                                                         | RF03  |
| INT05         | Deve ser possível fazer cadastro                                                       | RF04  |
| INT06         | Deve ser possível recuperar a senha de acesso                                          | RF05  |
| INT07         | Deve ser possível navegar de forma segura no aplicativo                                | RNF02 |
| INT08         | Deve ser fácil identificar o local de _login_/cadastro                                 | RNF03 |
| INT09         | Deve informar os termos de política e privacidade no momento do cadastro               | RF06  |
| INT10         | Deve ter uma interface agradável/intuitiva                                             | RNF04 |
| INT11         | Deve ser possível identificar as funcionalidades que não precisam de login             | RNF05 |
| INT12         | Deve ser possível visualizar meus dados pessoais e editá-los                           | RF07  |
| INT13         | Deve ser possível excluir a conta                                                      | RF08  |
| INT14         | Deve ser possível editar as preferências do aplicativo                                 | RF09  |
| INT15         | Deve apresentar pré-postagens abertas                                                  | RF10  |
| INT16         | Deve ser possível excluir uma pré-postagem aberta                                      | RF11  |
| INT17         | Deve ser possível adicionar as informações necessárias de uma pré-postagem             | RF12  |
| INT18         | Deve apresentar o orçamento da pré-postagem                                            | RF13  |
| INT19         | Deve informar o resumo da pré-postagem                                                 | RF14  |
| INT20         | Deve informar os dados necessários para a agência finalizar a postagem                 | RF15  |
| INT21         | Deve realizar buscar por CEP/Endereço                                                  | RF16  |
| INT22         | Deve ser possível acessar sua localização atual                                        | RF17  |
| INT23         | Deve pedir acesso à localização atual                                                  | RF18  |
| INT24         | Deve exibir um mapa na tela com as agências mais próximas                              | RF19  |
| INT25         | Deve permitir selecionar a agência no mapa                                             | RF20  |
| INT26         | Deve ser possível visualizar os dados da agência e favoritar a agência                 | RF21  |
| INT27         | Deve ser possível pesquisar por código de rastreio                                     | RF22  |
| INT28         | Deve informar encomendas salvas e já pesquisadas                                       | RF23  |
| INT29         | Deve informar o andamento das encomendas enviadas                                      | RF24  |
| INT30         | Deve ser possível visualizar as encomendas enviadas diretamente ao usuário             | RF25  |
| INT31         | Deve ser informado se as encomendas já foram entregues                                 | RF26  |
| INT32         | Deve ser possível ativar as notificações de uma encomenda                              | RF27  |
| INT33         | Deve ser possível simular preços                                                       | RF28  |
| INT34         | Deve ser possível simular prazos                                                       | RF29  |
| INT35         | Deve ser possível inserir origem e destino da encomenda                                | RF30  |
| INT36         | Deve ser possível selecionar o tipo de encomenda                                       | RF31  |
| INT37         | Deve ser possível informar as características físicas da encomenda (Peso, tamanho ...) | RF32  |
| INT38         | Deve ser possível selecionar a forma de envio dentre as disponíveis                    | RF33  |
| INT39         | Deve ser possível incluir serviços adicionais                                          | RF34  |
| INT40         | Deve ser possível enviar e receber mensagens                                           | RF35  |
| INT41         | Deve ser possível obter uma senha de atendimento                                       | RF36  |
| INT42         | Deve ser possível acessar as agências salvas/favoritas                                 | RF37  |
| INT43         | Deve ser possível visualizar e buscar endereços salvos                                 | RF38  |
| INT44         | Deve ser possível adicionar endereços                                                  | RF39  |
| INT45         | Deve ser possível editar um endereço salvo                                             | RF40  |
| INT46         | Deve ser possível excluir um endereços salvos                                          | RF41  |

---

## Controle de versão

| Data       | Versão | Descrição                                      | Autor(es)        |
| ---------- | ------ | ---------------------------------------------- | ---------------- |
| 22/09/2020 | 0.1    | Criação do Documento                           | Nícalo Ribeiro   |
| 22/09/2020 | 0.2    | Adição da definição                            | Nícalo Ribeiro   |
| 22/09/2020 | 0.3    | Adição dos primeiros tópicos da introspecção   | Nícalo Ribeiro   |
| 23/09/2020 | 0.4    | Finalização da primeira versão do documento    | Nícalo Ribeiro   |
| 23/09/2020 | 0.5    | Criação de tabela com requisitos identificados | Nícalo Ribeiro   |
| 26/09/2020 | 0.6    | Adição de ajustes nos tópicos e na tabela      | Gustavo Nogueira |

---

### Referências

- SERRANO, Maurício; SERRANO, Milene. Requisitos - Aula 07. 1º/2019. 50 slides. Material apresentado para a disciplina de Requisitos de Software no curso de Engenharia de Software da UnB, FGA.
