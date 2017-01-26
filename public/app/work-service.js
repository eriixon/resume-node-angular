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