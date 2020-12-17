/**
 * Created by Administrator on 2017/7/31.
 */
var a = [1, 2, 3];
var a_1 = [1, 2, 3, 4];
var a_2 = [1, 2, 3, 4, 5];
var a_3 = 'abcdefghpknn';

var b, c, d;

b = a.concat(a_1);
console.log(b);
console.log(a);

/*c = a.pop();
 console.log(c);
 console.log(a);*/

d = a_1.push(6);
console.log(d);
console.log(a_1.reverse());


console.log(a_2.slice(1, 4));
console.log(a_3.slice(1, 4));