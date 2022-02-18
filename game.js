var QUESTION_ID = "#question";
var ANSWER_OPTIONS_OWNER_ID = "#answer-options";
var LOG_ID = "#log";
var ANSWER_OPTION_TYPE = "<li>";
var ANSWER_OPTIONS_COUNT = 3;
var GOOD_ANSWER_CLASS = "good-answer";
var WRONG_ANSWER_CLASS = "wrong-answer";

function randInteger(range){
    return Math.floor(Math.random() * range);
}

function log(message){
    $("<div>").html(message).appendTo($(LOG_ID));
}


var wersety = [
    {w: "Ps 37:29", c: "Prawi posiądą ziemię i będą na niej żyć na zawsze."},
    {w: "Iz 25:8", c: "Jehowa, usunie śmierć na zawsze i otrze łzy z każdej twarzy"},
    {w: "Obj 21:3,4", c: "Nie będzie już śmierci, smutku, krzyku ani bólu"},
    {w: "Jana 5:28,29", c: "wszyscy, którzy są w grobach, usłyszą jego głos i wyjdą"},
    {w: "Dzieje 24:15", c: "nastąpi zmartwychwstanie prawych i nieprawych"},
    {w: "Ps 37:10,11", c: "Jeszcze tylko chwilka i już nie będzie niegodziwych, spojrzysz tam, gdzie byli, ale już ich tam nie zobaczysz. Natomiast potulni posiądą ziemię i będą się rozkoszować obfitym pokojem."},
    {w: "Mich 4:3,4", c: "Przekują miecze na lemiesze… nikt nie będzie wzbudzał w nich strachu"},
    {w: "Prz 2:22", c: "Ale niegodziwi będą usunięci z ziemi, a postępujący zdradziecko będą z niej wyrwani."},
    {w: "Ps 46:9", c: "Na całej ziemi kładzie kres wojnom. Łamie łuki i roztrzaskuje włócznie, wozy bojowe pali w ogniu."},
    {w: "Ps 72:16", c: "Ziemia będzie obficie rodzić zboże, będzie go mnóstwo nawet na szczytach gór."},
    {w: "Iz 33:24", c: "żaden mieszkaniec nie powie jestem chory"},
    {w: "Iz 35:5,6", c: "otworzą się oczy niewidomych…"},
    {w: "Hioba 33:25", c: "Niech jego ciało stanie się jędrniejsze niż w młodości i niech mu wróci jego młodzieńczy wigor."},
    {w: "Iz 65:21,22", c: "pobudują domy… zasadzą winnice… będą w pełni korzystać z tego, co zrobią swoimi rękami"},
    {w: "Obj 11:15", c: "Królestwo świata stało się Królestwem naszego Pana i Jego Chrystusa i będzie On królował po wieczne czasy, już na zawsze"},
    {w: "Iz 65:17", c: "Oto stwarzam nowe niebo i nową ziemię. Minione wydarzenia nie będą już przychodziły na myśl ani nie będzie się ich wspominać w sercu."}
    //{w: "", c: ""}
];

var right;

function prepareQuestion(){
    $(ANSWER_OPTIONS_OWNER_ID).empty();
    $(LOG_ID).empty();
    var options = [];
    while(options.length <ANSWER_OPTIONS_COUNT)
    {
        //wylosowanie wersetu
        var werset = wersety[randInteger(wersety.length)];
        //sprawdzenie czy juz nie ma takiego wylosowanego
        if(options.indexOf(werset) >= 0)
        {
            log("Niestety ponownie wylosowano: " + werset.c);
            continue;
        }
        //dodanie do kolekcji
        options.push(werset);
        $(ANSWER_OPTION_TYPE).text(werset.c).on("click", selectionOnClick).appendTo($(ANSWER_OPTIONS_OWNER_ID));
    }
    right = options[randInteger(options.length)];
    $(QUESTION_ID).text("Co jest napisane w " + right.w + "?");
    //log("<strong>Podpowiedź</strong> : prawidłowa odpowiedź to: " + right.w + " - " + right.c);
}

prepareQuestion();


function selectionOnClick(event){
    var answer = $(event.target).text();
    console.log(answer);
    var result;
    if(answer === right.c){
        result = "Odpowiedź prawidłowa";
        $(event.target).addClass(GOOD_ANSWER_CLASS);//.css("background","green");
    }else{
        result = "Odpowiedź błędna";
        $(event.target).addClass(WRONG_ANSWER_CLASS);//.css("background","red");
    } 
    log(result);
}

$("#next-question").on("click", prepareQuestion);


