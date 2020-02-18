// The fortune Teller with function
function tellFortune(jobTitle, geolocation, partner, numkid) {
    var future = 'You will be a ' + jobTitle + ' in ' + geolocation + ' and married to ' + partner + ' with ' + numkid + ' kid ';
  console.log(future);
  }
  
  tellFortune('diplomat', 'Bishkek', "Sagyn", 7);
  tellFortune('economist', 'Naryn', 'Zamir', 5);
  tellFortune('analyst', 'Albany', 'Gulzat', 6);

// Your JS code is here
function squareNumber (num){
    var squareNumber = num * num;
    console.log('The result of squaring the number ' + num + ' is ' + squareNumber);
    return squareNumber;
  }
    
  squareNumber(3); 
  
  function halfNumber(num){
    var half = num / 2;
    console.log('Half of ' + num + ' is ' + half);
    return half;
  }
   halfNumber(5);
  
// What is the greater number?
function greaterNum(num1, num2) {
    if (num1 === num2) {
      console.log('Those numbers are equal');
    } else if (num1 > num2) {
      return num1;
    } else if (num2 > num1) {
      return num2;
    } else {
      console.log('Those are not equal!');
      return undefined;
    }
  }
  
  console.log(greaterNum(2, 2));
  console.log(greaterNum(5, 9));
  console.log(greaterNum(2, 3));
  console.log(greaterNum(5, 'bunny'));  

  //
  function percentOf(num1, num2) {
    var percent = (num1/num2) * 100;
    console.log(num1 + ' is ' + percent + '% of ' + num2);
    return percent;
  }
  
  percentOf(2, 4);S