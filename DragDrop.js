var imageCode="", ec2Counter=0, s3Counter=0;
var divA;
var subcanvas;

function init()
{
document.getElementById('aws_ec2').addEventListener("dragstart",ec2Drag,false);
	document.getElementById('aws_s3').addEventListener("dragstart",s3Drag,false);
	subcanvas=document.getElementById('canvas');
	subcanvas.addEventListener("dragenter",function(e){e.preventDefault();},false);
	subcanvas.addEventListener("dragover",function(e){e.preventDefault();},false);
	subcanvas.addEventListener("drop",canvasDrop,false);
}

function ec2Drag(e)
{
ec2Counter+=1;
imageCode='<div id=div_ec2_'+ec2Counter+ ' draggable="true" style="position: absolute;" onClick="reply_click(this.id)"><img src="ec2.png" class="aws_EC2" ></div>';
e.dataTransfer.setData('Aws_EC2',imageCode);
}

function s3Drag(e)
{
s3Counter+=1;
imageCode='<div id=div_s3_'+s3Counter+ ' draggable="true" style="position: absolute;"><img src="s3.png" class="aws_s3"></div>';
	e.dataTransfer.setData('Aws_S3',imageCode);
	
}
function canvasDrop(e)
{	
	e.preventDefault();
	canvas.innerHTML=canvas.innerHTML+e.dataTransfer.getData('Aws_S3')+e.dataTransfer.getData('Aws_EC2');	
}
function startDrag() {
      document.onmouseup = finishDrag;

      document.onmousemove = function(e) {
        divA.style.top = (divA.offsetTop + e.movementY) + "px";
        divA.style.left = (divA.offsetLeft + e.movementX) + "px";
      }
    }

    function finishDrag() {
      document.onmouseup = null;
      document.onmousemove = null;
    }

function reply_click(clicked_class)
{
      divA = document.getElementById(clicked_class);
divA.addEventListener('mousedown', function() {
      startDrag();
    });
}
window.addEventListener("load",init,false);