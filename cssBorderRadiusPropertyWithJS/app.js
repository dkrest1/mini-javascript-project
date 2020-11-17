// UI vars
const inputs = document.querySelectorAll('input');


inputs.forEach((input) => {
    // listen for mousemove
    input.addEventListener('mousemove', changeValue);
    input.addEventListener('change', changeValue);
})

// change value
function changeValue() {
    // unit of property
    const unit = this.dataset.unit;
    const value = this.nextElementSibling;
    // get root(css custom variable) property
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${unit}`);
    value.innerText = `${this.value}${unit}`
}
