mapObj = [{
    "status": "active",
    "days_expire": " ",
    "day_left": " ",
    "programColor": "",
    "next_rank_name": "White Green Stripe Belt",
    "next_rank_img": "",
    "current_rank_name": "White Black Stripe Belt",
    "current_rank_id": "",
    "subcategory": "",
    "after_camp": [
        "google",
        "facebook",
        "Skdkkd"
    ],
    "memberprofileImage": "https://storage.googleapis.com/mymember-storage/All-Images/f92a1cbe-e622-4a89-bb1c-be9da45bd19c-login-credential.png",
    "rank_update_test_history": [],
    "isRecomCandidate": false,
    "isRecommended": true,
    "_id": "618bd686f930021874d4a0b5",
    "class_count": 0,
    "firstName": "Somnath ji",
    "lastName": "kk",
    "gender": "Male",
    "dob": "1998-08-01T00:00:00.000Z",
    "age": "23",
    "primaryPhone": "+011-917-604-1627",
    "email": "popopooppo",
    "secondaryNumber": "+011-976-791-6172",
    "street": "patnadevi road",
    "zipPostalCode": "414101",
    "town": "chalisgaon",
    "country": "United States",
    "notes": "Testing Kar raha hu",
    "studentType": "Active Student",
    "school": "Apna School",
    "location": "United States",
    "customId": "9876543321",
    "intrested": "After School",
    "program": "Little Tiger",
    "category": "BBC's 1",
    "state": "American Samoa",
    "userId": "606aea95a145ea2d26e0f1ab",
    "createdAt": "2021-11-10T14:26:14.384Z",
    "updatedAt": "2022-02-12T00:00:47.409Z",
    "__v": 0,
    "next_rank_id": "616a620f801eb27f160e8237",
    "programID": "616a61b4801eb27f160e81e3",
    "current_rank_img": "https://storage.googleapis.com/mymember-storage/All-Images/6dae77be-a414-40b2-89fb-51964f6143ec-black-white.png",
    "leadsTracking": "",
    "speciality_program1": "",
    "speciality_program2": "",
    "summer_camp": "",
    "candidate": "BBC Candidate List (Beta)",
    "current_stripe": ""
},
{
    firstName: "parmeshwar",
    email: "parmeshwar20@navgurukul.org"
}]
let temp = 'hello firstName lastName program'
e
// console.log(replace(temp, /\b(?:firstName|lastName)\b/gi, matched => mapObj[matched]))
// let temp;

let promise = []

mapObj.map(Element => {
    let temp = 'hello firstName lastName program'

    for (i in Element) {
        if (temp.includes(i)) {
            temp = replace(temp, i, Element[i])
        }
    }   
    promise.push({ from: 'mymember', to: Element["email"], subject: "subject", html: temp });

})

console.log(promise);


