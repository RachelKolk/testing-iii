// Test away!

import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Controls from './Controls';

describe('<Controls />', () => {

    it('should call the toggleClosed function passed as a prop', () => {
        const toggleClosed = jest.fn();

        const {getByTestId} = render(<Controls toggleClosed={toggleClosed} />);
        const closeGateButton = getByTestId('closeToggleButton');

        //fireEvent.click(getByTestId('closeToggleButton'));
        fireEvent.click(closeGateButton);
        expect(toggleClosed).toHaveBeenCalled();
    });

    it('should call the toggleLocked function passed as a prop', () => {
        const toggleLocked = jest.fn();

        const {getByTestId} = render(<Controls toggleLocked={toggleLocked} closed={true}/>);
        const lockButton = getByTestId('lockToggleButton');

        //fireEvent.click(getByTestId('lockToggleButton'));
        fireEvent.click(lockButton);
        expect(toggleLocked).toHaveBeenCalled();
    });

    

})

