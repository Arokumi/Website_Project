// function submitData() {
//     let name = document.getElementById('username').value;
//     document.getElementsByClassName('username').innerHTML = name;
// };
function submitFn(){
    event.preventDefault()
    let name = document.getElementById('username').value;
    document.getElementById('Pname').innerHTML = name;
};


// function primeChecker (number) {
//         let isPrime = true;
//         if (number === 1) {
//             console.log('1 is neither a prime nor composite number')
//             isPrime = undefined;
//         }
//         else if (number > 1) {
//             for (let i = 2; i < number; i++) {
//                 if (number % i == 0) {
//                     isPrime = false;
//                     break;
//                 }
//             }
//         }
        
//         console.log(isPrime);
//     }
    
//     primeChecker (103);