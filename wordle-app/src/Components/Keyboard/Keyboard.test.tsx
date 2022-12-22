import { render, screen } from '@testing-library/react';
import Keyboard from './Keyboard';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

test('renders keyboard and has all keys', () => {
    render(<Keyboard/>)
    let Keyboard = screen.getByRole('generic')
    
    expect(Keyboard).toHave
    expect(props.handleClick).toHaveBeenCalled();
    expect(gotButton).toHaveClass('cool-button');
})

//find out how to 