var ResetPoint: float;
var CurrentPoint :float;
function Update() {
ResetPoint=6.5;
CurrentPoint=transform.position.y;
if(CurrentPoint>=ResetPoint) {
transform.position.y=-3.5;
}
transform.Translate(Vector3.up*Time.deltaTime);
} 