
// написати програму, яка приймає на вхід число і 
//виводить у консоль повідомлення у форматі: 
//Число N є простим числом, якщо число N просте; та Число N не є простим числом, якщо число N складене.
//  let number = prompt ('Введіть число');
//  for (let i = 1; i < number; i++) {
//    for ( let k = 1; k < i; k++){
//     message = `Число ${number} є простим числом`
//     if (i % k == 0) continue
//     message = `Число ${number} не є простим числом`
//   } 
//  }
 // console.log(message);


// Вам необхідно написати програму, яка приймає на вхід число N 
//і знаходить усі числа в діапазоні від 1 до N, 
//які є досконалими числами.
// let sum = 0;
// let reminder;
// for ( i = 1; i <= num; i += 1) {
//    reminder = num % i;
//    if (reminder === 0) {
//       sum += i;
//    } 
// }
// if (num === sum) {
//    console.log (num + ' - досконале число')
// }


// приймає на вхід число, що буде висотою вершини вашої ялинки. 
//Уся ялинка має бути реалізована одним рядком:
    //  *
    // ***
//    *****
//   *******

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);
//