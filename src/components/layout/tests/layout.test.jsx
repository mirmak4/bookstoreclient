import { renderWithReact } from '../../../helpers/test_helpers/TestSetupProvider';
import React from 'react';
import Layout from '../layout';

describe('Layout', () => {

    it('should render layout component', () => {
        const layoutHtml = 
            <Layout>
                <div>test component</div>
            </Layout>;
        const { getByText } = renderWithReact(layoutHtml);

        expect(getByText('test component') ).toBeInTheDocument();
    });
});