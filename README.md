:shipit:
# DHBW-Heidenheim / Webprojekt / Foot2Afrika / Gruppe A3

[Foot to Afrika - Fundraising Tour Deutschland](http://www.wwi16a3.projekt.dhbw-heidenheim.de/)

## Dokumentation

### 1. HTML

### 2. CSS

**Allgemein**

Das Design der Website ist weitesgehend an der vorlage von [foot2afrika](http://www.foot2afrika.com/) ausgerichtet.

Lediglich der Footer und die Formulare wurde anders als auf [foot2afrika](http://www.foot2afrika.com/) gestalltet. Ziel des Design bei diesen Objekten war es dem Anwender der Seite Spaß und einen überaschungsmoment zu liefern. 

Das Design des Kalender sollte nicht an einen gewöhnlichen Kalender erinnern wie man ihn aus Outlook oder ähnlichen Terminplaungsassistenten kennt, sondern eher an "Produkte" die mit den Bildern und dazugehöringen Texten Leben bekommen und Intresse zum Lesen wecken. Die Termine sollte auch alle Informationen die uns gegeben waren Abdecken können.

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
### 2. Software

1. GitHub
2.
3.
4.
5.  
6.  SASS  (Syntactically Awesome Stylesheets)
7.  WebStorm  (HTML/CSS Editor)
8.  Brackets  (HTML/CSS Editor)
9.
10.
