var reminderList = [];

var databaseManager = function () {
    this.arr1=[];
    this.manipulateDataFromLocalStoarge = function (arr) {     
         arr1=JSON.parse(localStorage.getItem('reminder_List'));
        if(arr1 !== null){
          arr1 = arr1.concat(arr);
          localStorage.setItem('reminder_List', JSON.stringify(arr1));
      }else {
        console.log('empty localstorage');
        localStorage.setItem('reminder_List', JSON.stringify(arr));
      }
    }
};

var RemOperation = function () {
    this.add = function (obj) {
        reminderList.push(obj);
        Render(reminderList);
        var localStroageEntry = new databaseManager();
        localStroageEntry.manipulateDataFromLocalStoarge(reminderList);
        var remArr=[];
        var timeArr=[];
        var idArr=[];
        var textArr=[];
        var dateArr=[];
        remArr=JSON.parse(localStorage.getItem('reminder_List')); 
        for (var i=0; i<remArr.length;i++){
            timeArr.push(remArr[i].time);
            idArr.push(remArr[i].id);
            textArr.push(remArr[i].title);
            dateArr.push(remArr[i].date);
        } 
        var myWatch = new Watcher(timeArr,idArr,textArr,dateArr);
    myWatch.timeWatch();   
    };
    reminderList=[];
};

var deleteReminder = function(id){
    this.deleteDataFromLocalStoarge = function () {
        var arr=[];
        var flag;
        arr=JSON.parse(localStorage.getItem('reminder_List'));
        for(var i = 0 ; i < arr.length ; i++){
            if(arr[i].id == id){
              flag = i;
            }
        }   
         arr.splice(flag, 1);       
         localStorage.setItem('reminder_List',JSON.stringify(arr));
    };
};


