window.onload = Calculadora();

function Calculadora () {

pantalla=document.getElementById("display");
}

x="0";
xi=1;
coma=0;
ni=0;
op="no";

function numero(xx) {

        if (pantalla.innerHTML.length < 8) {

         if (x=="0" || xi==1  ) {
            pantalla.innerHTML=xx;
            x=xx;
            if (xx==".") {
               pantalla.innerHTML="0.";
               x=xx;
               coma=1;
               }
           }
           else {
               if (xx=="." && coma==0) {
                   pantalla.innerHTML+=xx;
                    x=pantalla.innerHTML;
                   coma=1;
               }
               //controla la segunda coma decimal.
               else if (xx=="." && coma==1) {}

               else {
                   pantalla.innerHTML+=xx;
                   x=pantalla.innerHTML;
               }
            }
            xi=0
            teclapulsa(xx);
          }
    }
function operar(s) {
         igualar();
         ni=x;
         op=s;
         xi=1;
         pantalla.innerHTML="";
         coma=0;
         switch(s) {
              case "/":
                  teclapulsa("dividido");
                  break;
              case "*":
                  teclapulsa("por");
                  break;
              case "-":
                  teclapulsa("menos");
                  break;
              case "+":
                  teclapulsa("mas");
                  break;
         }
    }
function igualar() {
         if (op=="no") {
            pantalla.innerHTML=x;
            }
         else {
            sol= realizarOperacion(ni, x, op);
            sol1= sol.toString();
              if (sol1.length > 8){
                sol1=sol1.substr(0,8);
                pantalla.innerHTML=sol1;
              }
              else {
                 pantalla.innerHTML=sol;
              }
            x=sol;
            op="no";
            xi=1;
            }
            teclapulsa("igual");
        }

function opuest() {
                 nx=Number(x);
                 nx=-nx;
                 x=String(nx);
                 pantalla.innerHTML=x;
                 teclapulsa("sign");
                 }

function borradoTotal() {
          pantalla.innerHTML=0;
          x="0";
          coma=0;
          ni=0;
          op="no";
          teclapulsa("on");
        }

function realizarOperacion(primerValor, segundoValor, operacion){
         var resultado;
            sl=primerValor+operacion+segundoValor;
            resultado=eval(sl);
        return resultado;
  }
function teclapulsa(xx) {
   var imgtecla= document.getElementById(xx);
   imgtecla.addEventListener("mousedown",smallImg(imgtecla));
  setTimeout(() =>{
    imgtecla.addEventListener("mouseup",normalImg(imgtecla));
  }, 100);
}
function smallImg(y) {
  if (y.id=="1" || y.id=="2" || y.id=="3" || y.id=="0" || y.id=="punto" || y.id=="igual"){
    y.style.width = "28%";
    y.style.height = "61.91x";
  } else if (y.id=="mas") {
     y.style.width = "88%";
     y.style.height = "100%";
  } else {
    y.style.width = "21%";
    y.style.height = "61.91x";
  }

}

function normalImg(y) {
  if (y.id=="1" || y.id=="2" || y.id=="3" || y.id=="0" || y.id=="punto" || y.id=="igual"){
    y.style.width = "29%";
    y.style.height = "62.91x";
  } else if (y.id=="mas") {
     y.style.width = "90%";
     y.style.height = "100%";
  } else {
    y.style.width = "22%";
    y.style.height = "62.91x";
  }
}
