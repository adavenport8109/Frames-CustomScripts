//Old Frame
if(document.querySelector('[title="Basic Options"]')&&
document.querySelector('.xeq[title="Define additional information regarding schedule, output and notification"]'))
return true;
else
return false;

//New Frame
//Nav Path - Tools ~ Scheduled Processes ~ Generate a new process
if(window.top.document.querySelector('[title="Basic Options"]')&&
window.top.document.querySelector('[title="Define additional information regarding schedule, output and notification"]'))
{return true;}
else
{return false;}