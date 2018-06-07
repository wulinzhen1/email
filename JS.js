var postfixList = ['@163.com', '@gmail.com', '@126.com', '@qq.com', '@263.net'];
var inputDom = document.getElementById('email-input');
var ulDom = document.getElementById('email-sug-wrapper');
var list = '';
var lists = '';
inputDom.onkeyup = function() {
    add();               //获取用户输入，生成提示框中的提示内容，将提示内容添加到email-sug-wrapper中
    control();           //控制email-sug-wrapper的显示/隐藏状态
}
/*获取用户输入*/
function getInput() {
    var trim = inputDom.value;
    return trim;                    //拿到input输入框的输入内容trim后返回
}
/*生成提示框中的提示内容*/
function content() {
    var trim = getInput();           //获取用户输入
    for (var i=0;i<postfixList.length;i++){               //遍历postfixList {
        list += '<li>' + trim + postfixList[i] + '</li>';        //把用户输入和每一个postfix进行结合成为每一个Li
    }                                                       //}
    return list;                    // 返回生成的提示内容
}
/*将提示内容添加到email-sug-wrapper中*/
function add() {
    lists = content();           //获取生成提示框中的提示内容
    ulDom.innerHTML = lists;    //将内容添加到email-sug-wrapper中
}
/*控制email-sug-wrapper的显示/隐藏状态*/
function control() {
    /*if 用户输入为空 {
        隐藏提示框
    } else {
        显示提示框
    }*/
    if (getInput() == null){
        hidden();
    }else {
        show();
    }
}
/*隐藏提示框*/
function hidden() {
    ulDom.style.display = 'none';//做具体隐藏提示框的操作
}
/*显示提示框*/
function show() {
    ulDom.style.display = 'block';//做具体显示提示框的操作
}