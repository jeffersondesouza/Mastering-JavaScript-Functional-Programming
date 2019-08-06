const once = fn => {
  let done = false;
  return (...args) => {
    console.log('args:', args)
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


comprarOnce("bola", 1000);
comprarOnce("bola", 1000);
comprarOnce("bola", 1000);
comprarOnce("bola", 1000);
