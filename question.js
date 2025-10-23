let questions = [
    // Mövcud suallar (1–10)
    {
        numb: 1,
        question: "HTML nə üçün istifadə olunur?",
        answer: "A. Veb səhifələrin qurulması üçün",
        options: [
            "A. Veb səhifələrin qurulması üçün",
            "B. Şəkilləri redaktə etmək üçün",
            "C. Musiqi dinləmək üçün",
            "D. Kompüter oyunları oynamaq üçün"
        ]
    },
    {
        numb: 2,
        question: "CSS-də 'color: red;' nəyi dəyişir?",
        answer: "B. Mətnin rəngini dəyişir",
        options: [
            "A. Fon rəngi dəyişir",
            "B. Mətnin rəngini dəyişir",
            "C. Şrift ölçüsünü dəyişir",
            "D. Elementin ölçüsünü dəyişir"
        ]
    },
    {
        numb: 3,
        question: "'display: flex;' xüsusiyyəti nə üçündür?",
        answer: "C. Elementləri yan-yana düzür",
        options: [
            "A. Mətnin rəngini dəyişir",
            "B. Şəkil əlavə edir",
            "C. Elementləri yan-yana düzür",
            "D. HTML strukturunu təyin edir"
        ]
    },
    {
        numb: 4,
        question: "JavaScript-də 'alert(\"Salam\")' funksiyası nə edir?",
        answer: "D. Ekranda xəbərdarlıq göstərir",
        options: [
            "A. Konsolda məlumat göstərir",
            "B. HTML əlavə edir",
            "C. CSS dəyişir",
            "D. Ekranda xəbərdarlıq göstərir"
        ]
    },
    {
        numb: 5,
        question: "Hansı teq form göndərmək üçün istifadə olunur?",
        answer: "B. <form>",
        options: [
            "A. <div>",
            "B. <form>",
            "C. <span>",
            "D. <p>"
        ]
    },
    {
        numb: 6,
        question: "Bu kodun nəticəsi nə olacaq? console.log(2 + '2');",
        answer: "C. '22' (string)",
        options: [
            "A. 4",
            "B. 2",
            "C. '22'",
            "D. Error"
        ]
    },
    {
        numb: 7,
        question: "<input type='password'> nə üçündür?",
        answer: "B. Şifrə yazmaq üçün",
        options: [
            "A. Mətn sahəsi üçün",
            "B. Şifrə yazmaq üçün",
            "C. Checkbox üçün",
            "D. Radio button üçün"
        ]
    },
    {
        numb: 8,
        question: "CSS-də '#id' seçicisi nəyi seçir?",
        answer: "C. Müəyyən id-ə sahib elementi",
        options: [
            "A. Bütün div elementlərini",
            "B. Bütün class-ları",
            "C. Müəyyən id-ə sahib elementi",
            "D. Bütün span-ları"
        ]
    },
    {
        numb: 9,
        question: "Hansı dəyişən elan etmə üsulu dəyişməzdir?",
        answer: "D. const",
        options: [
            "A. let",
            "B. var",
            "C. static",
            "D. const"
        ]
    },
    {
        numb: 10,
        question: "HTML, CSS və JS necə bölünür?",
        answer: "A. HTML - Struktur, CSS - Dizayn, JS - Funksionallıq",
        options: [
            "A. HTML - Struktur, CSS - Dizayn, JS - Funksionallıq",
            "B. HTML - Dizayn, CSS - Funksionallıq, JS - Struktur",
            "C. HTML - Funksionallıq, CSS - Struktur, JS - Dizayn",
            "D. Hamısı eyni funksiyaya malikdir"
        ]
    },

    // Yeni suallar (11–20)
    {
        numb: 11,
        question: "Sual: HTML-də link yaratmaq üçün hansı teq istifadə olunur?",
        answer: "B. <a> teqi",
        options: [
            "A. <img> teqi",
            "B. <a> teqi",
            "C. <p> teqi",
            "D. <div> teqi"
        ]
    },
    {
        numb: 12,
        question: "Sual: CSS-də fon rəngi vermək üçün hansı xüsusiyyət istifadə olunur?",
        answer: "C. background-color",
        options: [
            "A. color",
            "B. font-size",
            "C. background-color",
            "D. border"
        ]
    },
    {
        numb: 13,
        question: "Sual: JavaScript-də dəyişən elan etmək üçün hansı açar söz istifadə olunur?",
        answer: "A. let",
        options: [
            "A. let",
            "B. css",
            "C. html",
            "D. var-color"
        ]
    },
    {
        numb: 14,
        question: "Sual: HTML-də ən böyük başlıq hansı teq ilə göstərilir?",
        answer: "A. <h1>",
        options: [
            "A. <h1>",
            "B. <h6>",
            "C. <p>",
            "D. <div>"
        ]
    },
    {
        numb: 15,
        question: "Sual: CSS-də bütün elementlərin margin və padding-i sıfırlamaq üçün hansı üsul istifadə olunur?",
        answer: "D. * { margin:0; padding:0; }",
        options: [
            "A. body { margin:0; }",
            "B. html { padding:0; }",
            "C. div { margin:0; }",
            "D. * { margin:0; padding:0; }"
        ]
    },
    {
        numb: 16,
        question: "Sual: JavaScript-də 'console.log()' funksiyası nə edir?",
        answer: "C. Konsolda məlumat göstərir",
        options: [
            "A. Alert göstərir",
            "B. Mətn dəyişir",
            "C. Konsolda məlumat göstərir",
            "D. HTML əlavə edir"
        ]
    },
    {
        numb: 17,
        question: "Sual: HTML-də şəkil əlavə etmək üçün hansı atribut mütləqdir?",
        answer: "B. src",
        options: [
            "A. alt",
            "B. src",
            "C. href",
            "D. link"
        ]
    },
    {
        numb: 18,
        question: "Sual: CSS-də elementləri yan-yana yerləşdirmək üçün hansı xüsusiyyət istifadə olunur?",
        answer: "A. display: flex;",
        options: [
            "A. display: flex;",
            "B. float: none;",
            "C. position: absolute;",
            "D. visibility: hidden;"
        ]
    },
    {
        numb: 19,
        question: "Sual: JavaScript-də dəyişənin dəyəri dəyişməz etmək üçün hansı açar söz istifadə olunur?",
        answer: "C. const",
        options: [
            "A. let",
            "B. var",
            "C. const",
            "D. fix"
        ]
    },
    {
    numb: 20,
    question: "Sual: console.log(typeof null); nəticəsi nə olacaq?",
    answer: "C. object",
    options: [
        "A. null",
        "B. undefined",
        "C. object",
        "D. number"
    ]
},
 // Yeni suallar (21–30)
{
    numb: 21,
    question: "Sual: HTML-də yeni sətir yaratmaq üçün hansı teq istifadə olunur?",
    answer: "B. <br>",
    options: [
        "A. <p>",
        "B. <br>",
        "C. <hr>",
        "D. <div>"
    ]
},
{
    numb: 22,
    question: "Sual: CSS-də mərkəzləşdirmək üçün hansı xüsusiyyət daha çox istifadə olunur?",
    answer: "C. text-align: center;",
    options: [
        "A. align: middle;",
        "B. justify: center;",
        "C. text-align: center;",
        "D. center: auto;"
    ]
},
{
    numb: 23,
    question: "Sual: JavaScript-də '===' operatoru nəyi yoxlayır?",
    answer: "D. Həm tip, həm də dəyəri",
    options: [
        "A. Yalnız dəyəri",
        "B. Yalnız tipi",
        "C. Tipi string-ə çevirir",
        "D. Həm tip, həm də dəyəri"
    ]
},
{
    numb: 24,
    question: "Sual: React-də komponent necə yaradılır?",
    answer: "A. function ComponentName() { return <div></div>; }",
    options: [
        "A. function ComponentName() { return <div></div>; }",
        "B. create Component { <div></div> }",
        "C. new Component()",
        "D. component = div()"
    ]
},
{
    numb: 25,
    question: "Sual: HTML-də şəkil göstərmək üçün hansı teq istifadə olunur?",
    answer: "C. <img>",
    options: [
        "A. <image>",
        "B. <src>",
        "C. <img>",
        "D. <pic>"
    ]
},
{
    numb: 26,
    question: "Sual: CSS-də 'position: absolute;' elementi necə yerləşdirir?",
    answer: "B. Ən yaxın positioned valideynə görə",
    options: [
        "A. Həmişə ekranın sol yuxarı küncünə görə",
        "B. Ən yaxın positioned valideynə görə",
        "C. Bütün səhifənin ortasına görə",
        "D. Flex qutusuna görə"
    ]
},
{
    numb: 27,
    question: "Sual: JavaScript-də array-in uzunluğunu tapmaq üçün hansı xüsusiyyət istifadə olunur?",
    answer: "D. length",
    options: [
        "A. size",
        "B. count",
        "C. total",
        "D. length"
    ]
},
{
    numb: 28,
    question: "Sual: React-də state dəyişmək üçün hansı hook istifadə olunur?",
    answer: "A. useState",
    options: [
        "A. useState",
        "B. useEffect",
        "C. useReducer",
        "D. useRef"
    ]
},
{
    numb: 29,
    question: "Sual: CSS-də 'z-index' nə üçündür?",
    answer: "B. Elementlərin üst-üstə sırasını təyin edir",
    options: [
        "A. Şəklin ölçüsünü dəyişir",
        "B. Elementlərin üst-üstə sırasını təyin edir",
        "C. Şrift ölçüsünü böyüdür",
        "D. Flex istiqamətini dəyişir"
    ]
},
{
    numb: 30,
    question: "Sual: JavaScript-də console.log([] == false); nəticəsi nə olacaq?",
    answer: "A. true",
    options: [
        "A. true",
        "B. false",
        "C. []",
        "D. Error"
    ]
}

];
