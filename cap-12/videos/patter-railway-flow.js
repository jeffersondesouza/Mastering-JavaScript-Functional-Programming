/* 
  source --> PARSE--> TRANSFORM --> SEND----success----> |
              |-----------|-----------|-----failure----> | 
*/

/* 
  - Cada função tem a na saida o success e o erro
  - Se o Sucesso ocorre, ele passa para o prózximo, função tem a na saida o success e o erro 
  - Se um ERRO ocorre, pula-se para o fim
  - É o nosso Maybe
*/
