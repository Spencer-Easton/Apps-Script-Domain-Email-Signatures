var organization="Your organizations name";
var domainName="YourDomain.org";

function doGet(){
  return showAuthWindow();
}


function test(){
  setSignature("8test@ccsknights.org")
}

function setSignature(userEmail){
  var userName=userEmail.split("@")[0]
  
  // Creating Signature String for user
  var newUserSignatureString="First Name"+" " +"Last Name"+"&lt;br&gt;"
  +organization+"&lt;br&gt;"+"Email"+"&lt;br&gt;";              
  
  var xml = '<?xml version="1.0" encoding="utf-8"?>' +
    '<atom:entry xmlns:atom="http://www.w3.org/2005/Atom" xmlns:apps="http://schemas.google.com/apps/2006" >' +
      '<apps:property name="signature" value="'+ newUserSignatureString+'" /></atom:entry>';
  
  var base="https://apps-apis.google.com/a/feeds/emailsettings/2.0/";
  var url = base + domainName + '/' + userName + '/signature';
  
  var options = {
    "method":"PUT",
    "headers": {"authorization": "Bearer " + getAdminService().getAccessToken()},
    "payload":xml,
    "contentType":"application/atom+xml"
  }
  
  
  var results =  UrlFetchApp.fetch(url, options);
  Logger.log(results)
}
