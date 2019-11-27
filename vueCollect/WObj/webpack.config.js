const path = require('path');


module.exports={
    entry:path.join(__dirname,'./main.js'),
    output:{
        path:path.join(__dirname,'./'),
        filename:'build.js'
    },
    mode:'development'
}
