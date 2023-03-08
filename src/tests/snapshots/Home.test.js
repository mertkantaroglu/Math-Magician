import renderer from 'react-test-renderer';
import Home from '../../pages/Home';

describe('Home', () => {
  test('should match with Home snapshot', () => {
    const tree = renderer.create(
      <Home />,
    );
    expect(tree).toMatchSnapshot();
  });
});
