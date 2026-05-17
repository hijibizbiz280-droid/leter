// Set today's date
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const now = new Date();
document.getElementById("letter-date").textContent =
    months[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear();

let opened = false;

function openEnvelope() {
    if (opened) return;
    opened = true;

    const env = document.getElementById("envelope");
    const letter = document.getElementById("letter");

    // Step 1: open flap
    env.classList.add("flap-open");

    setTimeout(() => {
        // Step 2: fly envelope away
        env.classList.add("opened");
    }, 700);

    setTimeout(() => {
        // Step 3: show letter
        env.style.display = "none";
        document.querySelector(".open-hint").style.display = "none";
        letter.classList.add("visible");
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                letter.classList.add("animate");
            });
        });
    }, 1400);
}
