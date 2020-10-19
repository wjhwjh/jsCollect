/*
 * 图片无序预加载
 * 1.检索页面中要显示的所有的图片
 * 2.创建一个imgage对象存放将要加载的图片
 * 3.当前加载完成的img个数与图片总数，计算页面加载的百分比
 * 4.加载完成的图片，可能是内容图，也可能是轮播图
 * 5.这种点击切换上一页和下一页，可以改写成轮播图*/
var imgs = [
    'http://pic.58pic.com/58pic/13/87/72/73t58PICjpT_1024.jpg',
    'http://img1.3lian.com/2015/a1/113/d/10.jpg',
    'http://img05.tooopen.com/images/20150412/tooopen_sy_118141423291.jpg',
    'http://scimg.jb51.net/allimg/150415/14-15041511223U18.jpg',
    'http://pic.58pic.com/58pic/13/71/22/35T58PICrEk_1024.jpg',
    'http://img1.3lian.com/2015/a1/109/d/88.jpg',
    'http://img1.3lian.com/2015/a1/113/d/10.jpg'
];

/*图片预先加载进度的计算方法*/
var index = 0;    //一个索引
var len = imgs.length;  //图片总数
var count = 0;  //存放加载进度
$progress = $('.progress');

//console.log(imgs[0].src);
$.each(imgs, function (i, src) {
    var imgObj = new Image(); // 创建一个图片对象
    $(imgObj).on('load error', function () {
        $progress.html(Math.round(( count + 1) / len * 100) + '%');
        //( count + 1)/len *100 + '%'

        if (count >= len - 1) { //若全部加载完则加载隐藏
            $('.loading').hide();
            document.title = '1/' + len;
        }
        count++;  //循环一次当前count加1
    });
    imgObj.src = src; //循环一次加载好一张图片
})


/*点击切换*/
$('.btn').on('click', function () {
    if ('prev' === $(this).data('control')) { //上一张
        /*  index--;
         if (index < 0){
         index = 0;
         }*/
        /*另一种写法max()方法两个数相比较返回最大值，Math的min()方法亦是
         --index是index先减后比较；
         index--是先比较后减，所以使用--index
         */
        index = Math.max(0, --index);
        console.log(index);
    } else { //下一张
        /*index++;
         if (index > len-1){
         index = len-1;
         }
         $('#img').attr('src',imgs[index])*/
        index = Math.min(len - 1, ++index);
        console.log(index);
    }

    document.title = (index + 1) + '/' + len;
    $('#img').attr('src', imgs[index])
});

