

function Simongame(){
    const red = new Audio('./sounds/green.mp3');
    const green = new Audio('./sounds/green.mp3');
    const yellow = new Audio('./sounds/yellow.mp3');
    const blue = new Audio('./sounds/blue.mp3');
    const wrong = new Audio('./sounds/wrong.mp3');
    let start=false;
    let title = document.querySelector('#level-title');
    let score=0;
    let colors=['red','green','yellow','blue'];
    let createdPattern = [];
    let playerspattern = [];
    document.addEventListener('keydown',(event)=>{
         if(!start){
            this.create();
            title.innerHTML=`Game starts....`;
            document.querySelector('body').classList.remove('gameover');
            start=0;
            start=true;
        }
    });
    title.addEventListener('dblclick',(event)=>{
        if(!start){
           this.create();
           title.innerHTML=`Game starts....`;
           document.querySelector('body').classList.remove('gameover');
           start=0;
           start=true;
       }
   });
    this.check=()=>{
        for(i=0;i<playerspattern.length;i++){
            if(playerspattern[i]!=createdPattern[i]){
                start=false;
            }
        }

        if(start){
            
            if(playerspattern.length==createdPattern.length){
                
                this.create();
                playerspattern=[];
            }
        }
        else{
            this.wrong();
        }
    }
    this.create=()=>{
        let newColor = colors[Math.floor(Math.random()*4)];
        createdPattern.push(newColor);
        setTimeout(() => {
            document.querySelector(`.${newColor}`).classList.add('active');
            eval(`${newColor}.play()`);
        }, 1000);
        setTimeout(() => {
            document.querySelector(`.${newColor}`).classList.remove('active');
        }, 1500);
    }   
    this.clicked=(color)=>{
        if(start){
           playerspattern.push(color);
           eval(`${color}.play()`); 
           this.check();
        }
    } 
    this.wrong=()=>{
        score=createdPattern.length-1;
        createdPattern=[];
        playerspattern=[];
        wrong.play();
        document.querySelector('body').classList.add('gameover');
        title.innerHTML=`Your score is ${score} , press a key or double click to start again`;
    }
}

const game = new Simongame();














