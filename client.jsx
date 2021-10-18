import React from 'react';
import ReactDom from 'react-dom';
import ReactionTest from './ReactionTest';
import { hot } from 'react-hot-loader/root';

const Hot = hot(ReactionTest);

ReactDom.render(<Hot />, document.querySelector('#root'));
