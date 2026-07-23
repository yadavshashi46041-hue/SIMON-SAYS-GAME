 let gameseq = [];
     let userseq = [];
     let highvalue =[];
     let btns = [ "yellow" , "red" , "green" ,"purple"];

     let started = false;
      let level = 0;
 
let h3 = document.querySelector("h3");
      document.addEventListener( "keypress" , function(){

        if ( started == false){
            console.log("game is started");
             started = true;
   
        
        levelUp();
        }
      });

      function levelUp(){
            userseq = [];
           level++;
           h3.innerText = `level ${level}`;
          
           let randidx = Math.floor(Math.random()*4);
           let randcolor = btns[randidx];

           let ranbtn = document.querySelector(`.${randcolor}`);  // randcolor = yellow red and we also make the class yellow red etc

           btnflash(ranbtn);
           gameseq.push(randcolor);
           console.log(gameseq);
      }

      function btnpress() {
            let btn = this;
            console.log(this);
          userflash(btn);
          usercolor  = btn.getAttribute("id");
          userseq.push(usercolor);
        //   console.log(usercolor);
        //   console.log(userseq);
        checkAns(userseq.length-1);
      }



      function btnflash(btn){

        btn.classList.add("flash");
        setTimeout( function() {
            btn.classList.remove("flash");
        }, 250 );
      }

      function userflash(btn){

        btn.classList.add("user");
           setTimeout( function() {
             btn.classList.remove("user");
        }, 250 );
      }
      
      let allbtns = document.querySelectorAll(".btn");

         for ( btn of allbtns){
            btn.addEventListener( "click" , btnpress);
         }
        
         function checkAns( idx){
           
            if ( userseq[idx] === gameseq[idx]){
                if ( userseq.length == gameseq.length){
                     setTimeout( levelUp, 1000);
                }
            }
            else {
                   highvalue.push(level);
                h3.innerHTML = `Game Over!  Your score was <br> <b> ${level} </b> </br> Press any key to start <br> <b> Highest Score = ${Highestscore()} `;
                gameover();
               reset();
               
            }
         }

         let body = document.querySelector("body");

         function gameover(){
              body.classList.add("gameovern");
              setTimeout( function() {
                body.classList.remove("gameovern");
              }, 250);


         }

         function reset() {
          started = false;
          gameseq =[];
          userseq =[];
          level =0;

         }
         function Highestscore(){
          let maxvalue = highvalue[0];
          for ( let i = 1; i<highvalue.length; i++ ){
            if (maxvalue <highvalue[i])
              maxvalue = highvalue[i]
            }
              return maxvalue
          
         }


















