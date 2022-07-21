//New Frame Code
//Nav Path: Receivables ~ Revenue (landing page)
let element = window.top.document.querySelector('[id*="Pph::_afrTtxt"] h1')

if ((element && element.innerText == 'Overview' ) && window.top.document.querySelector('div[title*="Revenue"]')) 
{return true;}
else
{return false;}


//Old Frame Code
if(document.querySelector('.xmh[title="View"]')&&
document.querySelector('.xeq[title="Export to Excel"]'))
{return true;}
else
{return false;}

/*Reason for change:
Used classes, changed to title and innertext
*/
