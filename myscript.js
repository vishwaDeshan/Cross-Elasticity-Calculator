// *********************************************  Java Script Part  ************************************************************

//***For the  Cross elasticty of Demand***
// --- variables ---
var pr1 = document.getElementById("price1");
var pr2 = document.getElementById("price2");
var qty1 = document.getElementById("qty1");
var qty2 = document.getElementById("qty2");
var btn = document.getElementById("button");
// ---Event---
btn.addEventListener("click", calculate);
//---Functions---
function calculate(e) {
  e.preventDefault();

  //validation
  if (
    pr1.value == "" ||
    pr2.value == "" ||
    qty1.value == "" ||
    qty2.value == ""
  ) {
    alert("Please fill the all feilds");
  } else {
    var c =
      ((parseFloat(qty2.value) - parseFloat(qty1.value)) /
        (parseFloat(pr2.value) - parseFloat(pr1.value))) *
      (parseFloat(pr1.value) / parseFloat(qty1.value));

    document.getElementById("r1").innerHTML = c.toFixed(2);
    if (c > 0) {
      document.getElementById("r2").innerHTML = "Substitute Goods";
    } else if (c < 0) {
      document.getElementById("r2").innerHTML = "Complement Goods";
    } else if (c == 0) {
      document.getElementById("r2").innerHTML = "uncorrelated Goods";
    }
  }
}

//***For the  Income elasticty of Demand***
var pr3 = document.getElementById("price3");
var pr4 = document.getElementById("price4");
var qty3 = document.getElementById("qty3");
var qty4 = document.getElementById("qty4");
var btn1 = document.getElementById("btn1");

//---Functions---
function clclte() {
  //validation
  if (
    pr3.value == "" ||
    pr4.value == "" ||
    qty3.value == "" ||
    qty4.value == ""
  ) {
    alert("Please fill the all feilds");
  } else {
    var x =
      (parseFloat(qty4.value) - parseFloat(qty3.value)) /
      parseFloat(qty3.value);
    var y =
      (parseFloat(pr4.value) - parseFloat(pr3.value)) / parseFloat(pr3.value);
    var z = parseFloat(x) / parseFloat(y);

    document.getElementById("r3").innerHTML = z.toFixed(2);
    if (z > 0 && z<1) {
      document.getElementById("r4").innerHTML = "Normal Good";
    } else if (z <= 0) {
      document.getElementById("r4").innerHTML = "Inferior Good";
    } else if (z >1) {
      document.getElementById("r4").innerHTML = "Luxury Good";
    }
  }
}

//***For selecting the calculator***
var slct = document.getElementById("cals");
document.getElementById("content1").style.display = "block";
document.getElementById("content2").style.display = "none";

function myFunction() {
  if (slct.value == "Income Elasticity of Demand") {
    document.getElementById("content1").style.display = "none";
    document.getElementById("content2").style.display = "block";
  } else {
    document.getElementById("content1").style.display = "none";
    document.getElementById("content2").style.display = "none";
    document.getElementById("content1").style.display = "block";
  }
}
