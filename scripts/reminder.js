var Reminder = function (title, time, date) {
    this.title = title;
    this.time = time;
    this.date = date;
    this.id = Date.now();
    var a = this.time.length;
    var hour = this.time.substring(0, a-3); //getting the hour from hh:mm format(hh)
    var min = this.time.substring(a-2, a);  //getting the min from hh:mm format(mm)
    hour = parseInt(hour);
    min = parseInt(min);
    var timeDiff = new TimeCalculation(this.date, hour, min);//creating the object of timecalculation class
    this.timeDiff = timeDiff.totalTimeDiff;// returns the time diffrence
}