const getMessage = require('../modules/getAllMessage');


//渲染首页
exports.control = function(req,res){
    getMessage.getAll((result)=>{
        res.render('index',{
            result
        })
    })
    
}

//展示添加界面
exports.add = function(req,res){
    res.render('add')
}

//添加学生信息
exports.addStudents = function(req,res){
    getMessage.addStudent(req.body);
    res.render('add')
}

//渲染删除学生信息页面
exports.remove= function(req,res){
    res.render('del')
}

//删除学生信息
exports.removeStudent = function(req,res){
    getMessage.removeStudent(req.body.name);
    res.render('del')
};

//展示搜索界面
exports.search = function (req,res){
    res.render('search');
}

exports.searchStudent = function(req,res){
    getMessage.searchStudent(req.body.name,function(data){
        res.send(data);
    })
}

exports.update = function (req,res){
    res.render('update')
}

exports.updateStudent = function(req,res){
    getMessage.updateStudent(req.body.name,req.body);
    res.render('update')
}