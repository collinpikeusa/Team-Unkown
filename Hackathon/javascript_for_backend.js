var apiKey = n1nWvQETbmWAI9M7H9spub7FYeDe51Sf27ishYok;
var url = https://api.nasa.gov/mars-photos/api/v1/rovers/;

function rover(rover) {
    url += rover;
}

function date(month, day, year) {
    url += ("/photos?earth_date = " + year + "-" + month + "-" + day)
}

function key() {
    url += ("&api_key=" + apiKey);
}