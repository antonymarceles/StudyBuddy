Titanium.include('dbFunctions.js');
Titanium.include('tutorList.js');

var tabGroup = Titanium.UI.createTabGroup({id:'tabGroup1'});

var tab1 = Titanium.UI.createTab({
	id:'tab1',
	window:win
});

sss

test for pull 1

test

test 2

var win = Titanium.UI.createWindow({  
    title:'',
    backgroundColor:'#fff'
});

var view = Titanium.UI.createView({
	tile:'View',
});

//win.backgroundColor = 'black';
var tutorAppLabel = Ti.UI.createLabel({
	text:'Tutor App',
	top:6,
	textAlign:'center',
	color:'black',
	font:{fontSize:28}
});

view.add(tutorAppLabel);
var subject = Ti.UI.createPicker({top:40, left:60, height:40});
var data = [];
var subjects =  ['Physics','Biology','Maths','English'];
var subjectIds =  ['01','02','03','04'];
var grades = ['1st','2nd','3rd','4th'];
var topicForPhysics = ['Kinetics','Mechancis'];
var topicidsForPhysics = ['001','002'];
var topicForBiology = ['Botany','Zoology'];
var topicIdsForBiology = ['003','004'];
var topicForMaths = ['Integration','Algebra'];
var topicIdsForMaths = ['005','006'];
var topicForEnglish = ['Literature','Poems'];
var topicIdsForEnglish = ['007','008'];

for (var i=0; i < subjects.length; i++) {
  data[i]=Ti.UI.createPickerRow({title:subjects[i],subjectid:subjectIds[i]});
};


// turn on the selection indicator (off by default)
subject.selectionIndicator = true;

subject.add(data);
view.add(subject);

var grade = Ti.UI.createPicker({top:140, left:60, height:40});

var grad = [];

for (var i=0; i < grades.length; i++) {
  grad[i]=Ti.UI.createPickerRow({title:grades[i]});
};

// turn on the selection indicator (off by default)
grade.selectionIndicator = true;

grade.add(grad);
view.add(grade);

var topic = Ti.UI.createPicker({top:90, left:60, height:40});
var topicRow = [];
for (var i=0; i < topicForBiology.length; i++) {
	topicRow[i]=Ti.UI.createPickerRow({title:topicForPhysics[i], topicid:topicidsForPhysics[i]});
}
topic.selectionIndicator = true;
topic.add(topicRow);
view.add(topic);

subject.addEventListener('change',function(e)
{
	if(subject.getSelectedRow(0).title == 'Biology') {
		
		var _col = topic.columns[0];
    	var len = _col.rowCount;
    	for(var x = len-1; x >= 0; x-- ){
        	var _row = _col.rows[x]
        	_col.removeRow(_row);
    	}
    	
    	for (var i=0; i < topicForBiology.length; i++) {
  			topicRow[i]=Ti.UI.createPickerRow({title:topicForBiology[i], topicid:topicIdsForBiology[i]});
		};
    	
		topic.add(topicRow);

		
	} else if(subject.getSelectedRow(0).title == 'Maths') {
		
		var _col = topic.columns[0];
    	var len = _col.rowCount;
    	for(var x = len-1; x >= 0; x-- ){
        	var _row = _col.rows[x]
        	_col.removeRow(_row);
    	}
    	
    	for (var i=0; i < topicForMaths.length; i++) {
  			topicRow[i]=Ti.UI.createPickerRow({title:topicForMaths[i], topicid:topicIdsForMaths[i]});
		};
    	
		topic.add(topicRow);
		
		
	} else if(subject.getSelectedRow(0).title == 'English') {
		
		var _col = topic.columns[0];
    	var len = _col.rowCount;
    	for(var x = len-1; x >= 0; x-- ){
        	var _row = _col.rows[x]
        	_col.removeRow(_row);
    	}
    	
    	for (var i=0; i < topicForEnglish.length; i++) {
  			topicRow[i]=Ti.UI.createPickerRow({title:topicForEnglish[i], topicid:topicIdsForEnglish[i]});
		};
    	
		
		topic.add(topicRow);
		
	} else if(subject.getSelectedRow(0).title == 'Physics') {
		
		var _col = topic.columns[0];
    	var len = _col.rowCount;
    	for(var x = len-1; x >= 0; x-- ){
        	var _row = _col.rows[x]
        	_col.removeRow(_row);
    	}
    	
    	for (var i=0; i < topicForPhysics.length; i++) {
  			topicRow[i]=Ti.UI.createPickerRow({title:topicForPhysics[i], topicid:topicidsForPhysics[i]});
		};
    	
		topic.add(topicRow);
		
		
	} 

});

view.add(topic);

var zipcode = Titanium.UI.createTextField({top:190, left:60, width:80, height:40});

view.add(zipcode);

var checkBox = Titanium.UI.createSwitch({top:240,style:Titanium.UI.Android.SWITCH_STYLE_CHECKBOX,value:false,left:60, height:30})

view.add(checkBox);
var findTutorButton = Titanium.UI.createButton({top:300,width:140, height:50, title:'Find a Tutor'})

view.add(findTutorButton);

win.add(view);

findTutorButton.addEventListener('click',function(){
	//alert(zipcode.value);
	var s = db(subject.getSelectedRow(0).subjectid,topic.getSelectedRow(0).topicid,grade.getSelectedRow(0).title, zipcode.value);
	//var s = db(subject.getSelectedRow(0).subjectid,zipcode.getValue);
	
	var tutordata = createList(s);
		
	var tableview = Titanium.UI.createTableView({
	data:tutordata
});

var win1 = Titanium.UI.createWindow({  
    title:'Search Results',
    backgroundColor:'#fff'
});

win1.add(tableview);

var tab2 = Titanium.UI.createTab({
	id:'tab1',
	window:win1
});
tabGroup.addTab(tab2);
tab2.open(win1,{animated:true});
	//alert(s);
});

tabGroup.addTab(tab1);
tab1.open(win,{animated:true});




