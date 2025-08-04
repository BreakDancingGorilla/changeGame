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

let time = 0;

///Timer 
let timeLeft = document.getElementById("slider1").value;
const timerElement = document.getElementById("timer");
const countdown = setInterval(() => {
  time++;
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

  const slider2 = document.getElementById('slider2');

  slider2.addEventListener('input', () => {
let maxSale = document.getElementById("slider2").value;
document.getElementById("sliderValue").innerText = document.getElementById("slider2").value;
  });
let streak = 0;
let hiScore = 0;
let hiTime = 1000;
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {

      if (document.getElementById("change").value == money.change) {
    screenColor.isRight = true;
    streak++;
          if (time < hiTime) {
      hiTime = time;
      console.log(hiTime);
      console.log(time);
      document.getElementById("hiTime").innerText = time;
      time = 0;
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

    let wholeNum = ranNum(0,document.getElementById("slider2").value);
    let decNum = ranNum(0,99);
    decNum = decNum/100;
    if(log){
    console.log(wholeNum);
    console.log(decNum);
    }
    wholeNum += decNum;
    wholeNum = parseFloat((wholeNum).toFixed(2));


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
coinList: [],
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
/* (trimmedWallet[maxIndex] == 100) {
   this.billList[this.billList.length] = "hundredDollar.png.png";
   num-=100;
   this.billAmount+=100;
}
if (trimmedWallet[maxIndex] == 50) {
   this.billList[this.billList.length] = "fiftyDollar.png";
   i+=50;
    this.billAmount+=100;
}
if (trimmedWallet[maxIndex] == 20) {
   this.billList[this.billList.length] = "twentyDollar.png";
   i+=20;
   this.billAmount+=20;
}
if (trimmedWallet[maxIndex] == 10) {
   this.billList[this.billList.length] = "tenDollar.png";
   i+=10;
   this.billAmount+=10;
}
if (trimmedWallet[maxIndex] == 5) {
   this.billList[this.billList.length] = "fiveDollar.png";
   i+=5;
   this.billAmount+=5;
}
if (trimmedWallet[maxIndex] == 1) {
   this.billList[this.billList.length] = "oneDollar.png";
   i+=1; */
renderBills: function(){
  let wallet = [];
  let selection = 0;
  let maxWallet = this.billAmount;
  this.billList = [];
  let changeT = 0;
  let pocketChange = [];
  this.billAmount = 0;
  this.coinList = [];
  if (ranNum(1, 3) == 1) {
    console.log("Hello," + Math.floor(parseFloat(salesPrice.salesPrice)));
    let num = Math.floor(parseFloat(salesPrice.salesPrice));
    changeT = 3;

    for (let i = num; i > 0;) {
    console.log(num);
    console.log(this.billList);
    console.log(i%100);
    console.log(this.billAmount);
    if (i % 100 == 0) {
            this.billList[this.billList.length] = "hundredDollar.png.png";
      i -= 100;
      this.billAmount += 100;  
    } else {
      if (i % 50 == 0) {
        this.billList[this.billList.length] = "fiftyDollar.png";
        i -= 50;
        this.billAmount += 50;
      } else {
        if (i % 20 == 0) {
          this.billList[this.billList.length] = "twentyDollar.png";
          i -= 20;
          this.billAmount += 20;
        } else {
          if (i % 10 == 0) {
            this.billList[this.billList.length] = "tenDollar.png";
            i -= 10;
            this.billAmount += 10;
          } else {
            if (i % 5 == 0) {
              this.billList[this.billList.length] = "fiveDollar.png";
              i -= 5;
              this.billAmount += 5;
            } else {
              if (i % 1 == 0) {
                this.billList[this.billList.length] = "oneDollar.png";
                i -= 1;
                this.billAmount += 1;
              } else {
              }
            }
          }
        }
      }
    }
  }


  for (let i = 0; i < changeT; ) {
    console.log(i);
    i = parseFloat((i).toFixed(2));
      selection = ranNum(0, 100);
      if (selection > 0 && selection < 15) {
        pocketChange[pocketChange.length] = 0.25;
        i += 0.25;
      }
      if (selection > 20 && selection < 50) {
        pocketChange[pocketChange.length] = 0.10;
        i += 0.10;
      }
      if (selection > 50 && selection < 75) {
        pocketChange[pocketChange.length] = 0.05;
        i += 0.5;
      }
      if (selection > 75 && selection < 100) {
        pocketChange[pocketChange.length] = 0.01;
        i += 0.01;
      }

    }
    for (let i = num; i <= salesPrice.salesPrice.toFixed(2); ) {
      if (pocketChange.length == 0) {
        for (let i = 0; i < changeT; ) {
    console.log(i);
    i = parseFloat((i).toFixed(2));
      selection = ranNum(0, 100);
      if (selection > 0 && selection < 15) {
        pocketChange[pocketChange.length] = 0.25;
        i += 0.25;
      }
      if (selection > 20 && selection < 50) {
        pocketChange[pocketChange.length] = 0.10;
        i += 0.10;
      }
      if (selection > 50 && selection < 75) {
        pocketChange[pocketChange.length] = 0.05;
        i += 0.5;
      }
      if (selection > 75 && selection < 100) {
        pocketChange[pocketChange.length] = 0.01;
        i += 0.01;
      }

    }
      }
      let maxIndex = pocketChange.indexOf(Math.max(...pocketChange));

      if (pocketChange[maxIndex] == 0.25) {
        this.coinList[this.coinList.length] = "quarter.png";
        i += 0.25;
        this.billAmount += 0.25;
      }
      if (pocketChange[maxIndex] == 0.10) {
        this.coinList[this.coinList.length] = "dime.png";
        i += 0.10;
        this.billAmount += 0.10;
      }
      if (pocketChange[maxIndex] == 0.05) {
        this.coinList[this.coinList.length] = "nickel.png";
        i += 0.05;
        this.billAmount += 0.05;
      }
      if (pocketChange[maxIndex] == 0.01) {
        this.coinList[this.coinList.length] = "penny.png";
        i += 0.01;
        this.billAmount += 0.01;
      }
      pocketChange.splice(maxIndex, 1);
    }
   console.log(this.coinList);
  } else {
    for (let i = 0; i <= maxWallet; ) {
      selection = ranNum(0, 100);
      if (selection > 0 && selection < 5) {
        wallet[wallet.length] = 100;
        i += 100;
      }
      if (selection > 5 && selection < 15) {
        wallet[wallet.length] = 50;
        i += 50;
      }
      if (selection > 15 && selection < 40) {
        wallet[wallet.length] = 20;
        i += 20;
      }
      if (selection > 40 && selection < 65) {
        wallet[wallet.length] = 10;
        i += 10;
      }
      if (selection > 65 && selection < 80) {
        wallet[wallet.length] = 5;
        i += 5;
      }
      if (selection > 80 && selection < 100) {
        wallet[wallet.length] = 1;
        i += 1;
      }
    }

    console.log(wallet);
    console.log(salesPrice.salesPrice);

    let trimmedWallet = []; //just take the greatest of the bills until we hit salesPrice;s
    for (let i = 0; i <= salesPrice.salesPrice; ) {
      selection = ranNum(0, wallet.length);
      console.log(i);
      if (wallet[selection] == 100) {
        trimmedWallet[trimmedWallet.length] = 100;
        i += 100;
      }
      if (wallet[selection] == 50) {
        trimmedWallet[trimmedWallet.length] = 50;
        i += 50;
      }
      if (wallet[selection] == 20) {
        trimmedWallet[trimmedWallet.length] = 20;
        i += 20;
      }
      if (wallet[selection] == 10) {
        trimmedWallet[trimmedWallet.length] = 10;
        i += 10;
      }
      if (wallet[selection] == 5) {
        trimmedWallet[trimmedWallet.length] = 5;
        i += 5;
      }
      if (wallet[selection] == 1) {
        trimmedWallet[trimmedWallet.length] = 1;
        i += 1;
      }
      console.log(i);
    }

    for (let i = 0; i <= salesPrice.salesPrice; ) {
      let maxIndex = trimmedWallet.indexOf(Math.max(...trimmedWallet));

      if (trimmedWallet[maxIndex] == 100) {
        this.billList[this.billList.length] = "hundredDollar.png.png";
        i += 100;
        this.billAmount += 100;
      }
      if (trimmedWallet[maxIndex] == 50) {
        this.billList[this.billList.length] = "fiftyDollar.png";
        i += 50;
        this.billAmount += 100;
      }
      if (trimmedWallet[maxIndex] == 20) {
        this.billList[this.billList.length] = "twentyDollar.png";
        i += 20;
        this.billAmount += 20;
      }
      if (trimmedWallet[maxIndex] == 10) {
        this.billList[this.billList.length] = "tenDollar.png";
        i += 10;
        this.billAmount += 10;
      }
      if (trimmedWallet[maxIndex] == 5) {
        this.billList[this.billList.length] = "fiveDollar.png";
        i += 5;
        this.billAmount += 5;
      }
      if (trimmedWallet[maxIndex] == 1) {
        this.billList[this.billList.length] = "oneDollar.png";
        i += 1;
        this.billAmount += 1;
      }
      trimmedWallet.splice(maxIndex, 1);
    }
  
 this.billAmount = 0;
 for (let i = 0; i < this.billList.length; i++) {
  if (this.billList[i] == "hundredDollar.png.png") {
    this.billAmount+=100;
  }
  if (this.billList[i] == "fiftyDollar.png") {
    this.billAmount+=50;
  }
  if (this.billList[i] == "twentyDollar.png") {
    this.billAmount+=20;
  }
  if (this.billList[i] == "tenDollar.png") {
    this.billAmount+=10;
  }
  if (this.billList[i] == "fiveDollar.png") {
    this.billAmount+=5;
  }
  if (this.billList[i] == "oneDollar.png") {
    this.billAmount+=1;
  }
}
 console.log(this.billList);

console.log(this.billAmount + "hi");
  }  
this.change = parseFloat((this.billAmount - salesPrice.salesPrice).toFixed(2));

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
   num1 = this.startingW;
  num2 = 0;
  for (let i = 0; i < this.coinList.length; i++) {
    if (num1 >= canvas.width * 0.90) {
      num1 = 0;
      if (document.getElementById("salesbox").offsetHeight > this.billH) {
        num2+=document.getElementById("salesbox").offsetHeight;
      }
      else {
        num2+= this.billH;
      }

    }

    
    imageRender(this.coinList[i],num1,num2);
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
      console.log(money.change);

    //// End of loop
  };
  ////Add functions to call before game loop starts, here \\\\




  ///Starts the game loop
  main();







});