function validateFullName() {
    var fullName = document.getElementById('name').value;
    var fullNameRegex = /^[a-zA-Z]+ [a-zA-Z]\. [a-zA-Z]+$/; // Define a regular expression for the desired format
  
    if (!fullNameRegex.test(fullName)) {
      alert('Please enter a valid full name in the format "Name I. Surname".');
      return false;
    }
  
    return true;
}

function validateAge() {
    var age = document.getElementById('age').value;
  
    if (!/^[1-9]\d*$/.test(age)) { // Check if the entered age is a valid positive integer
      alert('Please enter a valid age.'); 
      return false;
    }
    
    var ageValue = parseInt(age, 10);  // Check if the age is within a reasonable range (e.g., between 18 and 99)
    if (ageValue < 18 || ageValue > 60) {
      alert('Please enter a valid age within the range of 18 to 60.');
      return false;
    }
    
    return true;
}

function validateGender() {
    var gender = document.getElementById('gender').value;
    var validGenders = ['Male', 'Female', 'Other']; // Define an array of valid gender options

    if (!validGenders.includes(gender)) { // Check if the selected gender is in the array of valid options
      alert('Please select a valid gender.');
      return false;
    }
    
    return true;
}

function validateMobile_no() {
    var mobile_no = document.getElementById('mobile_no').value;
    var mobile_noRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/; // Define a regular expression for a common mobile number format
  
    if (!mobile_noRegex.test(mobile_no)) { // Check if the entered mobile number matches the regular expression
      alert('Please enter a valid 10-digit mobile number.');
      return false;
    }
    
    return true;
}

function validateBody_temp() {
    var body_temp = document.getElementById('body_temp').value;
    var body_tempRegex = /^(\d{1,2}(\.\d{1,2})?)$/; // Define a regular expression for a valid body temperature (assuming a decimal number)
  
    if (!body_tempRegex.test(body_temp)) { // Check if the entered body temperature matches the regular expression
      alert('Please enter a valid body temperature.');
      return false;
    }
  
    var body_tempValue = parseFloat(body_temp); // Check if the body temperature is within a reasonable range (e.g., between 35 and 42 degrees Celsius)
    if (body_tempValue < 35 || body_tempValue > 42) {
      alert('Please enter a valid body temperature between 35 and 42 degrees Celsius.');
      return false;
    }
    
    return true;
}

function validateDiagnosed() {
    var diagnosed = document.querySelector("input[name='diagnosed']:checked");
  
    if (!diagnosed) {
      alert('Please select a value for COVID-19 Diagnosed.');
      return false;
    }
  
    return true;
}
  
function validateEncounter() {
    var encounter = document.querySelector("input[name='encounter']:checked");
  
    if (!encounter) {
      alert('Please select a value for COVID-19 Encounter.');
      return false;
    }
  
    return true;
}
  
function validateVaccinated() {
    var vaccinated = document.querySelector("input[name='vaccinated']:checked");
  
    if (!vaccinated) {
      alert('Please select a value for COVID-19 Vaccinated.');
      return false;
    }
  
    return true;
}


function validateNationality() {
    var nationality = document.getElementById('nationality').value;
    var validNationality = ['Filipino', 'Others']; // Define an array of valid nationality options

    if (!validNationality.includes(nationality)) { 
      alert('Please select a valid Nationality.');
      return false;
    }
    
    return true;
}

function addInfo() {
    if (validateFullName() && validateGender() && validateAge() && validateMobile_no() && validateBody_temp() && validateDiagnosed() && validateEncounter() && validateVaccinated() && validateNationality()) {
        $.ajax({
            url: 'addInfo_proc.php',
            method: "POST",
            data: {			
              name: $("#name").val(),
              gender: $("#gender").val(),
              age: $("#age").val(),
              mobile_no: $("#mobile_no").val(),
              body_temp: $("#body_temp").val(),
              diagnosed: $("input[name='diagnosed']:checked").val(),
              encounter: $("input[name='encounter']:checked").val(),
              vaccinated: $("input[name='vaccinated']:checked").val(),
              nationality: $("#nationality").val()
            },
            dataType: "json",
            success: function(result){
              console.log(result);
              if (result.status != 'ok')
              {
                alert("Something went wrong!");
                return;
              }
              $("#tabular").html(cformtable());
              $('#savedInfoModal').modal('show');
              getAllInfo();          
            }
        });
    }
}
      
