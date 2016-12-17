:shipit:
# DHBW-Heidenheim / Webprojekt / Foot2Afrika / Gruppe A3

[Foot to Afrika - Fundraising Tour Deutschland](http://www.wwi16a3.projekt.dhbw-heidenheim.de/)

## Projektdokumentation

###   1.  Vorstellung des Webprojekts
####  1.1 Projektbeschreibung

Die Aufgabe in diesem Projekt ist es, sich mit der Erstellung einer statischen Website auseinanderzusetzen. 
Inhaltlich befasst sich unsere Website mit der Foot2Afrika Fundraising Tour, die jährlich in Deutschland stattfindet, um einerseits Spenden zu sammeln und andererseits über die Situation in Tansania aufmerksam zu machen.
Mit der Website möchten wir Interessenten eine schnelle, kurze, aber ausreichende Übersicht über das Thema Fundraising bieten. Außerdem findet man alle anstehende Tour Termine in unserem Kalender. 
Neben der Fundraising möchten wir ebenfalls die hinter der Veranstaltung steckende Organisation „Foot2Afrika“ und ihre Arbeit vorstellen.
Sollten trotzdem Unklarheiten auftreten, bietet unsere FAQ eine Reihe von oft gestellten Fragen und ihre Antworten dazu. Außerdem ist es dem User möglich durch das Kontaktformular sein Anliegen zu senden.
Nach Abschluss des Projekts soll die Website auch für weitere darauffolgende Touren in den kommenden Jahren Informationen zu den Terminen bieten.

####  1.2 Projektumfang

Bei der Erstellung einer statischen Website muss berücksichtig werden, dass diese mindestens vier unterscheidbare, bedeutsame und gehaltvolle Seiten beinhalten sollen. 
Zuvor muss sowohl ein Projektplan, als auch verschiedene Wireframes eingereicht werden.
Unsere Arbeit soll darüber hinaus „responsive“ sein. Damit ist gemeint, dass die Website auf verschiedenen Browser und Geräten, wie zum Beispiel Mobiltelefone und Tablets, funktionieren soll.

####  1.3 Projektplan und Ablauf des Projekts

Zu Beginn des Webprojekts war die Erstellung unseres Projektplans eins der wichtigsten Schritte in unserer  Vorgehensweise. Der Plan beinhaltete wichtige Punkte und Aufgaben für das Projekt, und noch wichtiger die Abgabefristen. Dadurch hatte jeder in der Gruppe eine allgemeine Übersicht über die anstehende Arbeit. Es war uns ebenfalls wichtig, dass jeder die Zeit im Überblick hatte. Auch die Aufgabenverteilung wurde schnell getroffen, sodass keine Zeit verloren ging und man parallel arbeiten konnte. Dies ersparte uns eine Menge Mühe und man verhinderte dadurch Doppelarbeiten.
(Wenn mir was einfällt, ergänze ich alles nach und nach und fülle den Inhalt)
Den Projektplan findet man im Anhang …

###   2.  Planung, Informationsbeschaffung, Übersetzung, Bearbeitung
####  2.2 Planung
####  2.3 Informationsbeschaffung

Alle Bilder, die wir auf unserer Website verwenden, sind entweder von der Foot2Afrika-Website oder von Creative Common, also Bilder, für die der Besitzer die Erlaubnis zur Verwendung erteilt hat. Durch Kontakt mit dem Team von Foot2Afrika haben wir von ihnen die Erlaubnis erhalten, alle Bilder, Texte und weitere Informationen von ihrer Website zu verwenden. Eine Kopie der Erlaubnis in Email-Form ist im Anhang zu finden.

####  2.4 Übersetzung
####  2.5 Bearbeitung

###   3. Inhalt
####
####
####
####
####

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

Unser CSS´s Files sind nach Modulen/Bereichen aufgeteilt, so gibt es für jeden Teilbereich ein eigenes CSS File. Das erleichtert die Fehlersuche und die Wartung des Codes, da bei Fehlen immer nur im entsprechenden Teilsegment gesucht werden muss.

Damit im HEAD der HTML Files nicht immer alle CSS Files eingebunden werden müssen und damit die übersicht leidet wurden alle Modulcss Files in ein einziges Stylesheet importiert, somit musste immer nur das `stylesheet.css` im HEAD eingebunden werden.

Durch die Modulare aufbauweise der CSS Files konnte in den CSS Files weitesgehends auf Kommentare verzichtet werden, dennoch sind komplizierte Anweisungen trotzdem Kommentiert. 

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

Das Design der Website ist weitesgehend an der vorlage von [foot2afrika](http://www.foot2afrika.com/) ausgerichtet.

Lediglich der Footer und die Formulare wurde anders als auf [foot2afrika](http://www.foot2afrika.com/) gestalltet. Ziel des Design bei diesen Objekten war es dem Anwender der Seite Spaß und einen überaschungsmoment zu liefern. 

Das Design des Kalender sollte nicht an einen gewöhnlichen Kalender erinnern wie man ihn aus Outlook oder ähnlichen Terminplaungsassistenten kennt, sondern eher an "Produkte" die mit den Bildern und dazugehöringen Texten Leben bekommen und Intresse zum Lesen wecken. Die Termine sollte auch alle Informationen die uns gegeben waren Abdecken können.
