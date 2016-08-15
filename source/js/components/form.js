// form.js är våran undermodul

var React = require('react');

// skapar modulen FormModul. Använder Stor bokstav F så att vi håller dessa ifrån variabler med samma namn
// i createClass skickar vi in ett nytt objekt
var FormModul = React.createClass({
    // render-funktionen skrivs i normala med nyckelordet function efter. Såhär:
    // render () function {} 
    // men kan skrivas med bara parantserna efter istället för  "render () {}"
    render () {
        // map() är en funktion som tar en callback som värde.  
        var colorItems = this.props.allColors.map((itemColor, i) => {
            return <li key={i} onClick={this.colorClicked.bind(this, itemColor)}>{itemColor}</li>
        })

        return (
            // med javacsript:void(0) avbryter/förhindrar vi om något skickas iväg
            <form action="javascript:void(0)">
                <label>Lägg till en ny färg</label>
                <input type="text" 
                       ref="color_input"
                       />
                <button className="btn btn-primary" onClick={this.addNewColor}>Lägg till färg</button>
                       <ul>
                            {colorItems}
                       </ul>
            </form>
        )

    },

    addNewColor (event) {
        var nyColor = this.refs.color_input.value;
        this.props.newColorFunction(nyColor);
    },

    colorClicked(color) {
        this.props.colorChange(color);
        console.log('Färg klickades: %a!', color);
    },
    
    // Här skickar vi med change eventet
    changedColor(event) {
        var nyColor = this.refs.color_input.value;
        // % letar efter det första attributet vi skriver in i inputen
        console.log('Färgen har ändrats: %s', nyColor);
        this.props.colorChange(nyColor);
    }
});

module.exports = FormModul;
