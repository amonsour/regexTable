$(document).ready(function() {
	
	$('#colsNum').on('change', function() {
		$this = this.value;
		var $colChange = $('#colChange');
		var str="", foo;
		if ($this <= 3) foo = 4;
		else if ($this > 3 && $this <= 6) foo = 2;
		else if ($this > 6 && $this <= 12) foo = 1;
		
		if ($this == '') $colChange.empty().append("Please input the number of columns");
		else {
			for (i = 1; i <= $this; i++) {
				str += "<div class='mrgn-tp-sm col-xs-" + foo + "'>" + i + "<br><select class='form-control' id='col" + i + "'><option label='Default' selected></option>";
				for (n = 1; n <= 12; n++) { str += "<option value='" + n + "'>" + n + "</option>"; }
				str += "</select></div>";
			}
			str += "<div class='clearfix'></div>";
			$colChange.empty().append(str);
		}
	});
	
	$(window).on("load", function(){
	  $('#colsNum').change();	
	});
	
	$( "form" ).submit(function( e ) {
		//Cancels default submission
		e.preventDefault();
		
		//Variables
		var $rows = $('#rowsNum');
		var $cols = $('#colsNum');
		var $emptyRow = $('#emptyRow');
		var $colNum = $('#colNum');
		var $rowNum = $('#rowNum');
		var $find = $('.lineFind');
		var $replace = $('.lineReplace');
		var $error = $('#errorReport');
		var $textRight = $("#lastCheckbox");
		var $nonBreak = $("#breakCheckbox");
		var rVal = $rows.val();
		var cVal = $cols.val();
		var emptyRow = $emptyRow.val();
		var row = "<tr>\\s*</tr>\\s*";
		var emptyr = "(<tr>\\s*<td.*?>\\s*</td>\\s*</tr>\\s*)*"
		var col = "<td.*?>\\s*(.*?)\\s*</td>\\s*";
		var repBeg = '<div class="row mrgn-bttm-md mrgn-tp-md mrgn-lft-0 mrgn-rght-0 brdr-tp brdr-bttm brdr-lft brdr-rght">\n\n';
		var repEnd = '</div>';
		var repRow = '<div class="clearfix"></div>\n\n';
		var repCol = '<div class="mrgn-tp-md col-xs-4">$1</div>\n';
		var rTemp = "", cTemp = "";
		var fNum = 0;
		
		for (var i=1; i <= cVal; i++ ) {
			colVal = ( $('#col' + i).val() * 1 );
			if ( colVal === 0) {
				if (cVal < 7) colVal = 2;
				else colVal = 1;
			}
			fNum += colVal;
		}
		
		if (fNum > 12) {
			$find.empty();
			$replace.empty();
			$error.empty().append('<p><strong>You have inputted an amalgamated column size of over 12; Please lower the size.</strong></p>');			
			$('#errorReport').gotoAnchor();
		}
		else {
			//Declarations
			$error.css('color', 'red');
			
			if (rVal != '' && cVal != '') {
				$error.empty();
				//Find
				for ( var i = 1; i <= rVal; i++ ) { if ( i==emptyRow ) { rTemp += emptyr; } else rTemp += row; }
				for ( var i = 1; i <= cVal; i++ ) { cTemp += col; }
				cTemp += '</tr>\\s';
				var final = '<table.*?>\\s*' + rTemp.replace(/<\/tr>\\s(?!\*\)\*)/g, cTemp) + '</table>';
				$find.text(final);
				
				//Replace
				var rTemp = "", cTemp = "", colVal = 0;
				var cntr=1;
				for ( var i = 1; i <= rVal; i++ ) { 
					cTemp = "";
					for ( var k = 1; k <= cVal; k++ ) { 
						colVal = ( $('#col' + k).val() * 1 );
						if ( colVal === 0) {
							if (cVal < 7) colVal = 2;
							else colVal = 1;
						}
						if (i != emptyRow) { 
							if (k == cVal) {
								if ($textRight.prop('checked') && $nonBreak.prop('checked')) { cTemp += repCol.replace(/\$1/g, '&amp;nbsp;').replace(/xs-4/g, 'xs-' + colVal + ' text-right'); }
								else if ($textRight.prop('checked') && !$nonBreak.prop('checked')) { cTemp += repCol.replace(/\$1/g, '$'+cntr).replace(/xs-4/g, 'xs-' + colVal + ' text-right'); }
								else if ($nonBreak.prop('checked')) { cTemp += repCol.replace(/\$1/g, '&amp;nbsp;').replace(/xs-4/g, 'xs-' + colVal); }
								else { cTemp += repCol.replace(/\$1/g, '$'+cntr).replace(/xs-4/g, 'xs-' + colVal); }
							}
							else { 
								if ($nonBreak.prop('checked')) {cTemp += repCol.replace(/\$1/g, '&amp;nbsp;').replace(/xs-4/g, 'xs-' + colVal); }
								else { cTemp += repCol.replace(/\$1/g, '$'+cntr).replace(/xs-4/g, 'xs-' + colVal); }
							}
							cntr += 1;
						}
						else { if ( k==1) cntr += 1; }
					}
					if ( i != emptyRow) cTemp += '<div class="clearfix"></div>\n\n';
					
					if (i==1 && rVal==1) rTemp += repRow.replace(/<div class="clearfix"><\/div>\n\n/g, cTemp).replace(/mrgn-tp-md/g, 'mrgn-tp-md mrgn-bttm-md');
					else if (i==1) rTemp += repRow.replace(/<div class="clearfix"><\/div>\n\n/g, cTemp);
					else if (i==rVal) rTemp += repRow.replace(/<div class="clearfix"><\/div>\n\n/g, cTemp).replace(/mrgn-tp-md/g, 'mrgn-tp-sm mrgn-bttm-md');
					else rTemp += repRow.replace(/<div class="clearfix"><\/div>\n\n/g, cTemp).replace(/md/g, 'sm');
				}
				
				var final = repBeg + rTemp + repEnd;
				final = final.replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\n/g, '<br />');
				$replace.empty().append(final);
			}
			else {
				$find.empty();
				$replace.empty();
				$error.empty().append('<p><strong>Please input both:</strong><br /><ul><li>Number of rows; and</li><li>Number of columns</li></ul></p>');			
				$('#errorReport').gotoAnchor();
			}
		}

	});
	
});

$.fn.gotoAnchor = function(anchor) {
	location.href = this.selector;
}