var links = [
    "www.facebook.com/CentrumU7/",
    "www.facebook.com/CzarnaWolgaSopot/",
    "www.facebook.com/chwilamomentgdynia/",
    "www.facebook.com/cybermachina.gdansk/",
    "www.facebook.com/KonsulatDobregoPiwa/",
    "www.facebook.com/BlokFit/"
];

openStuff = function () {
    // get a random number between 0 and the number of links
    var randIdx = Math.random() * links.length;
    // round it, so it can be used as array index
    randIdx = parseInt(randIdx, 10);
    // construct the link to be opened
    var link = 'http://' + links[randIdx];
    // open it in a new window
    window.open(link);
};