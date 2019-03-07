//Business Logic//
//select all inputs and store them into  variables//
//collect all input from html UI//
let inputs = document.querySelectorAll("input");

//return output via UI//
let outputs = document.querySelectorAll("#output>div>span");

//create a functio//
//create an array of 5 tax ranges//
//anything over 466,704 k we use number.MAX_VALUE//
//create an array of 5 minimum taxes for each tax range/bracket//
//create an array of 5 tax rates//
//create an empty arrayan call it "input values"//
function cal_Tax() {
  let Input_Values = [];
  let Income_Ranges = [0, 121968, 236880, 351792, 466704, Number.MAX_VALUE];
  let Minimum_Tax = [12196.8, 28425.6, 70358.4, 116767,140011.2];
  let Tax_Rates = [0.1, 0.15, 0.20, 0.25, 0.30,];
  let Tax_Return;
  let Tax_Payable;
//create for loop//
//collect all the input values above and store to empty array "input values"/

  for (let i = 0; i < inputs.length; i++) {
    let value = inputs[i].value; //create variable and loop goes through each input and stores the value in variable "value"//
    if (value === "") { //if value has empty string push an integer 0, else the value entered. use push to get integers and not strings//
      Input_Values.push(Number(0));
    } else {
      Input_Values.push(Number(value));
    }
  }
  let Taxable_Income = Input_Values[0] + Input_Values[1] - Input_Values[3] - Input_Values[4] - Input_Values[5] - Input_Values[6] - Input_Values[7];
  for (let i = 0; i < 5; i++) {//create another for loop and run loop 5 via condition "5" times as we have five classes/columns for our data which equal to 5 different conditions//
    if (
      Taxable_Income > Income_Ranges[i] && //if TI>IR, get only 1 value "i"..first check if it is greater than o and then 121968, 236880 etc and if TI >= IR..eg, if it is more than 121968 and less than 236880//
      Taxable_Income <= Income_Ranges[i + 1]
    ) {
      let Gross_Tax =
        (Taxable_Income - Income_Ranges[i]) * Tax_Rates[i] + Minimum_Tax[i];//get taxable income and minus IR accordingly as per aray up top, minus TR accordingly and minimum tax for that bracket/category//
      Tax_Payable = (Gross_Tax - Input_Values[8]).toFixed(0);
      Tax_Return = (Tax_Payable - 0.12 * Input_Values[2] ).toFixed(0);
    }
  }

//user logic for Output delivery//

  let foo = Number(Input_Values[0] + Input_Values[1]);

  let total = document.getElementById("total");
  //calculate total income//
  total.getElementsByTagName("span")[0].innerHTML = "ksh" + foo;
  let taxable = document.getElementById("taxable");
  taxable.getElementsByTagName("span")[0].innerHTML = "ksh" + Taxable_Income;

  let payable = document.getElementById("payable");
  payable.getElementsByTagName("span")[0].innerHTML = "ksh" + Tax_Payable;

  let t_return = document.getElementById("return");

  t_return.getElementsByTagName("span")[0].innerHTML = "ksh" + Tax_Return;
}

function reset_All() {
  for (let i = 0; i < 9; i++) {
    inputs[i].value = " ";
  }
  for (let i = 0; i < 4; i++) {
    outputs[i].innerHTML = "";
  }
}

//More show and hide Butto//
