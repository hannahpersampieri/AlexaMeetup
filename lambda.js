/* lambda function */

'use strict';

const Alexa = require('alexa-sdk');

const meetups = require('src/getmeetups');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

var details =  require(getmeetups.js);

const commandStrings = {
    'Report-Meetups': {
        translation: {
            MEETUP_DETAILS: details;
            SKILL_NAME: 'Get next Meetup',
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
        const meetupArr = this.t('MEETUP_DETAILS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GetMeetups') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
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
