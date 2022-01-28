// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById('numinfo').value;
    // Check if number is valid
    if (isNaN(num) || num.toString().length == 0 || num<2 || num>1000000 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 2 and 1000000.`;
    } else {
        // Get Number Information
        txt += `You have entered the number ${num}. <p>`;
        // Check if the Number is a Semiprime
        if (isSemiPrime(num)) {
            txt += `${num} is a Semiprime Number.`;
        } else {
            txt += `${num} is not a Semiprime Number.`;
        }

        // Display Information in the Browser
        document.getElementById('numinfo').innerHTML = txt;
    }
}

// Function to Determine if the Number is a Semiprime
function isSemiPrime(n) {
    for (let i=2;i<=Math.floor(Math.sqrt(n));i++) {
        if (n%i==0) {
            let n1 = parseInt(n/i);
            return isPrime(i) && isPrime(n1);
        }
    }
    return false;
}

// Function to Determine if the number is a prime
function isPrime(n) {
    if (n<2) return false;
    if (n==2) return true;
    if (n>2 && n%2==0) return false;
    for (let i=3;i<=Math.floor(Math.sqrt(n));i+=2) {
        if (n%i==0) return false;
    }
    return true;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById('numinfo').innerHTML = txt;
}