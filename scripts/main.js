function bindEvents() {
  $('.glyphicon-plus').on('click', function () {
    var parseInput2 = new ParseInput($, 'reminderText', 'date', 'time');
    if (parseInput2.text !== "" && parseInput2.time !== "" && parseInput2.date !== "") {
      var reminder1 = new Reminder(parseInput2.text, parseInput2.time, parseInput2.date);
      if (reminder1.timeDiff < 0) {
        alert("Backdated alarm");
      } else {
        var remopt1 = new RemOperation();
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
    // document.getElementById('xyz').pause();
    // document.getElementById('xyz').currentTime = 0;
  });

};

var Render = function (arr) {
  var timeArr = [];
  var idArr = [];
  var textArr = [];
  var dateArr = [];
  for (var i = 0; i < arr.length; i++) {
    var note = arr[i].title;
    var date = arr[i].date;
    var time = arr[i].time;
    var id = arr[i].id;
    var rHr = parseInt(time.substring(0, 2));
    var rMin = parseInt(time.substring(3, 7));
    var timeCal = new TimeCalculation(date, rHr, rMin);
    var currTimeDiff = timeCal.totalTimeDiff;
    timeArr.push(time);
    idArr.push(id);
    textArr.push(note);
    dateArr.push(date)
    if (currTimeDiff > 0) {
      $('#myUL').append('<li id=' + id + '>' + note + '&nbsp&nbsp' + date + '&nbsp&nbsp' + time +
        '<span class="close glyphicon glyphicon-remove-sign"></span></li>');
    } else {
      $('#myUL').append('<li id=' + id + '>' + note + '&nbsp&nbsp' + date + '&nbsp&nbsp' + time +
        '<span class="close glyphicon glyphicon-remove-sign"></span></li>');
      $('#' + id).css('text-decoration', 'line-through');
    }
  }
  var myWatch = new Watcher(timeArr, idArr, textArr, dateArr);
  myWatch.timeWatch();
}

var popUp = function (arrId, arrText, i) {
  $('.w3-container p').text(arrText[i]);
  $('#id01').show();
  $('#' + arrId[i]).css('text-decoration', 'line-through');
  arrText.splice(i, 1);
  arrId.splice(i, 1);
}

var Fetch = function () {
  var storedNames = JSON.parse(localStorage.getItem("reminder_List"));
  if (storedNames !== null) {
    Render(storedNames);
  } else {
    console.log('local storage empty');
  }
}

$(document).ready(function () {
  bindEvents();
  Fetch();
});
