<link rel="stylesheet" href="../assets/styles.css">

# Foward-From 
---

## Introdução

O rastreamento de requisitos é utilizado para prover relacionamentos entre requisitos, arquitetura e implementação final do sistema e possibilita uma adequada compreensão dos relacionamentos de dependência entre requisitos e através dos artefatos de requisitos, de arquitetura e de implementação.

Rastreabilidade forward-from (para frente, a partir de), liga requisitos a artefatos de desenho e implementação.

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
| TE     | Tela                  |


## Matriz de Rastreabilidade

| Código | Descrição | Cenário(s) | Caso(s) de Uso | História de Usuário | Tela  |
| ------ | --------- | ---------- | -------------- | ------------------- | ------------------- |
| RF01 | O aplicativo deve permitir o cadastro de usuários | [CE03][link-ce] | [UC02-PE02][link-uc] | [US01][link-us] | <a onclick="openModalImage('Tela 01', '../images/t01.jpeg')">TE01</a> |
| RF02 | O aplicativo deve permitir o usuário fazer login | [CE05][link-ce] | [UC01][link-uc] | [US02][link-us] | <a onclick="openModalImage('Tela 02', '../images/t02.jpeg')">TE02</a> |
| RF03 | O aplicativo deve permitir o usuário alterar sua senha de acesso | - | [UC01-PE01][link-uc] |	[US03][link-us] | <a onclick="openModalImage('Tela 03', '../images/t03.jpeg')">TE03</a> |
| RF04 | O aplicativo deve permitir o usuário sair da conta(logout)	| -	| - | [US04][link-us] | <a onclick="openModalImage('Tela 04', '../images/t04.jpeg')">TE04</a> |
| RF05 | O aplicativo deve permitir o usuário cancelar sua conta | - | [UC10][link-uc] | [US05][link-us] | <a onclick="openModalImage('Tela 05', '../images/t05.jpeg')">TE05</a> |
| RF06 | O aplicativo deve permitir o usuário consultar os seus dados pessoais | [CE04][link-ce] | [UC09][link-uc] | [US06][link-us] | <a onclick="openModalImage('Tela 06', '../images/t06.jpeg')">TE06</a> |
| RF07 | O aplicativo deve permitir o usuário alterar os seus dados pessoais | [CE04][link-ce] | [UC09-PE09][link-uc] | [US07][link-us] | <a onclick="openModalImage('Tela 07', '../images/t07.jpeg')">TE07</a> |
| RF08 | O aplicativo deve permitir o usuário consultar as pré-postagens já cadastradas | [CE08][link-ce] | [UC06][link-uc], [UC06-FP06][link-uc], [UC06-FA04][link-uc] | [US08][link-us] | <a onclick="openModalImage('Tela 08', '../images/t08.jpeg')">TE08</a> |
| RF09 | O aplicativo deve permitir o usuário cadastrar pré-postagens | [CE06][link-ce] | [UC06][link-uc], [UC07-FP10][link-uc] | [US09][link-us] | <a onclick="openModalImage('Tela 09', '../images/t09.png')">TE09</a> |
| RF10 | O aplicativo deve permitir o usuário excluir suas pré-postagens | [CE08][link-ce]	| [UC06][link-uc], [UC06-FP08][link-uc] | [US10][link-us] | <a onclick="openModalImage('Tela 10', '../images/t10.jpeg')">TE10</a> |
| RF11 | O aplicativo deve permitir o usuário buscar/rastrear objetos  | [CE09][link-ce], [CE10][link-ce]	| [UC03][link-uc] | [US11][link-us] | <a onclick="openModalImage('Tela 11', '../images/t11.jpeg')">TE11</a> |
| RF12 | Ao rastrear um objeto, o aplicativo deve permitir o usuário salvar um objeto na sua lista de objetos | - | [UC03-PE04][link-uc] | [US12][link-us] | <a onclick="openModalImage('Tela 12', '../images/t12.jpeg')">TE12</a> |
| RF13 | O aplicativo deve permitir o usuário visualizar os objetos entregues | [CE11][link-ce] | [UC03-PE05][link-uc] | [US13][link-us] | <a onclick="openModalImage('Tela 13', '../images/t13.jpeg')">TE13</a> |
| RF14 | O aplicativo deve permitir o usuário visualizar os objetos em trânsito | [CE11][link-ce] | [UC03-PE04][link-uc] | [US14][link-us] | <a onclick="openModalImage('Tela 14', '../images/t14.jpeg')">TE14</a> |
| RF15 | Ao rastrear um objeto, o aplicativo deve enviar notificações, caso o usuário tenha interesse, referentes ao status de um objeto | - | [UC03][link-uc] | [US15][link-us] | <a onclick="openModalImage('Tela 15', '../images/t15.jpeg')">TE15</a>
| RF16 | O aplicativo deve permitir o usuário realizar simulações de postagens, assim conhecendo os preços e os prazos de cada modalidade de entrega | [CE12][link-ce] | [UC05][link-uc] | [US16][link-us] | <a onclick="openModalImage('Tela 16', '../images/t16.jpeg')">TE16</a> |
| RF17 | O aplicativo deve permitir o usuário consultar os endereços cadastrados | [CE06][link-ce] | [UC07-FP09][link-uc], [UC07-FA06][link-uc] | [US17][link-us] | <a onclick="openModalImage('Tela 17', '../images/t17.jpeg')">TE17</a> |
| RF18 | O aplicativo deve permitir o usuário cadastrar endereços | [CE06][link-ce] | [UC07-FP10][link-uc] | [US18][link-us] | <a onclick="openModalImage('Tela 18', '../images/t18.jpeg')">TE18</a> |
| RF19 | O aplicativo deve permitir o usuário editar endereços | [CE06][link-ce] | [UC07-FP11][link-uc] | [US19][link-us] | <a onclick="openModalImage('Tela 19', '../images/t19.jpeg')">TE19</a> |
| RF20 | O aplicativo deve permitir o usuário excluir endereços | [CE06][link-ce] | [UC07-FP12][link-uc] | [US20][link-us] | <a onclick="openModalImage('Tela 20', '../images/t20.jpeg')">TE20</a> |
| RF21 | O aplicativo deve permitir o usuário buscar as agências mais próximas em um raio de até 10 km | [CE02][link-ce] | [UC04-FA03][link-uc], [UC04-FP04][link-uc] | [US21][link-us] | <a onclick="openModalImage('Tela 21', '../images/t21.jpeg')">TE21</a> |
| RF22 | Ao buscar agências, o aplicativo deve permitir o usuário selecionar as agências exibidas no mapa, assim tendo acesso as informações de uma agência | [CE02][link-ce] | [UC04-PE06][link-uc] | [US22][link-us] | <a onclick="openModalImage('Tela 22', '../images/t22.png')">TE22</a> |
| RF23 | O aplicativo deve permitir o usuário consultar as suas agências favoritas | [CE01][link-ce] | [UC08-FP13][link-uc] | [US23][link-us] | <a onclick="openModalImage('Tela 23', '../images/t23.jpeg')">TE23</a> |
| RF24 | O aplicativo deve permitir o usuário adicionar agências aos favoritos | [CE01][link-ce] | [UC04-PE07][link-uc] | [US24][link-us] | <a onclick="openModalImage('Tela 24', '../images/t24.jpeg')">TE24</a> |
| RF25 | O aplicativo deve permitir o usuário remover agências aos favoritos | [CE01][link-ce] | [UC08-PE08][link-uc] | [US25][link-us] | <a onclick="openModalImage('Tela 25', '../images/t25.jpeg')">TE25</a> |


## Controle de versão

| Data     | Versão | Descrição                                               | Autor(es)        |
| -------- | ------ | ------------------------------------------------------- | ---------------- |
| 26/11/20 | 0.1    | Adição da primeira versão da página                     | Nícalo Ribeiro   |
| 26/11/20 | 0.2    | Revisão e adição de ajustes                             | Gustavo Nogueira |

---

## Referências

* SERRANO, Maurício; SERRANO, Milene. Requisitos - Aula 26. 2º/2019. 44 slides. Material apresentado para a disciplina de Requisitos de Software no curso de Engenharia de Software da UnB, FGA.

* LEITE, Julio. Rastreabilidade de Requisitos. Disponível em: <http://www.dbd.puc-rio.br/depto_informatica/05_20_sayao.pdf>. Acesso em: 26 de novembro de 2020.

<!--Links-->
[link-ce]: https://requisitos-de-software.github.io/2020.1-Correios/modelagem/cenarios/cenarios-v2/
[link-uc]: https://requisitos-de-software.github.io/2020.1-Correios/modelagem/casosDeUso/casosDeUso/
[link-us]: https://requisitos-de-software.github.io/2020.1-Correios/modelagem/historiasDeUsuario/historiasDeUsuario/

<!-- Modal -->
<div id="modal-container">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <p id="modal-title"></p>
    <img id="modal-image" src="#">
  </div>
</div>

<script type="text/javascript" src="../assets/scripts.js"></script>