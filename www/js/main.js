$(document).ready(function(){

  var addNotification = function(notifType,deviceName,timeStamp){
    var date = new Date(timeStamp*1000);
    switch (notifType) {
      case 0://Neutral
        $('.notif-page').append('<div class=\'notif-bar\'><div class=\"notif-message\"'
         + ">" + deviceName + ' has been opened <\/div><div class=\"notif-timestamp\">'
          + printDate(date) + '<\/div> <\/div>');
        break;
      case 1://green
        $('.notif-page').append('<div class=\'notif-bar approved\'><div class=\"notif-message\"'
         + ">" + deviceName + ' has been opened <\/div><div class=\"notif-timestamp\">'
          + printDate(date) + '<\/div> <\/div>');
        break;
      case 2://red
        $('.notif-page').append('<div class=\'notif-bar not-approved\'><div class=\"notif-message\"'
         + ">" + deviceName + ' has been opened without permission<\/div><div class=\"notif-timestamp\">'
          + printDate(date) + '<\/div> <\/div>');
        break;
      case 3://error
        break;
      default:
        console.log('weed');
    }
  };

  var epochToMonth = function(monthNumber){
    monthNumber++;
    switch(monthNumber){
      case 1: return "Jan";
      break;

      case 2: return "Feb";
      break;

      case 3: return "Mar";
      break;

      case 4: return "Apr";
      break;

      case 5: return "May";
      break;

      case 6: return "Jun";
      break;

      case 7: return "Jul";
      break;

      case 8: return "Aug";
      break;

      case 9: return "Sep";
      break;

      case 10: return "Oct";
      break;

      case 11: return "Nov";
      break;

      case 12: return "Dec";
      break;

      default:
        return "Pick a month";
    }
  };

  var printDate = function(epoch){
    var min = epoch.getMinutes();
    var hours = epoch.getHours();
    var extension = "a.m.";
    if(epoch.getMinutes() < 10)
      var min = "0" + epoch.getMinutes();
    if(epoch.getHours() > 12){
      hours = hours - 12;
      min +=" p.m.";
    } else min +=" " + extension;
    if(hours < 10)
      hours = " " + hours;
    var s = "" + epochToMonth(epoch.getMonth()) + " " +epoch.getDay() + ", "
            + epoch.getFullYear() + " &nbsp &nbsp" + hours + ":" + min;
    return s;
  };
  addNotification(0,"Device",148588102);
  addNotification(2,"Device",148568102);
  addNotification(1,"Device",148568102);

});
