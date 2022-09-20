let keys = [...document.querySelectorAll("button")];
const screen = document.querySelector("div.screen");

keys.map((key) => {
    key.addEventListener("click", (e) => {
        switch(key.innerText) {

            case "C":
                screen.innerText = "0";
                break;

            case "+ -":
                if (eval(screen.innerText) >= 0) {
                    break;
                } else {
                    screen.innerText = eval(screen.innerText) * -1;
                    break;
                }

            case "=":
                try {
                    screen.innerText = eval(screen.innerText);
                } catch {
                    screen.innerText = "ERROR!!";
                    screen.style = `color: red`;
                }
                break;

            default:
                if (screen.innerText === "0" ||
                    screen.innerText ==="ERROR!!" ||
                    screen.innerText === "NaN") {
                    screen.innerText = "";
                    screen.style = "color: white";
                }
                screen.innerText += key.innerText;
                break;
        }

    });
});