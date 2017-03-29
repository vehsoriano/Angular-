app.controller('MainController', ['$scope', function($scope){

    $scope.profile =  {

            name: "Verrell Victor Soriano",
            img: './img/photo1.jpg'
        };

    $scope.images = [

        {
            description: "Camerica Tricks #mirrorshot",
            location: 'HongKong Ocean Park',
            destination: 'https://www.google.com.ph/maps/place/Ocean+Park/@22.2466607,114.1757239,15z/data=!4m5!3m4!1s0x0:0xf3d1aa8549fb1946!8m2!3d22.2466607!4d114.1757239',
            date: new Date("2014", "12", "26"),
            likes: 0,
            img: './img/photo2.jpg'
        },
        {
            description: "Swass payat days",
            location: 'Holy Angel University SH garden',
            destination: 'https://www.google.com.ph/maps/place/Holy+Angel+University/@15.133078,120.590011,15z/data=!4m2!3m1!1s0x0:0x5e0af8a6aaab2282?sa=X&ved=0ahUKEwj1tdSJkfvSAhUHro8KHRBCBoIQ_BIIeTAP',
            date: new Date("2014", "11", "10"),
            likes: 0,
            img: './img/photo3.jpg'
        },
        {
            description: "With my pinsan #braces",
            location: 'KM86 Restaurant',
            destination: 'https://www.google.com.ph/maps/place/KM86/@15.158439,120.59147,15z/data=!4m2!3m1!1s0x0:0xcf3536bea15e9f1b?sa=X&ved=0ahUKEwifu7mnkfvSAhVMu48KHV0iAW0Q_BIIZTAK',
            date: new Date("2014", "09", "29"),
            likes: 0,
            img: './img/photo4.jpg'
        },
        {
            description: "2nd year College P.E days",
            location: 'Holy Angel University library',
            destination: 'https://www.google.com.ph/maps/place/Holy+Angel+University/@15.133078,120.590011,15z/data=!4m2!3m1!1s0x0:0x5e0af8a6aaab2282?sa=X&ved=0ahUKEwj1tdSJkfvSAhUHro8KHRBCBoIQ_BIIeTAP',
            date: new Date("2014", "08", "30"),
            likes: 0,
            img: './img/photo5.jpg'
        },
        {
            description: "Beauty and the Beast :(",
            location: 'Hollowblock',
            destination: '',
            date: new Date("2016", "09", "03"),
            likes: 0,
            img: './img/photo6.jpg'
        },
        {
            description: "Dota champions 4th year highschool",
            location: 'Holy Angel University',
            destination: 'https://www.google.com.ph/maps/place/Holy+Angel+University/@15.133078,120.590011,15z/data=!4m2!3m1!1s0x0:0x5e0af8a6aaab2282?sa=X&ved=0ahUKEwj1tdSJkfvSAhUHro8KHRBCBoIQ_BIIeTAP',
            date: new Date("2012", "11", "16"),
            likes: 0,
            img: './img/photo7.jpg'
        },
        {
            description: "With the bae",
            location: 'Clark Parade grounds',
            destination: 'https://www.google.com.ph/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=Clark+cdc+parade+ground&rflfq=1&rlha=0&rllag=15179353,120520441,244&tbm=lcl&tbs=lf_msr:-1,lf_pqs:EAE,lf:1,lf_ui:2&*',
            date: new Date("2017", "01", "06"),
            likes: 0,
            img: './img/photo8.jpg'
        },
        {
            description: "Stolen taho eating challenge",
            location: 'Baguio city',
            destination: 'https://www.google.com.ph/maps/place/Holy+Angel+University/@15.133078,120.590011,15z/data=!4m2!3m1!1s0x0:0x5e0af8a6aaab2282?sa=X&ved=0ahUKEwj1tdSJkfvSAhUHro8KHRBCBoIQ_BIIeTAP',
            date: new Date("2017", "12", "05"),
            likes: 0,
            img: './img/photo9.jpg'
        }
    ];
}]);
