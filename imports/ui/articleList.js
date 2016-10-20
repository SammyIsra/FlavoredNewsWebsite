import {Meteor} from 'meteor/meteor';
import {Template} from 'meteor/templating';

import {Articles} from '../api/articles.js';

import './articleList.html';
import './article.js';

Template.articleList.helpers({
    articles() {
        return Articles.find({});
    }
})
