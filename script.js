/* 
Desc: this function will display an alert when we click on any city in page "anchor"
Date: 30/01/2024
Developer: Sajeda
*/
function displayAlert() {
    alert("Loading weather report...")
}

/* 
Desc: this function will delete cookie box when we click on btn
Date: 30/01/2024
Developer: Sajeda
*/
function acceptCookies() {
    var cookie = document.querySelector('.div-2');
    cookie.remove();
}

/* 
Desc: this function will change the temperature from C to F when we change it in selection
Date: 30/01/2024
Developer: Sajeda
*/
function changeTeperatureValue(selection) {
    var unit = Selection.value;
    if (unit == 'C'){
        changeValuesTo('C');
    }
    else 
    changeValuesTo('F');
}

/* 
Desc: this function will change the temperature values in status when we change it in selection
Date: 01/02/2024
Developer: Sajeda
*/
function changeTemperatureValue(selectElement) {
    var temperatureElements = document.querySelectorAll('.p-values .red-value, .p-values .blue-value');
    var selectedUnit = selectElement.value;
    var constant1 = 1.8;
    var constant2 = 32;
    for (var i = 0; i < temperatureElements.length; i++) {
        var element = temperatureElements[i];
        var temperatureValue = parseInt(element.innerText);

      if (selectedUnit === 'f') {
        temperatureValue = Math.round((temperatureValue * constant1) + constant2);
      }
      else {
        temperatureValue = Math.round ((temperatureValue - constant2 ) / constant1);
      }
  
      element.innerText = temperatureValue; 
    }
  }
