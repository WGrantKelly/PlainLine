var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var request = new XMLHttpRequest();
videoIds = [];

request.open('GET', 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCEDS2nhcs8RDbS9-CGGCjHA&maxResults=25&key=AIzaSyDvF3ZIBBBIFu_9ZyfCbfLSgsQev1MciKg', true);
request.onload = function () {

        // Begin accessing JSON data here
        var data = JSON.parse(this.response);

        if (request.status >= 200 && request.status < 400) {
            results = data.pageInfo.totalResults;
            items = data.items;
            items.forEach(element => {
                if('id' in element){
                    if('videoId' in element.id){
                        videoIds.push(element.id.videoId)
                    }
                }
            });
                

        } else {
                console.log('error');
        }
}

request.send();