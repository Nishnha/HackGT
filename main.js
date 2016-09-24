$(document).ready(function(){

  var date = new Date();
  var addNotification = function(notifType,deviceName){
    switch (notifType) {
      case 0://Neutral
        $('body').append('<div class=\'notif-bar\'>' + deviceName
          + ' has been opened ' + printDate() + ' <\/div>');
        break;
      case 1://green
        $('body').append('<div class=\'notif-bar approved\'>' + deviceName
          + ' has been opened ' + printDate() + '<\/div>');
        break;
      case 2://red
        $('body').append('<div class=\'notif-bar not-approved\'>' + deviceName
          + ' has been opened ' + printDate() + '<\/div>');
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

  var printDate = function(){

    if(date.getMinutes() < 10)
      var min = "0" + date.getMinutes();
    if(date.getHours() > 12)
      var hours = date.getHours()-12
    var s = "" + epochToMonth(date.getMonth()) + " " +date.getDay() + ", "
            + date.getFullYear() + "  " + date.getHours() + ":" + min;
    return s;
  };
addNotification(0,"Device");
addNotification(1,"Device");
addNotification(2,"Device");
});
