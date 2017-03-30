function bindEvents(){
$('.glyphicon-plus').on('click', function () {
  var parseInput2 = new parseInput($, 'reminderText', 'date', 'time');
  if(parseInput2.text !== "" && parseInput2.time !== "" && parseInput2.date !== ""){
    var reminder1 = new reminder(parseInput2.text, parseInput2.time, parseInput2.date);
    var remopt1 = new remOperation();
    remopt1.add(reminder1);
  }else {
    alert('invalid input');
  }

});
};

function render(arr){
  for(var i=0;i<arr.length;i++){
  var note=arr[i].title;
  var date=arr[i].date;
  var time=arr[i].time;
  //$('#myUL').append('<li>'+note+' '+date+' '+time+'</li>');]
  $('#myUL').append('<li>'+note+' '+date+' '+time+'<span class="close glyphicon glyphicon-remove-sign"></span></li>');
}
}

$(document).ready(function(){
  bindEvents();
  fetch();
});
