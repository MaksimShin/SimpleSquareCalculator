function square(){
    let a=document.getElementById('numA');
    let b=document.getElementById('numB');
    let c=document.getElementById('numC');
    let label=document.getElementById('answer');
    let d= b*b-4*a*c;
    let answer;
    if(d<0){
        label="Корней нет";
    }
    else if (d==0){
        answer = "2 одинаковых корня x<sub>1</sub>=x<sub>2</sub><br>";
        answer += -b/2*a;
    }
    else{
        answer = "2 корня";
        answer += "x<sub>1</sub>=";
        answer += (-b-Math.sqrt(d))/2*a;
        answer += "<br>x<sub>2</sub>=";
        answer += (-b+Math.sqrt(d))/2*a;
    }
    label.innerHTML = answer;
}