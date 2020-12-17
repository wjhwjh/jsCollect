/**
 * Created by Administrator on 2017/8/22.
 */
 var o = {
    a:10,
    b:{
        a:12,
        fn:function () {
            console.log(this.a);
            console.log(this);
        }
    }
}
o.b.fn()
/*
var j = o.b.fn();
j();*/
