var links = [
    "www.facebook.com/CentrumU7/",
    "www.facebook.com/CzarnaWolgaSopot/",
    "www.facebook.com/chwilamomentgdynia/",
    "www.facebook.com/cybermachina.gdansk/",
    "www.facebook.com/KonsulatDobregoPiwa/",
    "www.facebook.com/BlokFit/"
];

openStuff = function () {
    var randIdx = Math.random() * links.length;
    randIdx = parseInt(randIdx, 10);
    var link = 'http://' + links[randIdx];
    window.open(link);
};