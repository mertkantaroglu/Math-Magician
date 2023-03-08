import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from '../../App';

describe('App', () => {
  test('should match with App snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
