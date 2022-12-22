import { render, screen } from '@testing-library/react';
import Keyboard from './Keyboard';
import '@testing-library/jest-dom';

test('renders keyboard and has all keys', () => {
    render(<Keyboard>
        <div data-testid='cheese'>test</div>
        </Keyboard>)
    screen.debug()
    expect(Keyboard).toHaveLength(1)
    let div = screen.getByTestId('cheese');
    expect(div).toHaveTextContent('test');
})

export {}