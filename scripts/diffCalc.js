 //calculating the time difference
var  TimeCalculation = function(remiderDate,reminderHr,reminderMin){  
       var today = new Date();
        var currdd = today.getDate();
        var currmm = today.getMonth(); //January is 0!
        var curryyyy =today.getFullYear();
        if(currdd<10) {  //if day is one digit such as(5th april); it will considered as 05
            currdd='0'+currdd
        } 
        if(currmm<10) {  //if month is one digit such as(april=4); it will considered as 04
            currmm='0'+currmm
        } 
        var currHrs = today.getHours();
        var currMins = today.getMinutes(); 
        var remDate=remiderDate;
        var remHr=reminderHr;
        var remMin=reminderMin;
        var a = remDate.length;
        var remYear=parseInt(remDate.substring(0,a-6));
        var remMonth=parseInt(remDate.substring(a-5,a-3))-1; //january considerer as 0.
        var remDay=parseInt(remDate.substring(a-2,a));
        var currentDateTime=new Date(curryyyy,currmm,currdd,currHrs,currMins);
        var timeStart = new Date(currentDateTime).getTime();
        var reminderDateTime=new Date(remYear,remMonth,remDay,remHr,remMin);
        var timeEnd = new Date(reminderDateTime).getTime();
        var hourDiff = timeEnd - timeStart; //in ms
        var secDiff = hourDiff / 1000; //in s
        var minDiff = hourDiff / 60 / 1000; //in minutes
        var hDiff = hourDiff / 3600 / 1000; //in hours
        var humanReadable = {};
        humanReadable.hours = Math.floor(hDiff);
        humanReadable.minutes = minDiff - 60 * humanReadable.hours;
        humanReadable.totMillisec=(humanReadable.hours*3600+humanReadable.minutes*60)*1000;
        this.totalTimeDiff=humanReadable.totMillisec;
}