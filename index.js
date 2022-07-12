let prevVal = "";
    document.querySelector('input').addEventListener('input', function(e){
      if(this.checkValidity()){
        prevVal = this.value;
      } else {
        this.value = prevVal;
      }
    });

$(".btn").on("click",select);
$("input.btn").on("click",function(){
    $(this).addClass("inputselect");
});
function select(){
    $(".btn").removeClass("inputselect");
    $(".btn").removeClass("selected");
    $(this).addClass("selected");
}

let b=false;
$(".bill, .people, .btn").change(validate);
$(".btn").click(validate)
function validate(){
  let tip=$(".btn.selected").val();
  let bill=$(".bill").val();
  let numOfPeople=$(".people").val();
  if(bill!="" && numOfPeople!="" && tip!=""){
    if(numOfPeople=="0" && b==false){
      $("<span class='warn'>Can't be zero</span>").insertBefore(".people");
      b=true;
    }
    else if(b==true)
      {
        $(".warn").remove();
        b=false;
      }
    calculate(tip,bill,numOfPeople);
    }
  else 
  { if(numOfPeople=="0" && b==false){
      $("<span class='warn'>Can't be zero</span>").insertBefore(".people");
      b=true;
    }
    else{
      $(".warn").remove();
      b=false;
    }
  }
}

function calculate(t,b,n){
    if(Number.isInteger(Number(n)) && n!="0"){
      b=Number(b);
      n=Number(n).toFixed(0);
      t=Number(t);
      var ta= (b*t)/(n*100);
      var tot= (b/n)+ta;
      $(".tipamt").text("$"+ta.toFixed(2));
      $(".total").text("$"+tot.toFixed(2));
      $(".people").text(n);
    }
    else if(Number.isInteger(Number(n))==false){
      alert("Number of People should be Integer");
    }
}

$(".reset").on("click",function(){
  $(".bill, .btn.selected, .people").val("");
  $(".tipamt, .total").text("$0.00");
});
