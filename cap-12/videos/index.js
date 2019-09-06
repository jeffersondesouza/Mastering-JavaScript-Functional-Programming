// Test error Handle

const receiveRequest = userId => (userId > 10 ? { email: "validEmail" } : null);
const validateRequest = request => (request ? true : false);
const canonicalizeEmail = () => {};
const updateDbFromRequest = request => true;
const sendEmail = (email) => email.length;
/*  */

// Versão sem verifcação de erros
function UpdateUserwithErrorHandle(userId) {
  const request = receiveRequest(userId);
  validateRequest(request);
  canonicalizeEmail(request);
  updateDbFromRequest(request);
  sendEmail(request.email);
  return "ok";
}

// Versão real com validação
function UpdateUserwithErrorHandle2(userId) {
  const request = receiveRequest(userId);

  const isValid = validateRequest(request);
  if (!isValid) {
    return "Not valid reuqest";
  }
  canonicalizeEmail(request);
  try {
    const result = updateDbFromRequest(request);
    if (!result) {
      return "User not found";
    }
  } catch (error) {
    return "Data Base error";
  }

  try {
    sendEmail(request.emails);
  } catch (error) {
    return "Email nao enviado";
  }

  return "ok";
}

console.log(UpdateUserwithErrorHandle2(10));
console.log(UpdateUserwithErrorHandle2(11));
