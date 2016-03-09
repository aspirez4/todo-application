// Define a collection to hold our tasks
Tasks = new Mongo.Collection('tasks');

if(Meteor.isClient) {
    Meteor.startup(() => {
        ReactDOM.render(<App />, document.getElementById('render-target'));
    });
}