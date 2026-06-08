import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Yochen Pty Ltd",
  description:
    "Privacy policy for Yochen Pty Ltd — covering this website and our software products. We collect no personal data.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy — Yochen Pty Ltd",
    description:
      "Yochen Pty Ltd collects no personal data — not through this website, and not through our apps.",
    url: "https://yochen.com.au/privacy",
    siteName: "Yochen Pty Ltd",
    type: "article",
  },
};

export default function Privacy() {
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
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-neutral-500">
            Effective date: 8 June 2026 · Last updated: 8 June 2026
          </p>

          <p className="mt-8 text-lg text-neutral-700 leading-relaxed">
            This policy explains how <strong>Yochen Pty Ltd</strong>{" "}
            (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), an Australian
            company (ABN 28&nbsp;689&nbsp;854&nbsp;793), handles privacy across this
            website (yochen.com.au) and the software products we publish, including
            <strong> PDF Professional Suite</strong>.
          </p>

          <div className="mt-10 rounded-xl border border-neutral-200 bg-neutral-50 p-6">
            <h2 className="text-sm font-semibold tracking-wide">The short version</h2>
            <p className="mt-2 text-neutral-700 leading-relaxed">
              We collect no personal data — not through this website, and not
              through our apps. We have no analytics, no tracking, no advertising,
              and no user accounts.
            </p>
          </div>

          <Section title="This website">
            yochen.com.au is a static informational website. It uses no cookies, no
            analytics, no tracking pixels, and no advertising, and it has no forms,
            logins, or accounts — so it collects no personal information from you. As
            with any website, our hosting provider processes standard server request
            logs (such as IP address and the page requested) transiently to deliver
            and secure the site; we do not use these to identify you and do not
            combine them with any other data.
          </Section>

          <Section title="Our software products">
            Our apps are built to work entirely on your own device. They do not
            collect, store, or transmit personal information, usage analytics,
            device identifiers, or the contents of your documents to us or to any
            third party. All processing happens locally on your Mac, your files stay
            where you put them, and each app runs inside Apple&rsquo;s App Sandbox,
            which limits its access to the files you explicitly choose. PDF
            Professional Suite follows this policy; any future app that collects data
            will say so clearly and this policy will be updated before it does.
          </Section>

          <Section title="Network access in our apps">
            Our apps work fully offline. The only times an app may use the network
            are when <em>you</em> initiate an action that involves a third party —
            for example opening a link contained in a document (which opens in your
            default web browser), or choosing &ldquo;Rate App&rdquo; (which opens the
            app&rsquo;s App Store page). These actions hand off to Apple or to your
            browser, each governed by its own privacy policy, and we receive no
            personal information through them.
          </Section>

          <Section title="Purchases and downloads">
            Our apps are sold and downloaded through the Apple App Store. Apple
            processes your purchase and may share limited, aggregate, non-identifying
            sales and download statistics with us as the developer. We never receive
            your name, email, payment details, or Apple ID. Apple&rsquo;s handling of
            your data is covered by{" "}
            <a
              href="https://www.apple.com/legal/privacy/"
              className="underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-colors"
            >
              Apple&rsquo;s Privacy Policy
            </a>
            .
          </Section>

          <Section title="Third-party links">
            This website and our apps may contain links to third-party sites or
            services. We are not responsible for the privacy practices of those third
            parties; their own policies apply once you leave.
          </Section>

          <Section title="Your rights">
            Because we hold no personal data about you, there is nothing for us to
            access, correct, export, or delete on request. If you have any question
            about your privacy, you are welcome to contact us at any time.
          </Section>

          <Section title="Children&rsquo;s privacy">
            Our website and apps are suitable for all ages and collect no data from
            anyone, including children.
          </Section>

          <Section title="Changes to this policy">
            If we change this policy, we will update the &ldquo;Last updated&rdquo;
            date above and post the new version at this URL. Material changes will be
            reflected before they take effect.
          </Section>

          <Section title="Contact">
            Questions about this policy or your privacy? Email{" "}
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
