
/**
 * Created by Administrator on 2017/8/7.
 */
function ajQuery() {
    this.name = 'jQuery';
    this.sayName = function() {
        return this.name
    }
}
var a = new ajQuery()
console.log(a);


function bjQuery() {
    this.name = 'jQuery b'
}
bjQuery.prototype= {
    sayName: function() {
        return this.name
    }
}
var b = new bjQuery();
console.log(b);
console.log(b.sayName());



// jQuery的写法
var $jQuery = function(selector, context) {
    return new $jQuery.fn.init(selector, context);
}

$jQuery.fn = $jQuery.prototype = {
    init: function() {
        this.name = 'aaron'
        return this;
    },
    constructor: $jQuery
}

var $a = $jQuery();

 console.log($a);

