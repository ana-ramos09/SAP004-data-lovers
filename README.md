# Pokédex Go

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Produto](#2-produto)
  * [2.1. Definição do Produto](#21-definição-do-produto)
  * [2.2. Interface](#22-interface)
  * [2.3. Telas](#23-telas)
  * [2.4. Utilização](#24-utilização)
  * [2.5. Funcionalidades](#25-funcionalidades)
* [3. Considerações técnicas](#3-considerações-técnicas)
  * [3.1. Ferramentas](#31-ferramentas)
  * [3.2. Scripts](#32-scripts)
* [4. Autoras](#4-autoras)

***

## 1. Prefácio

Lançado em 2016, o jogo [Pokémon Go](https://pokemongolive.com/en/) logo se tornou um fenômeno, tanto entre os mais jovens, quanto no público já adulto.

Desenvolvivo pela **Niantic, Inc.**, **Nintendo** e **The Pokémon Company**, se trata de um jogo eletrônico de [realidade aumentada](https://pt.wikipedia.org/wiki/Realidade_aumentada) voltado para _smartphones_.

No jogo o usuário interage com um mapa baseado no mundo real e, com o auxílio da câmera do celular, visualiza e pode tentar capturar os monstrinhos. Ainda é possível escolher seu time e batalhar em ginásios.

A proposta do jogo é que o usuário explore mais a cidade em busca dos Pokémons, tendo como objetivo capturar todos e completar a Pokédex, além de vencer batalhas nos estágios.

## 2. Produto

### 2.1. Definição do produto

Realizado em dupla, no segundo projeto pela Laboratória foi possível escolher a temática a ser seguida. Entre as opções era possível optar entre **Pokémon**, **Rick and Morty** e **_LOL_**. Decidimos seguir com o tema Pokémon.

No nosso projeto apresentamos todos os 151 Pokémons da região de _Kanto_. Ao clicar no Pokémon desejado pensamos em incorporar e mostrar as principais informações de cada monstrinho em uma representação da **Pokédex**.

Realizamos uma pesquisa para definir qual seria o nosso público alvo. Com os resultados chegamos a duas possibilidades: Um público mais jovem com tempo e interesse em obter o máximo de informações possíveis; Um público adulto que joga por lazer nos momentos livres e deseja acessar apenas informações mais substanciais.

Pensando nessas diferenças, criamos um site no qual o usuário consegue se localizar e obter com facilidade o conteúdo desejado.

Uma consideração importante a ser feita é que a base de dados que foi utilizada está em inglês. Para que todos os elementos do site conversassem entre si, optamos por desenvolver todo o site em inglês. As explicações do nosso projeto abaixo levam os nomes em português para facilitar o entendimento, mas entre parênteses encontra-se o nome original que foi utilizado no site.

### 2.2. Interface

#### Tela final

![Desktop final](https://user-images.githubusercontent.com/42393520/82387293-00639500-9a0d-11ea-9c8e-a520ab2b9e70.png)
![Pokédex final](https://user-images.githubusercontent.com/42393520/82387297-035e8580-9a0d-11ea-8f12-96b18a2cf874.png)

Todo o projeto foi realizado de maneira responsiva, sendo possível acessá-lo do celular até em telas maiores, como uma televisão.

#### Processo

Optamos por desenvolver uma ideia inicial e individual de como imaginávamos nosso site. Feito isso, conversamos, juntamos nossas ideias e criamos um projeto final.

![Desktop 1](https://user-images.githubusercontent.com/42393520/82387184-bf6b8080-9a0c-11ea-87bf-ded5d4673615.png)
![Desktop 2](https://user-images.githubusercontent.com/42393520/82387204-d1e5ba00-9a0c-11ea-9c5e-88c31f9d797a.jpeg)
![Explicações](https://user-images.githubusercontent.com/42393520/82387258-ed50c500-9a0c-11ea-8d0d-938295e3eab0.jpeg)
![Modelos 1](https://user-images.githubusercontent.com/42393520/82387268-f477d300-9a0c-11ea-9a6e-951cbb251080.jpeg)
![Modelos 2](https://user-images.githubusercontent.com/42393520/82387276-f93c8700-9a0c-11ea-99bb-2a07ba3af025.jpg)
![Pokédex](https://user-images.githubusercontent.com/42393520/82387283-fc377780-9a0c-11ea-93de-af455d6c9bc8.jpg)

Após uma pesquisa de usuário (_UX_), realizamos algumas mudanças e melhorias no projeto original para atender melhor os usuários do site. Procuramos agilizar o carregamento das imagens, mudamos as cores e destacamos melhor os botões apresentamos na Pokédex com as informações dos Pokémons, distribuímos melhor as informações de "tipo" e "_candys_" dentro da Pokédex, implementamos a possibilidade de fechar a Pokédex e o [_Hamburger menu_](https://en.wikipedia.org/wiki/Hamburger_button) clicando fora da área dos mesmos.

### 2.3. Telas

No site é possível encontrar 4 telas:

#### Home

A tela principal na qual é possível encontrar todos os Pokémons, visualizar a Pokédex ao clicar em um Pokémon e utilizar as funcionalidades da paǵina.

#### Charts

Tela na qual apresentamos algumas opções de gráficos.
É possível escolher o modelo do gráfico como _Pie_ ou _Bar_ e visualizar a porcentagem dos Pokémons de cada tipo ou a porcentagem de Pokémons encontrados em cada um dos ovos.

#### Statistics

Nessa tela apresentamos um cálculo básico da porcentagem de Pokémons de cada um dos elementos. Essas informações são apresentadas em um modelo como _Progress bar_

#### Pokémon Go Tips

Por último apresentamos algumas dicas para os jogadores de Pokémon Go, tais como dicas inicias, de times, pokebolas, _candies_, ginásios, pokestops, ovos, incensos e _lures_.

### 2.4. Utilização

Na tela inicial do site é possível visualizar os 151 Pokémons. Incorporamos as principais informações de cada monstrinho em um _card_ representando uma Pokédex, a qual é apresentada ao clicar no Pokémon desejado. Na versão _mobile_ a Pokédex é apresentada apenas com a imagem, nome, número e elementos do Pokémon. É possível optar por fechá-la ou apresentar mais informações, tais como evoluções, fraquezas e se é possível evoluir esse Pokémon com _candies_. Já na versão _desktop_ todas as informações são apresentas de uma única vez ao usuário.

Logo acima dos Pokémons é possível utilizar algumas funcinalidades que foram incorporadas ao site. 

### 2.5 Funcionalidades 

#### Barra de pesquisa

É possível pesquisa o nome do Pokémon desejado na barra de pesquisa. **OBS:** Como a base de dados está em inglês, é necessário que o usuário faça essa pesquisa utilizando os nomes em inglês. Nesse caso "Bulbasauro" ficaria _"Bulbasaur"_.

#### Filtros

O usuário pode escolher filtrar os Pokémons por:

* Todos (_All_)
* Tipo (_Type_)
* Fraquezas (_Weaknesses_)

Com exceção da opção "todos", ao selecionar uma das opções acima, o usuário também precisa selecionar o tipo do Pokémon desejado. Essa opção está disponível em um segundo filtro, logo ao lado do primeiro, o qual leva o nome de _Filter Value_ (Valor do filtro).

Ao lado dos filtros é possível encontrar um botão que reseta a escolha feita.

#### Ordenação

O usuário pode escolher ordenar os Pokémons por:

* Ordem alfabética crescente (_Ascending Alphabetical_)
* Ordem alfabética decrescente (_Descending Alphabetical_)
* Ordem numérica crescente (_Ascending Numerical Order_)
* Ordem numérica decrescente (_Descending Numerical Order_)

A ordenação pode ser realizada com todos os Pokémons ou com o filtro já aplicado.

## 3. Considerações técnicas

### 3.1. Ferramentas

O projeto foi realizado com a utilização de **HTML**, **CSS**, **Vanilla JavaScript** e a biblioteca **Google Charts**.

### 3.2. Scripts

Nesse projeto é necessário utilizar alguns comandos para o correto funcionamento do site.

Primeiramente é importante ter o **Node.JS** e o **NPM** instalados em sua máquina para executar os comandos a seguir:

* `
npm install
` para instalar todas as dependências contidas no projeto.

* `
npm start
`, o qual vai inicializar o servidor e possibilitar a visualização do projeto.

* `
npm test
` para execução de testes nos arquivos e, assim, garantir o correto funcionamento dos mesmos.

* `
npm run deploy
`, o qual é utilizado para publicar o projeto no GitHub Pages.

## 4. Autoras 

**Ana Ramos** - ana.carolina.dos.reis.ramos@gmail.com 

**Natasha Costa** - natasha.gr.costa@gmail.com
