var React = require("react");
// Här importerar vi form.js. React förväntar sig att ladda in js-filer så du behöve rinte
// skriva . efter (form.js) 
var FormModul = require('./form');

var Preview = require('./preview');

// grundfunktionen för att skapa en ny klass (react.createClass)
// createClass måste innehålla en funktionen-render
var HelloWorld = React.createClass({

    // tar in ett js-objekt
    getInitialState: function () {
        return {
            title: "Hello Dirty World!",
            color: 'blue',
            allColors: ['red', 'blue', 'yellow', 'brown']

        }
    },

    changeColor (nyColor) {
        // Här skickar vi med en funktion istället för ett värde
        console.log('Från HelloWorld: %s', nyColor);
        this.setState({
            color: nyColor
        });
    },

    componentWillMount () {
        //alert('Nu läggs jag till!');
    },

    componentDidMount () {
        //alert('Nu blir jag tillagd!');
    }, 

    insertNewColor (newColor) {
        // hämta ut arrayen med alla färgerna
        var tempArr = this.state.allColors;
        // Lägg till ny färg med push-metoden
        tempArr.push(newColor);
        this.setState({allColors:tempArr});
    },  

    render: function () {

        //alert('Nu renderas jag');
        return (
            // för att skriv ut dessa två måste vi gruppera ihop dom (bundle) med en div
            // annars kommer inte p-taggen skriva ut
            <div>
                <h1>{this.state.title}</h1>
                <p>The end</p>
                <FormModul newColorFunction={this.insertNewColor} allColors={this.state.allColors} favcolor={this.state.color} colorChange={this.changeColor} />
                <Preview color={this.state.color}/>
            </div>
        )

    }

});

module.exports = HelloWorld;