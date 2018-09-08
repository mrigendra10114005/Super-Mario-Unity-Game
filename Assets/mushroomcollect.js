var GrowSound:AudioSource;
var ThePlayer:GameObject;
function OnTriggerEnter(col :Collider) {
if(col.gameObject.tag=="Player") {
this.transform.position=Vector3(0,-1000,0);
GrowSound.Play();
ThePlayer.transform.localScale+=new Vector3(0.3,0.3,0.3);
}
}
