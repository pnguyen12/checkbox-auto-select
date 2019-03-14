const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let lastChecked;
let isBetween = false;
/**
 * 
 * @param {shiftKey} {event: {shiftkey: true || false }}
 */
function onHandleCheck({ shiftKey }) {
    if (isBetween) resetIsBetween();
    if (shiftKey && !this.checked) {
        checkboxes.forEach(check => {
            if (check === this) {
                isBetween = !isBetween;
            }
            if (isBetween) {
                check.checked = false;
            }
        })
    }
    if (shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            // last check is always first
            // then we check if the current checkbox is the clicked checkbox to set the flags in between
            if (checkbox === this || checkbox === lastChecked) {
                isBetween = !isBetween;
            }
            if (isBetween) {
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;
}

function resetIsBetween() {
    isBetween = false;
}
window.onload = function () {
    checkboxes.forEach(checkbox => checkbox.addEventListener('click', onHandleCheck))
};
