var canvas2 = new fabric.Canvas("myCanvas2");

block_y2=100;
block_x2=500;


var block_image_object2= "";

function ranger_update(){
    fabric.Image.fromURL("squad.png",function(Img){
        block_image_object2 = Img; //this variable will hold image of the player

        block_image_object2.scaleToWidth(200); //setting width and height
        block_image_object2.scaleToHeight(100);
        //set x and y coordinates
        block_image_object2.set({
            top:block_y2,
            left:block_x2
        });
        canvas2.add(block_image_object2);

    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
	keyPressed2 = e.keyCode;
	if(keyPressed2 == 87 || keyPressed2 == 38){
		up();
	}
    if(keyPressed2 == 83 || keyPressed2 == 40){
		down();
	}
    if(keyPressed2 == 65 || keyPressed2 == 37){
		left();
	}
    if(keyPressed2 == 68 || keyPressed2 == 39){
		right();
	}
}

function up(){
    if(block_y2 >=0){
block_y2 = block_y2 - 10;
canvas2.remove(block_image_object2);
ranger_update(); 

    }
}

function down(){
    if(block_y2 <=350){
block_y2 = block_y2 + 10;
canvas2.remove(block_image_object2);
ranger_update(); 

    }
}

function left(){
    if(block_x2 >=0){
block_x2 = block_x2 - 10;
canvas2.remove(block_image_object2);
ranger_update(); 

    }
}

function right(){
    if(block_x2 <=1000){
block_x2 = block_x2 + 10;
canvas2.remove(block_image_object2);
ranger_update(); 

    }
}



