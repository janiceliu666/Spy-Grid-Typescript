import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// In your jest setup file
global.fetch = require('jest-fetch-mock');