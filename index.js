var b=false;
function isNumberKey(evt)
    {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode!=8 && charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
            return false; 
        else{
        if(evt.srcElement.className=="form-control people"){
            if (evt.charCode==48 && b==false && evt.srcElement.value==0)
            {
                $("<span class='warn'>Can't be zero</span>").insertBefore(".people");
                b=true;
            }
            else if(b==true && evt.charCode!=48)
            {
                $(".warn").remove();
                b=false;
            }
        }
        return true;
        }
    }

$(".reset").on("click",function(){
    tip=$(".btn.selected").val();
    bill=$(".bill").val();
    numOfPeople=$(".people").val();
    calculate(tip,bill,numOfPeople);
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

$( "form" ).submit(function( event ) {
    event.preventDefault();
  });

function calculate(t,b,n){
    if(b!="" && n!="" && t!="" && Number.isInteger(Number(n))){
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
    else{
        alert("Enter required data");
    }
}



