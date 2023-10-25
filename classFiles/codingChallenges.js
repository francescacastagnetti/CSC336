
function calcBMI(){
  BMI1 = document.getElementById("M1").value / document.getElementById("H1").value ** 2;
  BMI2 = document.getElementById("M2").value / document.getElementById("H2").value ** 2;
  if (BMI1 > BMI2) {
	  BMIs.innerText = (`Your BMI (${BMI1}) is higher than the other person's (${BMI2})!`);
  } else if (BMI1 < BMI2) {
	  BMIs.innerText = (`The other person's BMI (${BMI1}) is higher than yours (${BMI2})!`);
  } else {
    BMIs.innerText = (`Both BMIs are the same!`);
  }
}  
  



function compareTeams(){

  scorePandas = (parseInt(document.getElementById("P1").value) + parseInt(document.getElementById("P2").value) + parseInt(document.getElementById("P3").value))/3;;
  scoreKoalas = (parseInt(document.getElementById("K1").value) + parseInt(document.getElementById("K2").value) + parseInt(document.getElementById("K3").value))/3;;
  
  if (scorePandas > scoreKoalas && scorePandas >= 100) {
	  scores.innerText = ('Pandas win the trophy 🏆');
  } else if (scoreKoalas > scorePandas && scoreKoalas >= 100) {
    scores.innerText = ('Koalas win the trophy 🏆');
  } else if (scorePandas === scoreKoalas && scorePandas >= 100 && scoreKoalas >= 100) {
    scores.innerText = ('Both win the trophy!🏆🏆');
  } else {
    scores.innerText = ('No one wins the trophy 😭');
  }
  
}

function calcBill(){
  bill = parseInt(document.getElementById("bill").value);
  tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
  cost.innerText = (`The bill was $${bill}, the tip was $${tip}, and the total value $${bill + tip}.`);
}