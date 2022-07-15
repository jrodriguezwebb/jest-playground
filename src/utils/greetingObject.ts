export const grettingObject = {
    name: 'Jesus',
    lastName: 'Rodriguez',
    sayHello: function() {
        return `Hello ${ this.name } ${ this.lastName }`;
    }
}