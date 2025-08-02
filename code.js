 addEventListener("load", (event) => {


const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
canvas.width = document.documentElement.clientWidth * 1;
canvas.height = document.documentElement.clientHeight * 0.75;
document.getElementById("can").style.backgroundColor = "#A27B5C";



window.addEventListener('resize', function () {
      ctx.clearRect(0,0,canvas.width,canvas.height);
           canvas.width = document.documentElement.clientWidth;
       canvas.height = document.documentElement.clientHeight;
        money.updateSlots();
});


///Timer 
let timeLeft = document.getElementById("slider1").value;
const timerElement = document.getElementById("timer");
const countdown = setInterval(() => {
    if (timeLeft <= 0) {
      
    document.getElementById("correctAns").textContent = "$" + money.change;
    screenColor.isWrong = true;
    streak = 0;
   if(streak > hiScore){
    hiScore++;
   }
   document.getElementById("hiScore").textContent = hiScore;
   document.getElementById("streakBox").textContent = streak;
  document.getElementById("change").value = null;
  salesPrice.updateSalesP();
  money.newBillAmt();
  money.renderBills();
   timeLeft = document.getElementById("slider1").value;
    } else {

      timeLeft--;
    }
          timerElement.textContent = timeLeft;
  }, 1000); // runs every 1000ms = 1 second

const menu = document.getElementById("showingMenu");
document.getElementById("menu").addEventListener("click", function(){
  let current = window.getComputedStyle(menu).visibility;
  console.log(current);

if (current === 'hidden') {
  menu.style.visibility = 'visible';
} else {
  menu.style.visibility = 'hidden';
}
console.log("hello");
});
const slider1 = document.getElementById('slider1');

  slider1.addEventListener('input', () => {
timeLeft = document.getElementById("slider1").value;
document.getElementById("timerSliValue").innerText = document.getElementById("slider1").value;
  });
let streak = 0;
let hiScore = 0;
let hiTime = 1000;
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      if (document.getElementById("change").value == money.change) {
    screenColor.isRight = true;
    streak++;
    if (timeLeft < hiTime) {
      hiTime = timeLeft;
      this.document.getElementById("hiTime").innerText = hiTime;
    }
   }
   else {
                      document.getElementById("correctAns").textContent = "$" + money.change;
    screenColor.isWrong = true;
    streak = 0;
   }
   if(streak > hiScore){
    hiScore++;
   }
   timer = 20;
       timeLeft = document.getElementById("slider1").value;
   document.getElementById("hiScore").textContent = hiScore;
   document.getElementById("streakBox").textContent = streak;
    document.getElementById("change").value = null;
    salesPrice.updateSalesP();
    money.newBillAmt();
    money.renderBills();
    
    }
  });

const salesBox = document.getElementById("sales");
var salesPrice = {
  salesPrice: 0,
  updateSalesP: function(log){
        salesBox.innerHTML = "$f";

    let wholeNum = ranNum(0,100);
    let decNum = ranNum(0,99);
    decNum = decNum/100;
    if(log){
    console.log(wholeNum);
    console.log(decNum);
    }
    wholeNum += decNum;
    this.salesPrice = wholeNum;
    salesBox.innerHTML = "$" + this.salesPrice;
  }
}

//const width = element.offsetWidth;
//console.log(width); */
var money = {
slots: 0,
slotsW: 0,
slotsH: 0,
billW: 100,
billH:255,
billAmount: 0,
startingW: document.getElementById("salesbox").offsetWidth,
startingH: this.billH,
billList: [],
change: 0,
updateSlots: function(){
      ctx.clearRect(0,0,canvas.width,canvas.height);
  let j = 0;
for (let i = this.startingW; i < canvas.width; i++) {
  i +=  this.billW;
  this.slots++;
  this.slotsW++;

}
for (let i = this.startingH; i < canvas.height; i++) {

  i +=  this.billH;
  this.slots++;
  j++;

}
  return j;
},

newBillAmt: function(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
  this.billAmount = ranNum(Math.ceil(salesPrice.salesPrice),100);
},

renderBills: function(){
  let billAmt = this.billAmount;
  this.billList = [];
  let amtToCheck = 0;
  let j = 0;
  console.log(billAmt);
  for (let i = 0; billAmt >= 0; i++) {
    amtToCheck = 20;
    if (billAmt % amtToCheck == 0) {
      billAmt -= amtToCheck;
      if (j > 0) {
        this.billList[this.billList.length] = "twentyDollar.png";
      }
      j++;
    } else {
      amtToCheck = 10;
      if (billAmt % amtToCheck == 0) {
        billAmt -= amtToCheck;
        this.billList[this.billList.length] = "tenDollar.png";
      } else {
        amtToCheck = 5;
        if (billAmt % amtToCheck == 0) {
          billAmt -= amtToCheck;
          this.billList[this.billList.length] = "fiveDollar.png";
        } else {
          amtToCheck = 1;
          if (billAmt % amtToCheck == 0) {
            billAmt -= amtToCheck;
            this.billList[this.billList.length] = "oneDollar.png";
          }
        }
      }
    }
  }
  console.log(this.billList);
  this.change = parseFloat((this.billAmount - salesPrice.salesPrice).toFixed(2));

  console.log(change);

},
realRender: function(){
  let num1 = this.startingW;
  let num2 = 0;
  console.log(this.slots);
  for (let i = 0; i < this.billList.length; i++) {
    if (num1 >= canvas.width * 0.90) {
      num1 = 0;
      if (document.getElementById("salesbox").offsetHeight > this.billH) {
        num2+=document.getElementById("salesbox").offsetHeight;
      }
      else {
        num2+= this.billH;
      }

    }

    
    imageRender(this.billList[i],num1,num2);
        num1+=this.billW;
  }
}
}
money.updateSlots();
salesPrice.updateSalesP();
money.newBillAmt();
money.renderBills();
/*  this.imageHolder.src = this.array[i]["imgSrc"];

              ctxLayer1.drawImage(
                this.imageHolder,
                this.array[i]["lastPosX"],
                this.array[i]["lastPoxY"],
                this.array[i]["width"],
                this.array[i]["height"]
              );
 */




    ///Returns a random num between min and max, inclusive.
  function ranNum(min, max) {
    seed = Math.random();
    seed = Math.floor(seed * (max - (min - 1))) + min;
    return seed;
  }


  
   var deltaTime = {
    lastUpdate: Date.now(),
    currentUpdate: this.lastUpdate,
    time: 0.1,

    update: function () {
      this.currentUpdate = Date.now();
      if (this.lastUpdate === 0) {
        this.lastUpdate = this.currentUpdate;
      }
      this.time = (this.currentUpdate - this.lastUpdate) / 1000;
      this.lastUpdsate = this.currentUpdate;
    },
  };
  

  function imageRender(source, x, y) {
    theImage = new Image();
    theImage.src = source;
    ctx.drawImage(theImage, x, y);
  }
     


  var screenColor = {
    wrongAns: "red",
    rightAns: "green",
    defaultColor: "#A27B5C",
    timerLen: 125,
    timer: 0,
    isRight: false,
    isWrong: false,
    screenUpdate: function(){
      if (this.isRight) {
        document.getElementById("can").style.backgroundColor = this.rightAns;
        this.timer++;
        if (this.timer >= this.timerLen) {
          document.getElementById("can").style.backgroundColor = this.defaultColor;
          this.timer = 0;
          this.isRight = false;
        }
      }
      if (this.isWrong) {
                document.getElementById("can").style.backgroundColor = this.wrongAns;

                document.getElementById('answer').style.visibility = 'visible';
        this.timer++;
        if (this.timer >= this.timerLen) {
          document.getElementById("can").style.backgroundColor = this.defaultColor;
          document.getElementById('answer').style.visibility = 'hidden';
          this.timer = 0;
          this.isWrong = false;
        }
      }
    },

  }
  
      money.newBillAmt();
    //money.renderBills();
   // console.log(money.billList);
  
    main = () => {
    window.requestAnimationFrame(main);
    //// Everything here always runs.

    //salesPrice.updateSalesP(true);
      ctx.clearRect(0,0,canvas.width,canvas.height);
     screenColor.screenUpdate();
      money.realRender();



    //// End of loop
  };
  ////Add functions to call before game loop starts, here \\\\




  ///Starts the game loop
  main();







});