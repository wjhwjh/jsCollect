/**
 * Created by Administrator on 2017/8/18.
 */
function ArgTest(){
     var i, s = "The ArgTest function expected ";
     var numargs = arguments.length;     // 获取被传递参数的数值。
     var expargs = ArgTest.length;       // 获取期望参数的数值。
    console.log(numargs);
    console.log(arguments[0]);
    console.log(expargs);
    console.log(ArgTest);
    console.log(ArgTest[0]);
    console.log(ArgTest[1]);
      if (expargs < 2)
         s += expargs + " argument. ";
      else
         s += expargs + " arguments. ";
        if (numargs < 2)
              s += numargs + " was passed.";
        else
          s += numargs + " were passed.";
          s += "\n\n"
       for (i =0 ; i < numargs; i++){      // 获取参数内容。
          // s += "  Arg " + i + " = " + arguments[i] + "\
           console.log(arguments[i]);
          }

       return  s ;                          // 返回参数列表。
    }

ArgTest(3);
