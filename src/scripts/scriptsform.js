function onSubmit() {
    var nome = document.getElementsByTagName("input")[0];
    var idade = document.getElementsByTagName("input")[1];
    var email = document.getElementsByTagName("input")[2];
    var date = document.getElementsByTagName("input")[3];
    var dateTimeLocal = document.getElementsByTagName("input")[4];
    

    if(nome.value === ""){
        alert("Informe nome");
        nome.focus();
        return;
    }

    if(idade.value === ""){
        alert("Informe idade");
        idade.focus();
        return;
    }

    if(email.value === ""){
        alert("Informe o email");
        email.focus();
        return;
    }
    if(date.value === ""){
        alert("Informe a data");
        date.focus();
        return;
    }
    if(dateTimeLocal.value === ""){
        alert("Informe o horário");
        dateTimeLocal.focus();
        return;
    }

    document.getElementsByTagName("form")[0].submit();
    document.getElementsByTagName("form")[1].submit();
    document.getElementsByTagName("form")[2].submit();
    document.getElementsByTagName("form")[3].submit();
    document.getElementsByTagName("form")[4].submit();
    
}