const scriptName = "야구봇";
const FS=FileStream;
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {


var date = new Date();
var year = 2022;
var month = date.getMonth()+1;
month = month >= 10 ? month : "0"+month;
var day = date.getDate();
day = day >= 10 ? day : "0"+day;
var hour = date.getHours();

​var fin = year+month+day;
​var fin2 = year+month+day-1;

if(msg.indexOf("/")==0) { 

var data6 = org.jsoup.Jsoup.connect("https://search.daum.net/search?nil_suggest=btn&w=tot&DA=SBC&q=프로야구+중계").get();

var a6="[민준 봇 야구예측](베타)\n"+"[오늘의 경기 목록]\n";

var b6="";

var c6="\n\n ※ 예상 승리팀을 골라 '/예측 알파벳' 형태로 입력해주세요. (ex. /예측 bcfgj)\n경기가 종료된 후 '/결과'를 입력하여 결과를 확인하셔야 점수가 쌓입니다.(결과 확인 가능시간 : 경기종료후 21시~익일 오전 3시)";

var f1="a."+data6.select("div.wrap_sports.wrap_major div.team_name").get(30).text();
var f2="b."+data6.select("div.wrap_sports.wrap_major div.team_name").get(31).text();
var f3="c."+data6.select("div.wrap_sports.wrap_major div.team_name").get(32).text();
var f4="d."+data6.select("div.wrap_sports.wrap_major div.team_name").get(33).text();
var f5="e."+data6.select("div.wrap_sports.wrap_major div.team_name").get(34).text();
var f6="f."+data6.select("div.wrap_sports.wrap_major div.team_name").get(35).text();
var f7="g."+data6.select("div.wrap_sports.wrap_major div.team_name").get(36).text();
var f8="h."+data6.select("div.wrap_sports.wrap_major div.team_name").get(37).text();
var f9="i."+data6.select("div.wrap_sports.wrap_major div.team_name").get(38).text();
var f10="j."+data6.select("div.wrap_sports.wrap_major div.team_name").get(39).text();

var k1=data6.select("div.wrap_sports.wrap_major div.team_name").get(30).text();
var k2=data6.select("div.wrap_sports.wrap_major div.team_name").get(31).text();
var k3=data6.select("div.wrap_sports.wrap_major div.team_name").get(32).text();
var k4=data6.select("div.wrap_sports.wrap_major div.team_name").get(33).text();
var k5=data6.select("div.wrap_sports.wrap_major div.team_name").get(34).text();
var k6=data6.select("div.wrap_sports.wrap_major div.team_name").get(35).text();
var k7=data6.select("div.wrap_sports.wrap_major div.team_name").get(36).text();
var k8=data6.select("div.wrap_sports.wrap_major div.team_name").get(37).text();
var k9=data6.select("div.wrap_sports.wrap_major div.team_name").get(38).text();
var k10=data6.select("div.wrap_sports.wrap_major div.team_name").get(39).text();


var tell="";

b6="\n"+f1+" VS "+f2+"\n"+f3+" VS "+f4+"\n"+f5+" VS "+f6+"\n"+f7+" VS "+f8+"\n"+f9+" VS "+f10;


}
  
​if(msg.indexOf("/야구예측")==0) { 
  
  var d4=Number(data6.select("span.cont.txt_progress").length);
  
  if((d4>0)||(hour>=19)||(hour<=8)){
    replier.reply("경기가 시작 및 종료되었거나, 오전(00시~09시)엔 야구예측 서비스를 이용하실 수 없습니다. '/결과'를 입력하여 점수를 확인하세요!");   
  } else {
      var d5=Number(data6.select("div.team_item.win_team").length);
  if(d5==20){
    replier.reply("❗오늘은 경기가 없네요!"); 
  }else {    
replier.reply(a6+b6+c6);                  
}      
}
}

if(msg.indexOf("/예측")==0) {

var d2=Number(data6.select("span.cont.txt_progress").length);
if((d2<1) && (hour<=19) && (hour>=8) ){
  var d6=Number(data6.select("div.team_item.win_team").length);
   if(d6==20){
    replier.reply("❗오늘은 경기가 없네요!"); //아마 경기가 없는 날엔 이전 경기를 띄워줄거라고 예상하고 코딩한것임.
  }else {    
  
  if(msg.slice(4,5)=="a"){
tell="/"+k1+"/"; } else{
  tell="/"+k2+"/";
}

if(msg.slice(5,6)=="c"){
tell+=k3+"/"; } else{
  tell+=k4+"/";
}

if(msg.slice(6,7)=="e"){
tell+=k5+"/"; } else{
  tell+=k6+"/";
}

if(msg.slice(7,8)=="g"){
tell+=k7+"/"; } else{
  tell+=k8+"/";
}

if(msg.substr(8,9)=="i"){
tell+=k9; } else{
  tell+=k10;
}
  
    var base = tell; // /메시지를 base로 설정 (내용)

    var newpath = "sdcard/baseball/"+sender+".txt"; //저장할 위치를 sdcard/baseball/보낸이 으로 설정

    FS.write(newpath, JSON.stringify(base)); //newpath라는 위치에 msgsplit2(내용)을 저장

    replier.reply("⚾️예측정보가 저장되었습니다.\n"+sender+"의 예측 : "+tell+"\n(09시~경기 시작 전까지 수정 가능)"); //파일명과 파일 내용을 말해줌
  
  var path3 = "sdcard/baseball/"+sender+"확인.txt";
  
  FS.write(path3, JSON.stringify(0));
  }
  
} else {
  replier.reply("❗경기가 진행중이거나 종료되어 예측서비스를 이용하실 수 없습니다. 경기가 종료되었다면 '/결과' 를 입력하여 점수를 확인하세요! 경기 다음날 오전 5시부터 예측서비스를 재이용할 수 있습니다.");
}  
  
}

if(msg.indexOf("/나의예측")==0) {
  
    var path5 = "sdcard/baseball/"+sender+".txt"; //찾을 파일의 위치를 설정

    var read5 = FS.read(path5);
    
    var path6 = "sdcard/baseball/"+sender+"점수.txt";
     
     var read6 = FS.read(path6);
  
  replier.reply("⚾️"+sender+"의 예측정보\n"+read5+"\n(09시~경기 시작 전까지 수정 가능)\n총 점수: "+read6+"점"); //파일명과 파일 내용을 말해줌
  
}

if(msg.indexOf("/결과")==0) {
  var e2="";
  var e3=0; 
  var g2=""; 
  var g4=""; 
  var g3=0; 
  var g5=0; 
  var j=0; //이전과 오늘 진행됐던 횟수. 20에서 취소를 뺀 수치.
  var e4=Number(data6.select("span.cont.txt_progress").length); //지금 진행중인 경기
  for(i=0; i<20; i++){
  e2=data6.select("dd.cont").get(2*i).text();
  if(e2=="종료"||e2=="경기전"){ 
    e3+=1; //e3는 총 경기진행된 수치
  }
  }
  
    for(k=0; k<15; k++){
  g2=data6.select("dd.cont").get(2*k).text();
  if(g2=="종료"||g2=="경기전"){ 
    g3+=1; //g3는 이전 진행된 15에서 취소를 뺀 수치
  }
  }
  
  var d3=Number(data6.select("div.team_item.win_team").length);
  
  
  
  
if((d3==e3) && (hour>=20)||(d3==e3) &&(hour<=4)){
  
  var path1 = "sdcard/baseball/"+sender+"확인.txt";
  
  var read1 = FS.read(path1);
  
  if(read1==0){
    
    for(n=15; n<20; n++){
  g4=data6.select("dd.cont").get(2*n).text();
  if(g4=="종료"||g4=="경기전"){ 
    g5+=1; //g5는 오늘 경기한 횟수
  }
  }
  
  FS.write(path1, JSON.stringify(1));
  
    var path2 = "sdcard/baseball/"+sender+".txt"; //찾을 파일의 위치를 설정

    var read2 = FS.read(path2);
    
    var i1 ="";
    i1=(Number(data6.select("div.league_schedule dd.cont").length)-40)/2;
    
    var w1 =" ";
    var w2 =" ";
    var w3 =" ";
    var w4 =" ";
    var w5 =" ";
 
 if(g5==1){
   w1 = data6.select("div.team_item.win_team div.team_name").get(g3).text();
      }
 
 if(g5==2){
   w1 = data6.select("div.team_item.win_team div.team_name").get(g3).text();
   w2 = data6.select("div.team_item.win_team div.team_name").get(g3+1).text();
      }
 
 if(g5==3){
   w1 = data6.select("div.team_item.win_team div.team_name").get(g3).text();
   w2 = data6.select("div.team_item.win_team div.team_name").get(g3+1).text();
   w3 = data6.select("div.team_item.win_team div.team_name").get(g3+2).text();
      } 
  
 if(g5==4){
   w1 = data6.select("div.team_item.win_team div.team_name").get(g3).text();
   w2 = data6.select("div.team_item.win_team div.team_name").get(g3+1).text();
   w3 = data6.select("div.team_item.win_team div.team_name").get(g3+2).text();
   w4 = data6.select("div.team_item.win_team div.team_name").get(g3+3).text();
      } 
    
if(g5==5){
   w1 = data6.select("div.team_item.win_team div.team_name").get(g3).text();
   w2 = data6.select("div.team_item.win_team div.team_name").get(g3+1).text();
   w3 = data6.select("div.team_item.win_team div.team_name").get(g3+2).text();
   w4 = data6.select("div.team_item.win_team div.team_name").get(g3+3).text();
   w5 = data6.select("div.team_item.win_team div.team_name").get(g3+4).text();
    }
    var point=0;
    
    if(read2.includes(w1)){
      point++;
    }
    
    if(read2.includes(w2)){
      point++;
    }
    
    if(read2.includes(w3)){
      point++;
    }
    
    if(read2.includes(w4)){
      point++;
    }
    
    if(read2.includes(w5)){
      point++;
    }
    
  
    
     var path4 = "sdcard/baseball/"+sender+"점수.txt";
     
     var read3 = FS.read(path4);
     
     var all = Number(read3)+Number(point);
     
     FS.write(path4, JSON.stringify(all));
     
     var read4 = FS.read(path4);
      
      
      FS.write(path4, JSON.stringify(all));
    
    replier.reply("오늘 "+point+"개 구단의 승리를 맞추셨네요!\n예측점수 "+point+"점이 증가하였습니다.\n현재 총점: "+read4+"점");
    
    }else{
      if(read1==1){
      replier.reply("오늘은 이미 결과를 확인하셨네요! '/랭킹'을 입력해 야구 예측의 달인을 가려보세요! ");
    } else {
      replier.reply("❗오늘 예측하신 내역이 없어요.");
    }
    
    
   } 
    
    } else {
      replier.reply("❗아직 (모든) 경기가 종료되지 않았습니다. 경기가 종료되고, 21시 이후가 되어야 결과확인이 가능합니다. (결과 확인 가능시간 : 경기종료후 21시~익일 오전 3시)");
    }
  
}

​if(msg.indexOf("/야구 도움말")==0) {
  replier.reply("[⚾️야구 봇 도움말]"+"\u200b".repeat(500)+"\n\n<명령어 목록>\n/중계 팀이름 (ex. /중계 롯데)\n[현재 점수 상황을 알려줍니다.]\n\n/어제 팀이름 (ex. /어제 롯데)\n[저번 경기 결과를 알려줍니다.]\n\n/일정 팀이름 (ex. /일정 롯데)\n[근 30일 내의 일정을 알려줍니다.]\n\n/야구순위\n[전체 야구순위를 알려줍니다]\n\n/야구예측\n[야구 승리팀을 예측해봅시다]\n\n/예측 알파벳 (ex. /예측 acfhj)\n['/야구예측' 명령어 입력 후 알파벳 확인]\n\n/나의예측\n[나의 예측 현황 및 점수확인]\n\n/결과\n[야구 예측 결과 및 점수확인]\n\n/랭킹\n[전체 플레이어 점수확인]"); 
}

​if(msg.indexOf("/어제")==0) {
  
  var link2 ="";

if(msg.substr(4)=="꼴데"||msg.substr(4)=="꼴데 자이언츠"||msg.substr(6)=="꼴데자이언츠") {
  ​ link2 = "롯데 자이언츠";
  } else{
    ​link2 = msg.substr(4);
  }

var data3 = org.jsoup.Jsoup.connect("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query="+link2+"+중계").get();

var data4 = org.jsoup.Jsoup.connect("https://search.daum.net/search?nil_suggest=btn&w=tot&DA=SBC&q="+link2+"+중계").get();


var a3="[민준 봇]\n"+"[어제의 " + msg.substr(4) + " 경기 결과" +"]"+"\n\n";


var b1="";

var c1=Number(data3.select("tr.schedule_"+fin-2+" span.score_rgt").length);

var d1=Number(data3.select("tr.schedule_"+fin2+" em.team_lft").length);
 
          
         if (d1<1)  {
              replier.reply("어제는 야구 경기가 없었습니다. '/일정 팀이름(ex./일정 롯데)' 을 입력하여 지난 경기를 확인하실 수 있습니다."); 
             } else {
               b1=data3.select("tr.schedule_"+fin2+" em.team_lft").get(0).text()+" "+ data3.select("tr.schedule_"+fin2+" span.score_lft").get(0).text()+ " : " + data3.select("tr.schedule_"+fin2+" span.score_rgt").get(0).text() + " " + data3.select("tr.schedule_"+fin2+" em.team_rgt").get(0).text() + "\n경기 종료";           
  
                replier.reply(a3+b1);
              }
              
}


​if(msg.indexOf("/일정")==0) {
  
  var link3 ="";

if(msg.substr(4)=="꼴데"||msg.substr(4)=="꼴데 자이언츠"||msg.substr(6)=="꼴데자이언츠") {
  ​ link3 = "롯데 자이언츠";
  } else{
    ​link3 = msg.substr(4);
  }

var data5 = org.jsoup.Jsoup.connect("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query="+link3+"+중계").get();


var a4="[민준 봇]\n"+"[ "+ msg.substr(4) + "경기 일정" +" ]"+"\u200b".repeat(500)+"\n\n";


var b2="";

var c2=Number(data5.select("tr.schedule_"+fin).length);

var rain="[！] 기록이 없는 경기는 우천취소이거나 향후 경기 일정입니다.\n\n";

for(i=0; i<30; i++){

b2+="경기일: "+data5.select("td.date").get(i).text()+"\n"+ data5.select("td.score").get(i).text() + "\n장소: " + data5.select("a.els").get(i).text() +"\n\n";

}
 
replier.reply(a4+rain+b2); 
}

if(msg.indexOf("/야구순위")==0) {

​

var data8 = org.jsoup.Jsoup.connect("https://sports.news.naver.com/kbaseball/record/index?category=kbo&year=").get();

​

var a8="[민준 봇]\n"+"[2022년도 " + "기준 "+ "야구 순위" +"]"+"\u200b".repeat(500)+"\n\n";

var b8="";

for(i=0; i<10; i++){

b8+=data8.select("tbody th strong").get(i).text()+"위"+"\n팀명 : "+ data8.select("td.tm").get(i).text() + " / 경기수 " + data8.select("tbody tr td span").get(11*i+2).text() + " / [승" + data8.select("tbody tr td span").get(11*i+3).text() + "/무" + data8.select("tbody tr td span").get(11*i+5).text() + "/패" + data8.select("tbody tr td span").get(11*i+4).text()+ "] / 승률 : " + data8.select("tbody td strong").get(i).text()+" / 승차 : "+data8.select("tbody tr td span").get(11*i+6).text()+"\n\n";

}

var c8="";

for(f=0; f<10; f++){

c8+=data8.select("tbody td strong").get(f).text();

}

replier.reply(a8+b8);

}



if(msg.indexOf("/중계")==0) {

var link ="";

if(msg.substr(4)=="꼴데"||msg.substr(4)=="꼴데 자이언츠"||msg.substr(4)=="꼴데자이언츠") {
  ​ link = "롯데 자이언츠";
  } else{
    ​link = msg.substr(4);
  }

var data = org.jsoup.Jsoup.connect("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query="+link+"+중계").get();

var data2 = org.jsoup.Jsoup.connect("https://search.daum.net/search?nil_suggest=btn&w=tot&DA=SBC&q="+link+"+중계").get();


var a="[민준 봇]\n"+"[현재 " + msg.substr(4) + " 경기 스코어" +"]"+"\n\n";

var a2="[민준 봇]\n"+"[오늘의 " + msg.substr(4) + " 경기 결과" +"]"+"\n\n";


var b="";

var c=Number(data.select("tr.schedule_"+fin+" span.score_rgt").length);

var d=Number(data2.select("span.cont.txt_progress").length);

if (c<1) {
                replier.reply("오늘의 경기는 시작되지 않았습니다.\n어제의 경기 결과가 궁금하시면\n[ /어제 팀명 ]을 입력해주세요.");
            } else {
            
            if (d<1) {
              b=data.select("tr.schedule_"+fin+" em.team_lft").get(0).text()+" "+ data.select("tr.schedule_"+fin+" span.score_lft").get(0).text()+ " : " + data.select("tr.schedule_"+fin+" span.score_rgt").get(0).text() + " " + data.select("tr.schedule_"+fin+" em.team_rgt").get(0).text() + "\n경기 종료";           
              replier.reply(a2+b);
            } else {
b=data.select("tr.schedule_"+fin+" em.team_lft").get(0).text()+" "+ data.select("tr.schedule_"+fin+" span.score_lft").get(0).text()+ " : " + data.select("tr.schedule_"+fin+" span.score_rgt").get(0).text() + " " + data.select("tr.schedule_"+fin+" em.team_rgt").get(0).text() + "\n현재 : " + data2.select("span.cont.txt_progress").get(0).text();           
              
replier.reply(a+b);
}


}

}

}
