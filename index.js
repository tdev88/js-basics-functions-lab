// Takes in a pickup location for a passenger, and returns the number of blocks from its headquarters on 42nd Street.
let num2 = 42

function distanceFromHqInBlocks(num1) {
  if (num2 < num1)
   blocks = num1 - num2;
  else
   blocks = num2 - num1;
  return blocks
}

//Each block in Manhattan is 264 feet long.
function distanceFromHqInFeet(num1) {
  return distanceFromHqInBlocks(num1)*264
}

//Calculates the number of feet a passenger travels given a starting block and an ending block - it only calculates distance North and South (uptown/downtown). It uses the knowledge that a block is 264 feet long.
function distanceTravelledInFeet(num1) {
  return (distanceFromHqInBlocks(num1)*distanceFromHqInFeet(num1));
}


/*Given the same starting and ending block as the previous test (hint hint), return the fare for the customer. 
1.The first four hundred feet are free. 
2.For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!). 
3.Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. 4.Finally, Scuber does not allow any rides over 2500 feet - the function returns 'cannot travel that far' if a ride over 2500 feet is requested.*/
function calculatesFarePrice(num1) {
  if (distanceTravelledInFeet(num1) > 400 && distanceTravelledInFeet(num1) <=2000) 
  return 0.02*(num1-400);
  else if (distanceTravelledInFeet(num1) > 2000 && distanceTravelledInFeet(num1) <= 2500) 
  return 25.00;
  else if (distanceTravelledInFeet(num1) > 2500) 
  return 'cannot travel that far';
}
