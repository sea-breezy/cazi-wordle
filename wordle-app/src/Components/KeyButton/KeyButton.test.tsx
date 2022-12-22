import { render, screen } from '@testing-library/react';
import KeyButton from './KeyButton';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

test('renders button and button is clickable', () => {
    const props = {
        text: 'button text',
        className: 'cool-button',
        handleClick: jest.fn()
    }

    render(<KeyButton text={props.text} className={props.className} handleClick={props.handleClick}/>)
    let gotButton = screen.getByRole('button')
    userEvent.click(gotButton);
    expect(gotButton).toHaveTextContent('button text');
    expect(props.handleClick).toHaveBeenCalled();
    expect(gotButton).toHaveClass('cool-button');
})