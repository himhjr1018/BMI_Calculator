let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let results = document.querySelector("#results");
   

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please enter a valid height! ${height}`
       
    }

    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please enter a valid weight! ${weight}`
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        
    if (bmi < 18.5) {
        let results = document.querySelector("#results");
        results.innerHTML = `<span>Your BMI is ${bmi}. You are underweight</span>`
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        results.innerHTML = `<span>Your BMI is ${bmi}. You are normal</span>`
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        results.innerHTML = `<span>Your BMI is ${bmi}. You are overweight</span>`
    }
    else {
        results.innerHTML = `<span>Your BMI is ${bmi}. You are obese</span>`
    }

    }
 
    
})

