function getweek() {
    // Get today's date
    var today = new Date();
    // Get the current day of the week (0 = Sunday, 1 = Monday, ...)
    var weekday = today.getDay();

    // Calculate the date of the Monday for the current week
    var monday = new Date(today);
    monday.setDate(today.getDate() - weekday + 1);

    // Get the month and day of the Monday
    var month = monday.toLocaleString('default', { month: 'long' });
    var day = monday.getDate();

    // Dictionary of months
    var months = {'January': 'Jan',
                  'February': 'Feb',
                  'March': 'Mar',
                  'April': 'Apr',
                  'May': 'May',
                  'June': 'Jun',
                  'July': 'Jul',
                  'August': 'Aug',
                  'September': 'Sep',
                  'October': 'Oct',
                  'November': 'Nov',
                  'December': 'Dec'};

    var abbreviated_month = months[month];

    // Print the month and day of the Monday
    // console.log("Current week starts on " + abbreviated_month + " " + day + ":");
    // console.log(abbreviated_month + ' ' + day);
    var start_week = abbreviated_month + ' ' + day;
    return start_week;
}

function gettoday() {
    // Get today's date
    var today = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var day = days[today.getDay()];
    return day;
}

function time_meal() {
    var day = gettoday();
    var time;
    if (day == 'Saturday' || day == 'Sunday') {
        time = prompt("Enter Either Brunch or Dinner:");
    } else {
        time = prompt("Enter Either Breakfast, Lunch, or Dinner:");
    }
    return time;
}

module.exports = {
    time_meal,
    getweek,
    gettoday
};

