var textareas = document.getElementsByTagName('textarea');
var inputs = document.getElementsByTagName('input');

for (textarea of textareas) {
	textarea.setAttribute('onclick', 'selectTextbox(this)');
}

for (input of inputs) {
	if (input.type == 'text' || input.type == 'password') {
		input.setAttribute('onclick', 'selectTextbox(this)');
	}
}

// Variables
var textbox;
var level = 1;
var selected_level2 = 1;
var selected_level3 = 1;
var delView = true;
var L1_lower = document.getElementsByClassName('L1_lower');
var L11_lower = document.getElementsByClassName('L11_lower');
var L12_lower = document.getElementsByClassName('L12_lower');
var L13_lower = document.getElementsByClassName('L13_lower');
var L111_lower = document.getElementsByClassName('L111_lower');
var L121_lower = document.getElementsByClassName('L121_lower');
var L131_lower = document.getElementsByClassName('L131_lower');
var L112_lower = document.getElementsByClassName('L112_lower');
var L122_lower = document.getElementsByClassName('L122_lower');
var L132_lower = document.getElementsByClassName('L132_lower');
var L113_lower = document.getElementsByClassName('L113_lower');
var L123_lower = document.getElementsByClassName('L123_lower');
var L133_lower = document.getElementsByClassName('L133_lower');
var L1_upper = document.getElementsByClassName('L1_upper');
var L11_upper = document.getElementsByClassName('L11_upper');
var L12_upper = document.getElementsByClassName('L12_upper');
var L13_upper = document.getElementsByClassName('L13_upper');
var L111_upper = document.getElementsByClassName('L111_upper');
var L121_upper = document.getElementsByClassName('L121_upper');
var L131_upper = document.getElementsByClassName('L131_upper');
var L112_upper = document.getElementsByClassName('L112_upper');
var L122_upper = document.getElementsByClassName('L122_upper');
var L132_upper = document.getElementsByClassName('L132_upper');
var L113_upper = document.getElementsByClassName('L113_upper');
var L123_upper = document.getElementsByClassName('L123_upper');
var L133_upper = document.getElementsByClassName('L133_upper');
var DelButton = document.getElementsByClassName('Del');
var SpaceButton = document.getElementsByClassName('Space');

var event = new Event('change');

// SPACE and DEL functionality
var detectLongpress_Del = false;
(function () {
  
  var delay;  
  var longpress = 500;
  var listItems = document.querySelectorAll('.Del,.Space');
  var listItem;
  
  for (var i = 0, j = listItems.length; i < j; i++) {
    listItem = listItems[i];
    
    listItem.addEventListener('mousedown', function (e) {
		var _this = this;
		delay = setTimeout(check, longpress);
		detectLongpress_Del = false;
		
		function check() {			
			delView = ~delView;
			detectLongpress_Del = true;
			if (delView == true) { 
				for (row of DelButton) {
					row.style.display = 'block';
				}
				for (row of SpaceButton) {
					row.style.display = 'none';
				}      
			}
			else {
				for (row of DelButton) {
					row.style.display = 'none';
				}
				for (row of SpaceButton) {
					row.style.display = 'block';
				}				
			}
		}
		if (textbox != null) {
			window.setTimeout(function ()
			{   
				textbox.dispatchEvent(event);
				textbox.focus();
			}, 0);
		}		
    }, true);
    
    listItem.addEventListener('mouseup', function (e) {
      clearTimeout(delay);
    });
    
    listItem.addEventListener('mouseout', function (e) {
      clearTimeout(delay);
    });
    
  }
  
}());

// Back button functionality
(function () {
  
  var delay;  
  var longpress = 500;
  var listItems = document.querySelectorAll('.Back');
  var listItem;
  
  for (var i = 0, j = listItems.length; i < j; i++) {
    listItem = listItems[i];
    
    listItem.addEventListener('mousedown', function (e) {
		var _this = this;
		delay = setTimeout(check, longpress);
		
		function check() {
			level = 1;

			// Clear all buttons
			for (row of L1_lower) {
				row.style.display = 'none';
			}
			for (row of L1_upper) {
				row.style.display = 'none';
			}

			for (row of L11_lower) {
				row.style.display = 'none';
			}
			for (row of L12_lower) {
				row.style.display = 'none';
			}
			for (row of L13_lower) {
				row.style.display = 'none';
			}
			for (row of L11_upper) {
				row.style.display = 'none';
			}
			for (row of L12_upper) {
				row.style.display = 'none';
			}
			for (row of L13_upper) {
				row.style.display = 'none';
			}

			for (row of L111_lower) {
				row.style.display = 'none';
			}
			for (row of L112_lower) {
				row.style.display = 'none';
			}
			for (row of L113_lower) {
				row.style.display = 'none';
			}
			for (row of L121_lower) {
				row.style.display = 'none';
			}
			for (row of L122_lower) {
				row.style.display = 'none';
			}
			for (row of L123_lower) {
				row.style.display = 'none';
			}
			for (row of L131_lower) {
				row.style.display = 'none';
			}
			for (row of L132_lower) {
				row.style.display = 'none';
			}
			for (row of L133_lower) {
				row.style.display = 'none';
			}
			for (row of L111_upper) {
				row.style.display = 'none';
			}
			for (row of L112_upper) {
				row.style.display = 'none';
			}
			for (row of L113_upper) {
				row.style.display = 'none';
			}
			for (row of L121_upper) {
				row.style.display = 'none';
			}
			for (row of L122_upper) {
				row.style.display = 'none';
			}
			for (row of L123_upper) {
				row.style.display = 'none';
			}
			for (row of L131_upper) {
				row.style.display = 'none';
			}
			for (row of L132_upper) {
				row.style.display = 'none';
			}
			for (row of L133_upper) {
				row.style.display = 'none';
			}
			
			if (!isCaps) {
				for (row of L1_lower) {
					row.style.display = 'block';
				}
			}
			else {
				for (row of L1_upper) {
					row.style.display = 'block';
				}			
			}
		}
		
		if (textbox != null) {
			window.setTimeout(function ()
			{   
				textbox.dispatchEvent(event);
				textbox.focus();
			}, 0);
		}		
    }, true);
    
    listItem.addEventListener('mouseup', function (e) {
      clearTimeout(delay);
    });
    
    listItem.addEventListener('mouseout', function (e) {
      clearTimeout(delay);
    });
    
  }
  
}());

// Letters and Letter-combination functionality
var isCaps = false;
var detectLongpress_Letters = false;
(function () {
  
  var delay;  
  var longpress = 500;
  var listItems = document.querySelectorAll('.G1,.G2,.G3');
  var listItem;
  
  for (var i = 0, j = listItems.length; i < j; i++) {
    listItem = listItems[i];
    
    listItem.addEventListener('mousedown', function (e) {
		var _this = this;
		delay = setTimeout(check, longpress);
		detectLongpress_Letters = false;
		
		function check() {	
			isCaps = ~isCaps;
			detectLongpress_Letters = true;

			// Clear all buttons
			for (row of L1_lower) {
				row.style.display = 'none';
			}
			for (row of L1_upper) {
				row.style.display = 'none';
			}
			for (row of L11_lower) {
				row.style.display = 'none';
			}
			for (row of L12_lower) {
				row.style.display = 'none';
			}
			for (row of L13_lower) {
				row.style.display = 'none';
			}
			for (row of L11_upper) {
				row.style.display = 'none';
			}
			for (row of L12_upper) {
				row.style.display = 'none';
			}
			for (row of L13_upper) {
				row.style.display = 'none';
			}
			for (row of L111_lower) {
				row.style.display = 'none';
			}
			for (row of L112_lower) {
				row.style.display = 'none';
			}
			for (row of L113_lower) {
				row.style.display = 'none';
			}
			for (row of L121_lower) {
				row.style.display = 'none';
			}
			for (row of L122_lower) {
				row.style.display = 'none';
			}
			for (row of L123_lower) {
				row.style.display = 'none';
			}
			for (row of L131_lower) {
				row.style.display = 'none';
			}
			for (row of L132_lower) {
				row.style.display = 'none';
			}
			for (row of L133_lower) {
				row.style.display = 'none';
			}
			for (row of L111_upper) {
				row.style.display = 'none';
			}
			for (row of L112_upper) {
				row.style.display = 'none';
			}
			for (row of L113_upper) {
				row.style.display = 'none';
			}
			for (row of L121_upper) {
				row.style.display = 'none';
			}
			for (row of L122_upper) {
				row.style.display = 'none';
			}
			for (row of L123_upper) {
				row.style.display = 'none';
			}
			for (row of L131_upper) {
				row.style.display = 'none';
			}
			for (row of L132_upper) {
				row.style.display = 'none';
			}
			for (row of L133_upper) {
				row.style.display = 'none';
			}
			
			// Update interface based on the current state
			if (!isCaps) {
				if (level == 1) {
					for (row of L1_lower) {
						row.style.display = 'block';
					}
				}
				else if (level == 2) {
					if (selected_level2 == 1) {
						for (row of L11_lower) {
							row.style.display = 'block';
						}
					}
					else if (selected_level2 == 2) {
						for (row of L12_lower) {
							row.style.display = 'block';
						}
					}
					else if (selected_level2 == 3) {
						for (row of L13_lower) {
							row.style.display = 'block';
						}
					}
				}		
				else if (level == 3) {
					if (selected_level2 == 1) {
						if (selected_level3 == 1) {				
							for (row of L111_lower) {
								row.style.display = 'block';
							}
						}
						else if (selected_level3 == 2) {				
							for (row of L112_lower) {
								row.style.display = 'block';
							}
						}
						else if (selected_level3 == 3) {				
							for (row of L113_lower) {
								row.style.display = 'block';
							}
						}
					}
					else if (selected_level2 == 2) {
						if (selected_level3 == 1) {				
							for (row of L121_lower) {
								row.style.display = 'block';
							}
						}
						else if (selected_level3 == 2) {				
							for (row of L122_lower) {
								row.style.display = 'block';
							}
						}
						else if (selected_level3 == 3) {				
							for (row of L123_lower) {
								row.style.display = 'block';
							}
						}
					}
					if (selected_level2 == 3) {
						if (selected_level3 == 1) {				
							for (row of L131_lower) {
								row.style.display = 'block';
							}
						}
						else if (selected_level3 == 2) {				
							for (row of L132_lower) {
								row.style.display = 'block';
							}
						}
						else if (selected_level3 == 3) {				
							for (row of L133_lower) {
								row.style.display = 'block';
							}
						}
					}
				}
			} else {
				if (level == 1) {
					for (row of L1_upper) {
						row.style.display = 'block';
					}
				}
				else if (level == 2) {
					if (selected_level2 == 1) {
						for (row of L11_upper) {
							row.style.display = 'block';
						}
					}
					else if (selected_level2 == 2) {
						for (row of L12_upper) {
							row.style.display = 'block';
						}
					}
					else if (selected_level2 == 3) {
						for (row of L13_upper) {
							row.style.display = 'block';
						}
					}
				}		
				else if (level == 3) {
					if (selected_level2 == 1) {
						if (selected_level3 == 1) {				
							for (row of L111_upper) {
								row.style.display = 'block';
							}
						}
						else if (selected_level3 == 2) {				
							for (row of L112_upper) {
								row.style.display = 'block';
							}
						}
						else if (selected_level3 == 3) {				
							for (row of L113_upper) {
								row.style.display = 'block';
							}
						}
					}
					else if (selected_level2 == 2) {
						if (selected_level3 == 1) {				
							for (row of L121_upper) {
								row.style.display = 'block';
							}
						}
						else if (selected_level3 == 2) {				
							for (row of L122_upper) {
								row.style.display = 'block';
							}
						}
						else if (selected_level3 == 3) {				
							for (row of L123_upper) {
								row.style.display = 'block';
							}
						}
					}
					if (selected_level2 == 3) {
						if (selected_level3 == 1) {				
							for (row of L131_upper) {
								row.style.display = 'block';
							}
						}
						else if (selected_level3 == 2) {				
							for (row of L132_upper) {
								row.style.display = 'block';
							}
						}
						else if (selected_level3 == 3) {				
							for (row of L133_upper) {
								row.style.display = 'block';
							}
						}
					}
				}
			}
			
		}
		if (textbox != null) {
			window.setTimeout(function ()
			{   
				textbox.dispatchEvent(event);
				textbox.focus();
			}, 0);
		}		
    }, true);
    
    listItem.addEventListener('mouseup', function (e) {
      clearTimeout(delay);
    });
    
    listItem.addEventListener('mouseout', function (e) {
      clearTimeout(delay);
    });
    
  }
  
}());

// Text Box update functionality
function pressKey(key) {
	
	// Text Box Update - DEL, Space
	if (detectLongpress_Del == false) {
		if (textbox != null && key != 'Back') {
			if (key == 'DEL') {
				textbox.value = textbox.value.substring(0, textbox.value.length - 1);
			}
			else if (key == 'SPACE') {
				textbox.value += ' ';
			}
		}
	}

	// Text Box Update - Single letters
	if (detectLongpress_Letters == false) {
		if (textbox != null && key != 'Back' && key != 'DEL' && key != 'SPACE') {
			if (level == 3) {
				textbox.value += key;
			}
		}
	}
	
	// Back button functionality
	if (key == 'Back') {
		if (level == 2)
			level = 1;
		else if (level == 3)
			level = 2;
	}


	if (detectLongpress_Letters == false) {
		// When Letter combinations are pressed 
		if (level == 1) {
			if (key == 'a - i' || key == 'A - I') {
				level = 2;
				selected_level2 = 1;
			}
			else if (key == 'j - r' || key == 'J - R') {
				level = 2;
				selected_level2 = 2;
			}
			else if (key == 's - z' || key == 'S - Z') {
				level = 2;
				selected_level2 = 3;
			}
		}
		else if (level == 2) {
			if (selected_level2 == 1) {
				if (key == 'abc' || key == 'ABC') {
					level = 3;
					selected_level3 = 1;
				}
				else if (key == 'def' || key == 'DEF') {
					level = 3;
					selected_level3 = 2;				
				}
				else if (key == 'ghi' || key == 'GHI') {
					level = 3;
					selected_level3 = 3;
				}
			}
			else if (selected_level2 == 2) {
				if (key == 'jkl' || key == 'JKL') {
					level = 3;
					selected_level3 = 1;
				}
				else if (key == 'mno' || key == 'MNO') {
					level = 3;
					selected_level3 = 2;				
				}
				else if (key == 'pqr' || key == 'PQR') {
					level = 3;
					selected_level3 = 3;
				}
			}
			else if (selected_level2 == 3) {
				if (key == 'stu' || key == 'STU') {
					level = 3;
					selected_level3 = 1;
				}
				else if (key == 'vwx' || key == 'VWX') {
					level = 3;
					selected_level3 = 2;				
				}
				else if (key == 'yz.' || key == 'YZ,') {
					level = 3;
					selected_level3 = 3;
				}
			}
		}
	}

	// Clear all buttons
	for (row of L1_lower) {
		row.style.display = 'none';
	}
	for (row of L1_upper) {
		row.style.display = 'none';
	}

	for (row of L11_lower) {
		row.style.display = 'none';
	}
	for (row of L12_lower) {
		row.style.display = 'none';
	}
	for (row of L13_lower) {
		row.style.display = 'none';
	}
	for (row of L11_upper) {
		row.style.display = 'none';
	}
	for (row of L12_upper) {
		row.style.display = 'none';
	}
	for (row of L13_upper) {
		row.style.display = 'none';
	}

	for (row of L111_lower) {
		row.style.display = 'none';
	}
	for (row of L112_lower) {
		row.style.display = 'none';
	}
	for (row of L113_lower) {
		row.style.display = 'none';
	}
	for (row of L121_lower) {
		row.style.display = 'none';
	}
	for (row of L122_lower) {
		row.style.display = 'none';
	}
	for (row of L123_lower) {
		row.style.display = 'none';
	}
	for (row of L131_lower) {
		row.style.display = 'none';
	}
	for (row of L132_lower) {
		row.style.display = 'none';
	}
	for (row of L133_lower) {
		row.style.display = 'none';
	}
	for (row of L111_upper) {
		row.style.display = 'none';
	}
	for (row of L112_upper) {
		row.style.display = 'none';
	}
	for (row of L113_upper) {
		row.style.display = 'none';
	}
	for (row of L121_upper) {
		row.style.display = 'none';
	}
	for (row of L122_upper) {
		row.style.display = 'none';
	}
	for (row of L123_upper) {
		row.style.display = 'none';
	}
	for (row of L131_upper) {
		row.style.display = 'none';
	}
	for (row of L132_upper) {
		row.style.display = 'none';
	}
	for (row of L133_upper) {
		row.style.display = 'none';
	}

	// Update interface based on the current state
	if (!isCaps) {
		if (level == 1) {
			for (row of L1_lower) {
				row.style.display = 'block';
			}
		}
		else if (level == 2) {
			if (selected_level2 == 1) {
				for (row of L11_lower) {
					row.style.display = 'block';
				}
			}
			else if (selected_level2 == 2) {
				for (row of L12_lower) {
					row.style.display = 'block';
				}
			}
			else if (selected_level2 == 3) {
				for (row of L13_lower) {
					row.style.display = 'block';
				}
			}
		}		
		else if (level == 3) {
			if (selected_level2 == 1) {
				if (selected_level3 == 1) {				
					for (row of L111_lower) {
						row.style.display = 'block';
					}
				}
				else if (selected_level3 == 2) {				
					for (row of L112_lower) {
						row.style.display = 'block';
					}
				}
				else if (selected_level3 == 3) {				
					for (row of L113_lower) {
						row.style.display = 'block';
					}
				}
			}
			else if (selected_level2 == 2) {
				if (selected_level3 == 1) {				
					for (row of L121_lower) {
						row.style.display = 'block';
					}
				}
				else if (selected_level3 == 2) {				
					for (row of L122_lower) {
						row.style.display = 'block';
					}
				}
				else if (selected_level3 == 3) {				
					for (row of L123_lower) {
						row.style.display = 'block';
					}
				}
			}
			if (selected_level2 == 3) {
				if (selected_level3 == 1) {				
					for (row of L131_lower) {
						row.style.display = 'block';
					}
				}
				else if (selected_level3 == 2) {				
					for (row of L132_lower) {
						row.style.display = 'block';
					}
				}
				else if (selected_level3 == 3) {				
					for (row of L133_lower) {
						row.style.display = 'block';
					}
				}
			}
		}
	} else {
		if (level == 1) {
			for (row of L1_upper) {
				row.style.display = 'block';
			}
		}
		else if (level == 2) {
			if (selected_level2 == 1) {
				for (row of L11_upper) {
					row.style.display = 'block';
				}
			}
			else if (selected_level2 == 2) {
				for (row of L12_upper) {
					row.style.display = 'block';
				}
			}
			else if (selected_level2 == 3) {
				for (row of L13_upper) {
					row.style.display = 'block';
				}
			}
		}		
		else if (level == 3) {
			if (selected_level2 == 1) {
				if (selected_level3 == 1) {				
					for (row of L111_upper) {
						row.style.display = 'block';
					}
				}
				else if (selected_level3 == 2) {				
					for (row of L112_upper) {
						row.style.display = 'block';
					}
				}
				else if (selected_level3 == 3) {				
					for (row of L113_upper) {
						row.style.display = 'block';
					}
				}
			}
			else if (selected_level2 == 2) {
				if (selected_level3 == 1) {				
					for (row of L121_upper) {
						row.style.display = 'block';
					}
				}
				else if (selected_level3 == 2) {				
					for (row of L122_upper) {
						row.style.display = 'block';
					}
				}
				else if (selected_level3 == 3) {				
					for (row of L123_upper) {
						row.style.display = 'block';
					}
				}
			}
			if (selected_level2 == 3) {
				if (selected_level3 == 1) {				
					for (row of L131_upper) {
						row.style.display = 'block';
					}
				}
				else if (selected_level3 == 2) {				
					for (row of L132_upper) {
						row.style.display = 'block';
					}
				}
				else if (selected_level3 == 3) {				
					for (row of L133_upper) {
						row.style.display = 'block';
					}
				}
			}
		}
	}

}

function selectTextbox(newTextbox) {
	textbox = newTextbox;
}
