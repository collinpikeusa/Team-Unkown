var apiKey = n1nWvQETbmWAI9M7H9spub7FYeDe51Sf27ishYok;
var url = https://api.nasa.gov/mars-photos/api/v1/rovers/;
var filename = "test.txt";
var fileURL = https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=n1nWvQETbmWAI9M7H9spub7FYeDe51Sf27ishYok;
function rover(rover) {
    url += rover;
}

function date(month, day, year) {
    url += ("/photos?earth_date = " + year + "-" + month + "-" + day)
}

function key() {
    url += ("&api_key=" + apiKey);
}

function url() {
    return url;
}


function parser() {
    if (!window.ActiveXObject) {
        var save = document.createElement('a');
        save.href = fileURL;

        save.target = '_blank';
        save.download = fileName || 'unknown';

        var event = document.createEvent('Event');
        event.initEvent('click', true, true);
        save.dispatchEvent(event);
        (window.URL || window.webkitURL).revokeObjectURL(save.href);
    }
    // for IE
    else if (!!window.ActiveXObject && document.execCommand) {
        var _window = window.open(fileURL, '_blank');
        _window.document.close();
        _window.document.execCommand('SaveAs', true, fileName || fileURL)
        _window.close();
    }
    return "hello";
}