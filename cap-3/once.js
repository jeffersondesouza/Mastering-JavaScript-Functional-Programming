const once = fn => {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      fn(...args);
    } else {
      console.log("Processando comprar");
    }
  };
};

const comprar = (produto, valor) => {
  console.log("Compra:", { produto, valor });
};

const comprarOnce = once(comprar);

comprar("bola", 1000);
comprar("bola", 1000);
comprar("bola", 1000);
comprar("bola", 1000);

comprarOnce("bola", 1000);
comprarOnce("bola", 1000);
comprarOnce("bola", 1000);
comprarOnce("bola", 1000);
