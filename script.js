window.addEventListener("DOMContentLoaded", (event) => {
  // Takes all the css variables names from the styleSheet, return obj
  function getCssVar() {
    let allVariables = document.styleSheets[0].cssRules[10].cssRules[0].style;
    allVariables = Object.values(allVariables).filter((e) => e.startsWith("--"));
    return allVariables;
  }
  //   Change the names of the css variables with the radio id
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

  //   Checks the user prefered theme
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
});
