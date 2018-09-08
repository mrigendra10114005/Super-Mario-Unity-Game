var PipeSound :AudioSource;
var MainCam :GameObject;
var SecondCam:GameObject;
var PipeEntry:GameObject;
var MainPlayer:GameObject;
function OnTriggerEnter(col :Collider) {
PipeSound.Play();
MainCam.SetActive(true);
SecondCam.SetActive(false);
MainPlayer.transform.position=Vector3(26.05,2.385,0.4299);
PipeEntry.GetComponent("Animator").enabled=true;
yield WaitForSeconds(1.5);
PipeEntry.GetComponent("Animator").enabled=false;
}