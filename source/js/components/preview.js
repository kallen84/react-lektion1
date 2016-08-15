var React = require('react');

var Preview = React.createClass({

    getDefaultProps: function () {
        return {
            color: 'green'
        }
    },

    render() {

        var nyStyle = {
            'backgroundColor': this.props.color
        };

        return (
            // Här måste vi skriva "className" för att lägga till en class. Du kan inte använda "class" som
            // ett attribut här som vi i normala fall brukar definera ett html-element då React har 
            // reserverat ordet class redan
            <div className="preview-grej" style={nyStyle}>

            </div>
        )
    }
});

module.exports = Preview;