/**
 * Created by Administrator on 2017/9/27.
 */
function area_of_circle(r, pi) {

    if(arguments.length == 1){
        pi = 3.14;
    }else{
        pi = arguments[1];
     }
    return r*pi;
}
if (area_of_circle(2) === 6.28) {
    console.log('测试通过');
} else {
    console.log('测试失败');
}