const submit = document.getElementById("submit");
function calcColors(){
    var numHSL = parseInt(document.getElementById("numHSL").value);
    var hsl = document.getElementById("numHSL");
    const L = 50;
    var komorka1 = document.getElementById("komorka1");
    var komorka2 = document.getElementById("komorka2");
    var komorka3 = document.getElementById("komorka3");
    var komorka4 = document.getElementById("komorka4");
    var komorka5 = document.getElementById("komorka5");
    if(numHSL > 360){
        hsl.value = 360;
        numHSL = 360;
        komorka1.style.backgroundColor = `hsl(${numHSL}, ${100}%, ${L}%)`;
        komorka2.style.backgroundColor = `hsl(${numHSL}, ${80}%, ${L}%)`;
        komorka3.style.backgroundColor = `hsl(${numHSL}, ${60}%, ${L}%)`;
        komorka4.style.backgroundColor = `hsl(${numHSL}, ${40}%, ${L}%)`;
        komorka5.style.backgroundColor = `hsl(${numHSL}, ${20}%, ${L}%)`;
    }else{
        komorka1.style.backgroundColor = `hsl(${numHSL}, ${100}%, ${L}%)`;
        komorka2.style.backgroundColor = `hsl(${numHSL}, ${80}%, ${L}%)`;
        komorka3.style.backgroundColor = `hsl(${numHSL}, ${60}%, ${L}%)`;
        komorka4.style.backgroundColor = `hsl(${numHSL}, ${40}%, ${L}%)`;
        komorka5.style.backgroundColor = `hsl(${numHSL}, ${20}%, ${L}%)`;
    }
}
submit.addEventListener("click", calcColors);