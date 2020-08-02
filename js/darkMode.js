let darkMode = localStorage.getItem("darkToggle");

window.addEventListener("DOMContentLoaded", () => {
    if (darkMode == null) {
        localStorage.setItem("darkToggle", 0);
        document.body.classList.remove("dark");
    } else if (darkMode == 0) {
        document.body.classList.remove("dark");
    } else if (darkMode == 1) {
        document.body.classList.add("dark");
    }
});

function toggleDark() {
    document.body.classList.toggle("dark");
    document.getElementById("darkToggle");
    if (darkMode == 0) {
        localStorage.setItem("darkToggle", 1);
    } else {
        localStorage.setItem("darkToggle", 0);
    }
}
