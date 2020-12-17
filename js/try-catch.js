/**
 * Created by Administrator on 2017/10/19.
 */
/*
* try...catch,出现异常和处理异常
*
* */


function fn(){
    var a,b,s=null;

    try{
        r1 = s.length;
        r2 = 1000;
    }catch(e) {
        console.log(',,,,,,' + e);
    }

}

fn();