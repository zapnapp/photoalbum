for (var i = 1; i <= 26; i++) {
    var img = document.createElement("img");
    img.src = "./images/sixMonths/photo (" + i + ").jpg";
    img.alt = "Photo " + i;
    document.getElementById("album1_1").appendChild(img);
}
for (var i = 26; i >= 1; i--) {
    var img = document.createElement("img");
    img.src = "./images/sixMonths/photo (" + i + ").jpg";
    img.alt = "Photo " + i;
    document.getElementById("album1_2").appendChild(img);
}
for (var i = 1; i <= 25; i++) {
    var img = document.createElement("img");
    img.src = "./images/oneYear/photo (" + i + ").jpg";
    img.alt = "Photo " + i;
    document.getElementById("album2_1").appendChild(img);
}
for (var i = 25; i >= 1; i--) {
    var img = document.createElement("img");
    img.src = "./images/oneYear/photo (" + i + ").jpg";
    img.alt = "Photo " + i;
    document.getElementById("album2_2").appendChild(img);
}
  