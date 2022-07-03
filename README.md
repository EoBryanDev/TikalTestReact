# Tikal Tech Front-End Test

Neste projeto utilizei o framework JS "ReactJS",React Router Dom, Axios e React Icons. Decidi ao construir o layout do projeto tomar a liberdade de recuperar alguns elementos da jurisTech como background do site oficial, logotipo e logomarca para deixar o projeto direcionado à companhia.

## Teste - Interface de Leitura

* O começo do projeto foi em realizar a estrutura de componentes para que a navegação do cliente fosse o mais fluída possível e agradável. Para isso construi uma página home que seria a raíz, que seria acessada pelo usuário assim que acessasse a página raíz. Ela conta com um componente de navegação (uma barra de navegação) e uma interface com botões que direciona para a página de login e outro para a página oficial da companhia. Após isto foi realizado a pagina de login e depois a página de apresentação dos dados recuperado da API, ou seja, ela é privada.

* Concomitantemente foi realizado as requisições com Axios para fazer a validação do login e salvar o token do JWT no Local Storage aonde poderia ser facilmente acessado de qualquer parte da aplicação, sendo para realizar novas requisições ou para fazer o logout. Após efetuado o login a barra de navegação é alterada de Home e Login para Logout e Index. 

* Na sequência foi realizado o tabelamento do retorno das informações da API. Desta maneira para fazer as operações de atualização e de remoção foi utilizado modais.
  
* Para finalizar, fiz a apresentação do detalhe dos dados por uma requisição pelo ID e apresentei o retorno dentro de um modal que aparece ao lado direito da tela.

* Ao realizar o Logout, o token é removido do Local Storage, a autenticação é alterada pra falsa no contexto da aplicação e o usuário é redirecionado para fora da página privada.

