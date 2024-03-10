var inputControls = document.querySelectorAll(".controls input");
function handleUpdate() {
    var suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty("--".concat(this.name), this.value + suffix);
}
inputControls.forEach(function (input) { return input.addEventListener("change", handleUpdate); });
inputControls.forEach(function (input) { return input.addEventListener("mousemove", handleUpdate); });
