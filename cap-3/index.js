function ShowSelf(identy) {
  console.log(this);
  this.identy = identy;

  setTimeout(() => {
    console.log(this);
    console.log(this.identy);
  }, 1000);
}

var s = new ShowSelf('ola');
