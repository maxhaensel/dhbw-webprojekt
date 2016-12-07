# dhbw-webprojekt

## Dokumentation

### HTML

### CSS

### Allgemein

Das Design der Website ist weitesgehend an der vorlage von [foot2afrika](http://www.foot2afrika.com/) ausgerichtet.

#### Struktur/Aufbau

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
