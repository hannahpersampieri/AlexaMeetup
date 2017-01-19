var request = require('request');


const getnextEvent = (city, state, country, topic, desc) => {
    meetup.getNextEvent({
        city: city,
        state: state,
        country: country || 'US',
        topic: topic || null,
        desc: desc || null
    }, (err, events) => {
        if (err) console.log(err);
        else console.log(events.results.map((event) => {
            return {
                event: event.name,
                date: new Date(event.time).toString(),
                venue: event.venue.name,
                location: event.venue.city
            }
        }));
    });
}
request('https://api.meetup.com/self/events?&sign=true&photo-host=public&page=20',function (error, response, body) {
        if (!error && response.statusCode == 200) {
            result = JSON.parse(body);
            event = result[0];
            return {
                event = event.name,
                date: new Date(event.time).toString(),
                place: event.venue.name,
                location: event.venue.city
            }
            
        }
        else console.log(error);
    })
module.exports = getnextEvent;