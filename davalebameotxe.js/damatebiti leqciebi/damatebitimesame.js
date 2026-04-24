let students = ["Qeti", "Nino", "Giorgi", "Luka", "Sandro"];
//                 0        1        2         3        4
// console.log(students[1]);

//students.push("Goga"); // ბოლოში ამატებს ელმენტს
//console.log(students);
//let arr = students.pop();
//console.log(arr);//ღილაკი?
//console.log(students);

//students.shift();

students.unshift("qeti");
console.log(students);




//davaleba


const mediaPlatform = {
    platformName: "CodeStream",
    subscriberCount: 5000,
    isPremium: true,

  // ობიექტში გვაქვს მასივი (ფილმების სია)
    contentList: [
    {
        id: 101,
        title: "Javascript Basics",
      tags: ["coding", "education", "js"], // მასივი ობიექტის შიგნით
        duration: "15:00",
      stats: { views: 1200, likes: 450 }   // კიდევ ერთი ჩაშენებული ობიექტი
    },
    {
    id: 102,
    title: "Mastering Objects",
    tags: ["advanced", "logic"],
    duration: "25:30",
    stats: { views: 800, likes: 300 }
    }
]
};

// console.log(mediaPlatform.contentList[0].tags[0]); // შედეგი: "coding"


console.log(mediaPlatform.contentList[0].title);
mediaPlatform.contentList.stats[0].push("tutorial")