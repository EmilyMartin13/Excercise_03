console.log("connected!")
var x = document.title;
console.log(x)

$('#Happy').on('click', function () {
    $('#HappyPIC').show();
    
});

$('#Sad').on('click', function () {
    $('#SadPIC').show();
});

$('#Angry').on('click', function () {
    $('#AngryPIC').show();
});

$('#Shocked').on('click', function () {
    $('#ShockedPIC').show();
});

$('#Confused').on('click', function () {
    $('#ConfusedPIC').show();
});

$("#Sad', #Angry, #Confused, #Shocked").on('click', function () {
    $('#HappyPIC').hide();
});

$("#Happy, #Angry, #Confused, #Shocked").on('click', function () {
    $('#SadPIC').hide();
});

$("#Happy, #Sad, #Confused, #Shocked").on('click', function () {
    $('#AngryPIC').hide();
});

$("#Happy, #Sad, #Angry, #Shocked").on('click', function () {
    $('#ConfusedPIC').hide();
});

$("#Happy, #Sad, #Angry, #Confused").on('click', function () {
    $('#ShockedPIC').empty();
});

 var hideImage = true;
 $(".HappyPIC").on("click", function () {
     if ("#Sad, #Angry, #Confused, #Shocked, click" == true){
         $('#HappyPIC').hide();
         hideImage = true;
     } else {
         $(this).show();
         hideImage = false;
     }
 });