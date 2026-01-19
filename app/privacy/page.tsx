export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-24 max-w-3xl">
            <h1 className="font-heading mb-8 text-4xl font-bold">Privacy Policy</h1>
            <div className="prose prose-invert prose-lg">
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <h3>1. Introduction</h3>
                <p>
                    Your privacy is critically important to us. At R2DSolutions ("we", "us", "our"), we have a few fundamental principles:
                </p>
                <ul>
                    <li>We don't ask you for personal information unless we truly need it.</li>
                    <li>We don't share your personal information with anyone except to comply with the law, develop our products, or protect our rights.</li>
                    <li>We don't store personal information on our servers unless required for the on-going operation of one of our services.</li>
                </ul>

                <h3>2. Data Collection</h3>
                <p>
                    **Focus Flow:** All data (timer sessions, analytics, block rules) is stored locally on your device using the Chrome Storage API. We do not transmit this data to any external server.
                </p>
                <p>
                    **Auto Tab Switcher:** Settings and preferences are stored locally. No browsing history is tracked or sent anywhere.
                </p>

                <h3>3. Chrome Web Store Data</h3>
                <p>
                    We rely on the data provided by the Chrome Web Store for analytics regarding installation numbers and active users. This data is aggregated and does not identify individual users.
                </p>
            </div>
        </div>
    );
}
