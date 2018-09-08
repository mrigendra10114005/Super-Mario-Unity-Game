var PipeEntry:GameObject;
var StoodOn :int;
var MainCam:GameObject;
var SecondCam :GameObject;
var MainPlayer :GameObject;
var pipesound:AudioSource;

function OnTriggerEnter(col :Collider) {
StoodOn=1;
}
function OnTriggerExit(col: Collider) {
StoodOn =0;
}
function Update() {
if(Input.GetButtonDown("GoDown")) {
if(StoodOn==1) {
transform.position=Vector3(0,-1000,0);
WaitingForPipe();
}
}
}
function WaitingForPipe() {
pipesound.Play();
PipeEntry.GetComponent("Animator").enabled=true;
yield WaitForSeconds(2);
PipeEntry.GetComponent("Animator").enabled=false;
SecondCam.SetActive(true);
MainCam.SetActive(false);
MainPlayer.transform.position=Vector3(16,-12.39,0.45);
}