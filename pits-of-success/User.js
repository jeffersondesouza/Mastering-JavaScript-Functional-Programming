/* 
ESTRUTURA
  - models (domain)
    - controlles
        - Factory 
        - Repository
        - HttpMapper
    - services (uso esse cara ao invés das pasta utils, la deixa aquelas funções  de utilidade mesmo, curry, Maybe etc)
        - HttpFetcher
        - MailSender
        - MailSender
    - types

*/
/* OOP - Quanto mais comportamentos, a classe fica maior, difícil de manter */
class User {
  constructor(id, userName) {
    this._id = id;
    this._userName = userName;
  }

  update() {}

  delete() {}

  sendEmail() {}
}

/************ Abordagem mais baseada em DDD *************/

/* 
  Duas categorias de Objetos
  1 - Entidades: Objectos que fazem pare do dominio, q que serão 'salvos' - User, Beer
  2 - Value Objects: Nao encapsulam Business Logic. Objetos que apenas transportam dados, HttpRquestObject, LoginRequestObject
*/
class User {
  constructor(id, userName) {
    this._id = id;
    this._userName = userName;
  }
}
/* Services (controllers = repository, factory, mapper, services) */
class SqlUserRepository {
  update(User) {}
  delete(User) {}
}

class EmailSender {
  sendEmail(User, Email) {}
}

/* 
  Programação funcional trbalha com o conceito 
  DATA => FUNCTIONS
*/
/* Em uma abordagem mai Funcional */

type User = { id: Number, userName: string };


// modulo, no fim é o nosso repository, UserRepository
const UserRepository = {
  createNew (Uuser) {}
  update (Uuser) {}
  delete (Uuser) {}
}

const MailService = {
  sendEmail(User, message) {}
}