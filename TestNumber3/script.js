var isValid = false;

function goCheck(){
    var nama = document.getElementById("nama").value
    var email = document.getElementById("email").value
    var noHp = document.getElementById("noHp").value

    if(nama.length < 3 ){
        window.alert('Nama tidak boleh kurang dari 3')
    }
    var emailSplit = email.split("")
    validateEmail(emailSplit);
    if(isValid == true){
        window.alert('berhasil')
        isValid=false;
    }else window.alert('Email tidak valid')
}

function validateEmail(emailSplit){
    for(var i=0; i<emailSplit.length; i++){
        if(emailSplit[i] == '@'){
            for(var y = i; y<emailSplit.length; y++){
                if(emailSplit[y] == '.'){
                    isValid = true;
                }
            }
        }
    }
}
