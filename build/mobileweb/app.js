var win = Ti.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
//win.backgroundColor = 'black';
var tutorAppLabel = Ti.UI.createLabel({
	text:'Tutor App',
	top:6,
	textAlign:'center',
	color:'black',
	font:{fontSize:28}
});
win.add(tutorAppLabel);
var subject = Ti.UI.createPicker({top:45});

var data = [];
data[0]=Ti.UI.createPickerRow({title:'Physics',custom_item:'b'});
data[1]=Ti.UI.createPickerRow({title:'Chemistry',custom_item:'s'});
data[2]=Ti.UI.createPickerRow({title:'Mathematics',custom_item:'m'});
data[3]=Ti.UI.createPickerRow({title:'English',custom_item:'g'});

// turn on the selection indicator (off by default)
subject.selectionIndicator = true;

subject.add(data);
win.add(subject);

var grade = Ti.UI.createPicker();

var grad = [];
grad[0]=Ti.UI.createPickerRow({title:'1st'});
grad[1]=Ti.UI.createPickerRow({title:'2nd'});
grad[2]=Ti.UI.createPickerRow({title:'3rd'});
grad[3]=Ti.UI.createPickerRow({title:'4th'});

// turn on the selection indicator (off by default)
grade.selectionIndicator = true;

grade.add(data);
subject.addEventListener('change',function(e)
{
	grad[0]=Ti.UI.createPickerRow({title:'5st'});
	grad[1]=Ti.UI.createPickerRow({title:'6nd'});
	grad[2]=Ti.UI.createPickerRow({title:'7rd'});
	grad[3]=Ti.UI.createPickerRow({title:'8th'});
	grade.reloadColumn(grad);
});
win.add(grade);
win.open();

;