//!Функція в JavaScript — це блок коду, який можна викликати для виконання певного завдання. 
//!Функції дозволяють повторно використовувати код, організовувати його та робити його більш читабельним та зрозумілим.
function hi(name,age){
    console.log(`Привіт ${name}! Тобі ${age} років?`)
}
hi('Yulya', 15)
//?Іменована функція — це функція, яка має ім'я. Її можна викликати як за допомогою імені, так і через змінну.
//?Іменовані функції підлягають підняттю (hoisting), що означає, що їх можна викликати до оголошення в коді.
//*варіант1
//function greet() {
//    return console.log("Привіт!");
//}
//greet(); // Виведе "Привіт!"

////*варіант2
//greet(); // Виведе "Привіт!"

//function greet() {
//    console.log("Привіт!");
//}

//?Анонімна функція
//?Анонімна функція — це функція, яка не має імені і зазвичай присвоюється змінній або використовується як аргумент іншої функції.

//const greet = function() {
//    console.log("Привіт!");
//};

//greet(); // Виведе "Привіт!"


//?Стрілкова функція
//?Стрілкова функція (arrow function) — це новий синтаксис для оголошення функцій, введений в ECMAScript 6 (ES6). 
//?Стрілкові функції мають коротший синтаксис і не мають власного значення this, arguments, super та new.target.

//const greet = () => {
//    console.log("Привіт!");
//};

//greet(); // Виведе "Привіт!"
//const day=(d)=>{
//    return console.log(`Сьогодні ${d} `)
//}
//day("Четверг")
//const match = (x,y)=>{
//    c = x*y-y+2*x;
//    return testFunction (c)
//}
//const testFunction = (c)=>{ 
//    c = c**2
//    return console.log(`Результат обчислень ${c}`)
//}
//match(3,4)
//!Проект
//?У вас є початковий стейт. Реалізуйте за дополмогою функціонального програмування після введення користувачем потрібного типу, фільтрування даних та аналіз:

const state = [
    { name: "Хліб", price: 20, description: "Свіжий пшеничний хліб", type: "Випічка" },
    { name: "Молоко", price: 25, description: "Свіже коров'яче молоко", type: "Молочні продукти" },
    { name: "Сир", price: 150, description: "Твердий сир з натурального молока", type: "Молочні продукти" },
    { name: "Масло", price: 80, description: "Вершкове масло", type: "Молочні продукти" },
    { name: "Яйця", price: 30, description: "Свіжі курячі яйця, 10 шт", type: "Молочні продукти" },
    { name: "Курка", price: 120, description: "Ціла курка, охолоджена", type: "М'ясо" },
    { name: "Яблука", price: 40, description: "Свіжі червоні яблука", type: "Фрукти" },
    { name: "Банани", price: 50, description: "Свіжі банани", type: "Фрукти" },
    { name: "Апельсини", price: 60, description: "Свіжі апельсини", type: "Фрукти" },
    { name: "Картопля", price: 15, description: "Молода картопля", type: "Овочі" },
    { name: "Морква", price: 18, description: "Свіжа морква", type: "Овочі" },
    { name: "Помідори", price: 45, description: "Свіжі червоні помідори", type: "Овочі" },
    { name: "Огірки", price: 35, description: "Свіжі зелені огірки", type: "Овочі" },
    { name: "Цибуля", price: 10, description: "Ріпчаста цибуля", type: "Овочі" },
    { name: "Часник", price: 20, description: "Свіжий часник", type: "Овочі" },
    { name: "Борошно", price: 25, description: "Пшеничне борошно, 1 кг", type: "Сухі продукти" },
    { name: "Цукор", price: 30, description: "Білий цукор, 1 кг", type: "Сухі продукти" },
    { name: "Сіль", price: 10, description: "Кухонна сіль, 1 кг", type: "Сухі продукти" },
    { name: "Перець", price: 35, description: "Чорний перець горошок", type: "Сухі продукти" },
    { name: "Олія", price: 50, description: "Соняшникова олія, 1 л", type: "Масла і жири" },
    { name: "Мед", price: 100, description: "Натуральний бджолиний мед", type: "Сухі продукти" },
    { name: "Чай", price: 40, description: "Чорний чай в пакетиках", type: "Напої" },
    { name: "Кава", price: 80, description: "Мелена кава, 250 г", type: "Напої" },
    { name: "Кефір", price: 30, description: "Свіжий кефір", type: "Молочні продукти" },
    { name: "Йогурт", price: 25, description: "Натуральний йогурт", type: "Молочні продукти" },
    { name: "Сік яблучний", price: 35, description: "Свіжовижатий яблучний сік", type: "Напої" },
    { name: "Сік апельсиновий", price: 40, description: "Свіжовижатий апельсиновий сік", type: "Напої" },
    { name: "Мінеральна вода", price: 20, description: "Мінеральна вода без газу", type: "Напої" },
    { name: "Газована вода", price: 25, description: "Газована вода", type: "Напої" },
    { name: "Шоколад", price: 50, description: "Чорний шоколад, 100 г", type: "Солодощі" },
    { name: "Печиво", price: 30, description: "Ванільне печиво", type: "Солодощі" },
    { name: "Цукерки", price: 60, description: "Асорті цукерок", type: "Солодощі" },
    { name: "Макарони", price: 35, description: "Макарони з твердих сортів пшениці", type: "Сухі продукти" },
    { name: "Рис", price: 40, description: "Білий рис, 1 кг", type: "Сухі продукти" },
    { name: "Гречка", price: 50, description: "Гречана крупа, 1 кг", type: "Сухі продукти" },
    { name: "Вівсянка", price: 35, description: "Вівсяні пластівці, 1 кг", type: "Сухі продукти" },
    { name: "Кукурудза", price: 25, description: "Консервована кукурудза", type: "Консерви" },
    { name: "Горошок", price: 20, description: "Консервований зелений горошок", type: "Консерви" },
    { name: "Тунець", price: 70, description: "Консервований тунець", type: "Консерви" },
    { name: "Лосось", price: 120, description: "Консервований лосось", type: "Консерви" },
    { name: "Сардини", price: 50, description: "Консервовані сардини", type: "Консерви" },
    { name: "Сосиски", price: 90, description: "Курячі сосиски", type: "М'ясо" },
    { name: "Ковбаса", price: 150, description: "Ковбаса варена", type: "М'ясо" },
    { name: "Бекон", price: 200, description: "Свіжий бекон", type: "М'ясо" },
    { name: "Йогурт питний", price: 20, description: "Питний йогурт", type: "Молочні продукти" },
    { name: "Вершки", price: 60, description: "Вершки для кави", type: "Молочні продукти" },
    { name: "Майонез", price: 30, description: "Майонез класичний", type: "Соуси" },
    { name: "Кетчуп", price: 35, description: "Томатний кетчуп", type: "Соуси" },
    { name: "Гірчиця", price: 25, description: "Діжонська гірчиця", type: "Соуси" },
    { name: "Маргарин", price: 40, description: "Маргарин для випічки", type: "Масла і жири" },
    { name: "Сметана", price: 30, description: "Сметана 15%", type: "Молочні продукти" },
    { name: "Творог", price: 50, description: "Свіжий творог", type: "Молочні продукти" },
    { name: "Кукурудзяні пластівці", price: 45, description: "Кукурудзяні пластівці для сніданку", type: "Сухі продукти" },
    { name: "М'ясо яловиче", price: 200, description: "Яловичина на кості", type: "М'ясо" },
    { name: "М'ясо свинини", price: 180, description: "Свинячий стейк", type: "М'ясо" },
    { name: "Риба форель", price: 220, description: "Свіжа форель", type: "Риба" },
    { name: "Креветки", price: 150, description: "Свіжі креветки", type: "Морепродукти" }
];
let type 
function typeAdd(state,type) {
    return state.filter(element => element.type ==type);
}
type = typeAdd(state, "М'ясо")
function analiz(state, s=0){
    state.forEach(element => {
        s+=element.price;
        console.log(element.name);
    });
    return s;
}
let myProduct = analiz(type)
console.log(myProduct)



type = typeAdd(state, "Соуси")
function analiz1(state, s1=0){
    state.forEach(element => {
        s1+=element.price;
        console.log(element.name);
    });
    return s1;
}
let myProduct1 = analiz1(type)
console.log(myProduct1)



type = typeAdd(state, "Сухі продукти")
function analiz2(state, s2=0){
    let count = 0;
    state.forEach(element => {
        s2+=element.price;
        count++;
        console.log(element.name);
    });
    let average = s2/count;
    return {sum:s2, averagee:average};
}
let myProduct2 = analiz2(type)
console.log(`Сума всіх товарів: ${myProduct2.sum}`)
console.log(`Cереднє арифметичне: ${myProduct2.averagee}`)