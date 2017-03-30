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


$('ul').on('click', 'li .close', function(event) {
    $(event.target.parentElement).remove();
  //  console.log(event.target.parentElement.id);
    var deleteReminder1 = new deleteReminder(event.target.parentElement.id);
    deleteReminder1.deleteDataFromLocalStoarge();
});


};




function render(arr){
  for(var i=0;i<arr.length;i++){
  var note=arr[i].title;
  var date=arr[i].date;
  var time=arr[i].time;
  var id= arr[i].id;
  $('#myUL').append('<li id='+id+'>'+note+' '+date+' '+time+'<span class="close glyphicon glyphicon-remove-sign"></span></li>');

}
}

$(document).ready(function(){
  bindEvents();
  fetch();
});
