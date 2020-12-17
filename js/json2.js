/**
 * Created by Administrator on 2017/8/8.
 */
var data;
//定义pens对象
var pens = {
    num_0:{'name':'钢笔','jg':10,'颜色':'红色'},
    num_1:{'name':'毛笔','jg':20,'颜色':'黑色'},
    num_2:{'name':'铅笔','jg':2,'颜色':'蓝色'},
};

/*
var pens = {
    bianhao_1:{'name':'钢笔','jg':10,'颜色':'红色'},
    bianhao_2:{'name':'毛笔','jg':20,'颜色':'黑色'},
    bianhao_3:{'name':'铅笔','jg':2,'颜色':'蓝色'},
};*/
data = JSON.stringify(pens);

var data_name = JSON.stringify(pens,['num_1','name']);

console.log(data);
console.log(data_name);
var str_name ='';
var str_jg = '';
var str_ys = '';
for(var i = 0; i<3;i++){
    str_name += JSON.stringify(pens,['num_'+i,'name']);
    str_jg += JSON.stringify(pens,['num_'+i,'jg']);
    str_ys += JSON.stringify(pens,['num_'+i,'颜色']);
}
console.log(str_name);
console.log(str_jg);
console.log(str_ys);