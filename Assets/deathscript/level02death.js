var DeathSound :AudioSource;
var LevelMusic :GameObject;
var CamFollow :GameObject;
var ThePlayer:GameObject;
function OnTriggerEnter(col:Collider){
globallive.LiveAmount-=1;
LevelMusic.SetActive(false);
DeathSound.Play();
ThePlayer.transform.localScale-=new Vector3(1,1,1);
yield WaitForSeconds(3);
Application.LoadLevel(4);
}