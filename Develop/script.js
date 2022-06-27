
// Assignment Code
var characterLength=8;
var  passwordChoice=[];
var num=['0','1','2','3','4','5','6','7','8','9']
var upperChars=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowerChars=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var specialChar=['!','@','#','$','%','^','&','*','(',')','[',']','{','}','|','?','/','<','>',']']
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  var truePrompts=getPrompt();
  var passwordText = document.querySelector("#password");
    if(truePrompts){
    var newPassword = generatePassword();
    passwordText.value = newPassword;
    }else{
      passwordText.value="";
    }
  }
function generatePassword(){
var password="";
for(var i=o; i < characterLength;i++){
  var randomChar=Math.random()*passwordChoice.length;
  password= password + passwordChoice[randomChar];
}
return password;
}
function getPrompt(){
  var  passwordChoice=[];
  characterLength=parseInt(prompt("How many characters would your password to contain?"));
if(isNaN(characterLength)||characterLength<8||characterLength>128){
  alert("charcter length need to be a number,8-128 digits");
  return false;
}
if(confirm("Click Ok to confirm including special characters.")){
  passwordChoice=passwordChoice.concat(specialChar);
}
if(confirm("Click Ok to confirm including numeric characters.")){
  passwordChoice=passwordChoice.concat(num);
}
if(confirm("Click Ok to confirm lowercase characters.")){
  passwordChoice=passwordChoice.concat(lowerChars);
}
if(confirm("Click Ok to confirm including upercase characters.")){
  passwordChoice=passwordChoice.concat(upperChars);
}
return true;
}


