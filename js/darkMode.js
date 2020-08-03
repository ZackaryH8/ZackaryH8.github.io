let darkMode = localStorage.getItem("darkToggle");

// window.addEventListener("DOMContentLoaded", () => {
//     if (darkMode == 0) {
//         document.body.classList.remove("dark");
//     }
//     if (darkMode == 1) {
//         document.body.classList.add("dark");
//     }
//     if (darkMode == null) {
//         localStorage.setItem("darkToggle", 0);
//         document.body.classList.remove("dark");
//     }
// });

// function toggleDark() {
//     document.body.classList.toggle("dark");
//     document.getElementById("darkToggle");

//     if (darkMode == 0) {
//         localStorage.setItem("darkToggle", 1);
//     }
//     else if (darkMode == 1) {
//         localStorage.setItem("darkToggle", 0);
//     }
// }

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
