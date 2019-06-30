// Add your code here

var nowTime = new Date(); //  現在日時を得る
var nowYear = nowTime.getFullYear(); //年を抜き出す
var nowMonth =  nowTime.getMonth() + 1; //月を抜き出す(0～11で数値が取得されるので、+1する必要がある)
var nowDay = nowTime.getDate(); //日を抜き出す
var nowHour = nowTime.getHours(); // 時を抜き出す
var nowMin  = nowTime.getMinutes(); // 分を抜き出す
var nowSec  = nowTime.getSeconds(); // 秒を抜き出す


if (nowMonth < 10) nowMonth = "0" + nowMonth;
if (nowDay < 10) nowDay = "0" + nowDay;
if (nowHour < 10) nowHour = "0" + nowHour;
if (nowMin < 10) nowMin = "0" + nowMin;

var msg = nowHour + ":" + nowMin ;

document.getElementById("RealtimeYear").innerHTML = nowYear;
document.getElementById("RealtimeMonth").innerHTML = nowMonth;
document.getElementById("RealtimeDay").innerHTML = nowDay;
document.getElementById("RealtimeHour").innerHTML = msg;



