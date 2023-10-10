const fahrenheitBar = document.querySelector("#fahrenheit-input");
const celsiusBar = document.querySelector("#celsius-input");
const submitBtn = document.getElementsByTagName("button")[0];
const Icon = document.querySelector("#swap")
const abbr = document.querySelector("abbr");
const degC = document.querySelector(".temp-indicators-c");
const degF = document.querySelector(".temp-indicators-f");

localStorage.setItem("swapped", 1);
const submitHandler = () => {
    if (localStorage.getItem("swapped") == true) {
        fahrenheitBar.value = ((celsiusBar.value * 9 / 5) + 32);
        celsiusBar.disabled = false;
    } else {
        celsiusBar.value = parseFloat((fahrenheitBar.value - 32) * 5 / 9).toFixed(2);
    }
}

const swapHandler = () => {
    if (localStorage.getItem("swapped") == true) {
        celsiusBar.disabled = true;
        fahrenheitBar.disabled = false;
        abbr.title = "°F to °C";
        fahrenheitBar.animate(keyframeY1, { duration: 500 });
        celsiusBar.animate(keyframeY2, { duration: 500 })
        degF.animate(keyframeY1, { duration: 500 })
        degC.animate(keyframeY2, { duration: 500 })
        console.log(degC, degF)
        setTimeout(() => {
            fahrenheitBar.style.transform = "translateY(-75px)"
            celsiusBar.style.transform = "translateY(75px)"
            degF.style.transform = "translateY(-75px)"
            degC.style.transform = "translateY(75px)"
        }, 500);
        localStorage.setItem("swapped", 0);
    } else {
        celsiusBar.disabled = false;
        fahrenheitBar.disabled = true;
        abbr.title = "°C to °F";
        fahrenheitBar.animate(keyframeY4, { duration: 500 });
        celsiusBar.animate(keyframeY3, { duration: 500 })
        degF.animate({
            transform: "translateY(0)"
        }, { duration: 500 })
        degC.animate({
            transform: "translateY(0)"
        }, { duration: 500 })
        setTimeout(() => {
            fahrenheitBar.style.transform = "translateY(0px)"
            celsiusBar.style.transform = "translateY(0px)"
            degF.style.transform = "translateY(0px)"
            degC.style.transform = "translateY(0px)"
        }, 500);
        localStorage.setItem("swapped", 1);
    }
}


const keyframeY1 = [{
        transform: "scale(1.2)"
    },
    {
        transform: "translateY(-75px)",
    }
]

const keyframeY2 = [{
        transform: "scale(0.5)"
    },
    {
        transform: "translateY(75px)"
    }
]

const keyframeY3 = [{
        transform: "scale(0.5)"
    },
    {
        transform: "translateY(70)"
    }
]

const keyframeY4 = [{
        transform: "scale(1.2)"
    },
    {
        transform: "translateY(-70px)"
    }
]
submitBtn.addEventListener("click", submitHandler);
Icon.addEventListener("click", swapHandler);