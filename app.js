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
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;


$(document).ready(function() {
	/*General Game Initalizing*/
	context = canvas.getContext("2d");
	Start();
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
		User_Log_In_Website();	

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
















//The Game Function:
function Start() {
	board = new Array();
	score = 0;
	pac_color = "yellow";
	var cnt = 100;
	var food_remain = 50;
	var pacman_remain = 1;
	start_time = new Date();
	for (var i = 0; i < 10; i++) {
		board[i] = new Array();
		//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
		for (var j = 0; j < 10; j++) {
			if (
				(i == 3 && j == 3) ||
				(i == 3 && j == 4) ||
				(i == 3 && j == 5) ||
				(i == 6 && j == 1) ||
				(i == 6 && j == 2)
			) {
				board[i][j] = 4;
			} else {
				var randomNum = Math.random();
				if (randomNum <= (1.0 * food_remain) / cnt) {
					food_remain--;
					board[i][j] = 1;
				} else if (randomNum < (1.0 * (pacman_remain + food_remain)) / cnt) {
					shape.i = i;
					shape.j = j;
					pacman_remain--;
					board[i][j] = 2;
				} else {
					board[i][j] = 0;
				}
				cnt--;
			}
		}
	}
	while (food_remain > 0) {
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] = 1;
		food_remain--;
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
	interval = setInterval(UpdatePosition, 250);
}

function findRandomEmptyCell(board) {
	var i = Math.floor(Math.random() * 9 + 1);
	var j = Math.floor(Math.random() * 9 + 1);
	while (board[i][j] != 0) {
		i = Math.floor(Math.random() * 9 + 1);
		j = Math.floor(Math.random() * 9 + 1);
	}
	return [i, j];
}

function GetKeyPressed() {
	if (keysDown[38]) {
		return 1;
	}
	if (keysDown[40]) {
		return 2;
	}
	if (keysDown[37]) {
		return 3;
	}
	if (keysDown[39]) {
		return 4;
	}
}

function Draw() {
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	lblTime.value = time_elapsed;
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			var center = new Object();
			center.x = i * 60 + 30;
			center.y = j * 60 + 30;
			if (board[i][j] == 2) {
				context.beginPath();
				context.arc(center.x, center.y, 30, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
				context.lineTo(center.x, center.y);
				context.fillStyle = pac_color; //color
				context.fill();
				context.beginPath();
				context.arc(center.x + 5, center.y - 15, 5, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();
			} else if (board[i][j] == 1) {
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();
			} else if (board[i][j] == 4) {
				context.beginPath();
				context.rect(center.x - 30, center.y - 30, 60, 60);
				context.fillStyle = "grey"; //color
				context.fill();
			}
		}
	}
}

function UpdatePosition() {
	board[shape.i][shape.j] = 0;
	var x = GetKeyPressed();
	if (x == 1) {
		if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
			shape.j--;
		}
	}
	if (x == 2) {
		if (shape.j < 9 && board[shape.i][shape.j + 1] != 4) {
			shape.j++;
		}
	}
	if (x == 3) {
		if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
			shape.i--;
		}
	}
	if (x == 4) {
		if (shape.i < 9 && board[shape.i + 1][shape.j] != 4) {
			shape.i++;
		}
	}
	if (board[shape.i][shape.j] == 1) {
		score++;
	}
	board[shape.i][shape.j] = 2;
	var currentTime = new Date();
	time_elapsed = (currentTime - start_time) / 1000;
	if (score >= 20 && time_elapsed <= 10) {
		pac_color = "green";
	}
	if (score == 50) {
		window.clearInterval(interval);
		window.alert("Game completed");
	} else {
		Draw();
	}
}
