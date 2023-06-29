# Topicos-de-Integracao-Web
Estudos e projetos seguindo o curso de Web-Moderno da Cod3rs, incluindo os tópicos de HTML, CSS, manipulação de DOM e requisições Ajax (xmlHttpRequest, fetch, Axios e JQuery) com NodeJS. 
Para acessar o site upado através do GitHub Pages: https://estudos-cod3r.github.io/Topicos-de-Integracao-Web/

O Github original da Cod3rs, com link para o curso:  https://github.com/cod3rcursos/web-moderno


-Index Inicial
    Esses estudos/projetos estarão sendo carregados através do Github Pages e, por tal, foi criado esse hub inicial para acessar os tópicos referentes dum único lugar, sem necessidade de inicializar manualmente cada um dos servers.js dos tópicos.
    Caso realize a abertura deste projeto de maneira local, é prudente ignorar tal página e focar em cada um dos index.html presentes nos tópicos em "Tópicos de Integração Web" bem como inicializar os server.js referentes a cada um, se houver.

-HTML
    Guias quanto as tags utilizadas e uso semântico bem como a construção de páginas não só com esse intuito, mas também com integração de JS para pequenas funcionalidades (como um slider básico de imagens ou manipulação dos elementos dum videoplayer por botões da página, através do JS). A página inicial desse documento é alimentada dinamicamente pelo conteúdo de outras páginas, porém algumas dessas páginas requerem abertura própria no navegador para que seu código possa funcionar. 
    As funcionalidades desta página somente funcionam com a inicialização do servidor - utilizar node server.js para tal (a porta utilizada será a 3003, se não alterada)

-CSS
    Estilização de páginas com seletores e propriedades específicas, atuando como guias para a utilização dessas propriedades. Algumas páginas contém mais de uma aplicação de estilo para a mesma propriedade, com o intuito de visualização da alternância entre elas para estudos.
    Também há breve utilização de JS, em principal no arquivo tag.js, para manipulação de css e visualização de tags html e o espaço que ocupam sem ter uma importação de css para tal.

-DOM
    Páginas com manipulação de elementos e eventos da página, bem como aplicação de estilo e funcionalidades através do JS por diferentes maneiras. O último projeto fora refazer parcialmente o jogo FlapBird, com criação e manipulação dos elementos por código.

-AJAX
    Demonstração das diferentes maneiras de se realizar uma requisição AJAX, com a criação dum pequeno servidor (server.js) que emprega as diferentes possibilidades de backend (embora somente como demonstração) e sua chamada pelo front, com requisição xmlHttp, o uso atual de Fetch(), com a importação do Axios e, por fim, com o uso de JQuery (ainda não implementado). É necessária a inicialização deste servidor e entrar no navegador com http://localhost:8080/ (ou outra porta, caso a mude) para visualizar as funcionalidades aplicadas. 
    O projeto final (carregando html via ajax) é uma "mini" SPA, com a aplicação de alguns fundamentos da mesma para carregamento dinâmico de html.