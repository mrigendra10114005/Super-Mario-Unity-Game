import UnityEngine.UI;
var TotalTime:int =300;
var TimeDisplay:GameObject;
var CalculatingTime :int;
var DeathSound :AudioSource;
var LevelMusic:GameObject;
var CamFollow:GameObject;
var ThePlayer:GameObject;
var KeepZero: int;
function Update() {
if(KeepZero==0) {
TimeDisplay.GetComponent.<Text>().text=""+TotalTime;
}
if(CalculatingTime==0) {
DeductTime();
}
if(TotalTime==0) {
TimeUp();
}
}
function DeductTime() {
CalculatingTime=1;
TotalTime-=1;
yield WaitForSeconds(0.4);
CalculatingTime=0;
}
function TimeUp() {
TotalTime-=1;
KeepZero=1;
TimeDisplay.GetComponent.<Text>().text="0";
globallive.LiveAmount-=1;
LevelMusic.SetActive(false);
DeathSound.Play();
ThePlayer.transform.localScale-=new Vector3(1,1,1);
yield WaitForSeconds(3);
Application.LoadLevel(4);
}
