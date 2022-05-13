/*User var Initiallaizing*/
var All_Users={};
All_Users["k"]="k";
var Log_In_User;

/*game settings vars*/
var keys = {};
var keysaveUp;
var keysaveDown;
var keysaveRight;
var keysaveLeft;
var numberofballs;
var highvalballcolor;
var midvalballcolor;
var smallvalballcolor;
var gametime;
var numofmonsters;

/*Game vars*/
var context;
var shape = new Object();
var startShape = new Object();
var ghost1shape = new Object();
var ghost2shape = new Object();
var ghost3shape = new Object();
var ghost4shape = new Object();
var bigpointshape = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_left;
var interval;
var radians = 0.75;
var openrate = 0.12;
var rotation = 0;
var changexghost1 = 0;
var changeyghost1 = 0;
var isFoodghost1type1;
var isFoodghost1type2;
var isFoodghost1type3;
var changexghost2 = 0;
var changeyghost2 = 0;
var isFoodghost2type1;
var isFoodghost2type2;
var isFoodghost2type3;
var changexghost3 = 0;
var changeyghost3 = 0;
var isFoodghost3type1;
var isFoodghost3type2;
var isFoodghost3type3;
var changexghost4 = 0;
var changeyghost4 = 0;
var isFoodghost4type1;
var isFoodghost4type2;
var isFoodghost4type3;
var isFoodBigMonstertype1;
var isFoodBigMonstertype2;
var isFoodBigMonstertype3;
var lives = 5;
var randomNumber;
var dead;
var foodLeft;

//images
var image1 = createImage('/Images/ghost1.png');
var image2 = createImage('/Images/capLeft.png');
var image3 = createImage('/Images/capRight.png');
var image4 = createImage('/Images/capTop.png');
var image5 = createImage('/Images/capBottom.png');
var image6 = createImage('/Images/cornerNo.png');
var image7 = createImage('/Images/cornerNo1.png');
var image8 = createImage('/Images/cornerNo4.png');
var image9 = createImage('/Images/cornerNo3.png');
var image10 = createImage('/Images/pipeConR.png');
var image11 = createImage('/Images/pipeConL.png');
var image12 = createImage('/Images/pipeConB.png');
var image13 = createImage('/Images/pipeConT.png');
var image14 = createImage('/Images/pipeVertical.png');
var image15 = createImage('/Images/pipeHorizontal.png');
var image16 = createImage('/Images/pipeCorner1.png');
var image17 = createImage('/Images/pipeCorner2.png');
var image18 = createImage('/Images/pipeCorner3.png');
var image19 = createImage('/Images/pipeCorner4.png');
var image20 = createImage('/Images/ghost2.png');
var image21 = createImage('/Images/ghost3.png');
var image22 = createImage('/Images/ghost4scary.png');
var image23 = createImage('/Images/highvalmonster.png');

$(document).ready(function() {
	/*General Game Initalizing*/
	context = canvas.getContext("2d");
	/*Generate the Dialogs Blocks-(Hide all the dialog HTML tags+Initilaze the About dialog box*/
	$("#dialog").hide();
	$("#Sucssesful_Register").hide();
	$("#Sucssesful_Log_In").hide();
	$("#Incorrect_Password").hide();
	$("#About_Menu").click(function() {
	$("#dialog").modal({
		fadeDuration: 1000,
		fadeDelay: 0.50
	  })
	});
	// var audio = document.getElementById("myAudio");
	// audio.volume = 0.1;
	/*Generate the windos Methods:*/
	Guest_Enter_Website();

	/*Sign_Up+Log_In Validation methods: */
	jQuery.validator.addMethod("ValidPassword", function (value) { 
        return /[a-z].*[0-9]|[0-9].*[a-z]/i.test(value); 
	}, );
	jQuery.validator.addMethod("UserNameNotInUse", function (value) { 
		return ((All_Users.hasOwnProperty(value))==false);
	}, );
	jQuery.validator.addMethod("HasUserNameLikeInput", function (value) { 
		return (All_Users.hasOwnProperty(value));
	}, );
	jQuery.validator.addMethod("ValidColor", function (value) { 
        return /^#(?:[0-9a-fA-F]{3}){1,2}$/i.test(value); 
	}, );
	/*Generate the Forms :*/
	Generate_Valitation_Sign_Up();
	Generate_Valitation_Log_In();
	Generate_Validation_Game_Settings()
	checkKeyDown();
	checkKeyDown1();
	checkKeyDown2();
	checkKeyDown3();
	randon();
	restart();
});

function checkKeyDown(){
	$( "#inputBox1" ).on( "keydown", function(event) {
		if($("#inputBox2").val() != event.key && $("#inputBox3").val() != event.key && $("#inputBox4").val() != event.key){
			$( "#inputBox1" ).val(event.key);
			keysaveRight = event.which;
		}
	  })
}

function checkKeyDown1(){
	$( "#inputBox2" ).on( "keydown", function(event) {
		if($("#inputBox1").val() != event.key && $("#inputBox3").val() != event.key && $("#inputBox4").val() != event.key){
			$( "#inputBox2" ).val(event.key);
			keysaveLeft = event.which;
		}
	  })
}

function checkKeyDown2(){
	$( "#inputBox3" ).on( "keydown", function(event) {
		if($("#inputBox2").val() != event.key && $("#inputBox1").val() != event.key && $("#inputBox4").val() != event.key){
			$( "#inputBox3" ).val(event.key);
			keysaveUp = event.which;
		}
	  })
}

function checkKeyDown3(){
	$( "#inputBox4" ).on( "keydown", function(event) {
		if($("#inputBox2").val() != event.key && $("#inputBox1").val() != event.key && $("#inputBox3").val() != event.key){
			$( "#inputBox4" ).val(event.key);
			keysaveDown = event.which;
		}
	  })
}

function randon(){
	$("#randomButton").click(function(){
		$("#inputBox1").val("ArrowRight")
		keysaveRight = 39;
		$("#inputBox2").val("ArrowLeft")
		keysaveLeft = 37;
		$("#inputBox3").val("ArrowUp")
		keysaveUp = 38;
		$("#inputBox4").val("ArrowDown")
		keysaveDown = 40;
		$("#inputBox5").val(randomNumberFromRange(50,90));
		$("#inputBox6").val('#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'));
		$("#inputBox7").val('#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'));
		$("#inputBox8").val('#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'));
		$("#inputBox9").val(randomNumberFromRange(60,300))
		$("#inputBox10").val(randomNumberFromRange(1,4));
	})
}

function restart(){
	$("#New_Game").click(function(){
		window.clearInterval(interval);
		$("#Sign_Up_Window").hide();
		$("#Log_In_Window").hide();
		$("#Home_Window").hide();
		$("#Game_Window").hide();
		$("#Error_Window").hide();
		//Show:
		$("#Game_Settings_Window").show();
	})
}

function randomNumberFromRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}


function checkBallBox(){
	
}
/* The function Set and menegment the initialize of the Setting of the User*/
function Guest_Enter_Website(){
	Log_In_User="";
	//Step 1 Initalizing the User Status that its in the top right side of the screen:
	$("#User_Icon").hide();
	$("#Guest_Icon").show();
	$("#User_Status").text("Hello Guest! ");
	window.clearInterval(interval);
	//At First we Hide all the Windows-Except the Home Window:
		//Always hide to Guest:
		$("#Game_Window").hide();
		$("#Game_Settings_Window").hide();
		$("#Error_Window").hide();
		//Hide:
		$("#Sign_Up_Window").hide();
		$("#Log_In_Window").hide();
		//Show:
		$("#Home_Window").show();

	$("#Home_Menu").click(function() {
		//Hide:
		$("#Sign_Up_Window").hide();
		$("#Log_In_Window").hide();
		//Show:
		$("#Home_Window").show();
		var txt1 = "<p>Text.</p>"; 
		});

	$("#Sign_Up_Menu").click(function() {
		//Hide:
		$("#Home_Window").hide();
		$("#Log_In_Window").hide();
		//Show:
		$("#Sign_Up_Window").show();

	});
	$("#Log_In_Menu").click(function() {
		//Hide:
		$("#Sign_Up_Window").hide();
		$("#Home_Window").hide();
		//Show:
		$("#Log_In_Window").show();
		

	});
}
function User_Log_In_Website(){
	//Step 1 Initalizing the User Status that its in the top right side of the screen:
	$("#Guest_Icon").hide();
	$("#User_Icon").show();
	$("#User_Status").text("Hello "+Log_In_User+"! ");
	//At First we Hide all the Windows-Except the Home Window:
		//Always hide to User:
		$("#Sign_Up_Window").hide();
		$("#Log_In_Window").hide();
		$("#Home_Window").hide();
		$("#Game_Window").hide();
		$("#Error_Window").hide();
		//Show:
		$("#Game_Settings_Window").show();

		$("#Sign_Up_Menu").click(function() {
			//Hide:
			$("#Sign_Up_Window").hide();
			$("#Log_In_Window").hide();
			$("#Home_Window").hide();
			$("#Game_Window").hide();
			$("#Game_Settings_Window").hide();
			//Show:
			$("#Error_Window").show();
	
		});
		$("#Log_In_Menu").click(function() {
			$("#Sign_Up_Window").hide();
			$("#Log_In_Window").hide();
			$("#Home_Window").hide();
			$("#Game_Window").hide();
			$("#Game_Settings_Window").hide();
			//Show:
			$("#Error_Window").show();
		});

		$("#Home_Menu").click(function() {
			//Hide:
			$("#Sign_Up_Window").hide();
			$("#Log_In_Window").hide();
			$("#Home_Window").hide();
			$("#Game_Window").hide();
			$("#Error_Window").hide();
			//Show:
			$("#Game_Settings_Window").show();
		});
		$("#Home_Button_SignUp").click(function() {
			window.alert("DDDDD");
	});

}
function ShowGame(){
	//Step 1 Initalizing the User Status that its in the top right side of the screen:
	$("#Guest_Icon").hide();
	$("#User_Icon").show();
	$("#User_Status").text("Hello "+Log_In_User+"! ");
	//At First we Hide all the Windows-Except the Home Window:
		//Always hide to User:
		$("#Sign_Up_Window").hide();
		$("#Log_In_Window").hide();
		$("#Home_Window").hide();
		$("#Game_Settings_Window").hide();
		$("#Error_Window").hide();
		//Show:
		$("#Game_Window").show();

		$("#Sign_Up_Menu").click(function() {
			//Hide:
			$("#Sign_Up_Window").hide();
			$("#Log_In_Window").hide();
			$("#Home_Window").hide();
			$("#Game_Window").hide();
			$("#Game_Settings_Window").hide();
			//Show:
			$("#Error_Window").show();
	
		});
		$("#Log_In_Menu").click(function() {
			$("#Sign_Up_Window").hide();
			$("#Log_In_Window").hide();
			$("#Home_Window").hide();
			$("#Game_Window").hide();
			$("#Game_Settings_Window").hide();
			//Show:
			$("#Error_Window").show();
		});
		$("#Home_Menu").click(function() {
			//Hide:
			$("#Sign_Up_Window").hide();
			$("#Log_In_Window").hide();
			$("#Home_Window").hide();
			$("#Game_Settings_Window").hide();
			$("#Error_Window").hide();
			//Show:
			$("#Game_Window").show();
		});
		$("#Home_Button_SignUp").click(function() {
			window.alert("DDDDD");
	});
}
function myFunction(){
	window.alert("DDDDD");
		
}

function Log_In_Button_Clicked(){
	
}

function Generate_Validation_Game_Settings(){
	$("form[name='Game_settings']").validate({
		// Specify validation rules
		rules: {
			Right_Box:{
			required: true
			},
			Left_Box:{
			required: true
			},
			Up_Box:{
			required: true
			},
			Down_Box:{
			required: true
			},
			BallNum_Box:{
				required: true,
				digits:true,
				min: 50,
				max: 90
			},
			HighValBall_Box: {
			  required: true,
			  ValidColor:true
			},
			MidValBall_Box: {
				required: true,
				ValidColor:true
			},
			SmallValBall_Box: {
				required: true,
				ValidColor:true
			},
			GameTime_Box: {
				required: true,
				digits: true,
				min:60
			},
			MonsterCount_Box: {
				required: true,
				digits: true,
				min:1,
				max:4
			},
			},
			messages: { 
				Right_Box: {
					required: "Please fill out this field.",
				},
				Left_Box: {
					required: "Please fill out this field.",
				},
				Up_Box: {
					required: "Please fill out this field.",
				},
				Down_Box: {
					required: "Please fill out this field.",
				},
				BallNum_Box: {
					required: "Please fill out this field.",
					digits:"Please fill out only numbers.",
					min:"The min number of balls u can have is 50",
					max:"The max number of balls u can have is 90"
				},
				HighValBall_Box: {
					required: "Please fill out this field.",
					ValidColor:"Please only enter hexadecimal code for color, [starts with #]"
				},
				MidValBall_Box: {
					required: "Please fill out this field.",
					ValidColor:"Please only enter hexadecimal code for color, [starts with #]"
				},
				SmallValBall_Box: {
					required: "Please fill out this field.",
					ValidColor:"Please only enter hexadecimal code for color, [starts with #]"
				},
				GameTime_Box: {
					required: "Please fill out this field.",
					digits: "Please fill out only numbers.",
					min: "The minimum game time possible is 60 secs"
				},
				MonsterCount_Box: {
					required: "Please fill out this field.",
					digits: "Please fill out only numbers.",
					min: "The minimum amount of monsters you can have is is 1",
					max: "The maximum amount of monsters you can have is is 4"
				},
			},
			  // Make sure the form is submitted to the destination defined
	  // in the "action" attribute of the form when valid
	  submitHandler: function(form) {
		keys["Up"]= keysaveUp
		keys["Down"] = keysaveDown
		keys["Right"] = keysaveRight
		keys["Left"] = keysaveLeft
		$("#RightKeyLabel").val($( "#inputBox1" ).val())
		$("#LeftKeyLabel").val($( "#inputBox2" ).val())
		$("#UpKeyLabel").val($( "#inputBox3" ).val())
		$("#DownKeyLabel").val($( "#inputBox4" ).val())
		$("#NumberBalls").val($("#inputBox5").val())
		$("#HighValBallLabel").val($( "#inputBox6" ).val())
		$("#MidValBallLabel").val($( "#inputBox7" ).val())
		$("#SmallValBallLabel").val($( "#inputBox8" ).val())
		$("#GameTimeLabel").val($( "#inputBox9" ).val())
		$("#MonsterCountLabel").val($( "#inputBox10" ).val())
		numberofballs = $("#inputBox5").val();
		highvalballcolor = $("#inputBox6").val();
		midvalballcolor = $("#inputBox7").val();
		smallvalballcolor = $("#inputBox8").val();
		gametime = $("#inputBox9").val();
		numofmonsters = $("#inputBox10").val();
		Start();
		ShowGame();	
	  }
	});
}


function Generate_Valitation_Sign_Up(){
	$("form[name='Sign_Up']").validate({
		// Specify validation rules
		rules: {
			Full_Name:{
			required: true,
			lettersonly: true
			},
			User_Name:{
				required: true,
				alphanumeric:true,
				UserNameNotInUse:true
			},
			Password: {
			  required: true,
			  minlength: 6,
			  ValidPassword:true
			},
			Email: {
				required: true,
				email: true
			  },
			birthday:{
			required: true
			}
			},
			messages: {
				  Full_Name: {
					  required: "Please fill out this field.",
					  lettersonly: "Please enter only letters."
				  },
				  User_Name: {
					  required: "Please fill out this field.",
					  alphanumeric:"Please fill out only english and numbers.",
					  UserNameNotInUse:"This Username alredy in use!"
				  },
				  Password: {
					  required: "Please fill out this field.",
					  minlength:"The Length must be at least 6 Chars!",
					  ValidPassword:"Your input must contain at least 1 letter and 1 number"
				  },
				  Email: {
					  required: "Please fill out this field.",
					  email: "Please enter a valid address"
				  },
				  birthday: {
					  required: "Please fill out this field."
				  }
			  },
			  // Make sure the form is submitted to the destination defined
	  // in the "action" attribute of the form when valid
	  submitHandler: function(form) {
		let New_User_Name = $("#Sign_Up_UserName").val();
		let New_User_Password = $("#Sign_Up_Password").val();
		All_Users[New_User_Name]=New_User_Password;
		Log_In_User=New_User_Name;
		$("#Sucssesful_Register").modal({
			fadeDuration: 1000,
			fadeDelay: 0.50
		  })
		Guest_Enter_Website();	

	  }
	});
}

function Generate_Valitation_Log_In(){
	$("form[name='Log_In']").validate({
		// Specify validation rules
		rules: {

			User_Name:{
				required: true,
				alphanumeric:true,
				HasUserNameLikeInput:true
				
			},
			Password: {
			  required: true,
			  alphanumeric:true

			}
			  },
			  messages: {

				  User_Name: {
					  required: "Please fill out this field.",
					  alphanumeric:"Please fill out only english and numbers.",
					  HasUserNameLikeInput:"There is no User name like that in the system!"
				  },
				  Password: {
					  required: "Please fill out this field.",
					  alphanumeric:"Please fill out only english and numbers."
				  }

			  },
			  // Make sure the form is submitted to the destination defined
	  // in the "action" attribute of the form when valid
	  submitHandler: function(form) {
		let Log_In_User_Name = $("#L_I_User_Name").val();
		let Log_In_Password = $("#L_I_Password").val();
		let Real_password=All_Users[Log_In_User_Name];
		if(Real_password==Log_In_Password){
			Log_In_User=Log_In_User_Name;
			$("#Sucssesful_Log_In").modal({
				fadeDuration: 1000,
				fadeDelay: 0.50
			  })
			User_Log_In_Website();	
		}
		else{
			$("#Incorrect_Password").modal({
				fadeDuration: 10,
			  })
		}
		
	  }
	});
}





function createImage(src){
	const image = new Image();
	image.onload = function(){}
	image.src = src;
	return image;
}



//The Game Function:
function Start() {
	// 0 is nothing
	// 1 is food 5 point
	// 15 point == -2
	// 25 point == -3
	// 2 is pacman
	// 4 is big blocks
	// i is the columns
	// j is the rows
	//cap left == 10
	//cap right == 11
	//cap top == 12
	//cap buttom == 14
	//up left corner No dot == 15
	//up right corner no dot == 16
	//down left corner no dot == 17
	//down right corner no dot == 18
	//left line no dot == 19
	// right line no dot == 20
	// up line no dot == 21
	// down line no dot ==22
	// vertical pipe == 23
	// horizontal pipe == 24
	// top left dot == 25
	// top right dot == 26
	// buttom left dot == 27
	// buttom right dot == 28
	// nothing == 30
	// first monster == 31
	// second monster == 32
	// third monster == 33
	// fourth monster == 34
	// 50 point monster == 35
	//the fourth monster will be a stronger monster
	//creating images;
	lives = 5;
	dead = false;
	board = new Array();
	for (var k =0; k<20;k++){
		board[k] = new Array()
		for(var h = 0;h<20;h++){
			if(k==0 && h!=9){
				board[k][h]=23;
			}
			else if(k==19 && h!= 9){
				board[k][h]=23;
			}
			else if(h==0 ||h==19){
				board[k][h]=24
			}
			else{
				board[k][h] = -1
			}
		}
	}
	//fill board with walls:
	board[0][0] = 25
	board[19][0] = 26
	board[0][19]=27
	board[19][19]=28

	board[2][2] = 10;
	board[3][2] = 24;
	board[4][2] = 24;
	board[5][2] = 24;
	board[6][2] = 11;

	board[8][1] = 14;
	board[10][1] = 14;
	board[12][1] = 14;
	
	board[14][2] = 10;
	board[15][2] = 24;
	board[16][2] = 24;
	board[17][2] = 11;

	board[8][3] = 10;
	board[9][3] = 24;
	board[10][3] = 24;
	board[11][3] = 11;

	board[2][4] = 15;
	board[2][5] = 19;
	board[2][6] = 17;
	board[3][4] = 16;
	board[3][5] = 20;
	board[3][6] = 18;

	board[5][4] = 15; //top left
	board[6][4] = 16; // top right
	board[5][5] = 17; //bot left
	board[6][5] = 18; //bot right

	board[8][5] = 10;
	board[9][5] = 24;
	board[10][5] = 24;
	board[11][5] = 11;

	board[13][4] = 15;
	board[14][4] = 16;
	board[13][5] = 17;
	board[14][5] = 18;

	board[16][4] = 15;
	board[16][5] = 19;
	board[16][6] = 17;
	board[17][4] = 16;
	board[17][5] = 20;
	board[17][6] = 18;

	board[1][8] = 24;
	board[2][8] = 24;
	board[3][8] = 11;

	board[1][10] = 24;
	board[2][10] = 24;
	board[3][10] = 11;

	board[5][7] = 12;
	board[5][8] = 23;
	board[5][9] = 23;
	board[5][10] = 23;
	board[5][11] = 14;

	board[7][7] = 15;
	board[8][7] = 21;
	board[9][7] = 21;
	board[10][7] = 21;
	board[11][7] = 21;
	board[12][7] = 16;

	board[7][8] = 19;
	board[8][8] = 30;
	board[9][8] = 30;
	board[10][8] = 30;
	board[11][8] = 30;
	board[12][8] = 20;

	board[7][9] = 19;
	board[8][9] = 30;
	board[9][9] = 30;
	board[10][9] = 30;
	board[11][9] = 30;
	board[12][9] = 20;

	board[7][10] = 19;
	board[8][10] = 30;
	board[9][10] = 30;
	board[10][10] = 30;
	board[11][10] = 30;
	board[12][10] = 20;

	board[7][11] = 17;
	board[8][11] = 22;
	board[9][11] = 22;
	board[10][11] = 22;
	board[11][11] = 22;
	board[12][11] = 18;

	board[14][7] = 12;
	board[14][8] = 23;
	board[14][9] = 23;
	board[14][10] = 23;
	board[14][11] = 14;

	board[16][8] = 10;
	board[17][8] = 24;
	board[18][8] = 24;

	board[16][10] = 10;
	board[17][10] = 24;
	board[18][10] = 24;

	board[2][12] = 15;
	board[3][12] = 16;
	board[2][13] = 19;
	board[3][13] = 20;
	board[2][14] = 17;
	board[3][14] = 18;

	board[5][13] = 10;
	board[6][13] = 11;
	
	board[5][15] = 15;
	board[6][15] = 16;
	board[4][16] = 15;
	board[5][16] = 30;
	board[6][16] = 20;
	board[4][17] = 17;
	board[5][17] = 22;
	board[6][17] = 18;

	board[2][16] = 12;
	board[2][17] = 14;

	board[8][13] = 10;
	board[9][13] = 24;
	board[10][13] = 24;
	board[11][13] = 11;

	board[13][13] = 10;
	board[14][13] = 11;

	board[16][12] = 15;
	board[16][13] = 19;
	board[16][14] = 17;
	board[17][12] = 16;
	board[17][13] = 20;
	board[17][14] = 18;

	board[17][16] = 12;
	board[17][17] = 14;

	board[13][15] = 15;
	board[14][15] = 16;
	board[13][16] = 19;
	board[14][16] = 30;
	board[15][16] = 16;
	board[13][17] = 17;
	board[14][17] = 22;
	board[15][17] = 18;

	board[8][15] = 10;
	board[9][15] = 24;
	board[10][15] = 24;
	board[11][15] = 11;

	board[8][17] = 10;
	board[9][17] = 24;
	board[10][17] = 24;
	board[11][17] = 11;

	board[0][8] = 28;
	board[0][10] = 25;
	
	board[19][8] = 27;
	board[19][10] = 26;

	board[0][19] = 28;
	board[19][19] = 27;
	

	



	score = 0;
	pac_color = "yellow";
	var cnt = numberofballs*3;
	var food_remain = numberofballs; //indicates how much food left to spread
	foodLeft = 0;
	var pacman_remain = 1; //indicates if we have placet the pacman or not
	time_left = gametime;
	for (var i = 0; i < 20; i++) {
		//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
		for (var j = 0; j < 20; j++) {
			var randomNum = Math.random();
			if(board[i][j] < 4){
				if (randomNum <= (1.0 * food_remain) / cnt) {
					console.log(i);
					console.log(j);
					console.log("lol")
					food_remain--;
					if(randomNum <= 0.18){
						board[i][j] = 1;
					}
					else if(randomNum > 0.18 && randomNum <= 0.27){
						board[i][j] = -2;
					}
					else{
						board[i][j] = -3;
					}
				} else if (randomNum < (1.0 * (pacman_remain + food_remain)) / cnt) {
					shape.i = i;
					shape.j = j;
					startShape.i = i;
					startShape.j = j;
					pacman_remain--;
					board[i][j] = 2;
				}
				cnt--;
			}
		}
	}
	if(numofmonsters == 4){
		board[1][1] = 31;
		ghost1shape.i = 1;
		ghost1shape.j = 1;
		board[18][1] = 32;
		ghost2shape.i = 18;
		ghost2shape.j = 1;
		board[1][18] = 33;
		ghost3shape.i = 1;
		ghost3shape.j = 18;
		board[18][18] = 34;
		ghost4shape.i = 18;
		ghost4shape.j = 18;

	} 
	else if(numofmonsters == 3){
		board[1][1] = 31;
		ghost1shape.i = 1;
		ghost1shape.j = 1;
		board[18][1] = 32;
		ghost2shape.i = 18;
		ghost2shape.j = 1;
		board[1][18] = 33;
		ghost3shape.i = 1;
		ghost3shape.j = 18;
	}
	else if(numofmonsters == 2){
		board[1][1] = 31;
		ghost1shape.i = 1;
		ghost1shape.j = 1;
		board[18][1] = 32;
		ghost2shape.i = 18;
		ghost2shape.j = 1;
	}
	else if(numofmonsters == 1){
		board[1][1] = 31;
		ghost1shape.i = 1;
		ghost1shape.j = 1;
	}
	board[9][6]=35
	bigpointshape.i = 9;
	bigpointshape.j = 6;
	while (food_remain > 0) {
		randomNum = Math.random();
		var emptyCell = findRandomEmptyCell(board);
		if(randomNum <= 0.6){
			board[emptyCell[0]][emptyCell[1]] = 1;
		}
		else if(randomNum > 0.6 && randomNum <= 0.9){
			board[emptyCell[0]][emptyCell[1]] = -2;
		}
		else{
			board[emptyCell[0]][emptyCell[1]] = -3;
		}
		food_remain--;
	}
	for (var i = 0; i < 20;i++){
		for (var j = 0; j<20;j++){
			if(board[i][j] == 1 || board[i][j] == -2 || board[i][j] == -3){
				foodLeft++;
			}
		}
	}
	keysDown = {};
	addEventListener(
		"keydown",
		function(e) {
			keysDown[e.keyCode] = true;
		},
		false
	);
	addEventListener(
		"keyup",
		function(e) {
			keysDown[e.keyCode] = false;
		},
		false
	);
	interval = setInterval(UpdatePosition, 100);
}

// function drawImagesForWalls(){
// 	for (var i = 0; i < 20; i++) {
// 		for (var j = 0; j < 20; j++) {
// 			var center = new Object();
// 			center.x = i * 30 + 15;
// 			center.y = j * 30 + 15;
// 			if(board[i][j] == 4){
// 				context.drawImage(createImage('./images/pipeCross.png'),center.x-15,center.y-15,30,30);
// 			}
// 		}
// 	}
// }

function findRandomEmptyCell(board) {
	var i = Math.floor(Math.random() * 19 + 1);
	var j = Math.floor(Math.random() * 19 + 1);
	while (board[i][j] != -1) {
		i = Math.floor(Math.random() * 19 + 1);
		j = Math.floor(Math.random() * 19 + 1);
	}
	return [i, j];
}

function GetKeyPressed() {
	if (keysDown[keys["Up"]]) {
		return 1;
	}
	if (keysDown[keys["Down"]]) {
		return 2;
	}
	if (keysDown[keys["Left"]]) {
		return 3;
	}
	if (keysDown[keys["Right"]]) {
		return 4;
	}
}



function Draw() {
	// כול בלוק גודלו 60 פיקסלים ועל מנת להשיג את האמצע של כול בלוק ניקח את 30 איקס ו30 ואי
	// and then for each "type" of block we will draw differently based on what "type" of block it is.
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	lblTime.value = time_left;
	lblLives.value = lives;
	for (var i = 0; i < 20; i++) {
		for (var j = 0; j < 20; j++) {
			var center = new Object();
			center.x = i * 30 + 15;
			center.y = j * 30 + 15;
			if (board[i][j] == 2) {
				context.save();
				context.translate(center.x,center.y)
				context.rotate(rotation)
				context.translate(-center.x,-center.y)
				context.beginPath();
				context.arc(center.x, center.y, 15,radians, 2 * Math.PI-radians); // half circle
				context.lineTo(center.x, center.y);
				context.fillStyle = pac_color; //color
				context.fill();
				context.beginPath();
				context.arc(center.x + 2.5, center.y - 7.5, 2.5, 0, 2 * Math.PI); // circle
				context.fillStyle = "blue"; //color
				context.fill();
				context.restore();
			} else if (board[i][j] == 1) {
				context.beginPath();
				context.arc(center.x, center.y, 7.5, 0, 2 * Math.PI); // circle
				context.fillStyle = smallvalballcolor; //color
				context.fill();
			}
			else if(board[i][j] == -2){
				context.beginPath();
				context.arc(center.x, center.y, 7.5, 0, 2 * Math.PI); // circle
				context.fillStyle = midvalballcolor; //color
				context.fill();
			}
			else if(board[i][j] == -3){
				context.beginPath();
				context.arc(center.x, center.y, 7.5, 0, 2 * Math.PI); // circle
				context.fillStyle = highvalballcolor; //color
				context.fill();
			}
			// else if (board[i][j] > 4 && board[i][j] <= 30){
			// 	context.beginPath();
			// 	context.rect(center.x - 15, center.y - 15, 30, 30);
			// 	context.fillStyle = "grey"; //color
			// 	context.fill();
			// }
			else if(board[i][j] == 31){
				context.drawImage(image1,center.x-15,center.y-15,30,30);
			}
			else if(board[i][j] == 32){
				context.drawImage(image20,center.x-15,center.y-15,30,30);
			}
			else if(board[i][j] == 33){
				context.drawImage(image21,center.x-15,center.y-15,30,30);
			}
			else if(board[i][j] == 34){
				context.drawImage(image22,center.x-15,center.y-15,30,30);
			}
			else if (board[i][j] == 10){
				context.drawImage(image2,center.x-15,center.y-15,30,30);
			}
			else if (board[i][j] == 11){
				context.drawImage(image3,center.x-15,center.y-15,30,30);
			}
			else if (board[i][j] == 12){
				context.drawImage(image4,center.x-15,center.y-15,30,30);
			}
			else if (board[i][j] == 14){
				context.drawImage(image5,center.x-15,center.y-15,30,30);
			}
			else if (board[i][j] == 15){
				context.drawImage(image6,center.x-15,center.y-15,30,30);
			}
			else if (board[i][j] == 16){
				context.drawImage(image7,center.x-15,center.y-15,30,30);
			}
			else if (board[i][j] == 17){
				context.drawImage(image8,center.x-15,center.y-15,30,30);
			}
			else if (board[i][j] == 18){
				context.drawImage(image9,center.x-15,center.y-15,30,30);
			}
			else if (board[i][j] == 19){
				context.drawImage(image10,center.x-15,center.y-15,30,30);
			}
			else if (board[i][j] == 20){
				context.drawImage(image11,center.x-15,center.y-15,30,30);
			}
			else if (board[i][j] == 21){
				context.drawImage(image12,center.x-15,center.y-15,30,30);
			}
			else if (board[i][j] == 22){
				context.drawImage(image13,center.x-15,center.y-15,30,30);
			}
			else if (board[i][j] == 23){
				context.drawImage(image14,center.x-15,center.y-15,30,30);
			}
			else if (board[i][j] == 24){
				context.drawImage(image15,center.x-15,center.y-15,30,30);
			}
			else if (board[i][j] == 25){
				context.drawImage(image16,center.x-15,center.y-15,30,30);
			}
			else if (board[i][j] == 26){
				context.drawImage(image17,center.x-15,center.y-15,30,30);
			}
			else if (board[i][j] == 27){
				context.drawImage(image18,center.x-15,center.y-15,30,30);
			}
			else if (board[i][j] == 28){
				context.drawImage(image19,center.x-15,center.y-15,30,30);
			}
			else if(board[i][j] == 35){
				context.drawImage(image23,center.x-15,center.y-15,30,30);
			}
			
		}
	}
}

function UpdatePosition() {
	board[shape.i][shape.j] = -1;
	var x = GetKeyPressed();
	if (x == 1) {
		if (shape.j > 0 && board[shape.i][shape.j - 1] < 4) {
			rotation = Math.PI*1.5
			shape.j--;
		}
	}
	if (x == 2) {
		if (shape.j < 19 && board[shape.i][shape.j + 1] < 4) {
			rotation = Math.PI/2
			shape.j++;
		}
	}
	if (x == 3) {
		if(shape.i == 0 && shape.j == 9){
			rotation = Math.PI;
			shape.i = 19;
		}
		else if (shape.i > 0 && board[shape.i - 1][shape.j] < 4 ) {
			rotation = Math.PI
			shape.i--;
		}
	}
	if (x == 4) {
		if(shape.i == 19 && shape.j == 9){
			rotation = Math.PI;
			shape.i = 0;
		}
		else if (shape.i < 19 && board[shape.i + 1][shape.j] < 4) {
			rotation = 0;
			shape.i++;
		}
	}
	if (board[shape.i][shape.j] == 1) {
		score+=5;
		foodLeft--;
	}
	else if(board[shape.i][shape.j] == -2){
		score+=15;
		foodLeft--;
	}
	else if(board[shape.i][shape.j] == -3){
		score+=25;
		foodLeft--;
	}
	if(board[shape.i][shape.j] == 35){
		score+=50;
		dead = true;
	}

	board[shape.i][shape.j] = 2;

	if(numofmonsters == 1){
		moveGhost1();
	}
	else if(numofmonsters==2){
		moveGhost1();
		moveGhost2();
	}
	else if(numofmonsters==3){
		moveGhost1();
		moveGhost2();
		moveGhost3();
	}
	else if(numofmonsters==4){
		moveGhost1();
		moveGhost2();
		moveGhost3();
		moveGhost4();
	}
	if(dead == false){
		highvalmonstermove();
	}
	time_left = time_left-0.1;
	time_left = time_left.toFixed(1);
	if (score >= 20) {
		pac_color = "green";
	}
	if(foodLeft == 0){
		window.clearInterval(interval);
		window.alert("Winner! - You collected all of the available food!");
	}
	if (time_left == 0) {
		if(score < 100){
			window.clearInterval(interval);
			window.alert("You are better than " + score + " points!");
		}
		else{
			window.clearInterval(interval);
			window.alert("Winner!!!");
		}
	}
	else {
		Draw();
		
	}
	if(radians < 0 || radians >0.75){
		openrate = -openrate;
	}
	radians += openrate;
}

function moveGhost1(){
	changexghost1 = shape.i - ghost1shape.i;
	changeyghost1 = shape.j - ghost1shape.j;
	board[ghost1shape.i][ghost1shape.j] = -1;
	if (isFoodghost1type1) {
		board[ghost1shape.i][ghost1shape.j] = 1;
		isFoodghost1type1 = false;
	}
	else if(isFoodghost1type2){
		board[ghost1shape.i][ghost1shape.j] = -2;
		isFoodghost1type2 = false;
	}
	else if(isFoodghost1type3){
		board[ghost1shape.i][ghost1shape.j] = -3;
		isFoodghost1type3 = false;
	}
	if (randomNumberFromRange(0, 1) == 0) {
		if (changexghost1 > 0 && ghost1shape.i < 19 && board[ghost1shape.i + 1][ghost1shape.j] < 4) {
			ghost1shape.i++;
		}
		else if (ghost1shape.i > 0 && board[ghost1shape.i - 1][ghost1shape.j] < 4) {
			ghost1shape.i--;
		}
	}
	else {
		if (changeyghost1 > 0 && ghost1shape.j < 19 && board[ghost1shape.i][ghost1shape.j + 1] < 4) {
			ghost1shape.j++;
		}
		else if (ghost1shape.j > 0 && board[ghost1shape.i][ghost1shape.j - 1] < 4) {
			ghost1shape.j--;
		}
	}
	if (board[ghost1shape.i][ghost1shape.j] == 1) {
		isFoodghost1type1 = true;
	}
	else if(board[ghost1shape.i][ghost1shape.j] == -2) {
		isFoodghost1type2 = true;
	}
	else if(board[ghost1shape.i][ghost1shape.j] == -3) {
		isFoodghost1type3 = true;
	}
	if (board[ghost1shape.i][ghost1shape.j] == 2) {
		if(numofmonsters == 1){
			if(isFoodghost1type1){
				board[ghost1shape.i][ghost1shape.j] = 1;
			}
			else if(isFoodghost1type2){
				board[ghost1shape.i][ghost1shape.j] = -2;
			}
			else if(isFoodghost1type3){
				board[ghost1shape.i][ghost1shape.j] = -3;
			}
			else{
				board[ghost1shape.i][ghost1shape.j]=-1;
			}

			ghost1shape.i = 1;
			ghost1shape.j = 1;
			board[1][1] = 31;
			
			board[shape.i][shape.j] = -1;
			shape.i = startShape.i;
			shape.j = startShape.j;
			board[shape.i][shape.j] = 2;
		}
		else if(numofmonsters == 2){ //need to do
			if(isFoodghost1type1){
				board[ghost1shape.i][ghost1shape.j] = 1;
			}
			else if(isFoodghost1type2){
				board[ghost1shape.i][ghost1shape.j] = -2;
			}
			else if(isFoodghost1type3){
				board[ghost1shape.i][ghost1shape.j] = -3;
			}
			else{
				board[ghost1shape.i][ghost1shape.j]=-1;
			}
			if(isFoodghost2type1){
				board[ghost2shape.i][ghost2shape.j] = 1 ;
			}
			else if(isFoodghost2type2){
				board[ghost2shape.i][ghost2shape.j] = -2;
			}
			else if(isFoodghost2type3){
				board[ghost2shape.i][ghost2shape.j] = -3;
			}
			else{
				board[ghost2shape.i][ghost2shape.j]=-1;
			}
			ghost1shape.i = 1;
			ghost1shape.j = 1;
			ghost2shape.i = 18;
			ghost2shape.j = 1;
			board[1][1] = 31;
			board[18][1] = 32;

			board[shape.i][shape.j] = -1;
			shape.i = startShape.i;
			shape.j = startShape.j;
			board[shape.i][shape.j] = 2;
		}
		else if(numofmonsters == 3){
			if(isFoodghost1type1){
				board[ghost1shape.i][ghost1shape.j] = 1;
			}
			else if(isFoodghost1type2){
				board[ghost1shape.i][ghost1shape.j] = -2;
			}
			else if(isFoodghost1type3){
				board[ghost1shape.i][ghost1shape.j] = -3;
			}
			else{
				board[ghost1shape.i][ghost1shape.j]=-1;
			}
			if(isFoodghost2type1){
				board[ghost2shape.i][ghost2shape.j] = 1 ;
			}
			else if(isFoodghost2type2){
				board[ghost2shape.i][ghost2shape.j] = -2;
			}
			else if(isFoodghost2type3){
				board[ghost2shape.i][ghost2shape.j] = -3;
			}
			else{
				board[ghost2shape.i][ghost2shape.j]=-1;
			}
			if(isFoodghost3type1){
				board[ghost3shape.i][ghost3shape.j] = 1;
			}
			else if(isFoodghost3type2){
				board[ghost3shape.i][ghost3shape.j] = -2;
			}
			else if(isFoodghost3type2){
				board[ghost3shape.i][ghost3shape.j] = -3;
			}
			else{
				board[ghost3shape.i][ghost3shape.j]=-1;
			}
			ghost1shape.i = 1;
			ghost1shape.j = 1;
			ghost2shape.i = 18;
			ghost2shape.j = 1;
			ghost3shape.i = 1;
			ghost3shape.j = 18;
			board[1][1] = 31;
			board[18][1] = 32;
			board[1][18] = 33;

			board[shape.i][shape.j] = -1;
			shape.i = startShape.i;
			shape.j = startShape.j;
			board[shape.i][shape.j] = 2;
		}
		else if(numofmonsters == 4){
			if(isFoodghost1type1){
				board[ghost1shape.i][ghost1shape.j] = 1;
			}
			else if(isFoodghost1type2){
				board[ghost1shape.i][ghost1shape.j] = -2;
			}
			else if(isFoodghost1type3){
				board[ghost1shape.i][ghost1shape.j] = -3;
			}
			else{
				board[ghost1shape.i][ghost1shape.j]=-1;
			}
			if(isFoodghost2type1){
				board[ghost2shape.i][ghost2shape.j] = 1 ;
			}
			else if(isFoodghost2type2){
				board[ghost2shape.i][ghost2shape.j] = -2;
			}
			else if(isFoodghost2type3){
				board[ghost2shape.i][ghost2shape.j] = -3;
			}
			else{
				board[ghost2shape.i][ghost2shape.j]=-1;
			}
			if(isFoodghost3type1){
				board[ghost3shape.i][ghost3shape.j] = 1;
			}
			else if(isFoodghost3type2){
				board[ghost3shape.i][ghost3shape.j] = -2;
			}
			else if(isFoodghost3type2){
				board[ghost3shape.i][ghost3shape.j] = -3;
			}
			else{
				board[ghost3shape.i][ghost3shape.j]=-1;
			}
			if(isFoodghost4type1){
				board[ghost4shape.i][ghost4shape.j] = 1 ;
			}
			else if(isFoodghost4type2){
				board[ghost4shape.i][ghost4shape.j] = -2 ;
			}
			else if(isFoodghost4type3){
				board[ghost4shape.i][ghost4shape.j] = -3 ;
			}
			else{
				board[ghost4shape.i][ghost4shape.j]=-1;
			}
			ghost1shape.i = 1;
			ghost1shape.j = 1;
			ghost2shape.i = 18;
			ghost2shape.j = 1;
			ghost3shape.i = 1;
			ghost3shape.j = 18;
			ghost4shape.i = 18;
			ghost4shape.j = 18;
			board[1][1] = 31;
			board[18][1] = 32;
			board[1][18] = 33;
			board[18][18] = 34;
			

			board[shape.i][shape.j] = -1;
			shape.i = startShape.i;
			shape.j = startShape.j;
			board[shape.i][shape.j] = 2;
		}
		lives-=1;
		if(lives == 0){
			window.clearInterval(interval);
			window.alert("Loser!");
		}
		if(score-10 < 0){
			score = 0;
		}
		else{
			score-=10;
		}
		
	}
	else{
		board[ghost1shape.i][ghost1shape.j] = 31
	}
}

function moveGhost2(){
	changexghost2 = shape.i - ghost2shape.i;
	changeyghost2 = shape.j - ghost2shape.j;
	board[ghost2shape.i][ghost2shape.j] = -1;
	if (isFoodghost2type1) {
		board[ghost2shape.i][ghost2shape.j] = 1;
		isFoodghost2type1 = false;
	}
	else if(isFoodghost2type2) {
		board[ghost2shape.i][ghost2shape.j] = -2;
		isFoodghost2type2 = false;
	}
	else if(isFoodghost2type3) {
		board[ghost2shape.i][ghost2shape.j] = -3;
		isFoodghost2type3 = false;
	}
	if (randomNumberFromRange(0, 1) == 0) {
		if (changexghost2 > 0 && ghost2shape.i < 19 && board[ghost2shape.i + 1][ghost2shape.j] < 4) {
			ghost2shape.i++;
		}
		else if (ghost2shape.i > 0 && board[ghost2shape.i - 1][ghost2shape.j] < 4) {
			ghost2shape.i--;
		}
	}
	else {
		if (changeyghost2 > 0 && ghost2shape.j < 19 && board[ghost2shape.i][ghost2shape.j + 1] < 4) {
			ghost2shape.j++;
		}
		else if (ghost2shape.j > 0 && board[ghost2shape.i][ghost2shape.j - 1] < 4) {
			ghost2shape.j--;
		}
	}
	if (board[ghost2shape.i][ghost2shape.j] == 1) {
		isFoodghost2type1 = true;
	}
	else if(board[ghost2shape.i][ghost2shape.j] == -2) {
		isFoodghost2type2 = true;
	}
	else if(board[ghost2shape.i][ghost2shape.j] == -3) {
		isFoodghost2type3 = true;
	}
	if (board[ghost2shape.i][ghost2shape.j] == 2) {
		if(numofmonsters == 1){
			if(isFoodghost1type1){
				board[ghost1shape.i][ghost1shape.j] = 1;
			}
			else if(isFoodghost1type2){
				board[ghost1shape.i][ghost1shape.j] = -2;
			}
			else if(isFoodghost1type3){
				board[ghost1shape.i][ghost1shape.j] = -3;
			}
			else{
				board[ghost1shape.i][ghost1shape.j]=-1;
			}

			ghost1shape.i = 1;
			ghost1shape.j = 1;
			board[1][1] = 31;
			
			board[shape.i][shape.j] = -1;
			shape.i = startShape.i;
			shape.j = startShape.j;
			board[shape.i][shape.j] = 2;
		}
		else if(numofmonsters == 2){
			if(isFoodghost1type1){
				board[ghost1shape.i][ghost1shape.j] = 1;
			}
			else if(isFoodghost1type2){
				board[ghost1shape.i][ghost1shape.j] = -2;
			}
			else if(isFoodghost1type3){
				board[ghost1shape.i][ghost1shape.j] = -3;
			}
			else{
				board[ghost1shape.i][ghost1shape.j]=-1;
			}
			if(isFoodghost2type1){
				board[ghost2shape.i][ghost2shape.j] = 1 ;
			}
			else if(isFoodghost2type2){
				board[ghost2shape.i][ghost2shape.j] = -2;
			}
			else if(isFoodghost2type3){
				board[ghost2shape.i][ghost2shape.j] = -3;
			}
			else{
				board[ghost2shape.i][ghost2shape.j]=-1;
			}
			ghost1shape.i = 1;
			ghost1shape.j = 1;
			ghost2shape.i = 18;
			ghost2shape.j = 1;
			board[1][1] = 31;
			board[18][1] = 32;

			board[shape.i][shape.j] = -1;
			shape.i = startShape.i;
			shape.j = startShape.j;
			board[shape.i][shape.j] = 2;
		}
		else if(numofmonsters == 3){
			if(isFoodghost1type1){
				board[ghost1shape.i][ghost1shape.j] = 1;
			}
			else if(isFoodghost1type2){
				board[ghost1shape.i][ghost1shape.j] = -2;
			}
			else if(isFoodghost1type3){
				board[ghost1shape.i][ghost1shape.j] = -3;
			}
			else{
				board[ghost1shape.i][ghost1shape.j]=-1;
			}
			if(isFoodghost2type1){
				board[ghost2shape.i][ghost2shape.j] = 1 ;
			}
			else if(isFoodghost2type2){
				board[ghost2shape.i][ghost2shape.j] = -2;
			}
			else if(isFoodghost2type3){
				board[ghost2shape.i][ghost2shape.j] = -3;
			}
			else{
				board[ghost2shape.i][ghost2shape.j]=-1;
			}
			if(isFoodghost3type1){
				board[ghost3shape.i][ghost3shape.j] = 1;
			}
			else if(isFoodghost3type2){
				board[ghost3shape.i][ghost3shape.j] = -2;
			}
			else if(isFoodghost3type2){
				board[ghost3shape.i][ghost3shape.j] = -3;
			}
			else{
				board[ghost3shape.i][ghost3shape.j]=-1;
			}
			ghost1shape.i = 1;
			ghost1shape.j = 1;
			ghost2shape.i = 18;
			ghost2shape.j = 1;
			ghost3shape.i = 1;
			ghost3shape.j = 18;
			board[1][1] = 31;
			board[18][1] = 32;
			board[1][18] = 33;

			board[shape.i][shape.j] = -1;
			shape.i = startShape.i;
			shape.j = startShape.j;
			board[shape.i][shape.j] = 2;
		}
		else if(numofmonsters == 4){
			if(isFoodghost1type1){
				board[ghost1shape.i][ghost1shape.j] = 1;
			}
			else if(isFoodghost1type2){
				board[ghost1shape.i][ghost1shape.j] = -2;
			}
			else if(isFoodghost1type3){
				board[ghost1shape.i][ghost1shape.j] = -3;
			}
			else{
				board[ghost1shape.i][ghost1shape.j]=-1;
			}
			if(isFoodghost2type1){
				board[ghost2shape.i][ghost2shape.j] = 1 ;
			}
			else if(isFoodghost2type2){
				board[ghost2shape.i][ghost2shape.j] = -2;
			}
			else if(isFoodghost2type3){
				board[ghost2shape.i][ghost2shape.j] = -3;
			}
			else{
				board[ghost2shape.i][ghost2shape.j]=-1;
			}
			if(isFoodghost3type1){
				board[ghost3shape.i][ghost3shape.j] = 1;
			}
			else if(isFoodghost3type2){
				board[ghost3shape.i][ghost3shape.j] = -2;
			}
			else if(isFoodghost3type2){
				board[ghost3shape.i][ghost3shape.j] = -3;
			}
			else{
				board[ghost3shape.i][ghost3shape.j]=-1;
			}
			if(isFoodghost4type1){
				board[ghost4shape.i][ghost4shape.j] = 1 ;
			}
			else if(isFoodghost4type2){
				board[ghost4shape.i][ghost4shape.j] = -2 ;
			}
			else if(isFoodghost4type3){
				board[ghost4shape.i][ghost4shape.j] = -3 ;
			}
			else{
				board[ghost4shape.i][ghost4shape.j]=-1;
			}
			ghost1shape.i = 1;
			ghost1shape.j = 1;
			ghost2shape.i = 18;
			ghost2shape.j = 1;
			ghost3shape.i = 1;
			ghost3shape.j = 18;
			ghost4shape.i = 18;
			ghost4shape.j = 18;
			board[1][1] = 31;
			board[18][1] = 32;
			board[1][18] = 33;
			board[18][18] = 34;
			

			board[shape.i][shape.j] = -1;
			shape.i = startShape.i;
			shape.j = startShape.j;
			board[shape.i][shape.j] = 2;
		}
		lives-=1;
		if(lives == 0){
			window.clearInterval(interval);
			window.alert("Loser!");
		}
		if(score-10 < 0){
			score = 0;
		}
		else{
			score-=10;
		}
	}
	else{
		board[ghost2shape.i][ghost2shape.j] = 32
	}
}

function moveGhost3(){
	changexghost3 = shape.i - ghost3shape.i;
	changeyghost3 = shape.j - ghost3shape.j;
	board[ghost3shape.i][ghost3shape.j] = -1;
	if (isFoodghost3type1) {
		board[ghost3shape.i][ghost3shape.j] = 1;
		isFoodghost3type1 = false;
	}
	else if(isFoodghost3type2) {
		board[ghost3shape.i][ghost3shape.j] = -2;
		isFoodghost3type2 = false;
	}
	else if(isFoodghost3type3) {
		board[ghost3shape.i][ghost3shape.j] = -3;
		isFoodghost3type3 = false;
	}
	if (randomNumberFromRange(0, 1) == 0) {
		if (changexghost3 > 0 && ghost3shape.i < 19 && board[ghost3shape.i + 1][ghost3shape.j] < 4) {
			ghost3shape.i++;
		}
		else if (ghost3shape.i > 0 && board[ghost3shape.i - 1][ghost3shape.j] < 4) {
			ghost3shape.i--;
		}
	}
	else {
		if (changeyghost3 > 0 && ghost3shape.j < 19 && board[ghost3shape.i][ghost3shape.j + 1] < 4) {
			ghost3shape.j++;
		}
		else if (ghost3shape.j > 0 && board[ghost3shape.i][ghost3shape.j - 1] < 4) {
			ghost3shape.j--;
		}
	}
	if (board[ghost3shape.i][ghost3shape.j] == 1) {
		isFoodghost3type1 = true;
	}
	else if(board[ghost3shape.i][ghost3shape.j] == -2) {
		isFoodghost3type2 = true;
	}
	else if(board[ghost3shape.i][ghost3shape.j] == -3) {
		isFoodghost3type3 = true;
	}
	if (board[ghost3shape.i][ghost3shape.j] == 2) {
		if(numofmonsters == 1){
			if(isFoodghost1type1){
				board[ghost1shape.i][ghost1shape.j] = 1;
			}
			else if(isFoodghost1type2){
				board[ghost1shape.i][ghost1shape.j] = -2;
			}
			else if(isFoodghost1type3){
				board[ghost1shape.i][ghost1shape.j] = -3;
			}
			else{
				board[ghost1shape.i][ghost1shape.j]=-1;
			}
			ghost1shape.i = 1;
			ghost1shape.j = 1;
			board[1][1] = 31;
			
			board[shape.i][shape.j] = -1;
			shape.i = startShape.i;
			shape.j = startShape.j;
			board[shape.i][shape.j] = 2;
		}
		else if(numofmonsters == 2){
			if(isFoodghost1type1){
				board[ghost1shape.i][ghost1shape.j] = 1;
			}
			else if(isFoodghost1type2){
				board[ghost1shape.i][ghost1shape.j] = -2;
			}
			else if(isFoodghost1type3){
				board[ghost1shape.i][ghost1shape.j] = -3;
			}
			else{
				board[ghost1shape.i][ghost1shape.j]=-1;
			}
			if(isFoodghost2type1){
				board[ghost2shape.i][ghost2shape.j] = 1 ;
			}
			else if(isFoodghost2type2){
				board[ghost2shape.i][ghost2shape.j] = -2;
			}
			else if(isFoodghost2type3){
				board[ghost2shape.i][ghost2shape.j] = -3;
			}
			else{
				board[ghost2shape.i][ghost2shape.j]=-1;
			}
			ghost1shape.i = 1;
			ghost1shape.j = 1;
			ghost2shape.i = 18;
			ghost2shape.j = 1;
			board[1][1] = 31;
			board[18][1] = 32;

			board[shape.i][shape.j] = -1;
			shape.i = startShape.i;
			shape.j = startShape.j;
			board[shape.i][shape.j] = 2;
		}
		else if(numofmonsters == 3){
			if(isFoodghost1type1){
				board[ghost1shape.i][ghost1shape.j] = 1;
			}
			else if(isFoodghost1type2){
				board[ghost1shape.i][ghost1shape.j] = -2;
			}
			else if(isFoodghost1type3){
				board[ghost1shape.i][ghost1shape.j] = -3;
			}
			else{
				board[ghost1shape.i][ghost1shape.j]=-1;
			}
			if(isFoodghost2type1){
				board[ghost2shape.i][ghost2shape.j] = 1 ;
			}
			else if(isFoodghost2type2){
				board[ghost2shape.i][ghost2shape.j] = -2;
			}
			else if(isFoodghost2type3){
				board[ghost2shape.i][ghost2shape.j] = -3;
			}
			else{
				board[ghost2shape.i][ghost2shape.j]=-1;
			}
			if(isFoodghost3type1){
				board[ghost3shape.i][ghost3shape.j] = 1;
			}
			else if(isFoodghost3type2){
				board[ghost3shape.i][ghost3shape.j] = -2;
			}
			else if(isFoodghost3type2){
				board[ghost3shape.i][ghost3shape.j] = -3;
			}
			else{
				board[ghost3shape.i][ghost3shape.j]=-1;
			}
			ghost1shape.i = 1;
			ghost1shape.j = 1;
			ghost2shape.i = 18;
			ghost2shape.j = 1;
			ghost3shape.i = 1;
			ghost3shape.j = 18;
			board[1][1] = 31;
			board[18][1] = 32;
			board[1][18] = 33;

			board[shape.i][shape.j] = -1;
			shape.i = startShape.i;
			shape.j = startShape.j;
			board[shape.i][shape.j] = 2;
		}
		else if(numofmonsters == 4){
			if(isFoodghost1type1){
				board[ghost1shape.i][ghost1shape.j] = 1;
			}
			else if(isFoodghost1type2){
				board[ghost1shape.i][ghost1shape.j] = -2;
			}
			else if(isFoodghost1type3){
				board[ghost1shape.i][ghost1shape.j] = -3;
			}
			else{
				board[ghost1shape.i][ghost1shape.j]=-1;
			}
			if(isFoodghost2type1){
				board[ghost2shape.i][ghost2shape.j] = 1 ;
			}
			else if(isFoodghost2type2){
				board[ghost2shape.i][ghost2shape.j] = -2;
			}
			else if(isFoodghost2type3){
				board[ghost2shape.i][ghost2shape.j] = -3;
			}
			else{
				board[ghost2shape.i][ghost2shape.j]=-1;
			}
			if(isFoodghost3type1){
				board[ghost3shape.i][ghost3shape.j] = 1;
			}
			else if(isFoodghost3type2){
				board[ghost3shape.i][ghost3shape.j] = -2;
			}
			else if(isFoodghost3type2){
				board[ghost3shape.i][ghost3shape.j] = -3;
			}
			else{
				board[ghost3shape.i][ghost3shape.j]=-1;
			}
			if(isFoodghost4type1){
				board[ghost4shape.i][ghost4shape.j] = 1 ;
			}
			else if(isFoodghost4type2){
				board[ghost4shape.i][ghost4shape.j] = -2 ;
			}
			else if(isFoodghost4type3){
				board[ghost4shape.i][ghost4shape.j] = -3 ;
			}
			else{
				board[ghost4shape.i][ghost4shape.j]=-1;
			}
			ghost1shape.i = 1;
			ghost1shape.j = 1;
			ghost2shape.i = 18;
			ghost2shape.j = 1;
			ghost3shape.i = 1;
			ghost3shape.j = 18;
			ghost4shape.i = 18;
			ghost4shape.j = 18;
			board[1][1] = 31;
			board[18][1] = 32;
			board[1][18] = 33;
			board[18][18] = 34;
			

			board[shape.i][shape.j] = -1;
			shape.i = startShape.i;
			shape.j = startShape.j;
			board[shape.i][shape.j] = 2;
		}
		lives-=1;
		if(lives == 0){
			window.clearInterval(interval);
			window.alert("Loser!");
		}
		if(score-10 < 0){
			score = 0;
		}
		else{
			score-=10;
		}
	}
	else{
		board[ghost3shape.i][ghost3shape.j] = 33
	}
}

function moveGhost4(){
	changexghost4 = shape.i - ghost4shape.i;
	changeyghost4 = shape.j - ghost4shape.j;
	board[ghost4shape.i][ghost4shape.j] = -1;
	if (isFoodghost4type1) {
		board[ghost4shape.i][ghost4shape.j] = 1;
		isFoodghost4type1 = false;
	}
	else if(isFoodghost4type2) {
		board[ghost4shape.i][ghost4shape.j] = -2;
		isFoodghost4type2 = false;
	}
	else if(isFoodghost4type3) {
		board[ghost4shape.i][ghost4shape.j] = -3;
		isFoodghost4type3 = false;
	}
	if (randomNumberFromRange(0, 1) == 0) {
		if (changexghost4 > 0 && ghost4shape.i < 19 && board[ghost4shape.i + 1][ghost4shape.j] < 4) {
			ghost4shape.i++;
		}
		else if (ghost4shape.i > 0 && board[ghost4shape.i - 1][ghost4shape.j] < 4) {
			ghost4shape.i--;
		}
	}
	else {
		if (changeyghost4 > 0 && ghost4shape.j < 19 && board[ghost4shape.i][ghost4shape.j + 1] < 4) {
			ghost4shape.j++;
		}
		else if (ghost4shape.j > 0 && board[ghost4shape.i][ghost4shape.j - 1] < 4) {
			ghost4shape.j--;
		}
	}
	if (board[ghost4shape.i][ghost4shape.j] == 1) {
		isFoodghost4type1 = true;
	}
	else if(board[ghost4shape.i][ghost4shape.j] == -2) {
		isFoodghost4type2 = true;
	}
	else if(board[ghost4shape.i][ghost4shape.j] == -3) {
		isFoodghost4type3 = true;
	}
	if (board[ghost4shape.i][ghost4shape.j] == 2) {
		if(numofmonsters == 1){
			if(isFoodghost1type1){
				board[ghost1shape.i][ghost1shape.j] = 1;
			}
			else if(isFoodghost1type2){
				board[ghost1shape.i][ghost1shape.j] = -2;
			}
			else if(isFoodghost1type3){
				board[ghost1shape.i][ghost1shape.j] = -3;
			}
			else{
				board[ghost1shape.i][ghost1shape.j]=-1;
			}
			ghost1shape.i = 1;
			ghost1shape.j = 1;
			board[1][1] = 31;
			
			board[shape.i][shape.j] = -1;
			shape.i = startShape.i;
			shape.j = startShape.j;
			board[shape.i][shape.j] = 2;
		}
		else if(numofmonsters == 2){
			if(isFoodghost1type1){
				board[ghost1shape.i][ghost1shape.j] = 1;
			}
			else if(isFoodghost1type2){
				board[ghost1shape.i][ghost1shape.j] = -2;
			}
			else if(isFoodghost1type3){
				board[ghost1shape.i][ghost1shape.j] = -3;
			}
			else{
				board[ghost1shape.i][ghost1shape.j]=-1;
			}
			if(isFoodghost2type1){
				board[ghost2shape.i][ghost2shape.j] = 1 ;
			}
			else if(isFoodghost2type2){
				board[ghost2shape.i][ghost2shape.j] = -2;
			}
			else if(isFoodghost2type3){
				board[ghost2shape.i][ghost2shape.j] = -3;
			}
			else{
				board[ghost2shape.i][ghost2shape.j]=-1;
			}
			ghost1shape.i = 1;
			ghost1shape.j = 1;
			ghost2shape.i = 18;
			ghost2shape.j = 1;
			board[1][1] = 31;
			board[18][1] = 32;

			board[shape.i][shape.j] = -1;
			shape.i = startShape.i;
			shape.j = startShape.j;
			board[shape.i][shape.j] = 2;
		}
		else if(numofmonsters == 3){
			if(isFoodghost1type1){
				board[ghost1shape.i][ghost1shape.j] = 1;
			}
			else if(isFoodghost1type2){
				board[ghost1shape.i][ghost1shape.j] = -2;
			}
			else if(isFoodghost1type3){
				board[ghost1shape.i][ghost1shape.j] = -3;
			}
			else{
				board[ghost1shape.i][ghost1shape.j]=-1;
			}
			if(isFoodghost2type1){
				board[ghost2shape.i][ghost2shape.j] = 1 ;
			}
			else if(isFoodghost2type2){
				board[ghost2shape.i][ghost2shape.j] = -2;
			}
			else if(isFoodghost2type3){
				board[ghost2shape.i][ghost2shape.j] = -3;
			}
			else{
				board[ghost2shape.i][ghost2shape.j]=-1;
			}
			if(isFoodghost3type1){
				board[ghost3shape.i][ghost3shape.j] = 1;
			}
			else if(isFoodghost3type2){
				board[ghost3shape.i][ghost3shape.j] = -2;
			}
			else if(isFoodghost3type2){
				board[ghost3shape.i][ghost3shape.j] = -3;
			}
			else{
				board[ghost3shape.i][ghost3shape.j]=-1;
			}
			ghost1shape.i = 1;
			ghost1shape.j = 1;
			ghost2shape.i = 18;
			ghost2shape.j = 1;
			ghost3shape.i = 1;
			ghost3shape.j = 18;
			board[1][1] = 31;
			board[18][1] = 32;
			board[1][18] = 33;

			board[shape.i][shape.j] = -1;
			shape.i = startShape.i;
			shape.j = startShape.j;
			board[shape.i][shape.j] = 2;
		}
		else if(numofmonsters == 4){
			if(isFoodghost1type1){
				board[ghost1shape.i][ghost1shape.j] = 1;
			}
			else if(isFoodghost1type2){
				board[ghost1shape.i][ghost1shape.j] = -2;
			}
			else if(isFoodghost1type3){
				board[ghost1shape.i][ghost1shape.j] = -3;
			}
			else{
				board[ghost1shape.i][ghost1shape.j]=-1;
			}
			if(isFoodghost2type1){
				board[ghost2shape.i][ghost2shape.j] = 1 ;
			}
			else if(isFoodghost2type2){
				board[ghost2shape.i][ghost2shape.j] = -2;
			}
			else if(isFoodghost2type3){
				board[ghost2shape.i][ghost2shape.j] = -3;
			}
			else{
				board[ghost2shape.i][ghost2shape.j]=-1;
			}
			if(isFoodghost3type1){
				board[ghost3shape.i][ghost3shape.j] = 1;
			}
			else if(isFoodghost3type2){
				board[ghost3shape.i][ghost3shape.j] = -2;
			}
			else if(isFoodghost3type2){
				board[ghost3shape.i][ghost3shape.j] = -3;
			}
			else{
				board[ghost3shape.i][ghost3shape.j]=-1;
			}
			if(isFoodghost4type1){
				board[ghost4shape.i][ghost4shape.j] = 1 ;
			}
			else if(isFoodghost4type2){
				board[ghost4shape.i][ghost4shape.j] = -2 ;
			}
			else if(isFoodghost4type3){
				board[ghost4shape.i][ghost4shape.j] = -3 ;
			}
			else{
				board[ghost4shape.i][ghost4shape.j]=-1;
			}
			ghost1shape.i = 1;
			ghost1shape.j = 1;
			ghost2shape.i = 18;
			ghost2shape.j = 1;
			ghost3shape.i = 1;
			ghost3shape.j = 18;
			ghost4shape.i = 18;
			ghost4shape.j = 18;
			board[1][1] = 31;
			board[18][1] = 32;
			board[1][18] = 33;
			board[18][18] = 34;
			

			board[shape.i][shape.j] = -1;
			shape.i = startShape.i;
			shape.j = startShape.j;
			board[shape.i][shape.j] = 2;
		}
		lives-=2;
		if(lives <= 0){
			window.clearInterval(interval);
			window.alert("Loser!");
		}
		if(score-20 < 0){
			score = 0;
		}
		else{
			score-=20;
		}
	}
	else{
		board[ghost4shape.i][ghost4shape.j] = 34
	}
}

function highvalmonstermove(){
	board[bigpointshape.i][bigpointshape.j] = -1;
	if (isFoodBigMonstertype1) {
		board[bigpointshape.i][bigpointshape.j] = 1;
		isFoodBigMonstertype1 = false;
	}
	else if(isFoodBigMonstertype2) {
		board[bigpointshape.i][bigpointshape.j] = -2;
		isFoodBigMonstertype2 = false;
	}
	else if(isFoodBigMonstertype3) {
		board[bigpointshape.i][bigpointshape.j] = -3;
		isFoodBigMonstertype3 = false;
	}
	randomNumber = randomNumberFromRange(0, 3);
	if (randomNumber == 0) {
		if (bigpointshape.i < 19 && board[bigpointshape.i + 1][bigpointshape.j] < 4) {
			bigpointshape.i++;
		}
		else if (bigpointshape.i > 0 && board[bigpointshape.i - 1][bigpointshape.j] < 4) {
			bigpointshape.i--;
		}
	}
	else if(randomNumber == 1){
		if (bigpointshape.j < 19 && board[bigpointshape.i][bigpointshape.j + 1] < 4) {
			bigpointshape.j++;
		}
		else if (bigpointshape.j > 0 && board[bigpointshape.i][bigpointshape.j - 1] < 4) {
			bigpointshape.j--;
		}
	}
	else if(randomNumber == 2){
		if (bigpointshape.i > 0 && board[bigpointshape.i - 1][bigpointshape.j] < 4) {
			bigpointshape.i--;
		}
		else if(bigpointshape.i < 19 && board[bigpointshape.i + 1][bigpointshape.j] < 4) {
			bigpointshape.i++;
		}
	}
	else if(randomNumber==3){
		if (bigpointshape.j > 0 && board[bigpointshape.i][bigpointshape.j - 1] < 4) {
			bigpointshape.j--;
		}
		else if(bigpointshape.i > 0 && board[bigpointshape.i - 1][bigpointshape.j] < 4) {
			bigpointshape.i--;
		}
	}
	if (board[bigpointshape.i][bigpointshape.j] == 1) {
		isFoodBigMonstertype1 = true;
	}
	else if(board[bigpointshape.i][bigpointshape.j] == -2) {
		isFoodBigMonstertype2 = true;
	}
	else if(board[bigpointshape.i][bigpointshape.j] == -3) {
		isFoodBigMonstertype3 = true;
	}
	if (board[bigpointshape.i][bigpointshape.j] == 2) {
		score+=50;
		board[bigpointshape.i][bigpointshape.j] = -1;
		dead = true;
	}
	else{
		board[bigpointshape.i][bigpointshape.j] = 35
	}
}

