
function db(subject, topic, grade, zipcode) {
	
	var db = Titanium.Database.open('StudyBuddyDB');
	db.execute('CREATE TABLE  IF NOT EXISTS TUTOR (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL, ZIP_CODE TEXT, PHONE_NBR TEXT, EMAIL TEXT, QUALIFICATION TEXT, EXPERIENCE TEXT, EXPERTISE TEXT, RATE TEXT, HIRE_COUNT TEXT, RATING TEXT, TOPIC_ID TEXT, SUBJECT_ID TEXT, GRADE TEXT)');
	db.execute('delete FROM TUTOR');
	var rows = db.execute('SELECT * FROM TUTOR');
	
	if(!rows.isValidRow()){
		db.execute('INSERT INTO TUTOR (NAME , ZIP_CODE , PHONE_NBR, EMAIL, QUALIFICATION, EXPERIENCE, EXPERTISE, RATE, HIRE_COUNT, RATING, TOPIC_ID, SUBJECT_ID, GRADE ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)','Joe','1234','812109381078','joe.d@xyz.com','Msc','Maths','150', '10','4','***','001','01','1st');
		db.execute('INSERT INTO TUTOR (NAME , ZIP_CODE , PHONE_NBR, EMAIL, QUALIFICATION, EXPERIENCE, EXPERTISE, RATE, HIRE_COUNT, RATING, TOPIC_ID, SUBJECT_ID, GRADE ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)','George','1234','812109381078','joe.d@xyz.com','Msc','Maths','150', '20','4','****','001','01','1st');
		db.execute('INSERT INTO TUTOR (NAME , ZIP_CODE , PHONE_NBR, EMAIL, QUALIFICATION, EXPERIENCE, EXPERTISE, RATE, HIRE_COUNT, RATING, TOPIC_ID, SUBJECT_ID, GRADE ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)','John','9876','812109381078','joe.d@xyz.com','Msc','Maths','150', '10','4','**','006','03','3rd');
		db.execute('INSERT INTO TUTOR (NAME , ZIP_CODE , PHONE_NBR, EMAIL, QUALIFICATION, EXPERIENCE, EXPERTISE, RATE, HIRE_COUNT, RATING, TOPIC_ID, SUBJECT_ID, GRADE ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)','Bruce','9876','812109381078','joe.d@xyz.com','Msc','Maths','150', '40','4','*****','006','03','3rd');
		db.execute('INSERT INTO TUTOR (NAME , ZIP_CODE , PHONE_NBR, EMAIL, QUALIFICATION, EXPERIENCE, EXPERTISE, RATE, HIRE_COUNT, RATING, TOPIC_ID, SUBJECT_ID, GRADE ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)','Jerry','9876','812109381078','joe.d@xyz.com','Msc','Maths','150', '20','4','***','006','03','3rd');
		db.execute('INSERT INTO TUTOR (NAME , ZIP_CODE , PHONE_NBR, EMAIL, QUALIFICATION, EXPERIENCE, EXPERTISE, RATE, HIRE_COUNT, RATING, TOPIC_ID, SUBJECT_ID, GRADE ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)','Annie','1357','812109381078','joe.d@xyz.com','Msc','Maths','150', '30','4','****','003','02','4th');
		
	}
	var rows1 = db.execute('SELECT * FROM TUTOR where SUBJECT_ID = ? and TOPIC_ID = ? and GRADE = ? and ZIP_CODE = ?',subject,topic,grade,zipcode);
	var tutors = [];
	var i = 0;
	while (rows1.isValidRow())
	{   
		//Ti.API.info('ID: ' + rows.field(0) + ' NAME: ' + rows.fieldByName('NAME'));
		tutors.push([{title:rows1.fieldByName('NAME'),name:rows1.fieldByName('NAME'),rating:rows1.fieldByName('RATING'),rate:rows1.fieldByName('RATE')}]);
		rows1.next();
		i++;
	}
	
	return tutors;
}