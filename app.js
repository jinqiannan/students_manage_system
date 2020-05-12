const express = require('express');
const ejs = require('ejs');
const controller = require('./controller/control');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
    extended:false
}))

app.set('view engine','ejs');

//展示默认首页
app.get('/',controller.control);

//展示添加界面
app.get('/add',controller.add)

// //添加学生信息到数据库
app.post('/add',controller.addStudents)

//删除学生信息页面
app.get('/del',controller.remove)

//删除学生信息
app.post('/del',controller.removeStudent)

app.get('/search',controller.search)

app.post('/search',controller.searchStudent)

app.get('/update',controller.update)

app.post('/update',controller.updateStudent)

//设置静态模板
app.use(express.static('public'));
app.listen(8989);