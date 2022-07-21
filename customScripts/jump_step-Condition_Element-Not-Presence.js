/******************************************************************
* Custom Script: Add Jump Step via Studio Console
* Environment: Oracle
* Where to place: Studio Jump Step function
* Purpose: Use Jump Steps to redirect your workflow to a different 
* position based on conditions.
* Note: For a visual guide, select the Add Jump Step - Studio Guide
* in the Guides Folder of the Resource Folder
******************************************************************/
/* Note: Use this script if you want the flow to jump to another step
if a certain isn't present on the page */

// 1. Navigate to the step in a flow that needs the jump step.

// 2. Select the three horizontal grey dots on the step.

// 3. Select Add Jump Step.

// 4. In the Conditions section, select the '+Add Condition' button.

// 5. Select Custom Script from the drop-down menu.

// 6. Copy and paste (ctrl + shift + v) the following text in the Custom function body:

    /* Note: element can be changed to another name if needed. Especially
    element is already in use */

    let element = window.top.document.querySelector('[cssSelector]');

    if (!element) {
        return true;
    } else {
        return false;
    }

// 7. Right click on the element, who's presence or lack of presence will trigger
// the jump step condition, and select Inspect from the popup menu.

// 8. Locate the element's id attribute. Double-click on the id attribute. This will
// enable edit mode.

    // 8.1 Use the element select tool to find the best html for the element.

// 9. Once in edit mode, press (ctrl + a) to highlight the entire id then press (ctrl + c) to 
// copy

// 10. In the Studio, highlight the text cssSelector between the square brackets ([]) then
// press (ctrl + shift + v) to replace the text.

    // Results should be similar to this:
        // [id="_FOpt1:_FOr1:0:_FONSr2:0:_FOTsr1:0:lp1Upl:UPsp1:i2:1:tb1:TBpgl1"]

// 11. Place an * after the word id.

    // Results should be similar to this:
        // [id*="_FOpt1:_FOr1:0:_FONSr2:0:_FOTsr1:0:lp1Upl:UPsp1:i2:1:tb1:TBpgl1"]

// 12. Exclude (remove) all sections of the id text except the final two sections.

    // Results should be similar to this:
        // [id="tb1:TBpgl1"]

// 13. Done.

    // Custom script should like something like this example:
    let target = window.top.document.querySelector('[id="tb1:TBpgl1"]');

    if (!target) {
        return true;
    } else {
        return false;
    }