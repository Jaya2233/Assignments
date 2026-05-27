// Check Loan eligibility

let creditscore: number = 750;
let income: number = 50000;
let employeed: boolean = true;
let dtiratio: number = 40;

if (creditscore > 750) {
    console.log("Loan Approved");
}
else if (creditscore < 650) {
    console.log("Loan Rejected");
}
else if (income >=50000)
     {
    if (employeed)
        {
  if (dtiratio < 40) 
    {
    console.log("loan approved");
  } 
  else ("loan rejected");
    }
    else ("loan rejected");
    }

