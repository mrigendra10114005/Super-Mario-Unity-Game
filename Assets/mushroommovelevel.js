var LeftPoint :float=-20;
var RightPoint :float=12;
var Direction:int =1;
function Update() {
transform.parent=null;
if(Direction==1) {
transform.Translate(Vector3.right*2*Time.deltaTime,Space.World);
Direction=1;
}
if(this.transform.position.x>RightPoint) {
Direction=2;
}
if(Direction==2) {
transform.Translate(Vector3.right*-2*Time.deltaTime,Space.World);
Direction=2;
}
if(this.transform.position.x<LeftPoint) {
Direction=1;
}
}

