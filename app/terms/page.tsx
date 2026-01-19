export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-24 max-w-3xl">
            <h1 className="font-heading mb-8 text-4xl font-bold">Terms of Service</h1>
            <div className="prose prose-invert prose-lg">
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <h3>1. Acceptance of Terms</h3>
                <p>
                    By accessing or using the services provided by R2DSolutions, you agree to be bound by these Terms of Service.
                </p>

                <h3>2. Use of License</h3>
                <p>
                    Permission is granted to download and use our extensions for personal or commercial purposes, subject to the specific license terms of each product.
                </p>

                <h3>3. Services</h3>
                <p>
                    R2DSolutions provides custom software development services. Specific terms for these services will be outlined in individual service agreements.
                </p>
            </div>
        </div>
    );
}
