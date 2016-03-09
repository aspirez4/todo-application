// Define a collection to hold our tasks
Tasks = new Mongo.Collection('tasks');

if(Meteor.isClient) {
    Meteor.startup(() => {
        React.render(<App />, document.getElementById('render-target'));
    });
}