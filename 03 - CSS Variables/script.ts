const inputControls: NodeListOf<HTMLInputElement> = document.querySelectorAll(".controls input");

function handleUpdate(): void {
	const suffix = this.dataset.sizing || "";
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputControls.forEach(input => input.addEventListener("change", handleUpdate));
inputControls.forEach(input => input.addEventListener("mousemove", handleUpdate));

