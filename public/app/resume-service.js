angular.module('resume').service('ResumeService', function () {

    this.linkMap = {
        socialLinks: [
            {url: 'https://www.facebook.com/radkovsn', title: "Facebook", img: 'facebook_icon.png'},
            {url: 'https://www.linkedin.com/in/radkovsn', title: "LikedIn", img: 'linkedin_icon.png'},
            {url: 'https://github.com/eriixon', title: "GitHub", img: 'github_icon.png'},
            {url: 'https://www.instagram.com/eriixon/', title: "Instagram", img: 'instagram_info.png'},
            {url: 'https://twitter.com/eriixonn', title: "Twitter", img: 'twitter_icon.png'}
        ],
        tools: [
            {url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',title: 'HTML',img: 'html.png'},
            {url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',title: 'CSS',img: 'css.png'},
            {url: 'http://getbootstrap.com/',title: 'Bootstrap',img: 'bootstrap.png'},
            {url: 'http://jquery.com/',title: 'jQuery',img: 'jquery.png'},
            {url: 'https://angularjs.org/',title: 'AngularJS',img: 'angular.png'},
            {url: 'https://developer.mozilla.org/en/docs/Web/JavaScript',title: 'JavaScript',img: 'javascript.png' ,type: 'tool'},
            {url: "https://nodejs.org/",title: "Node.JS",img: 'nodejs.png'},
            {url: "https://www.npmjs.com/",title: "NPM",img: 'npm.png'},
            {url: "https://developers.facebook.com/products/messenger/",title: "Messenger Platform",img: 'messenger.png'},
            {url: 'https://github.com/',title: 'GitHub',img: 'github.png',type: 'tool'},
            {url: "https://heroku.com/",title: "Heroku",img: 'heroku.png'},
            {url: "https://bower.io/",title: "Bower",img: 'bower.png'},
            {url: 'https://www.visualstudio.com/',title: 'Visual Studio',img: 'vs.png',type: 'tool'},
            {url: 'https://www.jetbrains.com/idea/',title: 'Intellij IDEA',img: 'idea.png',type: 'tool'}
            ],
        exps: [
            {url: 'https://msdn.microsoft.com/en-us/library/kx37x362.aspx',title: 'C#',img: 'csharp.png',type: 'tool'},
            {url: 'https://www.microsoft.com/net/default.aspx',title: 'Microsoft.NET',img: 'dotnet.png',type: 'tool'},
            {url: "https://www.java.com/",title: "Java",img: 'java.png'},
            {url: "http://developer.android.com/index.html",title: "Android Studio",img: 'as.png'},
            {url: 'https://www.firebase.com/',title: 'Firebase',img: 'firebase.jpg',type: 'tool'},
            {url: "http://www.js-data.io/",title: "JSData",img: 'js-data.png'},
            {url: "https://www.mysql.com/",title: "MySQL",img: 'mysql.png'},
            {url: "http://foundation.zurb.com/",title: "Foundation",img: 'found.png'},
            {url: "http://expressjs.com/",title: "Express",img: 'express.png'},
            {url: "https://www.twilio.com/",title: "Twilio",img: 'twilio.png'}
            ],
       skills: [
            {item: "Problem solving", stars: 5},
            {item: "Communication & negotiation", stars: 5},
            {item: "Analitycal skills", stars: 5},
            {item: "Staff management", stars: 4},
            {item: "Project management", stars: 4},
            {item: "Time management", stars: 4}
            ],
     languages:[
            {item: "Russian", stars: 5},
            {item: "English", stars: 4}
            ],
      projects: [
           {url: 'https://www.facebook.com/BBBSnakeRiverRegion', title:'Messenger Bot', img:'fb-messenger.png', github: 'https://github.com/sergeyradkov/bbb-facebook-messenger-bot', des: 'Facebook Messenger Bot for Better Business Bureau'},
           {url: 'https://qbhdemo.herokuapp.com/', title:'QB Form Helper', img:'qbhelper.png', github: 'https://github.com/sergeyradkov/qbemailgrabber', des: 'Web application for QuickBooks helps to provide custome info online'},
           {url: 'http://sergeyradkov.github.io/music-finder/', title:'iTunes Music Finder', img:'imf.png', github: 'https://github.com/sergeyradkov/music-finder', des: 'Find all your favorite music in iTunes Store'},
           {url: 'http://sergeyradkov.github.io/calculators/', title:'Digital Converter', img:'digcon.png', github: 'https://github.com/sergeyradkov/calculators', des: 'Online digital converter from US to EU measurements'},
           {url: 'http://sergeyradkov.github.io/The-Slap-Game/', title:'The Slap Game', img:'slap.png', github: 'https://github.com/sergeyradkov/The-Slap-Game', des: 'Online game: be brave and terminate a thug'},
           {url: 'http://sergeyradkov.github.io/inspire/', title:'Inspire Page', img:'inspire.png', github: 'https://github.com/sergeyradkov/inspire', des: 'Begin or continue your day with a nice landing page'},
           {url: 'http://sergeyradkov.github.io/find-penguins',title:'Find the penguins', img:'findup.png', github: 'https://github.com/sergeyradkov/find-penguins', des: 'Online game: find all pingues and don\'t meet a yeti'},
                ]
    };
});
