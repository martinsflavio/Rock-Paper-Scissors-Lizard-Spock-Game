$(document).ready(function () {

	// Start Btn
	$$.btnStart.on('click', function (e) {
		e.preventDefault();

		var playerName = $$.nameInput.val().trim();

		if (playerName !== ''){
			fb.playerInit(playerName);
			fb.listenToTable(fb.tableRef);

			// store opponent's key locally
			fb.tableRef.once('value', function (tablesSnap) {
				tablesSnap.forEach(function (thisTableSnap) {
					if(thisTableSnap.key !== fb.playerKey){
						fb.opponentKey = thisTableSnap.key;
						fb.opponentRef = fb.tableRef.child(thisTableSnap.key);
					}
				});
			}).catch(function(err) {
				console.log('Unable to access Game-Table!', err);
			});

		}
	});
});

