function Initialize() {
 
  var triggers = ScriptApp.getScriptTriggers();
  
  for(var i in triggers) {
    ScriptApp.deleteTrigger(triggers[i]);
  }
  
  ScriptApp.newTrigger("SendGoogleForm")
  .forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet())
  .onFormSubmit()
  .create();
  
}
 
function SendGoogleForm(e) 
{  
  try 
  {  
    // You may also replace this with another email address
    var email = "kaustubh.singh@gmail.com";
    
    // Optional but change the following variable
    // to have a custom subject for Google Docs emails
    var subject = "Google Docs Form Submitted";  
    
    var s = SpreadsheetApp.getActiveSheet();
    var headers = s.getRange(1,1,1,s.getLastColumn()).getValues()[0];    
    var message = "";    
    
  
    var topicRead = 0, infoRead = 0;
    
    for(var i in headers) {
      
      if (topicRead == 0 && headers[i] == "Topic" && e.namedValues[headers[i]].toString() != "")
      {
        message += e.namedValues[headers[i]].toString() + "\n\n"; 
        message = message.replace(",","");
        topicRead = 1;
      }

      if (infoRead == 0 && headers[i] == "Information" && e.namedValues[headers[i]].toString() != "")
      {
        message += e.namedValues[headers[i]].toString() + "\n\n";
        message = message.replace(",","");
        infoRead = 1;
      }      
      
      if (topicRead == 1 && infoRead == 1)
      {
        break;
      }
    }
 
     message = message.replace(/,/g,"");
    /*
    for(var i in headers) {
      
      if (headers[i] == "Topic" && e.namedValues[headers[i]].toString() != "")
      {
        message += headers[i] + ' :: '+ e.namedValues[headers[i]].toString() + "\n\n"; 
      }
    }
      */
    
    message += "<b>Sheet URL : </b>" + SpreadsheetApp.getActiveSpreadsheet().getUrl() + "\n";
   
    
    // This is the MailApp service of Google Apps Script
    // that sends the email. You can also use GmailApp here.
    
    MailApp.sendEmail(email, subject, message, { htmlBody: message }); 
    
  } catch (e) {
    Logger.log(e.toString());
  }
    
}
 
