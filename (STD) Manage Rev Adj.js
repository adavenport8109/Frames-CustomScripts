//New Frame Code
let element = window.top.document.querySelector('[id*="Pph::_afrTtxt"] h1')

if ((element && element.innerText == 'Manage Revenue Adjustments' ) && window.top.document.querySelector('div[title="Search"]')) 
{return true;}
else
{return false;}


//Old Frame Code
if(document.querySelector('.x1de[title="Manage Revenue Adjustments"]')&&
document.querySelector('.x1de[title="Transaction, Line: Details"]'))
{return true;}
else
{return false;}

/*Reason for change:
Used classes, changed to id and innertext
*/
