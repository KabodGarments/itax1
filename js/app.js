let inputs = document.querySelectorAll("input");
let outputs = document.querySelectorAll("#output>div>span");

function cal_Tax() {
  let Input_Values = [];
  let Income_Ranges = [0, 121968, 236880, 351792, 466704, Number.MAX_VALUE];
  let Minimum_Tax = [0, 12196.8, 17236.8, 22982.4, 28728,];
  let Tax_Rates = [0.1, 0.15, 0.20, 0.25, 0.30];
  let Tax_Return;
  let Tax_Payable;

  for (let i = 0; i < inputs.length; i++) {
    let value = inputs[i].value;
    if (value === "") {
      Input_Values.push(Number(0));
    } else {
      Input_Values.push(Number(value));
    }
  }
  let Taxable_Income = Input_Values[0] + Input_Values[1] - Input_Values[3] - Input_Values[4] - Input_Values[5] - Input_Values[6] - Input_Values[7];
  for (let i = 0; i < 5; i++) {
    if (
      Taxable_Income > Income_Ranges[i] &&
      Taxable_Income <= Income_Ranges[i + 1]
    ) {
      let Gross_Tax =
        (Taxable_Income - Income_Ranges[i]) * Tax_Rates[i] + Minimum_Tax[i];
      Tax_Payable = (Gross_Tax - Input_Values[4]).toFixed(0);
      Tax_Return = (Tax_Payable - 0.12 * Input_Values[2]).toFixed(0);
    }
  }

  let foo = Number(Input_Values[0] + Input_Values[1]);
  let total = document.getElementById("total");
  total.getElementsByTagName("span")[0].innerHTML = "$" + foo;
  let taxable = document.getElementById("taxable");
  taxable.getElementsByTagName("span")[0].innerHTML = "$" + Taxable_Income;

  let payable = document.getElementById("payable");
  payable.getElementsByTagName("span")[0].innerHTML = "$" + Tax_Payable;

  let t_return = document.getElementById("return");

  t_return.getElementsByTagName("span")[0].innerHTML = "$" + Tax_Return;
}

function reset_All() {
  for (let i = 0; i < 9; i++) {
    inputs[i].value = " ";
  }
  for (let i = 0; i < 4; i++) {
    outputs[i].innerHTML = "";
  }
}
