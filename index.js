function tellTime(){
    var currntDate = new Date();
    var year =currntDate.getFullYear();
        if(year < 1000){
            year +=1900
        }
    var day = currntDate.getDay();
    var month = currntDate.getMonth();
    var dayx = currntDate.getDate();
    var daysOfWeek = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
    var monthsOfYear = new Array("January","Febr")
}