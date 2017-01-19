/* lambda function */

'use strict';

const Alexa = require('alexa-sdk');

const meetups = require('src/getmeetups.js');

const APP_ID = undefined;  


const commandStrings = {
    'Report-Meetups': {
        translation: {
            MEETUP_DETAILS: meetups;
            SKILL_NAME: 'Get my next Meetup',
            GET_FACT_MESSAGE: "Here is the next Meetup you plan on attending: ",
            HELP_MESSAGE: 'You can say tell me my next Meetup, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetMeetups');
    },
    'GetNewEventIntent': function () {
        this.emit('GetMeetups');
    },
    'GetMeetups': function () {
        // Get a meetup from the user's feed
        // Use this.t() to get corresponding language data
        const details = this.t('MEETUP_DETAILS');
        const eventName = details.event;
        const date = details.date;
        const venue = details.place;
        const location = details.city;

        var sentence = "Your next event is " + eventName + " at " + date + " at " + venue + " in " + location;
        // Create speech output
        const speechOutput = this.t('GetMeetups') + sentence;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), sentence);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
