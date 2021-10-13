function aman(){
 if(document.from.first.value==""){
      alert("Please enter your First name! ");
      document.from.frist.focus();
     
 return false;
 }

 if(document.from.last.value==""){
     alert("please enter your Last name !");
     document.from.last.focus();
     return false;
 }
 if(document.from.DOB.value==""){
    alert("please enter your Date of Birth! !");
    document.from.DOB.focus();
    return false;
}

 if(document.from.email.value==""){
     alert("enter Email!");
     document.from.email.focus();
     return false;

 }
//  var x=email.indexOf(".");
//  var y=email.indexOf("@");
//  if (y<1||(x<y+2)||(x+2>=y.length))
//  {
//      alert("enter username@gmail.com!");
//      document.from.email.focus();
//      return false;
//  }
 if(document.from.phone.value==""|| document.from.phone.value.length  !=10){
    alert("please enter atleast  10 digits  mobile number !");
    document.from.phone.focus();
    return false;
}
if(document.from.add.value==""){
    alert("please enter your addresss !");
    document.from.add.focus();
    return false;
}
if(document.from.city.value==""){
    alert("please enter your city !");
    document.from.city.focus();
    return false;
}
if(document.from.reg.value==""){
    alert("please enter region !");
    document.from.reg.focus();
    return false;
}
if(document.from.zip.value==""){
    alert("please enter Zip code !");
    document.from.zip.focus();
    return false;
}
if(document.from.sel.value=="1"){
    alert("please slect country !");
    document.from.sel.focus();
    return false;
}
if(document.from.gender.value==""){
    alert("please Please seclect gender !");
    
    return false;
}
if(document.from.hig.value==""){
    alert("please enter hieght !");
    document.from.hig.focus();
    return false;
}
if(document.from.wig.value==""){
    alert("please slect your weight !");
    document.from.wig.focus();
    return false;
}
if(document.from.his.value==""){
    alert("please Answer!");
    
    return false;
}
if(document.from.ath.value==""){
    alert("please Answer !");
    
    return false;
}
return true;


 

}