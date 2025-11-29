function convertTemp() {
    const degree = parseFloat(document.getElementById('degree').value);
    const  unit = document.getElementById('unit').value;
    const  degreeunit = document.getElementById('degreeunit').value;
    const resultEl = document.getElementById('result');
    const unitLabel = document.getElementById('unitLabel');
   
    let result;
    if(unit===degreeunit){
      result=degree;
    }   
    else if (unit === 'fahren heit') {
      result = (degree * 9) / 5 + 32;
      unitLabel.innerText = '°F';
    } else {
      result = ((degree - 32) * 5) / 9;
      unitLabel.innerText = '°C';
    }
  
    resultEl.innerText = Math.round(result);
  }
  