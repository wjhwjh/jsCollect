/**
 * Created by Administrator on 2017/8/8.
 */
/*
* json中数据类型
*number：和JavaScript的number完全一致；
 boolean：就是JavaScript的true或false；
 string：就是JavaScript的string；
 null：就是JavaScript的null；
 array：就是JavaScript的Array表示方式——[]；
 object：就是JavaScript的{ ... }表示方式。
* ********
*JSON还定死了字符集必须是UTF-8，表示多语言就没有问题了。
* 为了统一解析，JSON的字符串规定必须用双引号""，Object的键也必须用双引号""
*
* */
var data;
var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

data = JSON.stringify(xiaoming, null, '  ');
console.log(data);