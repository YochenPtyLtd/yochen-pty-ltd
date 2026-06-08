import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Yochen Pty Ltd",
  description:
    "Terms of Service for Yochen Pty Ltd — governing this website and our software products.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service — Yochen Pty Ltd",
    description:
      "Terms governing the use of yochen.com.au and Yochen software products.",
    url: "https://yochen.com.au/terms",
    siteName: "Yochen Pty Ltd",
    type: "article",
  },
};

export default function Terms() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <header className="px-6 py-5 border-b border-neutral-200">
        <div className="mx-auto max-w-3xl flex items-center justify-between">
          <a href="/" className="text-sm font-medium tracking-wider">
            YOCHEN PTY LTD
          </a>
          <a
            href="mailto:contact@yochen.com.au"
            className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            contact@yochen.com.au
          </a>
        </div>
      </header>

      <section className="flex-1 px-6 py-16 sm:py-24">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-neutral-500">
            Effective date: 8 June 2026 · Last updated: 8 June 2026
          </p>

          <p className="mt-8 text-lg text-neutral-700 leading-relaxed">
            These terms govern your use of this website (yochen.com.au) and the
            software products published by <strong>Yochen Pty Ltd</strong>{" "}
            (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), an Australian
            company (ABN 28&nbsp;689&nbsp;854&nbsp;793), including{" "}
            <strong>PDF Professional Suite</strong>. By using the website or our
            software, you agree to these terms.
          </p>

          <Section title="Use of this website">
            This website is provided for general information about Yochen Pty Ltd
            and its products. You agree not to misuse it, interfere with its normal
            operation, or attempt to access it other than through the interface we
            provide. We may update, suspend, or withdraw the website (or any part of
            it) at any time without notice.
          </Section>

          <Section title="Our software — your licence">
            Our apps are licensed, not sold. When you obtain an app from the Apple
            App Store, your use is also governed by Apple&rsquo;s Media Services
            Terms and the Licensed Application End User License Agreement
            (Apple&rsquo;s standard EULA), together with these terms. Subject to
            those terms, we grant you a limited, non-exclusive, non-transferable
            licence to use the app on Apple-branded devices that you own or control.
            You must not copy, redistribute, rent, resell, sublicense, modify, or
            reverse-engineer the app except to the extent the law permits despite
            this restriction.
          </Section>

          <Section title="Intellectual property">
            The website, our software, and our names and logos — including
            &ldquo;Yochen&rdquo; and &ldquo;PDF Professional Suite&rdquo; — are owned
            by Yochen Pty Ltd or its licensors and are protected by intellectual
            property laws. Our software may include open-source components, which are
            used under their own licences; those licences continue to apply to the
            relevant components.
          </Section>

          <Section title="Third-party links and services">
            The website and our apps may link to or hand off to third-party sites and
            services (for example, the Apple App Store or a link inside a document).
            We do not control and are not responsible for those third parties; their
            own terms and policies apply once you leave.
          </Section>

          <Section title="Disclaimers">
            To the maximum extent permitted by law, this website and our software are
            provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without
            warranties of any kind. We do not warrant that they will be uninterrupted,
            error-free, or fit for a particular purpose, beyond what the law requires.
          </Section>

          <Section title="Your rights under the Australian Consumer Law">
            Nothing in these terms excludes, restricts, or modifies any consumer
            guarantee, right, or remedy you may have under the Australian Consumer
            Law or other laws that cannot lawfully be excluded. Where we are permitted
            to limit our liability for breach of a non-excludable guarantee, our
            liability is limited, at our option, to re-supplying the relevant goods or
            services or paying the cost of having them re-supplied.
          </Section>

          <Section title="Limitation of liability">
            To the extent permitted by law, and subject to the section above, Yochen
            Pty Ltd is not liable for any indirect, incidental, special, or
            consequential loss or damage arising out of or in connection with your
            use of this website or our software.
          </Section>

          <Section title="Changes to these terms">
            We may update these terms from time to time. We will post the updated
            version at this URL and revise the &ldquo;Last updated&rdquo; date above.
            Your continued use after a change means you accept the updated terms.
          </Section>

          <Section title="Governing law">
            These terms are governed by the laws of Australia, and you submit to the
            non-exclusive jurisdiction of the courts of Australia.
          </Section>

          <Section title="Contact">
            Questions about these terms? Email{" "}
            <a
              href="mailto:contact@yochen.com.au"
              className="underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-colors"
            >
              contact@yochen.com.au
            </a>
            .
          </Section>

          <p className="mt-12 text-sm text-neutral-500">
            Yochen Pty Ltd · ABN 28&nbsp;689&nbsp;854&nbsp;793 · Australia
          </p>
        </article>
      </section>

      <footer className="px-6 py-6 border-t border-neutral-200">
        <div className="mx-auto max-w-3xl flex items-center justify-between text-xs text-neutral-500">
          <span>© {year} Yochen Pty Ltd. All rights reserved.</span>
          <nav className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-neutral-900 transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-neutral-900 transition-colors">
              Terms
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <p className="mt-3 text-neutral-700 leading-relaxed">{children}</p>
    </div>
  );
}
