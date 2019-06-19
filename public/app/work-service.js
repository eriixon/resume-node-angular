angular.module('resume').service('WorkService', function () {

    this.placesMap = {
        education: [{
            fullURL: 'https://boisecodeworks.com/',
            shortURL: 'boisecodeworks.com',
            place: "BoiseCodeWorks",
            img: 'bcw.png',
            course: 'Back End with .NET C# Course',
            period: 'June - August 2017',
            address: 'Boise, ID, USA',
            description: "This course is designed for those who are ready to advance their knowledge beyond the basics of simple programming. Learning Object Oriented Programming with C# is the best way to bolster earning potential and placement as a developer. .NET C#, SQL, Unity, HTC, Collaborative Agile Development, Multiple Platform Deployment, SOLID Object - Oriented Programming, Application Lifecycle."
        }, {
            fullURL: 'https://boisecodeworks.com/',
            shortURL: 'boisecodeworks.com',
            place: "BoiseCodeWorks",
            img: 'bcw.png',
            course: 'Web Development Immersive Full Stack Course',
            period: 'April - June 2016',
            address: 'Boise, ID, USA',
            description: "The Immersive Course is a full-time experience designed for students looking to start a career in programming. As an Immersive student I learned both front-end and back-end technologies, worked in groups under the supervision of experienced mentors to create fully functional real-world applications."
        }, {
            fullURL: 'https://geekbrains.ru/',
            shortURL: 'geekbrains.ru',
            place: "GeekBrains.ru",
            img: 'gb.png',
            course: 'Java. Level 1, 2 & 3',
            period: 'July - November 2015',
            address: 'Moscow, Russia',
            description: "The full course of Java from the leading online IT school in Russia introduces computer programming using the Java with OOP principles. Emphasis is placed on event-driven programming methods, including creating and manipulating objects, classes, and using object-oriented tools."
        }, {
            fullURL: 'https://guu.ru/?page_id=19813&lang=en',
            shortURL: 'guu.ru',
            place: "State University of Management",
            img: 'sum.png',
            course: 'Transport Management, Master’s Degree',
            period: 'September 1997 - June 2002',
            address: 'Moscow, Russia',
            description: "Five year program specialized in management, technology, communications and accounting for motor transport companies and business transport departments."
        }],
        works: [
            {
                fullURL: 'https://allata.com/',
                shortURL: 'allata.com',
                place: "Allata",
                img: 'allata.png',
                position: 'Software Developer',
                period: 'December 2019 - now',
                address: 'Boise, Idaho, USA',
                description: "• Developed complex corporate software systems with production quality deployment, monitoring and reliability • Worked closely with customers to efficiently resolve issues •	Modified existing software to correct errors, upgrade interfaces and improve performance"
            },
            {
                fullURL: 'http://www.ruletekf.com/',
                shortURL: 'ruletek.com',
                place: "Ruletek",
                img: 'ruletek.png',
                position: 'System Architect',
                period: 'Aprile 2018 - November 2018',
                address: 'Meridian, Idaho, USA',
                description: "• Worked as part of a team to design, build, and support BPM applications for clients • Developed system features and functionality out of user requirements • Designed and develop user interfaces, followed design methodologies • Completied applications using languages and software products"
            },
            {
            fullURL: 'http://www.neoreef.com/',
            shortURL: 'neoreef.com',
            place: "Neoreef",
            img: 'neoreef.png',
            position: 'Back End Web Developer',
            period: 'September 2017 - February 2018',
            address: 'Boise, Idaho, USA',
            description: "• Integration of user - facing elements developed by a front - end developers with server side logic • Building reusable code and libraries for future use for the unique proprietary content management system • Optimization of the application for maximum speed and scalability  • Implementation of security and data protection • Design and implementation of data storage solutions"
            },
            {
            fullURL: 'https://saharacase.com',
            shortURL: 'saharacase.com',
            place: "Saharacase",
            img: 'sahara.png',
            position: 'Web Developer',
            period: 'November 2016 - September 2017',
            address: 'Boise, Idaho, USA',
            description: "Co-developed a vibrant, secure website using interactive features and SEO best practices to optimize traffic, page views and the user experience (UX)."
        }, {
            fullURL: 'http://sradkov.com',
            shortURL: 'sradkov.com',
            place: "Freelance",
            img: 'wdf.png',
            position: 'Web Developer',
            period: 'June 2016 - now',
            address: 'Boise, Idaho, USA',
            description: "Created and maintained web pages using HTML, CSS, Bootstrap, JavaScript, AngularJS and Node.js, optimized web pages for mobile, and debugged for better code, updated existing code and learned new technologies on the fly."
        }, {
            fullURL: 'http://www.volvotrucks.com/',
            shortURL: 'volvotrucks.com',
            place: "Volvo Trucks Russia",
            img: 'volvo.png',
            position: 'Senior Product Engineer',
            period: 'July 2010 - October 2015',
            address: 'Moscow, Russia',
            description: "Promoted Volvo telematics services, provided technical support for customers and team members. Established new consulting service using Volvo’s telematics data to increase efficiency of customer's business."
        }]
    };
});