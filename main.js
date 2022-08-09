function submitData() {
    let name = document.getElementById('username').value;
    document.getElementsByClassName('username').innerHTML = name;
};
function submitFn(){
    event.preventDefault()
    location.href = "http://127.0.0.1:5500/portofolio.html"
};