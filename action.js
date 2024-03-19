function show_senha()
{
    var input =
    document.geteelemtById("i_senha");

    if(input.type == "password"){
        input.type = "text";

    }else{
        input.type = "password";
    }
}