// Function to click a button by XPath
function clickButton(xpath) {
  const button = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;

  if (button) {
    button.click();
    console.log("Button clicked successfully");
  } else {
    console.error("Button not found");
  }
}

// Function to check a radio button by XPath
function checkRadioButton(xpath) {
  const radioButton = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;

  if (radioButton) {
    radioButton.checked = true;
    console.log("Radio button checked successfully");
  } else {
    console.error("Radio button not found");
  }
}

// Loop through radio buttons from tr[3] to tr[11]
for (let i = 3; i <= 11; i++) {
  const xpath = `/html/body/table/tbody/tr[1]/td[2]/table/tbody/tr[4]/td[2]/div[3]/form/table/tbody/tr[${i}]/td[10]/input`;
  checkRadioButton(xpath);
}

// Function to fill a text area by XPath
function fillTextArea(xpath, value) {
  const textArea = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;

  if (textArea) {
    textArea.value = value;
    console.log("Text area filled successfully");
  } else {
    console.error("Text area not found");
  }
}
// Fill text areas
fillTextArea(
  "/html/body/table/tbody/tr[1]/td[2]/table/tbody/tr[4]/td[2]/div[3]/form/table/tbody/tr[12]/td[3]/textarea",
  "baik"
);
fillTextArea(
  "/html/body/table/tbody/tr[1]/td[2]/table/tbody/tr[4]/td[2]/div[3]/form/table/tbody/tr[13]/td[3]/textarea",
  "baik"
);

clickButton(
  "/html/body/table/tbody/tr[1]/td[2]/table/tbody/tr[4]/td[2]/div[3]/form/div/button"
);
