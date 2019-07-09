var redirectURI = context.getVariable("okta.redirectURI");
 
var code = redirectURI.substring(redirectURI.indexOf("code=") + 5);
code = code.substring(0, code.indexOf("&"));
 
context.setVariable("okta.code", code);