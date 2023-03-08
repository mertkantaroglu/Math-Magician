import renderer from 'react-test-renderer';
import CalculatorPage from '../../pages/CalculatorPage';

describe('Calculator page', () => {
  test('should match with CalculatorPage snapshot', () => {
    const tree = renderer.create(
      <CalculatorPage />,
    );
    expect(tree).toMatchSnapshot();
  })
})