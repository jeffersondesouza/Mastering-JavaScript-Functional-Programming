# Mastering JavaScript Functional Programming (Mão na massa)

https://github.com/PacktPublishing/Mastering-JavaScript-Functional-Programming

## CAP 1: Becoming Functional - Several Questions

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

## CAP 2: Thinking Functionally

- Avaliar os problemas de modo a Abstrair pontos reutilizaveis em novs funções;
- Funções de alta ordem
- Testes

## CAP 3: Starting Out with Functions - A Core Concept

- O JS permite que se definam funções de em vária maneiras (Noemada, anonimas, expressões anonima, expressões nomeada, Contrutoras, arrow Function, Generators, async...);
- Essa flexibilidade, e possibilidade de criação de clousures e funções de High Order functions, principalmente arrow functions pode ser de grande valia na progamação funcional;
- In Lambda Calculos Terms: Parameters are placeholders for potential values that will be passed, and arguments are the actual values passed to the function;
- In lambda style, functions only consist of a result;
- In the lambda calculus, you don't write functions with several parameters, but only with
  one, by applying something called currying;
- Essa técnica ajuda em situações que desejamos fazer Pipe de funções;
- This programming style is called pointfree style or tacit style. Ex; fetch("some/remote/url").then(processResult)

### CAP 4: Behaving Properly - Pure Functions

- Uma função pura deve atender a duas condições básicas:
  1 - Para um dado um argumento, a função deve sempre retornar o mesmo resultado;
  2 - Ao calcular um resulado, uma função nao deve causar side effects
- Idempotent function can be called as many times as desired, and will always produce
  the same result;
- function should do one thing, only one thing, and nothing but that thing.
- Transparência referencial é a propriedade que permite substituir um
  expressão com o seu valor, e não alterar os resultados de tudo o que você estava fazendo. (Basicamente é a capacidade da função "permitir ser refatorada" mantendo seu estado )
- Side effects: some change in state;
- Provide whatever is needed of the global state to the function, as arguments
- If the function needs to update the state, it shall not do it directly, but rather produce a new version of the state, and return it
- It will be the responsibility of the caller to take the returned state, if any, and
  update the global state

## CAP 5: Programming Declaratively - A Better Style

- O uso de Hihg Order Function, torna o código compcto, legível, consiso e fácil de entender;
- .map(), .reduce(), .filter();
- Estas gunções tornam o trabalho mais declarativo, focando em o que fazer e nao como fazer;
- In mathematics, a map is a transformation of elements from a domain into elements
  of a codomain;

## CAP 6 : Producing Functions - Higher- Order Functions

### Wrapping functions

- Functions that provide a wrapper around other function, to enhance it in some way, but without altering its original objective
- Similar a um Decorator

### Altering functions

- Esta técinica modifica o comportamento original da função utilizada;

## CAP 7 - Transforming Functions - Currying and Partial Application

### Currying

- Uma técninica de funções, onde ao invés de termos um função com muito parâmetros, temos uma sequência de funçoẽs unitárias;
- is the process of transforming an m-ary function (that is, a function of arity m) into a sequence of m unary functions

### Partial application

- Another time-honored FP transformation, which produces new versions of functions by fixing some of their arguments;
- Is the idea of providing n arguments to a m-ary function;
- Being n less than or equal to m, to transform it into a function with (m-n) parameters. Each time you provide some arguments, a new function is produced, with smaller arity. When you provide the last arguments, the actual calculations are performed

### partial currying

- that can be seen as a mixture of the two previous transformations

## CAP 8 - Connecting Functions - Pipelining and Composition

Ways to create new functions out of combining previous existing ones.

Pipelining and composition are techniques for setting up functions to work in sequence, so the output from a function becomes the input to the next function.

- Pipelining, a way to join functions together in similar way to Unix/Linux pipes
- Chaining, which may be considered a variant of pipelining, but restricted to objects
- Composing, which is a classic operation with its origins in basic computer theory

## CAP 9 - Designing Functions - Recursion

A Function calls itself, again and again, until it doesn't.

1. Assume you already have an appropriate function to solve your problem.
2. Then, see how the big problem can be solved by solving one (or more) smaller problems.
3. Solve those problems by using the imagined function from step 1.
4. Decide what are your base cases, simple enough that they be solved directly, not requiring any more calls.

- Decrease and conquer
- Divide and conquer
- Dynamic programming

## CAP 10 - Ensuring Purity - Immutability

- Basic JS ways, such as freezing objects, plus cloning to create new ones instead of modifying existing objects;

- Persistent data structures, with methods that allow updating them without changing the original and without the need to clone everything either, for higher performance

### Funções nativas impuras no Javascript:

- .fill()
- .push() e .pop()
- .shift() e .unshift()
- .splice()
- .reverse()
- .sort()
- .setters()

Uma solução, por exemplo, pode ser a criação de coṕias com spred operators, mas pode intreferir na performance

### Constantes
- Mesmo marcados como cost, Objetos, mais preceisamente seus parâmetros podem ser modificados;
- Nesse caso uma solução é fazer um Freezing aocriar o objeto