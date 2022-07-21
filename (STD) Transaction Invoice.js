//New Frame Code
//Nav Path - Receivables ~ Revenue ~ Tasks ~ Manage Revenue Adjustments ~ Open an invoice
let element = window.top.document.querySelector('[id*="Pph::_afrTtxt"] h1')

if ((element && element.innerHTML.indexOf("Transaction:Invoice") != -1) && window.top.document.querySelector('div[title="General Information"]')) 
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
Used classes, changed to innertext and title.
*/
