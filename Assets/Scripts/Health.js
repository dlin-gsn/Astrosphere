// Darren Lin
// This script continuosly checks the static marker variable 
// declared in AstroplayerPlayer.js, and changes the GUI Texture
// accordingly.

var health1 : Texture2D;
var health2 : Texture2D;
var health3 : Texture2D;

function Update () 
{
	if(AstrospherePlayer.marker == 0)
		guiTexture.texture = health3;
	else if(AstrospherePlayer.marker == 1)
		guiTexture.texture = health2;
	else 
		guiTexture.texture = health1;
}
