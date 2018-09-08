var ActualMushroom :GameObject;
var ThisMushroom:GameObject;
function Update() {
transform.parent=null;
transform.Translate(Vector3.up*2*Time.deltaTime,Space.World);
CloseAnim();
}
function CloseAnim() {
yield WaitForSeconds(0.5);
ThisMushroom.SetActive(false);
ActualMushroom.SetActive(true);
}