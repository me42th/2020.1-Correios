# Léxicos v2

- - -
> Essa é a **segunda** versão dos Léxicos  
> A primeira versão pode ser encontrada aqui : [Léxicos v1](./lexicos.md)
## Introdução

Atividade que visa elaborar modelos capazes de representar características ou comportamentos de um software.  
**LAL - Léxico Ampliado da Linguagem -** Trata-se de uma técnica que compõe os cenários de forma a descrever os símbolos de uma linguagem. Nesse caso, essa técnica descreve alguns termos relacionados ao software em questão. Cada símbolo tem um nome, uma noção e um impacto, sendo que:  
**noção** : é o que significa o símbolo (denotação);  
**impacto** : é o efeito do símbolo na aplicação ou o efeito de algo na aplicação sobre o símbolo (conotação).  

Símbolos também possuem uma classificação, que pode ser :   

- **estado**;  
- **verbo**;  
- **objeto**;  
- **sujeito**.   

- - -

## C&L
C&L foi a ferramenta utilizada para desenvolver os léxicos encontrados no app dos Correios.	
O C&L:
Foi inicialmente desenvolvido como um trabalho acadêmico e hoje evolui para um projeto de Software Livre. Sua responsabilidade é do Grupo de Engenharia de Requisitos, da Puc-Rio.

O objetivo desse projeto é estudar e analisar técnicas de evolução de software através de um experimento prático. 

A aplicação utilizada como projeto inicial a ser 'evoluído' foi uma ferramenta de Edição de Cenários e Léxico disponibilizada em http://springfield.genesis.puc-rio.br:81/~pes/.

<a href= "http://pes.inf.puc-rio.br/cel/index_old.htm" target="blank"> Página da ferramenta </a>

- - -

## Léxicos Desenvolvidos
Foi seguido o padrão da ferramenta. Em breve serão ajustadas para tabela.

**Resumo:**  

| Tipo   | Quantidade              |
| ------ | ----------------------- |
| Objeto | 05                      |
| Verbo  | 06                      |
| Estado | 03                      |
| Total  | 14                      |  

- - -

### Léxico 01
|Léxico 01 | L01|
|----------|----|
|Nome      | agência   |
|Noção     | São as agências dos Correios <br> Podem ser buscadas por um <u>usuário</u> em <u>buscar agência</u>| 
|Classificação| Objeto |
|Impacto(s)| Detalha os dados da agência <br> Pode ser <u>salva</u> para fácil acesso|
|Sinônimo(s)| correios, local, estação  |  

- - -
### Léxico 02
|Léxico 02 | L02|
|----------|----|
|Nome      | buscar agência   |
|Noção     | Tarefa realizada pelo <u>usuário</u><br>Ocorre quando deseja-se encontrar alguma <u>agência</u> dos <u>correios</u> <br>A funcionalidade se encontra na página inicial  |
|Classificação| Verbo |
|Impacto(s)| O <u>usuário</u> busca por <u>agência</u> próximo à sua localidade ou por endereço   |
|Sinônimo(s)| procurar agência, buscar endereço |  

- - -
### Léxico 03
|Léxico 03 | L03|
|----------|----|
|Nome      | dimensões  |
|Noção     | São as dimensões físicas de um <u>objeto</u> a ser postado |
|Classificação| Estado |
|Impacto(s)| Dados necessários para realizar uma pré-<u>postagem</u> e simulação de <u>preços e prazos</u>   |
|Sinônimo(s)| tamanho, peso, altura, largura  |  

- - -
### Léxico 04
|Léxico 04 | L04|
|----------|----|
|Nome      | encomenda   |
|Noção     | É uma carta, caixa, pacote ou qualquer tipo de objeto que possa ser enviado pelos <u>correios</u> |
|Classificação| Objeto |
|Impacto(s)| Possui <u>dimensões</u>  |
|Sinônimo(s)| objeto, produto |  

- - -
### Léxico 05
|Léxico 05 | L05|
|----------|----|
|Nome      | efetuar login   |
|Noção     |  Libera acesso a algumas funcionalidades do aplicativo  |
|Classificação| Verbo |
|Impacto(s)|  O <u>usuário</u> pode efetuar o login caso queira utilizar algumas das funcionalidades específicas que necessitam de tal.  |
|Sinônimo(s)| logar, acessar, entrar  |

- - -
### Léxico 06
|Léxico 06 | L06|
|----------|----|
|Nome      | endereços   |
|Noção     | Podem ser inseridos e salvos pelo <u>usuário</u>   |
|Classificação| Objeto |
|Impacto(s)| Contém endereço detalhado e descrição de um <u>local</u> <br> Pode ser utilizado na pré-<u>postagem</u> e ao <u>simular</u> preços e prazos  |
|Sinônimo(s)| locais, destinos |

- - -
### Léxico 07
|Léxico 07 | L07|
|----------|----|
|Nome      | favoritada    |
|Noção     | Ocorre quando um <u>usuário</u> favorita uma <u>agência</u> <br>A <u>agência</u> e suas informações ficam acessíveis de forma simples  |
|Classificação| Estado |
|Impacto(s)| Torna o acesso rápido e intuitivo <br> Informa dados detalhados da <u>agência</u> em questão|
|Sinônimo(s)| salva, destacada |

- - -
### Léxico 08
|Léxico 08 | L08|
|----------|----|
|Nome      | favoritar |
|Noção     | Quando o <u>usuário</u> favorita uma <u>agência</u> <br> É <u>salva</u> quando o <u>usuário</u> desejar <u>acessar</u> facilmente as informações de uma <u>agência</u> <br> A <u>agência</u> pode ser <u>favoritada</u> após ela ser encontrada nas buscas   |
|Classificação| Verbo |
|Impacto(s)| Facilitar a visualização de dados da <u>agência</u>   |
|Sinônimo(s)| salvar, destacar |

- - -
### Léxico 09
|Léxico 09 | L09|
|----------|----|
|Nome      |  mensagens  |
|Noção     |  Utilizadas pelo <u>usuário</u> <br> Ocorre quando um <u>usuário</u> deseja se comunicar diretamente com outro <br> As mensagens trocadas são privadas e necessitam de <u>login</u>  |
|Classificação| Objeto |
|Impacto(s)|  As mensagens ficam visíveis apenas para os envolvidos na conversa  |
|Sinônimo(s)| direct, conversa, dm, trocar mensagem |

- - -
### Léxico 10
|Léxico 10 | L10|
|----------|----|
|Nome      |  pré-atendimento  |
|Noção     |  Tarefa realizada pelo <u>usuário</u> <br>Ocorre quando o <u>usuário</u> deseja realizar a pré-<u>postagem</u> de uma <u>encomenda</u> <br>É necessário informar todos os dados obrigatórios  |
|Classificação| Verbo |
|Impacto(s)|  Poupa tempo ao encaminhar uma <u>encomenda</u> à <u>agência</u> <br> O <u>usuário</u> recebe informações à respeito de <u>preços e prazos</u>  |
|Sinônimo(s)| agendar, marcar  |  

- - -
### Léxico 11
|Léxico 11 | L11|
|----------|----|
|Nome      |  preços e prazos  |
|Noção     |  Permite ao <u>usuário</u> simular os preços e prazos de um <u>objeto</u> <br> Informa ao <u>usuário</u> o quanto será gasto para postar uma <u>encomenda</u> e em quanto tempo será <u>entregue</u> <br>A funcionalidade se encontra na tela inicial do aplicativo |
|Classificação| Verbo |
|Impacto(s)| Informa valores e prazos a respeito de uma <u>encomenda</u> a ser enviada <br> O <u>usuário</u> precisa informar dados do <u>objeto</u> e endereço de entrega |
|Sinônimo(s)| simular, orçar, orçamento  |

- - -
### Léxico 12
|Léxico 12 | L12|
|----------|----|
|Nome      | rastrear |
|Noção     | É realizada pelo <u>usuário</u> <br> Localiza a <u>encomenda</u> e informa seu trajeto ao destino  <br>A funcionalidade pode ser acessada na tela inicial do aplicativo  |
|Classificação| Verbo |
|Impacto(s)| O <u>usuário</u> pode acompanhar o <u>andamento</u> de uma <u>encomenda</u> <br> A encomenda pode estar vinculada à conta do <u>usuário</u> ou pode ser encontrada via código de rastreio  |
|Sinônimo(s)| acompanhar, localizar, rastreada, rastreio|

- - -
### Léxico 13
|Léxico 13 | L13|
|----------|----|
|Nome      | situação |
|Noção     | É a situação da encomenda que está sendo <u>rastreada</u> <br>A encomanda pode estar em trânsito ou entregue   |
|Classificação| Estado |
|Impacto(s)| Complementa o <u>rastreio</u> da <u>encomenda</u>|
|Sinônimo(s)| andamento, entregue, trânsito |

- - -
### Léxico 14
|Léxico 14 | L14|
|----------|----|
|Nome      | usuário |
|Noção     | Pessoa que utiliza o aplicativo <br> Não é necessário cadastro e <u>login</u> para algumas funcionalidades  |
|Classificação| Objeto |
|Impacto(s)| Realiza as ações no aplicativo |
|Sinônimo(s)|  utilizador, pessoa, cliente |

- - -  

## Controle de versão

| Data     | Versão | Descrição                                               | Autor(es)           |
| -------- | ------ | ------------------------------------------------------- | ------------------- |
| 01/11/20 | 0.1    | Criação das tabelas de léxico  | Nícalo Ribeiro |
| 02/11/20 | 0.2    | Criação e formatação da página  | Nícalo Ribeiro |