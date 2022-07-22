let bill = document.getElementById("bill");
let inpNumOfPeople = document.getElementById("inpNumOfPeople");
let h2inp = document.querySelectorAll(".h2inp");
let inpWrapper = document.querySelectorAll(".inpWrapper");
let percentage = "0.1";

// function to reset all the values
const clearinp = () => {
  bill.value = "";
  inpNumOfPeople.value = "";
  cust.value = "";
  h2inp[0].innerHTML = "$0.00";
  h2inp[1].innerHTML = "$0.00";
  percentage = "0.1";
  bill.style.fontSize = "2em";
  inpNumOfPeople.style.fontSize = "2em";
  bill.setAttribute("placeholder", "0");
  inpNumOfPeople.setAttribute("placeholder", "0");
  cust.removeAttribute("style");
};

// function to select tip percentage
const selectTip = (percent) => {
  let id = document.getElementById(percent);
  percentage = parseInt(id.value) / 100;
  if (!isNaN(percentage)) {
    calc();
    id.style.border = "none";
  } else {
    id.style.border = "2px solid red";
  }
};

// function to calculate tip
const calc = () => {
  if (bill.value != 0 && !isNaN(parseInt(bill.value))) {
    inpWrapper[0].removeAttribute("style");
    invalid2.setAttribute("class", "hidden");
    if (inpNumOfPeople.value != 0 && !isNaN(parseInt(inpNumOfPeople.value))) {
      inpWrapper[1].removeAttribute("style");
      invalid1.setAttribute("class", "hidden");
      inpNumOfPeople.value = parseInt(inpNumOfPeople.value);
      let tipAmount = (bill.value * percentage) / inpNumOfPeople.value;
      let total =
        (bill.value * percentage) / inpNumOfPeople.value +
        bill.value / inpNumOfPeople.value;
      tipAmount = tipAmount.toFixed(2);
      total = total.toFixed(2);
      h2inp[0].innerHTML = tipAmount;
      h2inp[1].innerHTML = total;
    } else {
      inpNumOfPeople.style.fontSize = "1.5em";
      // inpNumOfPeople.setAttribute("placeholder", "Please enter a number");
      invalid1.removeAttribute("class");
      invalid1.style.color = "red";
      inpWrapper[1].style.border = "2px solid red";
    }
  } else {
    bill.style.fontSize = "1.5em";
    // bill.setAttribute("placeholder", "Please enter a number");
    invalid2.removeAttribute("class");
    invalid2.style.color = "red";
    inpWrapper[0].style.border = "2px solid red";
  }
};
