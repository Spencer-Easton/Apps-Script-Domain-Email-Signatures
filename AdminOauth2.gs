function getAdminService() {
 
  return OAuth2.createService('AdminEmail')
      .setAuthorizationBaseUrl('https://accounts.google.com/o/oauth2/auth')
      .setTokenUrl('https://accounts.google.com/o/oauth2/token')
      .setClientId(PropertiesService.getScriptProperties().getProperty("clientId"))
      .setClientSecret(PropertiesService.getScriptProperties().getProperty("clientSecret"))
      .setProjectKey('...')
      .setCallbackFunction('authCallback')
      .setPropertyStore(PropertiesService.getUserProperties())
      .setScope('https://apps-apis.google.com/a/feeds/emailsettings/2.0/')
      .setParam('login_hint', Session.getActiveUser().getEmail())
      .setParam('access_type', 'offline')
      .setParam('approval_prompt', 'force');
}


function showAuthWindow() {
  var adminService = getAdminService();
  if (!adminService.hasAccess()) {
    var authorizationUrl = adminService.getAuthorizationUrl();
    var template = HtmlService.createTemplate(
        '<a href="<?= authorizationUrl ?>" target="_blank">Authorize</a> ' +
        ' access to your domains email settings. <br>NOTE: This script must be ran under a domain admins account with the proper privileges');
    template.authorizationUrl = authorizationUrl;
    var page = template.evaluate();
    return page;
  } else {
   return HtmlService.createHtmlOutput("You have already authorized this service");
  }
}


function authCallback(request) {
  var adminService = getAdminService();
  var isAuthorized = adminService.handleCallback(request);
  if (isAuthorized) {
    return HtmlService.createHtmlOutput('Success! You can close this tab.');
  } else {
    return HtmlService.createHtmlOutput('Denied. You can close this tab');
  }
}


function clearService(){
  OAuth2.createService('AdminEmail')
  .setPropertyStore(PropertiesService.getUserProperties())
  .reset();
}
