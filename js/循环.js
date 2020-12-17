/**
 * Created by Administrator on 2017/9/21.
 */
var entries = [
    {"id":1, "title":"第一篇", "body":"正文", "published":"6/2/2013"},
    {"id":2, "title":"第二篇", "body":"正文", "published":"6/3/2013"},
    {"id":3, "title":"第三篇", "body":"正文", "published":"6/4/2013"},
    {"id":4, "title":"第四篇", "body":"正文", "published":"6/5/2013"},
    {"id":5, "title":"第五篇", "body":"正文", "published":"6/10/2013"},
    {"id":6, "title":"第六篇", "body":"正文", "published":"6/12/2013"}
];

/*
* id是数据与页面链接的唯一纽带，通过客户端请求的id与数据库中的id对比，找到完全符合的id,
* 然后返回对应的某条数据
* */

var id = 1;

for(var i=0; i< entries.length;i++){
   // var enteriesid = entries[i].id;
   // console.log(entries[i]);
    if (entries[i].id == id) {
        console.log(entries[i]);
    };
}