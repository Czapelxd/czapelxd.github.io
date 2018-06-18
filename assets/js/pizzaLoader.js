var text = ["laai", "جار التحميل", 'loading','пагрузка','Зареждане','বোঝাই','učitavanje','arregant','loading','načítání','llwytho','Indlæser','Wird geladen','φόρτωση','loading','loading','cargando',
'laadimine','karga','بارگذاری','Ladataan','chargement','ag luchtú','cargando','લોડ કરી રહ્યું છે','loading','लोड हो रहा है','loading','Učitavam','loading','Betöltés','բեռնում','pemuatan','nbanye','hleðsla',
'Caricamento in corso','טוען','読み込み中','loading','ჩატვირთვა','жүктеу','ផ្ទុក','ಲೋಡ್ ಆಗುತ್ತಿದೆ','로딩','loading','loading','pakrovimas','iekraušana','Loading','te uta','вчитување','ലോഡിംഗ്','ачих','लोडिंग',
'loading','tagħbija','တင်','लोड हुँदै','bezig met laden','lasting','Kutsatsa','ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ','Ładuję','Carregando','se incarca','погрузка','පැටවීම','načítava','nalaganje','loading','ngarkim','лоадинг',
'loading','loading','läser in','kupakia','ஏற்றுதல்','లోడ్','боркунӣ','โหลด','Naglo-load','Yükleniyor','завантаження','لوڈنگ','Yuklab olish','tải','loading','loading','装载','装载','裝載','ukulayisha'];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 1500);

function change() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}

// var div = document.getElementById("changeText");
//
// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++ ) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
//
// function changeColor(){
//     div.style.color= getRandomColor();
// }
//
// setInterval(changeColor,1500);