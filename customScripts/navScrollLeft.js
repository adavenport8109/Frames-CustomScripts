/*********************************************************************
* Custom Script: Make Navigation Bar Scroll Left
* Environment: Oracle
* Where to place: Through Admin Console's Step Specific Custom 
* JavaScript
* Note: For more help, see the Scroll-to-left on Navigation Bar Guide
in the Resource folder.
*********************************************************************/

// Replace ELEMENT with the id of the element being targeted in the specific
const element = window.top.document.getElementById("ELEMENT");
element.scrollIntoView(false);

// If element being targeted doesn't have an id attribute, use method below:

// Replace css selector with the css selector for the targeted element
const element = window.top.document.querySelector("css selector");
element.scrollIntoView(false);