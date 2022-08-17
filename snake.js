let box=[],r=[],y=[],g=[],b=[];
let turn=[r,g,b,y];
let t=0;
let ex=0;
// let hf=0;
for(let i=0;i<52;i++)
{
    box[i]=document.querySelector("#c"+i.toString());
    box[i].style.width='46px';
    box[i].style.height='46px';
}
for(let i=61,o=1;i<67,o<7;i++,o++)
{
    box[i]=document.querySelector("#rr"+o.toString());
    if(i!=66 && o!=6)
    {
        box[i].style.width='46px';
        box[i].style.height='46px';
    }
}
for(i=71,o=1;i<77,o<7;i++,o++)
{
    box[i]=document.querySelector("#gr"+o.toString());
    if(i!=76 && o!=6)
    {
        box[i].style.width='46px';
        box[i].style.height='46px';
    }
}
for(i=81,o=1;i<87,o<7;i++,o++)
{
    box[i]=document.querySelector("#br"+o.toString());
    if(i!=86 && o!=6)
    {
        box[i].style.width='46px';
        box[i].style.height='46px';
    }
}
for(i=91,o=1;i<97,o<7;i++,o++)
{
    box[i]=document.querySelector("#yr"+o.toString());
    if(i!=96 && o!=6)
    {
        box[i].style.width='46px';
        box[i].style.height='46px';
    }
}
for(i=1;i<5;i++)
{
    r[i]=document.querySelector(".r"+i.toString());
    r[i].state=-1;
    r[i].flag=0;
    r[i].name="red";
    r[i].h=document.querySelector(".rk"+i.toString())
    r[i].start=13;
    y[i]=document.querySelector(".y"+i.toString());
    y[i].state=-1;
    y[i].flag=0;
    y[i].start=0;
    y[i].name="yellow";
    y[i].h=document.querySelector(".yk"+i.toString());
    b[i]=document.querySelector(".b"+i.toString());
    b[i].state=-1;
    b[i].name="blue";
    b[i].h=document.querySelector(".bk"+i.toString());
    b[i].start=39;
    b[i].flag=0;
    g[i]=document.querySelector(".g"+i.toString());
    g[i].state=-1;
    g[i].name="green";
    g[i].h=document.querySelector(".gk"+i.toString());
    g[i].start=26;
    g[i].flag=0;
}
let a=document.querySelector(".dicy");
let db=document.querySelector(".dice");
let win=document.querySelector(".win");
var audio=new Audio("audio/roll.wav");
var coll=new Audio("audio/col.wav");
var mov=new Audio("audio/mov.mp3");
var start=new Audio("audio/st.mp3");
var hme=new Audio("audio/hme.wav");
var www=new Audio("audio/www.mp3");
// box[76].appendChild(g[4]);
// g[4].state=76;
// g[4].flag=3;
// box[76].appendChild(g[3]);
// g[3].state=76;
// g[3].flag=3;
// box[76].appendChild(g[2]);
// g[2].state=76;
// g[2].flag=3;
// box[24].appendChild(g[1]);
// g[1].state=24;
// g[1].flag=1;
// g[4].disabled=true;
// g[3].disabled=true;
// g[2].disabled=true;
a.onclick=function(e){
    e.preventDefault();
    movedice();
};
function movedice(){
    
    start.pause();
    let x = Math.floor((Math.random() * 6) + 1);
    let purl="url('imgs/"+x.toString() + ".png')";
    a.style.backgroundImage=purl;    
    audio.play();
    // if(hf==0)
    // t=1;
    // x=6;
    setpi(x);
}
function setpi(y)
{
    db.style.backgroundColor=turn[t][4].name;
    if(turn[t][1].state==-1 && turn[t][2].state==-1 && turn[t][3].state==-1 && turn[t][4].state==-1 && y!=6)
    {
                t++;
                checkt(t);
    }
    else if(turn[t][1].flag==3 && turn[t][2].flag==3 && turn[t][3].flag==3 && turn[t][4].flag==3)
    {
                t++;
                checkt(t);
    }
    else{
        checkturn(y); 
        
    }      
      
} 
function checkturn(y)
{
    ex=0;
    for(let j=1;j<5;j++)
    {
        turn[t][j].onclick = (e)=>
        {
            e.preventDefault();
            if(turn[t][j].state==-1 && y==6)
            {
                mov.play();
                box[turn[t][j].start].appendChild(turn[t][j]);
                turn[t][j].state=turn[t][j].start;
                for(let u=1;u<5;u++)
                {
                        turn[t][u].onclick=false;
                }
            }
            else if(turn[t][j].state!=-1 && y==6)
            {

                turn[t][j].state+=y;
                checkst(t,j);
                checkcoll(t,j);
                checkhr(t,j);
                winner(t,j,y);
                mov.play();
                box[turn[t][j].state].appendChild(turn[t][j]);
                for(let v=1;v<5;v++)
                {
                        turn[t][v].onclick=false;
                }
                winnner();
            }
            else if(turn[t][j].state!=-1 && y!=6)
            {
                turn[t][j].state+=y;
                let bl=turn[t][j].state;
                checkst(t,j);
                checkcoll(t,j);
                checkhr(t,j);
                winner(t,j,y,bl);
                mov.play();
                box[turn[t][j].state].appendChild(turn[t][j]);
                if(ex!=1)
                    t++;
                checkt(t);
                winnner();
            }
        }
        
    } 
    
}
function checkt(t1)
{
    if(t1==4)
        t=0;
}    
function checkst(t2,j2)
{
    if(turn[t2][j2].state>51 &&turn[t2][j2].flag==0 && t2!=3)
    {
        turn[t2][j2].state=turn[t2][j2].state-51-1;
        turn[t2][j2].flag=1;
    }
    else if(t2==3 && turn[t2][j2].flag==0)
    {
        if(turn[t2][j2].state>50)
        {
            turn[t2][j2].state=(turn[t2][j2].state-50)+90;
            turn[t2][j2].flag=1;
        }
    } 
} 
function checkcoll(t1,j1)
{
    if(turn[t1][j1].state!=0 && turn[t1][j1].state!=13 && turn[t1][j1].state!=26 && turn[t1][j1].state!=39 && turn[t1][j1].state!=47 && turn[t1][j1].state!=8 && turn[t1][j1].state!=21 && turn[t1][j1].state!=34)
    {
        for(let k=0;k<4;k++)
        {
            for(let l=1;l<5;l++)
            {
                if(turn[t1][j1].state==turn[k][l].state && t1!=k)
                {
                    (turn[k][l].h).appendChild(turn[k][l]);
                    turn[k][l].state=-1;
                    ex=1;
                    coll.play();
                }
            }
        }
    }
}
function checkhr(t5,j5)
{
    if(t5==0)
    {
        if(turn[t5][j5].state>11 && turn[t5][j5].flag==1)
        {
            turn[t5][j5].state=(turn[t5][j5].state-11)+60;
            turn[t5][j5].flag=2;
        }
    }
    else if(t5==1)
    {
        if(turn[t5][j5].state>24 && turn[t5][j5].flag==1)
        {
            turn[t5][j5].state=(turn[t5][j5].state-24)+70;
            turn[t5][j5].flag=2;
        }
    }
    else if(t5==2)
    {
        if(turn[t5][j5].state>37 && turn[t5][j5].flag==1)
        {
            turn[t5][j5].state=(turn[t5][j5].state-37)+80;
            turn[t5][j5].flag=2;
        }
    }
}
function winner(t5,j5,y8)
{
    if(t5==0)
    {
        if(turn[t5][j5].state>66)
        {
            turn[t5][j5].state=turn[t5][j5].state-y8;
        }
        else if(turn[t5][j5].state==66)
        {
            turn[t5][j5].flag=3;
            turn[t5][j5].disabled=true;
            hme.play();
            window.alert(turn[t5][j5].name+j5+" is in home");
        }
    }
    else if(t5==1)
    {
        if(turn[t5][j5].state>76)
        {
            turn[t5][j5].flag=3;
            turn[t5][j5].state=turn[t5][j5].state-y8;
        }
        else if(turn[t5][j5].state==76)
        {
            turn[t5][j5].flag=3;
            turn[t5][j5].disabled=true;
            hme.play();
            window.alert(turn[t5][j5].name+j5+" is in home");
        }
    }
    else if(t5==2)
    {
        if(turn[t5][j5].state>86)
        {
            turn[t5][j5].state=turn[t5][j5].state-y8;
        }
        if(turn[t5][j5].state==86)
        {
            turn[t5][j5].flag=3;
            turn[t5][j5].disabled=true;
            hme.play();
            window.alert(turn[t5][j5].name+j5+" is in home");
            
        }
    }
    else if(t5==3)
    {
        if(turn[t5][j5].state>96)
        {
            turn[t5][j5].state = turn[t5][j5].state-y8;
        }
        if(turn[t5][j5].state==96)
        {
            turn[t5][j5].flag=3;
            turn[t5][j5].disabled=true;
            hme.play();
            window.alert(turn[t5][j5].name+j5+" is in home");
        }
    }
}
function winnner()
{
    if(turn[0][1].state==66 && turn[0][2].state==66 && turn[0][3].state==66 && turn[0][4].state==66)
    {
        www.play();
        window.alert(turn[0][1].name+" is the winner!!!!");
        t++;
        if(t==4)
            t=0;
    }
    else if(turn[1][1].disabled==true && turn[1][2].disabled==true && turn[1][3].disabled==true && turn[1][4].disabled==true)
    {
        www.play();
        window.alert(turn[1][1].name+" is the winner!!!!");
        t++;
        if(t==4)
            t=0;
    }
    else if(turn[2][1].disabled==true && turn[2][2].disabled==true && turn[2][3].disabled==true && turn[2][4].disabled==true)
    {
        www.play();
        window.alert(turn[2][1].name+" is the winner!!!!");
        t++;
        if(t==4)
            t=0;
    }
    else if(turn[3][1].disabled==true && turn[3][2].disabled==true && turn[3][3].disabled==true && turn[3][4].disabled==true)
    {
        www.play();
        window.alert(turn[3][1].name+" is the winner!!!!");
        t++;
        if(t==4)
            t=0;
    }
}