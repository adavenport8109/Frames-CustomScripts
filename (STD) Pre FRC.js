//New Frame Code
//Nav Path - Others ~ Financial Reporting Center
let element = window.top.document.querySelector('[id*="Pph::_afrTtxt"] h1')

if ((element && element.innerText == 'Financial Reporting Center' ) && window.top.document.querySelector('img[title="Search"]'))
{return true;}
else
{return false;}

//Old Frame Code
if(document.querySelector('.x1b4[title="Financial Reporting Center"]') && document.querySelector('.xi6[title="Edit Tags"]'))
{return true;}
else
{return false;}

/*
Changed to an inner text and an img with a title. 
*/