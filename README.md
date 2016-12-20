:shipit:
# DHBW-Heidenheim / Webprojekt / Foot2Afrika / Gruppe A3

[Foot to Afrika - Fundraising Tour Deutschland](http://www.wwi16a3.projekt.dhbw-heidenheim.de/)

## Projektdokumentation

###   1.  Vorstellung des Webprojekts
####  1.1 Projektbeschreibung

Die Aufgabe in diesem Projekt ist es, sich mit der Erstellung einer statischen Website auseinanderzusetzen. 
Inhaltlich befasst sich unsere Website mit der Foot2Afrika Fundraising Tour, die jährlich in Deutschland stattfindet, um einerseits Spenden zu sammeln und andererseits über die Situation in Tansania aufmerksam zu machen.
Mit der Website möchten wir Interessenten eine schnelle, kurze, aber ausreichende Übersicht über das Thema Fundraising bieten. Außerdem findet man alle anstehende Tour Termine in unserem Kalender. 
Neben der Fundraising our möchten wir ebenfalls die hinter der Veranstaltung steckende Organisation „Foot2Afrika“ und ihre Arbeit vorstellen.
Sollten trotzdem Unklarheiten auftreten, bietet unsere FAQ eine Reihe von oft gestellten Fragen und ihre Antworten dazu. Außerdem ist es dem User möglich durch das Kontaktformular sein Anliegen zu senden.
Nach Abschluss des Projekts soll die Website auch für weitere darauffolgende Touren in den kommenden Jahren Informationen zu den Terminen bieten.

####  1.2 Projektumfang

Bei der Erstellung einer statischen Website muss berücksichtig werden, dass diese mindestens vier unterscheidbare, bedeutsame und gehaltvolle Seiten beinhalten soll. 
Zuvor muss sowohl ein Projektplan, als auch verschiedene Wireframes eingereicht werden.
Unsere Arbeit soll darüber hinaus „responsive“ sein. Damit ist gemeint, dass die Website auf verschiedenen Browser und Geräten, wie zum Beispiel Mobiltelefone und Tablets, funktionieren soll.

####  1.3 Projektplan und Ablauf des Projekts

Zu Beginn des Webprojekts war die Erstellung unseres Projektplans eins der wichtigsten Schritte in unserer  Vorgehensweise. Der Plan beinhaltete wichtige Punkte und Aufgaben für das Projekt, und noch wichtiger die Abgabefristen. Dadurch hatte jeder in der Gruppe eine allgemeine Übersicht über die anstehende Arbeit. Es war uns ebenfalls wichtig, dass jeder die Zeit im Überblick hatte. Auch die Aufgabenverteilung wurde schnell getroffen, sodass keine Zeit verloren ging und man parallel arbeiten konnte. Dies ersparte uns eine Menge Mühe und man verhinderte dadurch Doppelarbeiten.

(Wenn mir was einfällt, ergänze ich alles nach und nach und fülle den Inhalt)

Den Projektplan findet man im Anhang …

###   2.  Planung, Informationsbeschaffung, Übersetzung, Bearbeitung
####  2.2 Planung

Als Hilfsmittel zu einer korrekten Planung haben wir Wireframes, ein Storyboard und den grafischen Aufbau der Webseitenstruktur genutzt (siehe Anhang). Ausserdem haben wir uns intensiv mit der Foot-2Afrika-Webseite und den Informationen die wir zusätzlich noch erhalten oder im Internet gefunden haben auseinandergesetzt.   
####  2.3 Informationsbeschaffung

Alle Bilder, die wir auf unserer Website verwenden, sind entweder von der Foot2Afrika-Website oder von Creative Common, also Bilder, für die der Besitzer die Erlaubnis zur Verwendung erteilt hat. Durch Kontakt mit dem Team von Foot2Afrika haben wir von ihnen die Erlaubnis erhalten, alle Bilder, Texte und weitere Informationen von ihrer Website zu verwenden. Eine Kopie der Erlaubnis in Email-Form ist im Anhang zu finden.

####  2.4 Übersetzung
####  2.5 Bearbeitung

###   3. Inhalt
####  Fundraising Tour
####  Was ist Foot2Afrika
####  DerenArbeit und aktuelles Projekt
####  Termine 
####  FAQ

###   4.    Erstellung
####  4.1   Hintergrund und Sinn der Website
####  4.2   Verwendete Technologien
##### 4.2.1 Software

- GitHub  
- FilaZilla (FTP-Programm)
- JADE  (HTML-Compiler)
- SASS  (Syntactically Awesome Stylesheets)
- WebStorm  (HTML/CSS Editor)
- Brackets  (HTML/CSS Editor)

##### 4.2.2 HTML
##### 4.2.3 CSS

**Struktur/Aufbau**

Unser CSS-Files sind nach Modulen/Bereichen jeweils so aufgeteilt, dass jeder Teilbereich dadurch ein eigenes CSS-File erhält. Dies hat den Vorteil, dass die Fehlersuche und die Wartung des Codes erleichtert werden, da nur im entsprechenden Teilsegment gesucht werden muss.

Damit im HEAD der HTML-Files nicht immer alle CSS-Files eingebunden werden müssen und dadurch die Übersicht leidet, wurden alle Modul-CSS-Files in ein einziges Stylesheet importiert. Somit musste immer nur das `stylesheet.css` im HEAD eingebunden werden.

Durch die modulare Aufbauweise der CSS-Files konnte in den CSS-Files weitesgehends auf Kommentare verzichtet werden, dennoch sind komplizierte Anweisungen trotzdem kommentiert.

Diese findet man im Anhang...

```
stylesheet.css
├── basic-stylesheet.css
├── desktop-navigation.css
├── faq.css
├── fluidgrid.css
├── footer.css
├── form.css
├── formular.css
├── kalender-picker.css
├── mobile-navigation.css
├── overrides.css
├── print.css
├── slide-show.css
├── spenden.css
├── tablet-navigation.css
└── tour-event.css
```

### 4.3 Design

Das Design der Website ist weitesgehend an der Vorlage von [Foot2afrika](http://www.foot2afrika.com/) ausgerichtet. Ebenfalls haben wir die Farbauswahl so getroffen, dass diese dem Logo ähnelt. Dadurch möchten wir erreichen, dass der User die Zugehörigkeit der Fundraising Tour zu Foot2Afrika erkennt. Außerdem erzeugen wir dadurch eine Einheitlichkeit und trennen uns nicht willkürlich ab, da unsere Website ebenfalls eine unterstützende Funktion haben soll.
Jedoch möchten wir nicht den Eindruck vermitteln, dass das Design lediglich übernommen oder sogar kopiert wurde und haben uns z.B beim Footer gegen das Design von [Foot2afrika](http://www.foot2afrika.com/) entschieden und unsere eigene Kreation verwendet. 
Des Weiteren hebt sich das Design des Kalenders ebenfalls ab. Es sollte nicht an einen gewöhnlichen Kalender erinnern, wie man ihn aus Outlook oder ähnlichen Terminplaungsassistenten kennt, sondern eher an "Produkte" die mit den Bildern und dazugehöringen Texten Leben bekommen und Intresse zum Lesen wecken. Die Termine sollte auch alle Informationen die uns gegeben waren Abdecken können.

Allgemein zusammengefasst haben wir uns für eine einheitliche, schlichte, aber stilvolle Gestaltung entschieden. Da es für uns wichtig war, dass die Besucher der Website primär den Inhalt vermittelt bekommen. Trotzdem war es uns bewusst, dass es auch zugleich eine "langweilige" Wirkung haben könnte und es für manche zu "trocken" sein könnte. Weshalb wir unsere Mühe in die Hauptseite investiert haben.
Die Startseite hebt sich eindeutig durch ihre Dynamik ab und vermittelt dadurch eine willkommende Funktion für den Besucher.
Ziel des Design bei diesen Objekten war es dem Anwender der Seite Spaß und einen Überaschungsmoment zu liefern. 


