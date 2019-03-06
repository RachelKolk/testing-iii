// Test away

import React from 'react';
import {render} from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Dashboard from './Dashboard';

describe('<Dashboard />' , () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Dashboard />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />);
    
        expect(tree.toJSON()).toMatchSnapshot();
    });

    

});