// export uma interface mais simples de uma biliboteca(externa) mais complexa;
// ex: uma lib para fazer ajax

const axios = require("axios");

const get = ({ path, params }) => axios.get(path);

const methodsTable = { GET: get };

const fetch = params => {
  console.log('params:', params)
  if (!params || !params.method || !params.path) {
    throw new Error("informe os parametos path");
  }
  const method = params.method.toUpperCase();

  return methodsTable[method](params);
};

module.exports = {
  fetch
};
