# Mastering JavaScript Functional Programming (Mão na massa)

https://github.com/PacktPublishing/Mastering-JavaScript-Functional-Programming

## CAP 1 - Becoming Functional – Several Questions

Queremos para nosso projeto (e podemos alcançar com PF):

- Modularidade;
- Fácil compreenção.
- Modularidade;
- Extensividade/Escalabilidade;
- Reusabilidade.

Características que permitem a aplicação de PF em JS

- Funções como Objetos de Primeira Ordem (Functions as First Class Objects)
- Recursividade
- Clousure
- Arrow Functions
- Spread

### Funções como Objetos de Primeira Ordem (Functions as First Class Objects)

Funções que poder ser guardadas em variáveis, passar/receber funções como parâmetros, retornar outras funções;

### Recursividade

A idéia é que uma função pode, em determinado momento, chamar a si mesma e, quando satisfeita alguma condição, continuar trabalhando com o resultado que tenha recebido.

### Clousure

- Função capaz de realizar um encapsulamento e momorização do seu escopo

## CAP 2 - Thinking Functionally

- Avaliar os problemas de modo a Abstrair pontos reutilizaveis em novs funções;
- Funções de alta ordem
- Testes

## Starting Out with Functions - A Core Concept

- O JS permite que se definam funções de em vária maneiras (Noemada, anonimas, expressões anonima, expressões nomeada, Contrutoras, arrow Function, Generators, async...);
- Essa flexibilidade, e possibilidade de criação de clousures e funções de High Order functions, principalmente arrow functions pode ser de grande valia na progamação funcional;
- In Lambda Calculos Terms: Parameters are placeholders for potential values that will be passed, and arguments are the actual values passed to the function;
- In lambda style, functions only consist of a result;
- In the lambda calculus, you don't write functions with several parameters, but only with
  one, by applying something called currying;
- Essa técnica ajuda em situações que desejamos fazer Pipe de funções;
- This programming style is called pointfree style or tacit style. Ex; fetch("some/remote/url").then(processResult)
