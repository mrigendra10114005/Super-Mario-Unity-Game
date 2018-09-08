
var Xpos :float=transform.position.x;
var Ypos :float=transform.position.y;
var Zpos :float=transform.position.z;

function OnTriggerEnter(col : Collider) {
transform.GetComponent.<Collider>().isTrigger=false;
if(col.gameObject.tag=="Player") {
this.transform.position=Vector3(Xpos,Ypos+0.2,Zpos);
yield WaitForSeconds(0.08);
this.transform.position=Vector3(Xpos,Ypos,Zpos);
yield WaitForSeconds(0.25);
transform.GetComponent.<Collider>().isTrigger=true;
}
}