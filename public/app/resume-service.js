angular.module('resume').service('ResumeService', function () {
    this.linkMap = {
        socialLinks: [
            {url: 'https://www.facebook.com/radkovsn', title: "Facebook", img: 'facebook_icon.png'},
            {url: 'https://www.linkedin.com/in/radkovsn', title: "LikedIn", img: 'linkedin_icon.png'},
            {url: 'https://github.com/eriixon', title: "GitHub", img: 'github_icon.png'},
            {url: 'https://www.instagram.com/eriixon/', title: "Instagram", img: 'instagram_info.png'},
            {url: 'https://twitter.com/eriixonn', title: "Twitter", img: 'twitter_icon.png'}
        ],
        maintools: [
            {url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',title: 'HTML',img: 'html.png'},
            {url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',title: 'CSS',img: 'css.png'},
            {url: 'https://developer.mozilla.org/en/docs/Web/JavaScript',title: 'JavaScript',img: 'javascript.png'},
            {url: "https://nodejs.org/",title: "Node.JS",img: 'nodejs.png'},
            {url: 'https://msdn.microsoft.com/en-us/library/kx37x362.aspx',title: 'C#',img: 'csharp.png'},
            {url: 'https://www.asp.net/',title: 'ASP.NET',img: 'aspnet.png'},
            {url: 'https://www.w3schools.com/sql/', title: 'SQL', img: 'sql.png' }
        ],
        fraimworks:[
            {url: 'http://getbootstrap.com/',title: 'Bootstrap',img: 'bootstrap.png'},
            {url: "https://semantic-ui.com/",title: "Semantic UI",img: 'semanticui.png'},
            {url: 'https://vuejs.org/', title: 'VueJS',img: 'vuejs.png'},
            {url: 'https://angular.io/', title: 'Angular',img: 'angular.png'},
            {url: 'https://reactjs.org/',title: 'React',img: 'react.png'}            
        ],
        tools: [
            {url: 'https://github.com/',title: 'GitHub',img: 'github.png',type: 'tool'},
            {url: 'https://code.visualstudio.com/',title: 'Visual Studio Code',img: 'vsc.png',type: 'tool'},
            {url: 'https://www.visualstudio.com/',title: 'Visual Studio',img: 'vs.png',type: 'tool'},
            {url: "https://www.npmjs.com/",title: "NPM",img: 'npm.png', type: 'tool'},
            {url: 'https://www.firebase.com/',title: 'Firebase',img: 'firebase.jpg',type: 'tool'},
            {url: "https://heroku.com/",title: "Heroku",img: 'heroku.png', type:'tool'},
            {url: "https://webpack.js.org/", title: "Webpack", img: 'webpack.png', type: 'tool' },
        ],
        exps: [
            {url: 'https://www.jetbrains.com/idea/',title: 'Intellij IDEA',img: 'idea.png'},
            {url: 'https://www.jetbrains.com/webstorm/', title: 'Intellij Webstorm', img: 'webstorm.png' },
            {url: "https://www.java.com/",title: "Java",img: 'java.png'},
            {url: 'http://jquery.com/',title: 'jQuery',img: 'jquery.png'},            
            {url: 'https://angularjs.org/',title: 'AngularJS',img: 'angularjs.png'},
            {url: "https://www.mysql.com/",title: "MySQL",img: 'mysql.png'},
            {url: "https://yarnpkg.com/", title: "Yarn", img: 'yarn.png' },
            {url: "http://www.js-data.io/",title: "JSData",img: 'js-data.png'},
            {url: "http://expressjs.com/",title: "Express",img: 'express.png'},
            {url: "https://www.twilio.com/",title: "Twilio",img: 'twilio.png'},
            {url: "https://developers.facebook.com/products/messenger/",title: "Messenger Platform",img: 'messenger.png'},
            {url: "https://bower.io/",title: "Bower",img: 'bower.png'},
            {url: "http://foundation.zurb.com/",title: "Foundation",img: 'found.png'}
        ],
       skills: [
            {item: "Problem solving", stars: 5},
            {item: "Communication & negotiation", stars: 5},
            {item: "Analitycal skills", stars: 5},
            {item: "Staff management", stars: 4},
            {item: "Project management", stars: 4},
            {item: "Time management", stars: 4}
        ],
      projects: [
           {url: 'https://findcity.herokuapp.com/', title: 'City Finder In North America', img: 'fca.png', github: 'https://github.com/eriixon/FindCityInAmerica', des: 'Easy way to find a town/city in the USA, Canada and Mexico'},
           {url: 'https://www.facebook.com/BBBSnakeRiverRegion', title:'Messenger Bot', img:'fb-messenger.png', github: 'https://github.com/eriixon/bbb-facebook-messenger-bot', des: 'Facebook Messenger Bot for Better Business Bureau'},
           {url: 'https://qbhdemo.herokuapp.com/', title:'QB Form Helper', img:'qbhelper.png', github: 'https://github.com/eriixon/qbemailgrabber', des: 'Web application for QuickBooks helps to provide custome info online'},
           {url: 'http://eriixon.github.io/music-finder/', title:'iTunes Music Finder', img:'imf.png', github: 'https://github.com/eriixon/music-finder', des: 'Find all your favorite music in iTunes Store'},
           {url: 'http://eriixon.github.io/calculators/', title:'Digital Converter', img:'digcon.png', github: 'https://github.com/eriixon/calculators', des: 'Online digital converter from US to EU measurements'}
        ]
    };
});
