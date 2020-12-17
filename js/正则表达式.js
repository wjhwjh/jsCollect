/**
 * Created by Administrator on 2017/8/4.
 */
var str = 'abjfhlapiesaabjhklbbinmab';
console.log(str.replace(/ab+/,'A'));   // Ajfhlapiesaabjhklbbinmab
console.log(str.replace(/ab+/g,'A'));  // AjfhlapiesaAjhklbbinmA


var reg = /ab*/g;  //AjfhlApiesAAjhklbbinmA
var reg_1 = /ab/g; //AjfhlapiesaAjhklbbinmA
console.log(str.replace(reg,'A'));
console.log(str.replace(reg_1,'A'));

var str1="foo bar."
console.log(str1.replace(/(foo)/g,'A'));