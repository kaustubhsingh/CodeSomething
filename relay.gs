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
 
function getTPMEmail()
{
  return ["me@example.com"];
}

function SendGoogleForm(e) 
{  
  try 
  { 
    var email = getTPMEmail();
    
    var s = SpreadsheetApp.getActiveSheet();
    var headers = s.getRange(1,1,1,s.getLastColumn()).getValues()[0];    
    var message = "";  
    var userName = "";
    var topicRead = 0, infoRead = 0;
    
    for (var i in headers) {
      
      if (topicRead == 0 && headers[i] == "Topic" && e.namedValues[headers[i]].toString() != "")
      {
        message += "<b>" + e.namedValues[headers[i]].toString() + "</b><br><br>";
        var subject = e.namedValues[headers[i]].toString();
        subject = subject.replace(/,/g,"");
        topicRead = 1;
      }

      if (infoRead == 0 && headers[i] == "Information" && e.namedValues[headers[i]].toString() != "")
      {
        message += "<pre>" + e.namedValues[headers[i]].toString() + "</pre><br><br>";
        infoRead = 1;
      }  
      
      if (headers[i] == "Username" && userName == "")
      {
        userName = e.namedValues[headers[i]].toString();
      }
      
      if (topicRead == 1 && infoRead == 1)
      {
        break;
      }
     
    }
 
    message = message.replace(/,/g,"");
    
    message += "<a href = \""+SpreadsheetApp.getActiveSpreadsheet().getUrl()+"\"> <b>Link to Knowledge Base</b> </a>";
    message += "<br>";
    message += "<a href = ""> <b>Link to Submit an Article</b> </a>";
    
    
    MailApp.sendEmail(email, subject, message, { htmlBody: message, name: userName, replyTo : userName }); 
    
  } catch (e) {
    Logger.log(e.toString());
  }
    
}
 
