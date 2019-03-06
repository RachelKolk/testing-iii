// Test away!

import React from 'react';

import {render} from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

import Display from './Display';

describe('<Display />' , () => {
    

    it('defaults to unlocked and open', () => {
        const {getByTestId} = render(<Display />);

        const lockDisplay = getByTestId('key');
        const gateDisplay = getByTestId('gate');

        expect(lockDisplay).toHaveClass('green-led');
        expect(gateDisplay).toHaveClass('green-led');
    })

    it('displays closed if the closed prop is true', () => {
        const {getByTestId, queryByText} = render(<Display closed={true} />);

        const gateDisplay = getByTestId('gate');
        
        expect(gateDisplay).toHaveClass('red-led');
    });

    it('displays open if the closed prop is false', () => {
        const {getByTestId, queryByText} = render(<Display closed={false} />);

        const gateDisplay = getByTestId('gate');
        
        expect(gateDisplay).toHaveClass('green-led');
    });

    it('displays locked if the locked prop is true', () => {
        const {getByTestId, queryByText} = render(<Display locked={true} />);

        const lockDisplay = getByTestId('key');
        
        expect(lockDisplay).toHaveClass('red-led');
    });

    it('displays unlocked if the locked prop is false', () => {
        const {getByTestId, queryByText} = render(<Display locked={false} />);

        const lockDisplay = getByTestId('key');
        
        expect(lockDisplay).toHaveClass('green-led');
    });
});