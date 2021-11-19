let masu=8;
let aimode=1;
let ailev=3;

function cls(){
    document.body.innerHTML="";
}

//ゲーム初期化
let coins=new Array();
let getcoin=[0,0];
for(let i=0;i<masu;i++){//盤面生成
    coins[i]=Math.floor(Math.random()*4+1);
}
let initcoins=coins;//盤面コピー(二値化用)
let niti1=0,niti2=0,nitiflag=0,isplayer=-1,end=0;
var falsecoin=0;
for(;end<=2;){
    cls();
    end=domain();
    if (!end) doai();
}

function domain(){
    if(isplayer==1){
        isplayer=0;
    }else{
        isplayer++;
    }
    if(aimode==1 && isplayer==1){
        return 0;
    }
    document.write('現在の盤面<br>')
    for(let i=0;i<masu;i++){
        if (coins[i]==0){
            falsecoin++;
            continue;
        }
        if (coins[i]==1) document.write(' $1 ');
        if (coins[i]==2) document.write(' $5 ');
        if (coins[i]==3) document.write(' $10 ');
        if (coins[i]==4) document.write(' $100 ');
    }
    if (falsecoin==masu) return 2;
    document.write('<br>')
    if (aimode) document.write('プレーヤーの取ったコイン:$'+toString(getcoin[0])+'<br>');
    if (!aimode) document.write('1人目の取ったコイン:$'+toString(getcoin[0])+'<br>');
    if (aimode) document.write('AIの取ったコイン:$'+toString(getcoin[1])+'<br>');
    if (!aimode) document.write('2人目の取ったコイン:$'+toString(getcoin[1])+'<br>');
    
}

function doai(){
    
}

function getleft(){}

function getright(){}