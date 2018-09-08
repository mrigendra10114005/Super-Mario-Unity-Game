 static var LiveAmount:int=3;
 var InternalLives:int;
 var LiveTextBox :GameObject;
 function Update() {
 InternalLives=LiveAmount;
 LiveTextBox.GetComponent.<Text>().text=""+InternalLives;
 if(InternalLives==0) {
 Application.LoadLevel(3);
 }
 }
