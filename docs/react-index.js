*************************************************************
*                         -REACT.JS-                        *
*************************************************************
 
React.js är ett JavaScript-bibliotek som används för att 
bygga webbgränssnitt. Biblioteket utvecklades av företagen 
Facebook och Instagram och är släppt med öppen källkod.

React.js är V:et (View) i MVC (Model Viewer Controller) och 
har ingenting med backend att göra utan är bara det vi ser
och det som händer på webbsidan.

React tillåter dig att bygga webbsidor där du har sidor som 
ständigt förändras eller är dynamiska. Med react kan du 
skapa notifieringar som uppdateras i real-tid, som t ex en i 
en "chat-applikation" där det ständigt finns funktioner som 
hela tiden uppdateras direkt. 

React använder sig av ett s k "high speed virtual DOM" och 
skrivs med en speciell syntax som kallas för "JSX". 
Biblioteket är modulbaserat där man bygger upp UI 
komponenter som sedan anropar andra komponenter

-Varför är react så snabbt?-
JS-objekt är snabbare än DOM-objektet. "React Virtual DOM"
är ett JS-objekt som aldrig läser från det riktiga DOM:et 
och kan endast skriva till DOM om det behövs. På det sättet 
hanterar react DOM uppdateringar effektivt vilket gör react
väldigt snabbt.

---------------------------------------------------------

-JSX-
Är XML-syntax i Javascripten. Detta betyder att du skriver 
HTML i din javascript-kod. 

---------------------------------------------------------



















*************************************************************
*            -CHROME EXTENTSIONS-, -CHROME PLUGIN-          *
*************************************************************

Finns flera olika hjälpprogram i Chrome du kan ladda ned för 
React.JS här är två användbara tilläggsprogram du kan använda:

-React-detector-
Säger till vilka sidor som innehåller react-kod. Icon lyser 
blått när den hittar reactor-kod på sidan.

-React Developer Tools-
Låter dig se själva react-koden i consolen när du granskar 
webbsidor. För att öppna den om du befinner dig på en sida 
som innehåller react tryck på "alt + cmd + i". Välj sedan 
"react" - fliken

















*************************************************************
*                        -COMPONENTS-                       *
*************************************************************

React-komponenter är själva kärnan för uppbyggnaden av 
webbsidor när du bygger upp en sida med react. När du skapar
react-komponenter använder vi oss av dom där vi då måste säga
var vill använda dom någonstans på själva webbsidan.


Du kan skapa en webbsida helt med bara komponenter. 

Exempel: 

   var HelloWorld = React.createClass({
      render: function () {
          return (
              <h1>Hello World!</h1>
          )
      }
   });

                                                        
---------------------------------------------------------/
                           
-components properties-, -props-
Är en komponents egenskaper och kallas oftast för bara
"props". Med props kan man lägga till olika egenskaper
till en given komponent och passera in information till 
propertyn och sedan använda den inifrån sin komponent.

Properties är en viktigt del i React.

Exempel: 

   var HelloWorld = React.createClass({

      render: function () {
          return (
              // Här lägger vi till ett property i våran
              // komponent
              <h1>Hello {this.props.name}</h1>
          )
      }
   });

   ReactDOM.render(
      // I vår instance av våran komponent lägger vi till 
      // en sträng med värdet "Karl" 

      <HelloWorld name="Karl"/>,
      document.getElementById('area')
   );


---------------------------------------------------------/

-getDefaultProps-
Lägger till en standard egenskap (property) till våran 
komponent HelloWorld.

Exempel: 
        var HelloWorld = React.createClass({

            propTypes: {
                name: React.PropTypes.string.isRequired
            },

            getDefaultProps: function () {
                return {
                    name: 'Karl'
                }
            },

            render: function () {
                return (
                    <h1>Hello {this.props.name}</h1>
                )
            }
        });

         ReactDOM.render(
            // Då vi har satt en standard property kommer
            // detta namn skriva över Karl. Skulle vi ta 
            // bort name-attributet skulle "Karl" skrivas
            // ut
            <HelloWorld name="Ben"/>,
            document.getElementById('area')
        );

        // Svar: Hello Ben

---------------------------------------------------------/

-propTypes-
Definierar vilket typ propertyn är av som antingen kan
vara en boolean, string, number, object, array eller en 
funktion. I React skriver man dessa med förkortningar:

.string // string
.bull   // boolean
.array  // array
.funk   // function
.number // number
.object // object


propTypes: {

      name: React.PropTypes.string
},

---------------------------------------------------------

-state-
Ett state är ett JS-objekt som man stoppar in data i, som 
en liten databehållare ungefär. Ett state lever inuti sin 
komponent och används för att sätta ett state för en given 
komponent och hur man återfår ett state samt hur man ändrar 
på ett state. 

---------------------------------------------------------

-component did mount-
När en komponent är "monterad" kan vi börjar göra saker 
med den.

---------------------------------------------------------

-{}-
När vi skriver med måsvingar {} i React betyder det att 
vi skriver in Javscript kod här.

---------------------------------------------------------

-return ()-, -return {}-

Paranteser () efter ett return-statement används för att 
gruppera ihop flera rader.

Måsvingar {} efter ett return-statement skapar 
vi JS-objekt i.

---------------------------------------------------------

-life cycle-
Är färdiginbyggda funktioner i react som anropas bara en 
gång, både på klienten och servern, omedelbart före den 
första rendering inträffar. 

Exempel:

    componentWillMount () {
        alert('Nu läggs jag till!');
    },

---------------------------------------------------------

-gulp-bugg-
Vid användadet av gulp i React finns det en bugg där vi 
måste ta bort tecken i våra varibler i gulp.js 
för att få våran "src" och "app" att fungera korrekt.

// Fel
var src = './source'
  , app = './build'
  ;

// Rätt
var src = 'source'
  , app = 'build'
  ;

---------------------------------------------------------






































