export const Footer = () => {
    return (
        <>
            <style>
                {`
                .footer {
                    border-top: 1px solid #e5e7eb;
                    padding: 24px 16px;
                    background: #ffffff;
                }

                .footer-container {
                    max-width: 1024px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .footer-brand strong {
                    font-size: 16px;
                    display: block;
                    margin-bottom: 4px;
                }

                .footer-brand p {
                    font-size: 13px;
                    color: #6b7280;
                    margin: 0;
                }

                .footer-links ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    gap: 16px;
                    flex-wrap: wrap;
                }

                .footer-links a {
                    font-size: 13px;
                    text-decoration: none;
                    color: #2563eb;
                }

                .footer-links a:hover {
                    text-decoration: underline;
                }

                @media (min-width: 640px) {
                    .footer-container {
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                    }
                }
                `}
            </style>

            <footer className="footer">
                <div className="footer-container">
                    <section className="footer-brand">
                        <strong>SafeYatra</strong>
                        <p>Secure tourist registration and identity verification.</p>
                    </section>

                    <section className="footer-links">
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </section>
                </div>
            </footer>

        </>
    );
};
export default Footer;