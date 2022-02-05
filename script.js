window.addEventListener("DOMContentLoaded", (event) => {
  /* ----------------------- */
  /* Theme switch code start */
  /* ----------------------- */

  /* Takes all the css variables names from the styleSheet, return obj */
  function getCssVar() {
    let allVariables = document.styleSheets[0].cssRules[10].cssRules[0].style;
    allVariables = Object.values(allVariables).filter((e) => e.startsWith("--"));
    return allVariables;
  }
  /*   Change the names of the css variables with the radio id */
  function switchTheme(e) {
    if (e.target.id == "") {
      return;
    }
    let r = document.querySelector(":root");
    let cssVars = getCssVar();

    // console.log(cssVars);
    // console.log(e.target.id);

    Object.entries(cssVars).forEach(([key, value]) => {
      r.style.setProperty(value, "var(" + value.replace("default", e.target.id) + ")");
    });
  }

  let theme1 = document.getElementById("theme1");
  let theme2 = document.getElementById("theme2");

  /*   Checks the user prefered theme */
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    theme1.checked = true;
  } else {
    theme2.checked = true;
  }
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    event.matches ? (theme1.checked = true) : (theme2.checked = true);
  });

  const switches = document.getElementsByClassName("switch__presets");
  switches[0].addEventListener("click", switchTheme);
  //   let themes = document.querySelectorAll('input[name="theme"]');
  //   themes.forEach(theme => theme.addEventListener('change', switchTheme));

  /* --------------------- */
  /* Calculator code start */
  /* --------------------- */

  /* Replace any character that not match */
  function validateInput() {
    screen.value = screen.value.replace(/[^0-9\-\+\/x*.,]+/, "");
  }
  /* Insert digits and signs from buttons */
  function getDigit(e) {
    let targetText = e.target.textContent;
    if (e.target.localName != "button") {
      return;
    }
    if (targetText === "RESET") {
      screen.value = "";
      return;
    }
    if (targetText === "DEL") {
      screen.value = screen.value.slice(0, -1);
      return;
    }
    screen.value += targetText;
    validateInput();
  }
  function getResult(e) {
    screen.value = eval(screen.value.replace("x", "*"));
  }

  let screen = document.getElementById("screen");
  const digits = document.getElementsByClassName("calc__num-pad");

  digits[0].addEventListener("click", getDigit);
  digits[0].children[17].addEventListener("click", getResult);
  screen.addEventListener("input", validateInput);
});
