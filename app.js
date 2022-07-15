const moment = require('moment')
// function daysRemaining(date) {
//     var eventdate = moment(date)
//     var todaysdate = moment().format("YYYY-MM-DD");
//     return eventdate.diff(todaysdate, 'days');
// }


// a=[
//     {
//         "memberprofileImage": "https://storage.googleapis.com/mymember-storage/All-Images/77268c90-3810-11ec-950d-fbbbc1eb2e52-pexels-photo-771742.jpeg",
//         "membership_details": [
//             {
//                 "_id": "6179329293f6ae985c3f6bed",
//                 "expiry_date": "2021-10-31",
//                 "membership_name": "testing expiry",
//                 "membership_status": "Expired"
//             },
//             {
//                 "_id": "6179329e93f6ae985c3f6bf1",
//                 "expiry_date": "2022-10-24",
//                 "membership_name": "testing expiry",
//                 "membership_status": "Active"
//             }
//         ],
//         "last_contact_renewal": null,
//         "_id": "613fb3347aec1b70e583a284",
//         "firstName": "shivani",
//         "lastName": "chouhan",
//         "age": "6"
//     },
//     {
//         "memberprofileImage": " ",
//         "membership_details": [
//             {
//                 "_id": "617932ad93f6ae985c3f6bf5",
//                 "expiry_date": "2022-10-24",
//                 "membership_name": "testing expiry",
//                 "membership_status": "Active"
//             },
//             {
//                 "_id": "617a479858263c0d504e226b",
//                 "expiry_date": "2022-10-24",
//                 "membership_name": "testing expiry",
//                 "membership_status": "Active"
//             }
//         ],
//         "last_contact_renewal": null,
//         "_id": "613fb39fd93d42738a3f0c4f",
//         "firstName": "shivani",
//         "lastName": "chouhan",
//         "age": "20"
//     },
//     {
//         "memberprofileImage": " ",
//         "membership_details": [
//             {
//                 "_id": "617932b793f6ae985c3f6bf9",
//                 "expiry_date": "2022-10-24",
//                 "membership_name": "testing expiry",
//                 "membership_status": "Active"
//             }
//         ],
//         "last_contact_renewal": null,
//         "_id": "613fb4ad9ab7870a43b0a318"
//     },
//     {
//         "memberprofileImage": " ",
//         "membership_details": [
//             {
//                 "_id": "617932c493f6ae985c3f6bfd",
//                 "expiry_date": "2021-12-31",
//                 "membership_name": "testing expiry",
//                 "membership_status": "Expired"
//             }
//         ],
//         "last_contact_renewal": null,
//         "_id": "6140610c5ebeb10ec7055ef6"
//     },
//     {
//         "memberprofileImage": "https://storage.googleapis.com/mymember-storage/All-Images/dc894f70-1586-11ec-b644-abbe3481c8ae-profile.jpg",
//         "membership_details": [
//             {
//                 "_id": "6179212f4ea9708bdc5afdc2",
//                 "expiry_date": "2021-10-31",
//                 "membership_name": "testing parmeshwar",
//                 "membership_status": "Expired"
//             },
//             {
//                 "_id": "617922ea08559f903b2a8175",
//                 "expiry_date": "2021-10-24",
//                 "membership_name": "testing parmeshwar",
//                 "membership_status": "Active"
//             }
//         ],
//         "last_contact_renewal": null,
//         "_id": "6140e54786ac074a71dbe56c",
//         "firstName": "DD MM NN",
//         "lastName": "user",
//         "age": "21"
//     },
//     {
//         "memberprofileImage": " ",
//         "membership_details": [
//             {
//                 "_id": "617d94508a685c2882b3b0a3",
//                 "expiry_date": "2024-03-08",
//                 "membership_name": "BBC PIF",
//                 "membership_status": "Active"
//             }
//         ],
//         "last_contact_renewal": null,
//         "_id": "616abecf2646ab0ea5ab8315",
//         "firstName": "Caleb",
//         "lastName": "Bishop"
//     }
// ]

// x=[]

// a.forEach((element,j) => {
//     (element.membership_details).forEach((e,i)=>{
//     if(60> daysRemaining(e.expiry_date)){
//         e.daysLeft=daysRemaining(e.expiry_date)
//         if(!x.includes(element)){
//             x.push(element)

//         }

//     }else{
//         element.membership_details.pop(i)   
//     }
//     })
// });

// console.log(x[2])





// let arr1 = [
//     {
//         "_id": "6141086abd29e06d4201e69c",
//         "email": "demo@gmail.com"
//     },
//     {
//         "_id": "616abecf2646ab0ea5ab8328",
//         "email": "shireen@jhgjjhj"
//     },
//     {
//         "_id": "61893e2073cfdd0564883260",
//         "email": "shireen20@navgurukul.org"
//     },
//     {
//         "_id": "616abecf2646ab0ea5ab830e",
//         "email": "adsfgdafdfa@fghn"
//     },
//     {
//         "_id": "6189e039569d5c0fcc7ee50b"
//     },
//     {
//         "_id": "616abecf2646ab0ea5ab830c"
//     },
//     {
//         "_id": "618d2edd312976316a99b12a",
//         "email": "diwakarprasad778@gmail.com"
//     },
//     {
//         "_id": "618bd74ef930021874d4a0cf",
//         "email": "pj@rediffmail.com"
//     },
//     {
//         "_id": "616abecf2646ab0ea5ab831d"
//     },
//     {
//         "_id": "616abecf2646ab0ea5ab8369"
//     },
//     {
//         "_id": "61831018d42dc1581af87d22",
//         "email": "jkeym@optonline.net"
//     },
//     {
//         "_id": "616abecf2646ab0ea5ab8326",
//         "email": "jkdhjkhk"
//     },
//     {
//         "_id": "618c102d9d6aa527c1d6d6ca",
//         "email": "d@gmail.com"
//     },
//     {
//         "_id": "618ecce98c068845389ce7f2",
//         "email": "pralhad@gmail.com"
//     },
//     {
//         "_id": "61a65ad2b783874c1dcbe62b",
//         "email": "monukushwaha001@gmail.com"
//     },
//     {
//         "_id": "61a782e9bc98104e3b8cbc80",
//         "email": ""
//     },
//     {
//         "_id": "61a788e1bc98104e3b8cc0f5",
//         "email": "n@gmail.com"
//     },
//     {
//         "_id": "61a78a5dbc98104e3b8cc2cc",
//         "email": "n@gmail.com"
//     },
//     {
//         "_id": "61a78bf6bc98104e3b8cc440",
//         "email": "n@gmail.com"
//     },
//     {
//         "_id": "61b20a73472da145ce3437c7",
//         "email": "shireen82naaz@gmail.com"
//     },
//     {
//         "_id": "61b4d8857650b95f0b502955",
//         "email": "naresh@gmail.com"
//     },
//     {
//         "_id": "61b5f2317650b95f0b5042c8",
//         "email": "naresh@gmail.com"
//     },
//     {
//         "_id": "61b5f9f57650b95f0b5044a5",
//         "email": ""
//     },
//     {
//         "_id": "61b5fa69bb40766cab47b7fa",
//         "email": ""
//     },
//     {
//         "_id": "61b5fb5099738d6ceaae4183",
//         "email": ""
//     },
//     {
//         "_id": "61b5fcb900d5206d4617ee88",
//         "email": ""
//     },
//     {
//         "_id": "61bd0151bebd132a6941c2cd",
//         "email": "shireen82naaz@gmail.com"
//     }
// ]

// let arr2 =[
//     {
//         "_id": "618bd686f930021874d4a0b5",
//         "email": "pralhad@gmail.com"
//     },
//     {
//         "_id": "613fb3347aec1b70e583a284",
//         "email": "shivani@gmail.com"
//     },
//     {
//         "_id": "61a7e8b6bc98104e3b8cd932",
//         "email": ""
//     },
//     {
//         "_id": "6140e54786ac074a71dbe56c",
//         "email": "nnaresh0101@gmail.com"
//     },
//     {
//         "_id": "6141086abd29e06d4201e69c",
//         "email": "demo@gmail.com"
//     },
//     {
//         "_id": "6140610c5ebeb10ec7055ef6"
//     },
//     {
//         "_id": "616abecf2646ab0ea5ab8343",
//         "email": ""
//     }
// ]

// leadData = arr1.filter(e => {
//     return arr2.some(item => item._id === e._id);
// });

// console.log(leadData)
/////////////////////////////////////////////////////////////////////////////////////////dates between two date
// let startDate='2020-01-30'
// let endDate='2020-01-30'
// let i =0
// // console.log(moment().format("DD-MM-YYYY"))
// while (moment(startDate).isSame(endDate) || moment(startDate).isBefore(endDate)) {
//     console.log(i)
//     i.add(1, "months")
// }
// ///////////////
// require('date-utils');

// var startDate = moment('2021-01-30');
// var startDate1 = "2021-01-30"

// var endDate = new Date('-04-30');
// let a = 1
// let dates = []
// // dates.push(startDate1)
// for (var i = startDate; i.isBefore(endDate) || i.isSame(endDate); i.add(1, "months")) {
//     dates.push(moment(startDate1).add(a, "M").format("YYYY-MM-DD"))
//     a++;
// }


// console.log(dates)
//////////////////////////////////////////////////////////

// let now=moment()
// console.log(moment('2020-01-31').add(1,'year').format())

// const id = "mymember - marketing - triggers - spkqh"
// const Realm = require("realm");

// const config = {
//     id,
// };
// const app = new Realm.App(config);

// // const app = Realm.App.getApp(id); // replace this with your App ID
// console.log(app)
//////////////////////

// const { RRule, RRuleSet } = require('rrule')
// console.log(RRule);

// const rule = new RRule({
//     freq: RRule.WEEKLY,
//     interval: 1,
//     // byweekday: [RRule.MO, RRule.FR],
//     dtstart: new Date(Date.UTC(2020, 1,1)),
//     until: new Date(Date.UTC(2020, 1, 3)),

// })
// console.log(rule.all())

// const rule = RRule.fromString(
//     "DTSTART;TZID=Asia/Kolkata:20150501T080000;\n"
//     + "RRULE:FREQ=DAILY;INTERVAL=2"
// )
// console.log(RRule.fromString(
//     "DTSTART;TZID=Asia/Kolkata:20150501T080000;\n"
//     + "RRULE:FREQ=DAILY;INTERVAL=2"
// ))

const express = require("express")
const app = express()
const port = 3000
require('dotenv').config()
let response = process.env.MESSAGE_STYLE === "uppercase"?"   json".toUpperCase():"Hello json"
app.get("/json", (req, res) => {
    res.json({ "message": response })
}
)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
