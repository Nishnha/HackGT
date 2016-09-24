$(document).ready(function(){


  var addNotification = function(notifType,deviceName){
    switch (notifType) {
      case 0://Neutral
        $('body').append('<div class=\'notif-bar\'>' + deviceName
          + ' has been opened <\/div>');
        break;
      case 1://green
        $('body').append('<div class=\'notif-bar approved\'>' + deviceName
          + ' has been opened <\/div>');
        break;
      case 2://red
        $('body').append('<div class=\'notif-bar not-approved\'>' + deviceName
          + ' has been opened <\/div>');
        break;
      case 3://error
        break;
      default:
        console.log('weed');
    }
  };

});
