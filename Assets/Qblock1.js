var QBlock :GameObject;
var  DeadBlock :GameObject;
var Mushroom:GameObject;
function OnTriggerEnter(col:Collider) {
QBlock.SetActive(false);
DeadBlock.SetActive(true);
yield WaitForSeconds(0.2);
Mushroom.SetActive(true);
}
