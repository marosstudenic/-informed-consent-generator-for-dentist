import React from 'react';
import type { PropsWithChildren } from 'react';

const renderPDFFooter = () => (
    <div
        id="pageFooter"
        style={{
            fontSize: '10px',
            color: '#666'
        }}
    >
        This is a sample footer
    </div>
);

const PDFLayout = ({ children }: PropsWithChildren) => (
    <html>
        <head>
            <meta charSet="utf8" />
            <link rel="stylesheet" href="http://localhost:1234/static/pdf.css" />
        </head>
        <body>
            {children}
            {renderPDFFooter()}
        </body>
    </html>
);


export default PDFLayout;