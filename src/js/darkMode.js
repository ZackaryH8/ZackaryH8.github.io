let darkMode = localStorage.getItem("darkToggle");

window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("darkToggle") == 1) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
});

function toggleDark() {
    if (localStorage.getItem("darkToggle") == 0) {
        localStorage.setItem("darkToggle", 1);
        document.body.classList.add("dark");
    } else {
        localStorage.setItem("darkToggle", 0);
        document.body.classList.remove("dark");
    }
}
