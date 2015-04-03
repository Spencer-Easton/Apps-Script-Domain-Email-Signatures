# Domain-Email-Signatures
A sample script to show how to set the signature block of a member of your domain


####1) You will need to add the library:
MswhXl8fVhTFUH_Q3UOJbXvxhMjh3Sh48

####2) In the project's developer console enable the api:
admin sdk

####3) Set up the project credentials as an Oauth Web Application:
 Authorized JavaScript origins: 
 https://script.google.com
 
 Authorized redirect URIs: 
 https://script.google.com/macros/d/{PROJECT KEY}/usercallback
 
 note: the project key can be found in you scripts File-> Project Properties
####4) Add the genereated Client Id and Client Secret:
     Add the script properties clientId and clientSecret and 
     add their respective values from the generated credentials
     
####5) Add the {project key} AdminOauth2.gs:
       on the line .setProjectKey('...') add the project key

Read the docs of the Oauth2 library at:
https://github.com/googlesamples/apps-script-oauth2
