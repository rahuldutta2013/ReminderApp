// checks the reminder time and current time in every 6 sec
var Watcher = function (arrOfRemTime, arrOfId, arrOfText, arrOfDate) {
  var curTime;
  this.timeWatch = function () {
    setInterval(function () {
      var today = new Date();
      var currHrs = today.getHours();
      var currMins = today.getMinutes();
      if (currMins < 10) {
        currMins = '0' + currMins;
      }
      curTime = currHrs + ':' + currMins;
      var currdd = today.getDate();
      var currmm = today.getMonth() + 1; //January is 0!
      var curryyyy = today.getFullYear();
      if (currdd < 10) {
        currdd = '0' + currdd;
      }
      if (currmm < 10) {
        currmm = '0' + currmm;
      }
      var curDate = curryyyy + '-' + currmm + '-' + currdd;
      for (var i = 0; i < arrOfRemTime.length; i++) {
        if (curTime == arrOfRemTime[i] && curDate == arrOfDate[i]) { //checking the currnt-time and date with reminder time and date
          arrOfRemTime.splice(i, 1);
          arrOfDate.splice(i, 1);
          popUp(arrOfId, arrOfText, i);
        } 
      }
    }, 6000); //checks the reminder time and current time in every 6 sec
  }

}
