let kopek = 0;
document.getElementById("adoptButton").style.display = "none";
document.getElementById("hungryTiger").style.display = "none";

function gagner () {

    // show tiger randomly

    if (kopek > 50) {
        const randomNum = getRandomInt(1, 14);
        if (randomNum == 1) {
            // Add random tiger img
            let tiger_img = document.createElement("img");
            tiger_img.src = "tigre.jpg";
            tiger_img.width = 200;
            tiger_img.height = 90;
            document.body.appendChild(tiger_img);
            kopek -= 1;
            document.getElementById("adoptButton").style.display = "block";
        } else {
            addKopek();
        }
    } else {
        addKopek();
    }

    // Increment kopeck variable
    let a = document.getElementById("kopek");
    console.log(a)
    kopek += 1;
    a.innerHTML = "Actuellement " + kopek + " kopeks.";
};

function adoptTiger() {
    for (var i = 0; i < kopek; i++) {
        let kopek_img = document.getElementById('kopek-' + i);
        kopek_img.style.display = "none";
    }
    document.getElementById("hungryTiger").style.display = "block";

        // Increment kopeck variable
        let a = document.getElementById("kopek");
        console.log(a)
        kopek = 0;
        a.innerHTML = "Actuellement " + kopek + " kopeks.";
}

function addKopek() {
    // Add kopeck img
    let kopek_img = document.createElement("img");
    kopek_img.setAttribute('id', 'kopek-' + kopek);
    kopek_img.src = "kopek.jpeg";
    kopek_img.width = 50;
    kopek_img.height = 50;
    document.body.appendChild(kopek_img);
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
};