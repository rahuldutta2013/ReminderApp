function bindEvents() {
  $('.glyphicon-plus').on('click', function () {
    var parseInput2 = new parseInput($, 'reminderText', 'date', 'time');
    if (parseInput2.text !== "" && parseInput2.time !== "" && parseInput2.date !== "") {
      var reminder1 = new reminder(parseInput2.text, parseInput2.time, parseInput2.date);
      if (reminder1.timeDiff < 0) {
        alert("Backdated alarm");
      } else {
        var remopt1 = new remOperation();
        remopt1.add(reminder1);
      }
    } else {
      alert('invalid input');
    }
  });


  $('ul').on('click', 'li .close', function (event) {
    $(event.target.parentElement).remove();
    var deleteReminder1 = new deleteReminder(event.target.parentElement.id);
    deleteReminder1.deleteDataFromLocalStoarge();
  });

  $(document).on('click', '.close', function () {
    document.getElementById('xyz').pause();
    document.getElementById('xyz').currentTime = 0;
  });

};




function render(arr) {
  for (var i = 0; i < arr.length; i++) {
    var note = arr[i].title;
    var date = arr[i].date;
    var time = arr[i].time;
    var id = arr[i].id;
    var timeDiff = arr[i].timeDiff;
    console.log(timeDiff);
    $('#myUL').append('<li id=' + id + '>' + note + '&nbsp&nbsp' + date + '&nbsp&nbsp' + time + '<span class="close glyphicon glyphicon-remove-sign"></span></li>');
  }
}

$(document).ready(function () {
  bindEvents();
  fetch();
});
