function validate(){
    var char = document.getElementById("form_text").value
    var charSplit = char.split("")
    for(var i=0; i<charSplit.length; i++){
        for(var y=0; y<i; y++){
            console.log('lewat1')
            if(charSplit[i] === charSplit[y]){
                console.log('lewat2')
                charSplit[y] = ""
            }
        }
    }
    console.log(charSplit);
    document.getElementById('showText').innerHTML = charSplit
}