const express = require('express');
const app = express();

function commonmw(req, res, next) {
    console.log('commonmw');
    next(new Error('error ouccered'));
}

function errormw(err, req, res, next) {
    console.log(err.message);
    //에러를 처리하거나
    next();  //다음 미들 웨어에게 에러를 처리하고 한다
}

app.use(commonmw);
app.use(errormw);

app.listen(3000, function(){
    console.log('Server is running');
})
