function check() {
    let p = document.getElementById("parol")
    let l = document.getElementById("login")
    let h = document.querySelector("h1")
    if (l.value == "admin") {
        l.style.border = "3px solid green"
    }else if (l.value == "") {
        l.style.border = "3px solid red"
    }else{
        l.style.border = "3px solid red"
        h.innerHTML = "login xato" 
    }

    if (p.value == "123") {
        p.style.border = "3px solid green"
    }
    else if (p.value == "") {
        p.style.border = "3px solid red"
    }else{
        p.style.border = "3px solid red"
        h.innerHTML = "parol xato"
    }
}