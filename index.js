var b=false;
function isNumberKey(evt)
    {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode!=8 && charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
            return false; 
        else{
        if(evt.srcElement.className!="form-control bill"){
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

$(".people").on("click", function() {
    if ($(this).val() != "")
        $(this).val("");
});  
