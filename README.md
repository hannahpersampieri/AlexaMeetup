# AlexaMeetup
An Alexa Skill for Meetup

### What does this skill do?
This skill utilizes the Meetup API to tell the user about her upcoming Meetups via her Amazon echo or echo dot. I chose to build an Alexa skill as it's something I've wanted to get my hands dirty with for a while, but hadn't 

### Technologies
Node.js, AWS, and the Meetup API

### Challenges / Interesting problems
The hard portion of building this app was getting authorization for the usage of my personal API key for testing out my skill. Since I wanted to build this skill in a way that would keep the user's information private, I had to authenticate through AWS and create a specialized app ID. Another interesting thing is that a lot more time was spent configuring things rather than hard coding-- making an API request and retreiving information wasn't the bottleneck here.  I used [this][https://developer.amazon.com/blogs/post/Tx3CX1ETRZZ2NPC/alexa-account-linking-5-steps-to-seamlessly-link-your-alexa-skill-with-login-with-amazon] blog post to help me with OAuth + Alexa.

### The takeaways
I chose to use Node since I was more comfortable working with AWS using Node rather than Python. Although I am a strong C++ and Python programmer, I wanted to try my hand at JavaScript and AWS to really challenege myself. 
This project helped me learn a lot about the capabilities of Meetup for developers and exposing me to new routes of innovation. It also pushed me to learn how to work with a new technology.

### Where to go from here
I would love to further build the skill so that the user can ask Alexa for different things relating to Meetup, for example, to RSVP to an event or to tell the Meetups within a group. I'm also interested in working with something specifically for women in tech, since that would be a fun problem to tackle.
