var LeftPoint :float=14.8;
var RightPoint :float=24.5;
var Direction:int =1;
function Update() {
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

