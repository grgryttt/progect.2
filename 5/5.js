//console.clear();
////!Змінна та константа
//let a = 5
//console.log (typeof(a),a)
//a=6
//console.log (a)
//const a1 =7
//console.log(typeof(a1), a1)

////! Типи даних
////? undefind,null,number, string, arr
//a = '5'
//console.log(typeof(a),a,a+5)
//a=[1, 2, 3, 4, 5]
//console.log(typeof(a), a, a[4])
//let b 
//console.log(b)
////! Арифметичні операції
////? + - / % ** * ++ --
//a=6
//console.log(a+2)
//console.log(a-2)
//console.log(a*2)
//console.log(a**2)
//console.log(a/2)
//console.log(a%2)

//a--
//console.log(a)
//a++
//console.log(a)


////* Визнач скільки буде 2 в 5 степені та 2 в 15 степені
////* Обрахуй значення рівняння x^2+2xy+y^2

////* Напишіть програму, яка перевіряє, чи число парне чи непарне.
//a=6
//console.log(a%2==0)
//a%2==0 && console.log("Парне число")
//if (a%2==0) {
//    console.log("Парне число")
//}else{
//    console.log("Непарне число")
//}
//a%2==0?console.log("Парне число"):console.log("Непарне число")
//* Створіть програму, яка визначає, чи є введене число додатним, від'ємним чи нулем.
//* Напишіть програму, яка обчислює площу прямокутника за його довжиною і шириною. s=a*b
//* Створіть програму, яка перевіряє, чи є введене число кратним 3 або 5.



////? Alert (Попередження):
//alert('Консоль успішно підключена')
////? Використовується для відображення повідомлення користувачу з кнопкою "OK". Наприклад:
////? window.alert("Це попередження!");
////? Prompt (Запит):
//b=prompt ("Введіть ваше ім'я")
//console.log(b)
//b=confirm('Чи бажаєте продовжити роботу на сайті')
//console.log(b)
////? Використовується для отримання введеного користувачем значення. Він також має кнопки "OK" і "Cancel". Наприклад:
////? let result = window.prompt("Будь ласка, введіть своє ім'я", "Гість");
////? Confirm (Підтвердження):
////? Використовується для підтвердження або скасування дії користувачем. Має кнопки
//1
let login, password
login=prompt('Введіть Ваш логін')
password=prompt('Введіть Ваш пароль')
if (login=='1' && password=='1') {
    alert('Ви успішно авторизувались')
}else{
    window.location='https://www.google.com/'
}

//2
let x=4, y=7,a=2
console.log("Стільки буде 2 в 5 степені та 2 в 15 степені: ", a**5, ";", a**15)
console.log("Значення рівняння x^2+2xy+y^2: ",x**2+2*x*y+y**2)


//3
b=prompt('Введіть будь яке число')
console.log(b)
b>0?console.log("Число більше нуля"):console.log("Число менше нуля чи дорівнює йому") 
if (b>0==false) {
    b==0?console.log("Число дорівнює нулю"):console.log("Число менше нуля")
}

//4
m=prompt('Уведіть довжину прямокутника:')
console.log(m)
n=prompt('Введіть ширину прямокутника:')
console.log(n)
alert('Площа примокутника: ' + (m*n))
console.log(n*m)

//5
y=prompt('Введіть будь яке число')
console.log(y)
y%3==0? console.log('Число ділиться на 3'):console.log('Число ділиться на 5 чи не ділиться ні на 3, ні на 5')
if (y%3==0==false) {
    y%5==0?console.log("Число число ділиться на 5"):console.log("Число не ділиться ні на 3, ні на 5")}