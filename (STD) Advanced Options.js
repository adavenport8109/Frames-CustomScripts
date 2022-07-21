//New Frame Code
//Nav Path - Scheduled Processes ~ New process (or some tasks that open a new process) ~ Click Advanced
if(window.top.document.querySelector('[title="Advanced Options"]')&&
window.top.document.querySelector('[title="Define only the parameters for the process"]'))
{return true;}
else
{return false;}

//Old Frame Code
if(document.querySelector('[title="Advanced Options"]')&&
document.querySelector('.xeq[title="Define only the parameters for the process"]'))
return true;
else
return false;

/*
Didn't need the CSS class on the second selector, title unique to this page. 
*/