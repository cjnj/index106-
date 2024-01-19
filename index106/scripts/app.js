function sayHello(name, lastName){
    console.log("Hello "+name+" "+lastName);
    
}

// create a function that sums two numbers and execute it in the init function
function sum(num1, num2){
    const res=num1+num2;
    return res;//only one value
}


function printNumbers(){
    //print numbers from 1 to 20
    //ececpt 7 and 13
    for(let i=1; i<21; i++){
        if(i != 7 && i != 13){
            console.log(i)
        }
    }
    //1)print every nuber on the list p
    //2)porint the sum of all numbers
    //3)print how many numbers are greater than 500



    let sum = 0;
    let count = 0;

    let numbers = [12,4,123,4567,234,56,12,87,124,865,233,788,43,91,544,782,653,845];
    
    
    for(let i=11; i<4567; i++){
        if(i != 7 && i != 13){
            console.log(i)
        }

        for (let i=0;i<numbers.length; i++){
            let num = numbers[i];
            console.log(num);
            //sum numbers
            sum += num;
            //only greater numbers
            if (num > 500)
            count += 1;
        }
    }
    console.log("the sum of t he numbers is: " + sum);
    console.log("there are "+count+ " number bigger the 500");

}


function init(){

    console.log("Hello World");
    const x = "Adrian";
    sayHello(x,"Aguinaga");
    sayHello("John","Doe");
    const result = sum(21,12);
    console.log(result);
    printNumbers();


}


window.onload = init;
//window.onload = init(); this is a not

//PRINCIPAL!!!
//DRY=DONT REPEAT YOURSELF!!!
//KISS= KEEP IT SIMPLE!!!
