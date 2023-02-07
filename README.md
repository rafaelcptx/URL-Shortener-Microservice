# URL-Shortener-Microservice

Microservice Encurtador de URL feito com NodeJs + Express + is-url (validação) como requisito para obtenção do certificado do curso BackEnd Development and APIs da freeCodeCamp.

Para obter o certificado deve-se completar 5 Challenges, esse é o terceiro. 

Todas as challenges passam por testes automatizados pré apresentados... o código é desenvolvido seguindo a metodologia TDD (Test Driven Development).

Tela principal: 

![overview](https://user-images.githubusercontent.com/109367845/217222934-e0526be9-3119-4ec8-b677-d09e41a613aa.png)

Ao dar post com sua URL o microservice gera um ID pra ela e retorna a url original e o id short.
Posteriormente se acessar <domínio>/api/shorturl/:id o microservice redireciona ao site da url original.

![response](https://user-images.githubusercontent.com/109367845/217222938-2be55d2b-f838-489e-8101-b1cd96919748.png)
