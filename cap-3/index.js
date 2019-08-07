/* function ShowSelf(identy) {
  console.log(this);
  this.identy = identy;

  setTimeout(() => {
    console.log(this);
    console.log(this.identy);
  }, 1000);
}

var s = new ShowSelf('ola');
 */
function suporteImpressora(cb) {
  this.voltagem = 220;
  this.marca = "marca do suporte";
  console.log("suporteImpressora:", this);
  console.log("voltagem suporteImpressora:", this.voltagem);

  cb();
}

function Impressora3D() {
  this.marca = "Impressora3D";
  console.log(this);
  console.log("marca: ", this.marca);

  /*   suporteImpressora(
    function() {
      console.log("suporte marca: ", this.marca);
    }.bind(this)
  ); */

  suporteImpressora(() => {
    console.log("suporte marca: ", this.marca);
  });
}

var imp3d = new Impressora3D();
