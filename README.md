# Topicos-de-Integracao-Web
Estudos e projetos seguindo o curso de Web-Moderno da Cod3rs, incluindo os tópicos de HTML, CSS, manipulação de DOM e requisições Ajax (xmlHttpRequest, fetch, Axios e JQuery) com NodeJS. 
O Github original da Cod3rs, com link para o curso:  https://github.com/cod3rcursos/web-moderno


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