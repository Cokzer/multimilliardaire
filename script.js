let kopek = 0;

function gagner () {
    // Increment kopeck variable
    let a = document.getElementById("kopek");
    console.log(a)
    kopek += 1;
    a.innerHTML = "Actuellement " + kopek + " kopeks.";

    // Add random kopeck img
    let kopek_img = document.createElement("img");
    kopek_img.src = "kopek.jpeg";
    kopek_img.width = 50;
    kopek_img.height = 50;
    document.body.appendChild(kopek_img);
};