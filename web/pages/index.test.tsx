import { render } from '@testing-library/react';
import Index from './index';

it('renders homepage unchanged', () => {
  const { container } = render(<Index />);
  expect(container).toMatchSnapshot()
});
