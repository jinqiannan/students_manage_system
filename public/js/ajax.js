//封装ajax
function ajax(json){
    //若json中未传入请求方法，则返回get
    json.method = json.method.toUpperCase() || 'GET';
    //若json中未传入请求内容，返回空对象
    json.data = json.data || {};
    //创建ajax对象
    var xhr = new XMLHttpRequest();

    //将数据返回为 name=ss&use=11 形式
    function concatData(data){
        var arr = [];
        for(var key in data){
            arr.push(key+'='+data[key]);
        }
        return arr.join('&');
    }
    //判断请求方式
    if(json.method === 'GET'){
        xhr.open(json.method,json.url+'?'+concatData(json.data),true);
        xhr.send(null);
    }else{
        xhr.open(json.method,json.url,true);
        //设置请求头
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
        xhr.send(concatData(json.data));
    }
    //检查是否接收到服务器反馈
    xhr.onreadystatechange = function(){
        //检查当前所拿到地状态码是否为4
        if(xhr.readyState === 4){
            //判断当前返回的http状态码
            if(xhr.status>=200&xhr.status<300||xhr.status===304){
                //输出当前地xhr.responseText
                // console.log(xhr.responseText);
                //执行成功地函数
                json.success(xhr.responseText);
            }else{
                //返回当前http状态码
                console.log(xhr.status);
                //执行失败地函数
                //json.error(xhr.status);
            }
        }
    }
}