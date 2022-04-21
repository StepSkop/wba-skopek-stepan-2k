function soucet(params) {
    let a = 2;
    let b = 4;

    let x = a + b;
    console.log("Soucet: " + x)
}
soucet();

$(document).ready(() => {
    var count = 0;
    $("#demo").on("click", function(){
        //count++;
        $("#demo").text("Mercedes")
        console.log("Count: " + count)
    });
})