/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {render} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('General App Tests', () => {
  it('renders <App/> correctly', () => {
    renderer.create(<App />);
  });
  it('detects the Global SafeAreaView', () => {
    const {getByTestId} = render(<App />);
    const {type} = getByTestId('app-safe-area-view');
    expect(type).toBe('RCTSafeAreaView');
  });
});
