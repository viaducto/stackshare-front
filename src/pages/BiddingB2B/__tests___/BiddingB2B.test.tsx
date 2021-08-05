import { axe } from 'jest-axe';
import { render, fireEvent } from '../../../test-utils';
import BiddingB2B from '../BiddingB2B';

describe('BiddingB2B', () => {
  test('Simple should not have violations', async () => {
    const { container, getByText } = render(<BiddingB2B />);
    expect(getByText('Simple')).toBeInTheDocument();
    expect(getByText('Minimum ask per Mb/s')).toBeInTheDocument();
    expect(getByText('Infractrusture bandwith cap')).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });
  // test('Advanced should not have violations', async () => {
  //   const { container, getByLabelText, getByText } = render(<BiddingB2B />);
  //   fireEvent.click(getByLabelText('Advanced'));
  //   expect(getByText('Default Mb price')).toBeInTheDocument();
  //   expect(getByText('Prices and availiability')).toBeInTheDocument();
  //   expect(await axe(container)).toHaveNoViolations();
  // });
});
