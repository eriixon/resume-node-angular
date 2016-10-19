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
        controller: function(ResumeService){
          this.socialLinks = ResumeService.linkMap.socialLinks;
        }
});
