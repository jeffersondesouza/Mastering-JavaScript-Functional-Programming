const f1 = function(cb) {
  console.log("f1");
  cb();
};

const f2 = function() {
  console.log("f2");
};

f1(f2);
