var num1, num2, opr;
function buttonClick(num){
    var oldValue = document.getElementById('display').value;
    if(oldValue=='+'){
        oldValue='';
    }
    document.getElementById('display').value = oldValue+num;
}

function operatorClick(operator) {
    num1 = document.getElementById('display').value;
    document.getElementById('display').value=operator;
    opr = operator;
}

function equalClick(){
    num2=document.getElementById('display').value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    if(opr=='+') {
        document.getElementById('display').value=num1+num2;
    }
}