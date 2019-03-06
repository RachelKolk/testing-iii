// Test away

import React from 'react';
import {render} from 'react-testing-library';
import 'jest-dom/extend-expect';
// import 'react-testing-library/cleanup-after-each';
import ReactDOM from 'react-dom';

import Dashboard from './Dashboard';

describe('<Dashboard />' , () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Dashboard />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it.skip('defaults to unlocked and open', () => {
        const {getByText} = render(<App />);


    });

});