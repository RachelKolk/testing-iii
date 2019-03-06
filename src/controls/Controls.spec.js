// Test away!

import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect';
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

    it('should have a closed button', () => {
        const {getByTestId} = render(<Controls />);

        const closedButton = getByTestId('closeToggleButton');

        expect(closedButton).toBeInTheDocument();
    });
    
    it('should have a locked button', () => {
        const {getByTestId} = render(<Controls />);

        const lockedButton = getByTestId('lockToggleButton');

        expect(lockedButton).toBeInTheDocument();
    });

    it('should change (text) from open to closed when closed', () => {
        const {getByTestId} = render(<Controls closed={true}/>);

        const closedButton = getByTestId('closeToggleButton');

        expect(closedButton).toBeTruthy();
    })

    it('should change (text) from unlocked to locked when locked', () => {
        const {getByTestId} = render(<Controls locked={true}/>);

        const lockedButton = getByTestId('lockToggleButton');

        expect(lockedButton).toBeTruthy();
    })

})

