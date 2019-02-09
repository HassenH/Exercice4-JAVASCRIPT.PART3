function surligne(){
  var regexName = /[a-z]+/g;
    // On stock tout l'élement dans la variable pour utiliser la value et le bordercolor sans réutiliser document.getElementById
    var pass1 = document.getElementById('password');
    var pass2 = document.getElementById('confirmPassword');
    if (regexName.test(password) && regexName.test(confirmPassword)){
    if(pass1.value == pass2.value){
        pass1.style.border = 'solid 2px green';
        pass2.style.border = 'solid 2px green';
    }else{
        pass1.style.border = 'solid 2px red';
        pass2.style.border = 'solid 2px red';
    }
}else{
  alert('veuillez entrez un mot de passe valide');
}
}
