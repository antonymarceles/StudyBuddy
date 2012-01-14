		
	function createList(s)	{
	var data = [];
	for (var i =  0; i < s.length; i++) {
		var row = Titanium.UI.createTableViewRow();
		
		var title = Titanium.UI.createLabel({
		text:s[i][0].name,
		font:{fontSize:16,fontWeight:'bold'},
		width:'auto',
		textAlign:'left',top:0, left:40
		});
		
		var rate =  Titanium.UI.createLabel({
		text:'Rate '+s[i][0].rate,
		font:{fontSize:16,fontWeight:'bold'},
		width:'auto',
		textAlign:'left' ,top:20, left:40
		});
		
		var rating =  Titanium.UI.createLabel({
		text:'Rating '+s[i][0].rating,
		font:{fontSize:16,fontWeight:'bold'},
		width:'auto',
		textAlign:'left', top:40, left:40
		});
		
		var img =  Titanium.UI.createImageView({
		//image:'http://www.liberalbaptistrev.com/wp-content/uploads/2010/04/compass.jpg',
		image:'/images/default.png',
		width:'30', height:'60',
		left:4,
		top:0
		});
		
		var button = Titanium.UI.createButton({
				top:40, left:140, width:'70', height:'30', title:'more'
			})
			button.addEventListener('click',function(){
				alert('hi');
			});
			
			row.add(title);
			row.add(rating);
			row.add(rate);
			row.add(img);
			row.add(button);
			data.push(row);
	}	
	
	return data;
 }