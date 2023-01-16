//your code here
let input = document.getElementById("input")
let expression="";
function solve(e){
  if(e == '='){
    let result = eval(expression); // eval is inbuilt function which calculate/evaluate whatever the expression it will give the answer
    // console.log(result); we check the output in console by console log
    input.value = result;
  }

  else if(e == "C"){
    expression = "";
    input.value ="";
  }
  else{
    expression += e;
    // console.log(expression);
    input.value = expression;
  }
}
  else if(e == "C"){
    expression = "";
    input.value ="";
  }
  else{
    expression += e;
    // console.log(expression);
    input.value = expression;
  }
}
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})