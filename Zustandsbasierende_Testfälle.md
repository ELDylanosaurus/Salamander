Testfälle, die den Zustand überprüfen

Unerlaubter Spielzug: negativer Test.

Vorbedingung:

Das Spiel ist am Anfang. Spieler 1 hat Züge an folgenden Positionen: [2, 3], [3, 2], [4, 5] und [5, 4]. Alle anderen Felder gelten als ungültig.

Ereignis:

Spieler 1 versucht, einen Stein auf Position [0,1] zu setzen. Dieser Zug gilt nicht.

Das ist die richtige Reaktion.

Die Methode "Board.play" bricht ab und zeigt eine Fehlermeldung.

Nachbedingung:

Der Spielzustand bleibt erhalten. Es wird nichts verändert.

Hier ist ein erlaubter Spielzug:

Das Brett ist am Anfang. Spieler 1 kann an folgenden Positionen gültige Züge machen: [2, 3], [3, 2], [4, 5] und [5, 4].

Ereignis:

Spieler 1 setzt einen Stein auf Position [3,2].

Das ist die richtige Reaktion.

"Board.play" erzeugt ein neues Board-Objekt. Der gesetzte Stein kommt auf [3, 2]. Die gegnerischen Steine werden auf der Linie zwischen [3, 2] und [3, 3] in die Farbe von Spieler 1 gedreht.

Nachbedingung:

Das neue Brett zeigt den aktuellen Stand.

Der neue Stein ist da.

Die Steine sind umgedreht.

Die Spielreihenfolge wurde korrekt fortgesetzt.

Der neue Zustand wird als neues Board-Objekt gespeichert und ersetzt das alte.