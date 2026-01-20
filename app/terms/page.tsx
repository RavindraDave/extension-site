export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-24 max-w-4xl">
            <h1 className="font-heading mb-8 text-4xl font-bold">Terms of Service</h1>
            <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-muted-foreground italic mb-20">Last updated: January 20, 2026</p>

                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6 text-primary">1. Agreement to Terms</h2>
                    <p className="mb-8">
                        By installing and using the Chrome extensions provided by R2DSolutions ("we", "us", "our"), specifically <strong>Focus Flow</strong> and <strong>Auto Tab Switcher</strong>, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not install or use our extensions.
                    </p>
                    <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl my-8">
                        <p className="font-bold m-0">Key Point:</p>
                        <p className="m-0">These terms govern your use of our software. We aim to provide useful productivity tools while respecting your rights and data privacy.</p>
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6 text-primary">2. License and Use</h2>

                    <h3 className="text-xl font-semibold mb-4">Grant of License</h3>
                    <p className="mb-8">
                        We grant you a revocable, non-exclusive, non-transferable, limited license to download, install, and use our extensions strictly in accordance with the terms of this agreement.
                    </p>

                    <h3 className="text-xl font-semibold mb-4">Restrictions</h3>
                    <p className="mb-4">You agree not to, and you will not permit others to:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-8">
                        <li>License, sell, rent, lease, assign, distribute, transmit, host, outsource, disclose, or otherwise commercially exploit the extensions (unless explicitly permitted by a separate commercial agreement).</li>
                        <li>Modify, make derivative works of, disassemble, decrypt, reverse compile, or reverse engineer any part of the extensions.</li>
                        <li>Remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) of R2DSolutions or its affiliates.</li>
                    </ul>
                </section>

                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6 text-primary">3. Intellectual Property</h2>
                    <p className="mb-8">
                        The extensions, including but not limited to all code, design, text, graphics, and interfaces, are the intellectual property of R2DSolutions. They are protected by copyright, trademark, and other applicable intellectual property laws.
                    </p>
                </section>

                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6 text-primary">4. Updates and Maintenance</h2>
                    <p className="mb-8">
                        We may from time to time provide enhancements or improvements to the features/functionality of the extensions, which may include patches, bug fixes, updates, upgrades, and other modifications ("Updates"). Updates may modify or delete certain features and/or functionalities of the extensions. You agree that we have no obligation to (i) provide any Updates, or (ii) continue to provide or enable any particular features and/or functionalities.
                    </p>
                </section>

                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6 text-primary">5. Disclaimer of Warranties</h2>
                    <div className="border border-border p-6 rounded-xl bg-card/30">
                        <p className="mb-4">
                            The extensions are provided to you "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, R2DSolutions expressly disclaims all warranties, whether express, implied, statutory, or otherwise, including all implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.
                        </p>
                        <p className="m-0">
                            Without limiting the foregoing, we do not warrant that the extensions will meet your requirements, operate without interruption, achieve any intended results, be compatible or work with any other software/browsers, or be error-free.
                        </p>
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6 text-primary">6. Limitation of Liability</h2>
                    <p className="mb-8">
                        To the fullest extent permitted by applicable law, in no event shall R2DSolutions be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the extensions) even if we have been advised of the possibility of such damages.
                    </p>
                </section>

                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6 text-primary">7. Changes to This Agreement</h2>
                    <p className="mb-8">
                        We reserve the right, at our sole discretion, to modify or replace this Agreement at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                    </p>
                </section>

                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6 text-primary">8. Contact Information</h2>
                    <p className="mb-4">
                        If you have any questions about this Agreement, please contact us at:
                    </p>
                    <p className="font-bold">Email: admin@r2dsolutions.com</p>
                </section>
            </div>
        </div>
    );
}

