import { render } from '@testing-library/react';
import React from 'react';
import Layout from '../layout';

describe('Layout', () => {

    it('should render layout component', () => {
        const { getByText } = render(
            <Layout>
                <div>test component</div>
            </Layout>
        );

        expect(getByText('test component') ).toBeInTheDocument();
    });
});