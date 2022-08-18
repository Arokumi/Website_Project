// function submitData() {
//     let name = document.getElementById('username').value;
//     document.getElementsByClassName('username').innerHTML = name;
// };
function toggleEdit(){
    document.getElementById("popup-1").classList.toggle("active");
}


    function submitFn(){
        document.getElementById("popup-1").classList.toggle("active");
        event.preventDefault();
        let name = document.getElementById('username').value;
        document.getElementById('Pname').innerHTML = name;
    
        let occupation = document.getElementById('occupation').value;
        document.getElementById('Poccupation').innerHTML = occupation;
    
        let description = document.getElementById('description').value;
        document.getElementById('Pdescription').innerHTML = description;
    
        let availability = document.getElementsByName('availability');
        for(let i = 0; i < availability.length; i++){
            let item = availability[i]
            // let f = document.getElementById('availabilityFull')
            // let p = document.getElementById()
            if (item.checked === true && item.value === 'full'){
                document.getElementById('Pavailability').innerHTML = "Full-Time";
            } else if (item.checked === true && item.value === 'part'){
                document.getElementById('Pavailability').innerHTML = "Part-Time";
            }
        };
        
        let age = document.getElementById('age').value;
        document.getElementById('Page').innerHTML = age;
    
        let location = document.getElementById('location').value;
        document.getElementById('Plocation').innerHTML = location;
    
        let experience = document.getElementById('experience').value;
        document.getElementById('Pexperience').innerHTML = experience;
    
        let email = document.getElementById('email').value;
        document.getElementById('Pemail').innerHTML = email;
    
        let number = document.getElementById('number').value;
        document.getElementById('Pnumber').innerHTML = number;
    }
