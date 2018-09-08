import UnityEngine.UI;
var CoinDisplay:GameObject;
static var CoinCount:int;
function Update() {
CoinDisplay.GetComponent.<Text>().text="Score :"+CoinCount;
}