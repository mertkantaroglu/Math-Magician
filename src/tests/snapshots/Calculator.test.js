import renderer from 'react-test-renderer';
import Calculator from '../../components/Calculator';

describe('Calculator', () => {
  test('should match with Calculator snapshot', () => {
    const tree = renderer.create(
      <Calculator />,
    );
    expect(tree).toMatchSnapshot();
  });
});
