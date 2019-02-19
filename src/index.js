var countdown = require('./countdown');

countdown.setLabels(
	' Millisekunde| Sekunde| Minute| Stunde| Tag| Woche| Monat| année| décennie| siècle| millénaire',
	' Millisekunden| Sekunden| Minuten| Stunden| Tagen| Wochen| Monate| années| décennies| siècles| millénaires',
	', ',
	', ',
	'BEENDET');

var timerId =
  countdown(
    new Date(2019, 2, 9, 19, 30), (ts) => {
			if(ts.value < 0)
				document.querySelector('#pageTimer').innerHTML =  'Start in <br>' + ts.toString().replace(/,/g, "<br>");

    	else
				document.querySelector('#pageTimer').innerHTML = "Die <br>TENSING<br> Show<br> findet<br>statt"
		},
		countdown.MONTHS|countdown.WEEKS|countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);
