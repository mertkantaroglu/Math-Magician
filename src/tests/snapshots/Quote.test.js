import renderer from 'react-test-renderer';
import Quote from '../../pages/Quote';

describe('Quote', () => {
  test('should match with Quote snapshot', () => {
    const tree = renderer.create(
      <Quote />,
    );
    expect(tree).toMatchSnapshot();
  });
});