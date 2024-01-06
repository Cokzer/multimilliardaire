let kopek = 0;
function gagner () {
    let a = document.getElementById("kopek");
    console.log(a)
    kopek += 1;
    a.innerHTML = "Actuellement " + kopek + " kopeks.";
};