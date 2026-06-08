import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — PDF Professional Suite",
  description:
    "Privacy policy for PDF Professional Suite, a macOS app by Yochen Pty Ltd. The app collects no personal data.",
  alternates: { canonical: "/pdf-professional-suite/privacy" },
  openGraph: {
    title: "Privacy Policy — PDF Professional Suite",
    description:
      "PDF Professional Suite collects no personal data. Everything happens on your Mac.",
    url: "https://yochen.com.au/pdf-professional-suite/privacy",
    siteName: "Yochen Pty Ltd",
    type: "article",
  },
};

export default function PdfProfessionalSuitePrivacy() {
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
          <p className="text-xs font-medium text-neutral-500 uppercase tracking-widest">
            PDF Professional Suite
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-neutral-500">
            Effective date: 8 June 2026 · Last updated: 8 June 2026
          </p>

          <p className="mt-8 text-lg text-neutral-700 leading-relaxed">
            This is the privacy policy for <strong>PDF Professional Suite</strong>{" "}
            (&ldquo;the app&rdquo;), a macOS application published by{" "}
            <strong>Yochen Pty Ltd</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
            &ldquo;our&rdquo;), an Australian company (ABN 28&nbsp;689&nbsp;854&nbsp;793).
          </p>

          <div className="mt-10 rounded-xl border border-neutral-200 bg-neutral-50 p-6">
            <h2 className="text-sm font-semibold tracking-wide">The short version</h2>
            <p className="mt-2 text-neutral-700 leading-relaxed">
              PDF Professional Suite does not collect, transmit, or sell any
              personal data. Everything you do in the app happens on your Mac. We
              have no servers, no analytics, no tracking, no advertising, and no
              user accounts.
            </p>
          </div>

          <Section title="Data we collect">
            <strong>None.</strong> The app does not collect, store, or transmit
            personal information, usage analytics, device identifiers, or the
            contents of your documents to us or to any third party.
          </Section>

          <Section title="How your documents are handled">
            All processing — opening, reading, annotating, organizing, compressing,
            encrypting, and printing PDFs — happens locally on your Mac. Your files
            and their contents are never uploaded to us or to any external server.
            Files you open or create stay where you put them on your own device, and
            the app runs inside Apple&rsquo;s App Sandbox, which limits its access to
            the files you explicitly choose.
          </Section>

          <Section title="Network access">
            The app works fully offline. The only times it may use the network are
            when <em>you</em> initiate an action that involves a third party:
            opening a link contained in a PDF (which opens in your default web
            browser), or choosing &ldquo;Rate App&rdquo; (which opens the app&rsquo;s
            App Store page). These actions hand off to Apple or to your browser, each
            governed by its own privacy policy. We do not receive any personal
            information through them.
          </Section>

          <Section title="Purchases and downloads">
            The app is sold and downloaded through the Apple App Store. Apple
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

          <Section title="Permissions the app requests">
            To do its job, macOS may ask you to grant standard permissions such as
            access to files you select and the ability to print. These permissions
            are used only to perform the action you requested and do not result in
            any data being collected by us.
          </Section>

          <Section title="Children&rsquo;s privacy">
            The app is suitable for all ages and does not collect any data from
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
        <div className="mx-auto max-w-3xl text-xs text-neutral-500">
          © {year} Yochen Pty Ltd. All rights reserved.
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
