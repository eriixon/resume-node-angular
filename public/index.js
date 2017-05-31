(function(){var app = angular.module('resume', ['ui.router']);})();

angular.module('resume').component('aboutMe', {
        templateUrl: 'pages/about.html',
        controller: function(){}
        
});
angular.module('resume').component('abilities', {
        templateUrl: 'pages/abilities.html',
        controller: function(ResumeService){
           this.tools     = ResumeService.linkMap.tools;
           this.exps      = ResumeService.linkMap.exps;
           this.skills    = ResumeService.linkMap.skills;
           this.languages = ResumeService.linkMap.languages;
        } 
});
angular.module('resume').component('experience', {
        templateUrl: 'pages/experience.html',
        controller: function(WorkService){
           this.education = WorkService.placesMap.education;
           this.works = WorkService.placesMap.works;
        }        
});
angular.module('resume').component('portfolio', {
        templateUrl: 'pages/portfolio.html',
        controller: function(ResumeService){
          this.projects = ResumeService.linkMap.projects;
        }        
});
angular.module('resume').component('contacts', {
        templateUrl: 'pages/contacts.html',
        controller: function(ResumeService, $http, $scope){
            $scope.socialLinks = ResumeService.linkMap.socialLinks;
            $scope.sendEmail = function (message) {
                if(!message.got) $http.put('/sendEmail', message).then(successCallback, errorCallback);
                else console.log("*** It's a bot. I don't need this messsage ***");
                function successCallback(data) {
                    $scope.message = {};
                    (function(){$('#showMessage').modal('show');})();
                }
                function errorCallback(err) {
                    console.log(err);
                }
        };
}});


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
            {url: 'https://developer.mozilla.org/en/docs/Web/JavaScript',title: 'JavaScript',img: 'javascript.png' ,type: 'tool'},
            {url: 'http://jquery.com/',title: 'jQuery',img: 'jquery.png'},
            {url: 'https://angularjs.org/',title: 'AngularJS',img: 'angular.png'},
            {url: 'https://vuejs.org/',title: 'VueJS',img: 'vuejs.jpg'},
            {url: "https://nodejs.org/",title: "Node.JS",img: 'nodejs.png'},
            {url: "https://www.npmjs.com/",title: "NPM",img: 'npm.png'},
            {url: "https://developers.facebook.com/products/messenger/",title: "Messenger Platform",img: 'messenger.png'},
            {url: 'https://github.com/',title: 'GitHub',img: 'github.png',type: 'tool'},
            {url: "https://heroku.com/",title: "Heroku",img: 'heroku.png'},
            {url: "https://bower.io/",title: "Bower",img: 'bower.png'},
            {url: 'https://code.visualstudio.com/',title: 'Visual Studio Code',img: 'vsc.png',type: 'tool'},
            {url: 'https://www.visualstudio.com/',title: 'Visual Studio',img: 'vs.png',type: 'tool'},
            {url: 'https://www.jetbrains.com/idea/',title: 'Intellij IDEA',img: 'idea.png',type: 'tool'}
            ],
        exps: [
            {url: 'https://msdn.microsoft.com/en-us/library/kx37x362.aspx',title: 'C#',img: 'csharp.png',type: 'tool'},
            {url: 'https://www.microsoft.com/net/default.aspx',title: 'Microsoft.NET',img: 'dotnet.png',type: 'tool'},
            {url: "https://www.java.com/",title: "Java",img: 'java.png'},
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
           {url: 'https://www.facebook.com/BBBSnakeRiverRegion', title:'Messenger Bot', img:'fb-messenger.png', github: 'https://github.com/eriixon/bbb-facebook-messenger-bot', des: 'Facebook Messenger Bot for Better Business Bureau'},
           {url: 'https://qbhdemo.herokuapp.com/', title:'QB Form Helper', img:'qbhelper.png', github: 'https://github.com/eriixon/qbemailgrabber', des: 'Web application for QuickBooks helps to provide custome info online'},
           {url: 'http://eriixon.github.io/music-finder/', title:'iTunes Music Finder', img:'imf.png', github: 'https://github.com/eriixon/music-finder', des: 'Find all your favorite music in iTunes Store'},
           {url: 'http://eriixon.github.io/calculators/', title:'Digital Converter', img:'digcon.png', github: 'https://github.com/eriixon/calculators', des: 'Online digital converter from US to EU measurements'},
           {url: 'http://eriixon.github.io/slap-game/', title:'The Slap Game', img:'slap.png', github: 'https://github.com/eriixon/slap-game', des: 'Online game: be brave and terminate a thug'},
           {url: 'http://eriixon.github.io/inspire/', title:'Inspire Page', img:'inspire.png', github: 'https://github.com/eriixon/inspire', des: 'Begin or continue your day with a nice landing page'},
           {url: 'http://eriixon.github.io/find-penguins',title:'Find the penguins', img:'findup.png', github: 'https://github.com/eriixon/find-penguins', des: 'Online game: find all pingues and don\'t meet a yeti'},
                ]
    };
});

$(document).ready(function(){
  $('#smooth a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
});

angular.module('resume').service('WorkService', function(){
    
    this.placesMap = {    
    education: [
       {fullURL: 'https://boisecodeworks.com/',
        shortURL: 'boisecodeworks.com',
	    place: "BoiseCodeWorks",
		img: 'bcw.png',
        course: 'Web Development Immersive Full Stack Course',
        period: 'April - June 2016',
        address: 'Boise, ID, USA',
        description: "The Immersive Course is a full-time experience designed for students looking to start a career in programming. As an Immersive student I learned both front-end and back-end technologies, worked in groups under the supervision of experienced mentors to create fully functional real-world applications."
       },{
        fullURL: 'https://geekbrains.ru/',
        shortURL: 'geekbrains.ru',
	    place: "GeekBrains.ru",
		img: 'gb.png',
        course: 'Java. Level 1, 2 & 3',
        period: 'July - November 2015',
        address: 'Moscow, Russia',
        description: "The full course of Java from the leading online IT school in Russia introduces computer programming using the Java with OOP principles. Emphasis is placed on event-driven programming methods, including creating and manipulating objects, classes, and using object-oriented tools."  
        },{
        fullURL: 'https://guu.ru/?page_id=19813&lang=en',
        shortURL: 'guu.ru',
	    place: "State University of Management",
		img: 'sum.png',
        course: 'Transport Management, Master’s Degree',
        period: 'September 1997 - June 2002',
        address: 'Moscow, Russia',
        description: "Five year program specialized in management, technology, communications and accounting for motor transport companies and business transport departments."
        }],
    works: [{
        fullURL: 'https://saharacase.com',
        shortURL: 'saharacase.com',
	    place: "Saharacase",
		img: 'sahara.png',
        position: 'Web Developer',
        period: 'November 2016 - now',
        address: 'Boise, Idaho, USA',
        description: "Co-developed a vibrant, secure website using interactive features and SEO best practices to optimize traffic, page views and the user experience (UX)."
        },{
        fullURL: 'http://sradkov.com',
        shortURL: 'sradkov.com',
	    place: "Freelance",
		img: 'wdf.png',
        position: 'Web Developer',
        period: 'June 2016 - now',
        address: 'Boise, Idaho, USA',
        description: "Created and maintained web pages using HTML, CSS, Bootstrap, JavaScript, AngularJS and Node.js, optimized web pages for mobile, and debugged for better code, updated existing code and learned new technologies on the fly."
        },{
        fullURL: 'http://www.volvotrucks.com/',
        shortURL: 'volvotrucks.com',
	    place: "Volvo Trucks Russia",
		img: 'volvo.png',
        position: 'Senior Product Engineer',
        period: 'July 2010 - October 2015',
        address: 'Moscow, Russia',
        description: "Promoted Volvo telematics services, provided technical support for customers and team members. Established new consulting service using Volvo’s telematics data to increase efficiency of customer's business."
        },{
        fullURL: "http://ru.total.com/en",
        shortURL: "total.com",
	    place: "TOTAL E&P Russia",
		img: 'total.png',
        position: 'Transportation coordinator',
        period: 'February 2008 - June 2010',
        address: 'Moscow, Russia',
        description: "Managed company carpool of cars, managed drivers, and oversaw staff/customer transportation services. Oversaw contract compliance with leasing, insurance, transportation and other corporate partners."   
        }]};
});