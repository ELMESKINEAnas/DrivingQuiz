// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "التامين الادنى الاجباري على السيارة يسمى",
    audio:"../audio/1.ogg",
    image:"../images/1.png",
    answer: "المسؤولية المدنية",
    options: [
      "المسؤولية المدنية",
      "المسؤولية الحركية"
    ]
  },
    {
    numb: 2,
    question: "مستوى السائل في هده البطارية مضبوط",
    audio:"../audio/2.ogg",
    image:"../images/2.png",
    answer: "لا",
    options: [
      "نعم",
      "لا"
    ]
  },
    {
    numb: 3,
    question: "هاد الحمولة ماخصهاش تجاوز فالخلف اكثر من",
    audio:"../audio/3.ogg",
    image:"../images/3.png",
    answer: "3 متر",
    options: [
      "1 متر",
      "3 متر"
    ]
  },
    {
    numb: 4,
    question: "المسلك لي على ليمن هو ",
    audio:"../audio/4.ogg",
    image:"../images/4.png",
    answer: "مسلك الدراجات",
    options: [
      "مسلك الدراجات",
      "مكان مخصص للتوقف"
    ]
  },
    {
    numb: 5, 
    question: "عند وجود هاد العلامة من الواجب علي",
    audio:"../audio/5.ogg",
    image:"../images/5.png",
    answer:"مانرميش بقايا السجائر",
    options: [
      "نقص من السرعة",
      "مانرميش بقايا السجائر"
    ]
  },
    {
    numb: 6,
    question: "متعن مزيان فالصورة",
    audio:"../audio/6.ogg",
    image:"../images/6.png",
    answer:"ندوز انا الاول",
    options: [
      "نسمح بالمرور لهاد السيارة",
      "ندوز انا الاول"
    ]
  },
    {
    numb: 7,
    question: "الاقراص و صفائح الحصر لازم ديما يتغيرو فوقت واحد",
    audio:"../audio/7.ogg",
    image:"../images/7.png",
    answer:"لا",
    options: [
      "نعم",
      "لا"
    ]
  },
    {
    numb: 8,
    question: "مجموع الوزن مع الحمولة هو 500 كلغ. باش نسوق خاصني بيرمي ب و ه ",
    audio:"../audio/8.ogg",
    image:"../images/8.png",
    answer:"لا",
    options: [
      "نعم",
      "لا"
    ]
  },
    {
    numb: 9,
    question: "مسموح لي نستمر فالسير بهاد العجلة بالنسية للمسافات القصيرة",
    audio:"../audio/9.ogg",
    image:"../images/9.png",
    answer:"لا",
    options: [
       "نعم",
      "لا"
    ]
  },
    {
    numb: 10,
    question: "نستعمل المنبه ",
    audio:"../audio/10.ogg",
    image:"../images/10.png",
    answer:"لا",
    options: [
       "نعم",
      "لا"
    ]
  },
    {
    numb: 11,
    question: "ماء التبريد كافي",
    audio:"../audio/11.ogg",
    image:"../images/11.png",
    answer:"نعم",
    options: [
       "نعم",
      "لا"
    ]
  },
    {
    numb: 12,
    question: "من الواجب نبدل مساحات الزجاج ملي تبدا تخلي الاثار ",
    audio:"../audio/12.ogg",
    image:"../images/12.png",
    answer:"نعم",
    options: [
       "نعم",
      "لا"
    ]
  },
    {
    numb: 13,
    question: "من الواجب نراقب الاضواء الخلفية",
    audio:"../audio/13.ogg",
    image:"../images/13.png",
    answer:"نعم",
    options: [
       "نعم",
      "لا"
    ]
  },
    {
    numb: 14,
    question: "هاد العلامة كتعلم على",
    audio:"../audio/14.ogg",
    image:"../images/14.png",
    answer:"مكان ممر الراجلين",
    options: [
      "مكان ممر الراجلين",
      "ممر الراجلين على بعد 50 متر"
    ]
  },
    {
    numb: 15,
    question: "غادي بسرعة 60 كلم في الساعة",
    audio:"../audio/15.ogg",
    image:"../images/15.png",
    answer:"ننقص",
    options: [
      "ننقص",
      "نبقى غادي بيها"
    ]
  },
    {
    numb: 16,
    question: "هاد العلامة كتعلمني",
    audio:"../audio/16.ogg",
    image:"../images/16.png",
    answer:"الطريق منحرفة",
    options: [
      "الطريق منحرفة",
      "الطريق مقطوعة"
    ]
  },
    {
    numb: 17,
    question: "هاد العلامة كتعلم على ممر السكة الحديدية",
    audio:"../audio/17.ogg",
    image:"../images/17.png",
    answer:"بالحواجز",
    options: [
      "بالحواجز",
      "بدون حواجز"
    ]
  },
    {
    numb: 18,
    question: "كنسوق شاحنة صغيرة, يمكن لي نكمل السير فالطريق الموجودة على ليمن",
    audio:"../audio/18.ogg",
    image:"../images/18.png",
    answer:"لا",
    options: [
       "نعم",
      "لا"
    ]
  },
    {
    numb: 19,
    question: "غادي بسرعة 40 كلم في الساعة. واجب علي نقص من السرعة",
    audio:"../audio/19.ogg",
    image:"../images/19.png",
    answer:"لا",
    options: [
       "نعم",
      "لا"
    ]
  },
    {
    numb: 20,
    question: "من الواجب عليا ننحاز لاقصى اليمين",
    audio:"../audio/20.ogg",
    image:"../images/20.png",
    answer:"لا",
    options: [
       "نعم",
      "لا"
    ]
  },
    {
    numb: 21,
    question: "كنسوق ب 40 كلم فالساعة. يمكن لي نزيد فالسرعة ديالي",
    audio:"../audio/21.ogg",
    image:"../images/21.png",
    answer:"نعم",
    options: [
       "نعم",
      "لا"
    ]
  },
    {
    numb: 22,
    question: "باش نتجاوز. يمكن لي نستعمل الممر لي فالوسط",
    audio:"../audio/22.ogg",
    image:"../images/22.png",
    answer:"نعم",
    options: [
       "نعم",
      "لا"
    ]
  },
    {
    numb: 23,
    question: "يمكن لي التوقف على طول الرصيف",
    audio:"../audio/23.ogg",
    image:"../images/23.png",
    answer:"ديال ليسر",
    options: [
      "ديال ليسر",
      "ديال ليمن"
    ]
  },
    {
    numb: 24,
    question: "انا متوقف فمكان مناسب",
    audio:"../audio/24.ogg",
    image:"../images/24.png",
    answer:"لا",
    options: [
      "نعم",
      "لا"
    ]
  },
    {
    numb: 25,
    question: "يمكن لي التوقف على الجنب ليمن ديال الطريق مباشرة من بعد راس العقبة",
    audio:"../audio/25.ogg",
    image:"../images/25.png",
    answer:"لا",
    options: [
      "نعم",
      "لا"
    ]
  },
    {
    numb: 26,
    question: "هاد السيارة فوضعية مناسبة للتوقف",
    audio:"../audio/26.ogg",
    image:"../images/26.png",
    answer:"لا",
    options: [
       "نعم",
      "لا"
    ]
  },
    {
    numb: 27,
    question: "يمكن لي التوقف بين هاد زوج سيارات زورق",
    audio:"../audio/27.ogg",
    image:"../images/27.png",
    answer:"لا",
    options: [
       "نعم",
      "لا"
    ]
  },
    {
    numb: 28,
    question: "هاد الشاحنة واقفة بالشكل الصحيح",
    audio:"../audio/28.ogg",
    image:"../images/28.png",
    answer:"لا",
    options: [
       "نعم",
      "لا"
    ]
  },
    {
    numb: 29,
    question: "هاد العلامة كتعلم على ",
    audio:"../audio/29.ogg",
    image:"../images/29.png",
    answer:"حركة السير فالاتجاهين",
    options: [
      "طلعة و هبطة",
      "حركة السير فالاتجاهين",
    ]
  },
    {
    numb: 30,
    question: "ابتداء من هاد العلامة يمكن لي نسوق ب",
    audio:"../audio/30.ogg",
    image:"../images/30.png",
    answer:"40 كلم في الساعة",
    options: [
      "40 كلم في الساعة",
      "60 كلم في الساعة"
      
    ]
  },
    {
    numb: 31,
    question: "هاد السهم كيعلم على وجود",
    audio:"../audio/31.ogg",
    image:"../images/31.png",
    answer:"طريق خاصة لمستعملي الطريق لي غادور على ليسر",
    options: [
      "طريق خاصة لمستعملي الطريق لي غادور على ليمن",
      "طريق خاصة لمستعملي الطريق لي غادور على ليسر"
      
    ]
  },
    {
    numb: 32,
    question: "التشوير الطرقي كيعلم",
    audio:"../audio/32.ogg",
    image:"../images/32.png",
    answer:"منعرج على ليسر",
    options: [
      "منعرج على ليسر",
      "منعرج على ليمن"
    ]
  },
    {
    numb: 33,
    question: "هاد العلامة كتعلم على",
    audio:"../audio/33.ogg",
    image:"../images/33.png",
    answer:"مستشفى",
    options: [
      "فندق",
      "مستشفى"
      
    ]
  },
    {
    numb: 34,
    question: "الخط لي من جهتي دليسر: يمكن لي نتجاوزو",
    audio:"../audio/34.ogg",
    image:"../images/34.png",
    answer:"نعم",
    options: [
      "نعم",
      "لا"
      
    ]
  },
    {
    numb: 35,
    question: "الا تبعت هاد الاتجاه غادي نكون فطريق",
    audio:"../audio/35.ogg",
    image:"../images/35.png",
    answer:"جهوية",
    options: [
      "وطنية",
      "جهوية"
      
    ]
  },
    {
    numb: 36,
    question: "كنسوق شاحنة لنقل البضائع,يمكن لي ندور على ليمن",
    audio:"../audio/36.ogg",
    image:"../images/36.png",
    answer:"نعم",
    options: [
      "لا",
      "نعم"
    ]
  },
    {
    numb: 37,
    question: "الا تجهت لطريق للي كتادي للصخيرات",
    audio:"../audio/37.ogg",
    image:"../images/37.png",
    answer:"غنخرج من طريق السيار",
    options: [
      "غندخل لطريق السيار",
      "غنخرج من طريق السيار",
    ]
  },
    {
    numb: 38,
    question: "هاد العلامة كتعلم على",
    audio:"../audio/38.ogg",
    image:"../images/38.png",
    answer:"خروج الاطفال",
    options: [
      "خروج الاطفال",
      "ممر خاص بالراجلين"
      
    ]
  },
    {
    numb: 39,
    question: "تمعن فالصورة",
    audio:"../audio/39.ogg",
    image:"../images/39.png",
    answer:"ننقص من السرعة",
    options: [
      "ننقص من السرعة",
      "نحتفظ بالسرعة"
    ]
  },
    {
    numb: 40,
    question: "مستوى الزيت مضبوط",
    audio:"../audio/40.ogg",
    image:"../images/40.png",
    answer:"نعم",
    options: [
      "نعم",
      "لا"
    ]
  }
];