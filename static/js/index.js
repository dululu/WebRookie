let input = document.querySelector(".input");//返回第一个匹配的标签
let run = document.querySelector("button");
let output = document.querySelector("pre");




function main() {
    run.addEventListener("click", function (){

        let score = parseInt(input.value);
        let res;
        if (score>= 85){
            res ="A";
        }
        else if(score>=70){
            res = "B";
        }
        else if(score>=60){
            res = "C";
        }
        else{
            res = "D"
        }

        output.innerHTML = res;


    });

}


export {
    main
}