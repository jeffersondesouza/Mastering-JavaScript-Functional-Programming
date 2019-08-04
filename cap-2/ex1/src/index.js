const some = "socks";
const sales = "1";
const data = new Date();

function billTheUser(some, sales, data) {
  console.log("bill Product: ", { some, sales, data });
}

const falar = palavra => console.log(palavra + " foi dito");

const falarOnce = once(falar)


falar("falar: oi 1");
falar("falar: oi 2");
falar("falar: oi 3");


falarOnce("falar Once: oi 1");
falarOnce("falar Once: oi 2");
falarOnce("falar Once: oi 3");
