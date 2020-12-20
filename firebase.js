  var button1 = document.getElementById("addBtn");
  var park1 =  document.getElementById('Park2');
  var park2 =  document.getElementById('Park3');
  var parkNumber =  document.getElementById('ParkNumber');

  var firebaseConfig = {
    apiKey: "AIzaSyDGDVFjqrizPzmpn_4ldztnGlamWnmyYeo",
    authDomain: "car-parking-2b1e9.firebaseapp.com",
    databaseURL: "https://car-parking-2b1e9-default-rtdb.firebaseio.com",
    projectId: "car-parking-2b1e9",
    storageBucket: "car-parking-2b1e9.appspot.com",
    messagingSenderId: "245233583457",
    appId: "1:245233583457:web:0612654a82e857b124b120"
  };
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

 

 database.ref('/park/park1').on('value', snapshot => {
 	var static = snapshot.val();
 	if (static == true)  {
		park1.style.backgroundColor = "red";
 	} else {
		park1.style.backgroundColor = "white";
 	}
 });

database.ref('/park/park2').on('value', snapshot => {
 	var static = snapshot.val();
 	if (static == true)  {
 		park2.style.backgroundColor = "red";
 	} else {
		park2.style.backgroundColor = "white";
 	}
 });

database.ref('/park').on('value', snapshot => {
	var count = 0;
	var value;
	snapshot.forEach(function(snapshot){
		value =  snapshot.val();
		if( value == false) {
			count++;
		}
	});
	parkNumber.innerText = count;
})
	