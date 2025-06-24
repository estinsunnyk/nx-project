import { render } from '@testing-library/react';

import EsNxWorkspaceUiComponentsButton from './button';

describe('EsNxWorkspaceUiComponentsButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EsNxWorkspaceUiComponentsButton />);
    expect(baseElement).toBeTruthy();
  });
});
