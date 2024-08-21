// -----------------------------original theme Start--------------------------
//  start colors

let mainpageOriginBackground = getComputedStyle(
  document.documentElement
).getPropertyValue("--Very-dark-desaturated-blue");

let screenOriginBackground = getComputedStyle(
  document.documentElement
).getPropertyValue("--Very-dark-desaturated-blue-screen-background");

let Reset_Del_Background = getComputedStyle(
  document.documentElement
).getPropertyValue("--Desaturated-dark-blue-key-background");

let Reset_Del_Shadow = getComputedStyle(
  document.documentElement
).getPropertyValue("--Desaturated-dark-blue-key-shadow");

let originkeysBackground = getComputedStyle(
  document.documentElement
).getPropertyValue("--Light-grayish-orange-key-background");

let originkeysShadow = getComputedStyle(
  document.documentElement
).getPropertyValue("--Grayish-orange-key-shadow");

let equalOriginBackgroundColor = getComputedStyle(
  document.documentElement
).getPropertyValue("--Red-key-background-toggle");

let equalOriginShadow = getComputedStyle(
  document.documentElement
).getPropertyValue("--Dark-red-key-shadow");

//  end colors

// -------------------------------------original theme end---------------------------

//from theme1
let greenColor = getComputedStyle(document.documentElement).getPropertyValue(
  "--Dark-moderate-cyan-key-background"
);
//from theme1

// -----------------------------------------satrt theme2 vars---------------------
// start colors

let themeTwoBackgroundColor = getComputedStyle(
  document.documentElement
).getPropertyValue("--Light-gray-main-background");

let themeTwoScreenBackground = getComputedStyle(
  document.documentElement
).getPropertyValue("--Very-light-gray-screen-background");

let themeTwoKeysBackground = "rgb(211,205,205)";

let OrangeColor = getComputedStyle(document.documentElement).getPropertyValue(
  "--Orange-key-background-toggle"
);

let resrtColortheme2 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Dark-moderate-cyan-key-background");

let resrtColorthemeShadow2 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Very-dark-cyan-key-shadow");

let realOrange = "rgb(255, 139, 56)";

// end colors

// ---------------------------------------end theme2 vars----------------------

//----------------------------------------  start theme 3 vars----------------

//start colors

let yellow = getComputedStyle(document.documentElement).getPropertyValue(
  "--Light-yellow"
);

let mainPage_BackgroundColor_Theme3 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Very-dark-violet-main-background");

let screen_keys_background = getComputedStyle(
  document.documentElement
).getPropertyValue("--Very-dark-violet-toggle");

let Dell_Reset_backgroundColor = getComputedStyle(
  document.documentElement
).getPropertyValue("--Dark-violet-key-background");

let Dell_Reset_Shadow = getComputedStyle(
  document.documentElement
).getPropertyValue("--Vivid-magenta-key-shadow");

let numbersBackgroundColor = getComputedStyle(
  document.documentElement
).getPropertyValue("--Very-dark-violet-key-background");

let equal_pointer_BackgroundColor = getComputedStyle(
  document.documentElement
).getPropertyValue("--Pure-cyan-key-background-toggle");

let equal_pointer_Shadow = getComputedStyle(
  document.documentElement
).getPropertyValue("--Soft-cyan-key-shadow");

//end colors

// ------------------------------------- end theme 3 vars---------------------------

// get the elemnts start

let kyes = document.querySelector(".keys");

const numbers = document.querySelectorAll(".number");

let calculator = document.querySelector(".calculator");

let mainPage = document.querySelector(".main-page");

let screen = document.querySelector(".screen");

let pointer = document.querySelector(".pointer");

let equal = document.querySelector(".equal");

let Del = document.querySelector(".DEL");

let RESET = document.querySelector(".RESET");

let themeButton = document.querySelector(".theme-button");

let attribution = document.querySelector(".attribution");

let links = [...attribution.children];

// get the elemnts start

// defien counter for release the changes
let counter = 5;

// start with optimazations
pointer.addEventListener("click", () => {
  if (counter === 45) {
    // reassing the value of counter to 5px
    counter = 5;

    //------------------------------Start mode 1 ----------------------------

    if (counter === 5) {
      kyes.style.opacity = "0.7";

      attribution.style.backgroundColor = mainpageOriginBackground;

      changelinkColor(equalOriginBackgroundColor);

      forAll(
        "rgb(65, 73, 86)",

        originkeysBackground,

        originkeysShadow,

        "white"
      );
      optimaztion(
        screenOriginBackground,

        mainpageOriginBackground,

        screenOriginBackground,

        "white",

        equalOriginBackgroundColor,

        equalOriginBackgroundColor,

        Reset_Del_Background,

        Reset_Del_Shadow,

        Reset_Del_Background,

        Reset_Del_Shadow,

        screenOriginBackground,

        equalOriginShadow
      );

      Hover(
        "rgb(162, 179, 225)",

        Reset_Del_Background,

        "rgb(162, 179, 225)",

        Reset_Del_Background,

        "rgb(249, 108, 91)",

        equalOriginBackgroundColor,

        "rgb(249, 108, 91)",

        equalOriginBackgroundColor
      );
      //------------------------------End mode 1 ----------------------------
    }

    pointer.style.left = `${counter}px`;
  } else {
    // increase the counter value by 20px
    counter += 20;

    //move the pointer when click on it
    pointer.style.left = `${counter}px`;

    //------------------------------Start mode 2 ----------------------------

    if (counter === 25) {
      kyes.style.opacity = "1";

      attribution.style.backgroundColor = themeTwoBackgroundColor;

      attribution.style.color = "black";

      forAll(
        "rgb(65, 73, 86)",
        originkeysBackground,
        originkeysShadow,
        "white"
      );

      optimaztion(
        themeTwoKeysBackground,

        themeTwoBackgroundColor,

        themeTwoScreenBackground,

        "black",

        OrangeColor,

        OrangeColor,

        resrtColortheme2,

        resrtColorthemeShadow2,

        resrtColortheme2,

        resrtColorthemeShadow2,

        themeTwoKeysBackground,

        OrangeColor
      );

      Hover(
        resrtColorthemeShadow2,

        greenColor,

        resrtColorthemeShadow2,

        greenColor,

        realOrange,

        OrangeColor,

        realOrange,

        OrangeColor
      );
      //------------------------------End mode 2 ----------------------------

      //------------------------------Start mode 3 ----------------------------
    } else if (counter === 45) {
      kyes.style.opacity = "1";

      attribution.style.backgroundColor = mainPage_BackgroundColor_Theme3;

      attribution.style.color = "#ccc";

      changelinkColor(equal_pointer_BackgroundColor);

      forAll(
        yellow,

        numbersBackgroundColor,

        Dell_Reset_Shadow,

        Dell_Reset_Shadow
      );

      optimaztion(
        screen_keys_background,

        mainPage_BackgroundColor_Theme3,

        screen_keys_background,

        yellow,

        equal_pointer_BackgroundColor,

        equal_pointer_BackgroundColor,

        Dell_Reset_backgroundColor,

        Dell_Reset_Shadow,

        Dell_Reset_backgroundColor,

        Dell_Reset_Shadow,

        screen_keys_background,

        equal_pointer_Shadow
      );

      Hover(
        Dell_Reset_Shadow,

        Dell_Reset_backgroundColor,

        Dell_Reset_Shadow,

        Dell_Reset_backgroundColor,

        equal_pointer_Shadow,

        equal_pointer_BackgroundColor,

        equal_pointer_Shadow,

        equal_pointer_BackgroundColor
      );

      //------------------------------End mode 3 ----------------------------
    }
  }
});

// ------------------------------------------End with optimazations---------------------------

// ------------------------------------------start functions-------------------------------
function optimaztion(
  keysbackground,

  mainpagebackground,

  screenColor,

  calculatorColor,

  pointerBackground,

  equalBackground,

  Delnewbackground,

  Delshadowcolor,

  Resetnewbackground,

  Resetshadowcolor,

  themeButtonBackground,

  equlShdowColor
) {
  kyes.style.backgroundColor = keysbackground;

  mainPage.style.backgroundColor = mainpagebackground;

  screen.style.backgroundColor = screenColor;

  calculator.style.color = calculatorColor;

  pointer.style.backgroundColor = pointerBackground;

  equal.style.backgroundColor = equalBackground;

  Del.style.cssText = ` color :white; background-color:${Delnewbackground}; box-shadow:0 2px 0 0 ${Delshadowcolor}; `;

  RESET.style.cssText = ` color :white; background-color:${Resetnewbackground}; box-shadow:0 2px 0 0 ${Resetshadowcolor};  `;

  themeButton.style.backgroundColor = themeButtonBackground;

  equal.style.boxShadow = `0 2px 0 0 ${equlShdowColor}`;
}

function Hover(
  RESETBackground_onHover,

  RESETBackground_onLeave,

  DelBackground_onHover,

  DelBackground_onLeave,

  equalBackground_onHover,

  equalBackground_onLeave,

  pointerBackground_onHover,

  pointerBackground_onLeave
) {
  RESET.addEventListener("mouseover", () => {
    RESET.style.backgroundColor = RESETBackground_onHover;
  });
  RESET.addEventListener("mouseleave", () => {
    RESET.style.backgroundColor = RESETBackground_onLeave;
  });
  Del.addEventListener("mouseover", () => {
    Del.style.backgroundColor = DelBackground_onHover;
  });
  Del.addEventListener("mouseleave", () => {
    Del.style.backgroundColor = DelBackground_onLeave;
  });
  equal.addEventListener("mouseover", () => {
    equal.style.backgroundColor = equalBackground_onHover;
  });
  equal.addEventListener("mouseleave", () => {
    equal.style.backgroundColor = equalBackground_onLeave;
  });

  pointer.addEventListener("mouseover", () => {
    pointer.style.backgroundColor = pointerBackground_onHover;
  });
  pointer.addEventListener("mouseleave", () => {
    pointer.style.backgroundColor = pointerBackground_onLeave;
  });
}

// to change the keys backgground and color and shadow

function forAll(color, background, shadow, backgground_onHover) {
  numbers.forEach((number) => {
    number.style.cssText = `color:${color}; background-color:${background}; box-shadow:0 2px 0 0 ${shadow};`;
    number.addEventListener("mouseover", () => {
      number.style.backgroundColor = backgground_onHover;
    });
    number.addEventListener("mouseleave", () => {
      number.style.backgroundColor = background;
    });
  });
}

//--------------------------------------------- end functions----------------------------------

// Start the main logic of the calcolatot

let digts = document.querySelectorAll(".dig");

// define the main reslut
let result = "";

digts.forEach((dig) => {
  dig.addEventListener("click", () => {
    //cheak if the button is an oprator
    if (
      dig.dataset.value === "+" ||
      // dig.dataset.value === "-" ||
      dig.dataset.value === "*" ||
      dig.dataset.value === "/"
    ) {
      //cheak if the result is not emty and the last char doesn't equal itself
      if (result !== "" && result[result.length - 1] !== dig.dataset.value) {
        //ceak if the last char is not oprator
        if (isNaN(result[result.length - 1])) {
          result =
            result.slice(0, result.indexOf(result[result.length])) +
            dig.dataset.value;
          screen.textContent = result;
        } else {
          let opreator = dig.dataset.value;

          result = result + opreator;

          screen.textContent = result;

          Full();
        }
      }
    } else {
      if (dig.dataset.value === ".") {
        if (result[result.length - 1] !== ".") {
          let arrayOfResult = result.split(/[+\-*/]/);

          if (!arrayOfResult[arrayOfResult.length - 1].includes(".")) {
            result = result + dig.dataset.value;
          }
        }
      } else {
        result = result + dig.dataset.value;

        screen.textContent = result;

        Full();
      }
    }
  });
});

// start Delete behavoir
Del.addEventListener("click", () => {
  result = result.slice(0, result.indexOf(result[result.length]));

  screen.textContent = result;
});
// end  Delete behavoir

// start eqaul behavoir
equal.addEventListener("click", () => {
  try {
    let finalresult = eval(result);

    screen.textContent = finalresult;

    screen.style.fontSize = "40px";
  } catch (err) {
    screen.textContent = "Error";
  }
});
// end eqaul behavoir

// start Reset behavior
RESET.addEventListener("click", () => {
  result = "";

  screen.textContent = result;
});
// end Reset behavior

// End the main logic of the calcolatot

// start reduce the fontsize when the screen is full

function Full() {
  if (result.length >= 16) {
    screen.style.fontSize = "30px";
  }
  if (result.length >= 22) {
    screen.style.fontSize = "25px";
  }
  if (result.length >= 25) {
    screen.style.fontSize = "20px";
  }
}
// end reduce the fontsize when the screen is full

// start hadnle the keyboard keys
window.addEventListener("keydown", (e) => {
  for (dig of digts) {
    if (dig.dataset.value == e.key) {
      dig.click();
      return;
    }
    if (e.key === "Enter") {
      equal.click();
      return;
    }
    if (e.key === "c" || e.key === "C") {
      RESET.click();
    }
    if (e.key === "Backspace") {
      e.preventDefault();
      Del.click();
      return;
    }
  }
});

// end hadnle the keyboard keys

function changelinkColor(color) {
  links.forEach((link) => {
    link.style.color = color;
  });
}

// ------------------------------------------------The End ------------------------------------------
