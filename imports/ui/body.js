import {Meteor} from 'meteor/meteor';
import {Template} from 'meteor/templating';


import './articleList.js';
import './header.js';
import './footer.js';

import './body.html';

Template.body.onCreated(function (){
    Meteor.subscribe('articles');
});
