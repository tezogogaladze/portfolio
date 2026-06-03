import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — LookUpTonight",
  description: "Privacy Policy for LookUpTonight, a stargazing score app for iOS.",
};

export default function LookUpTonightPrivacyPage() {
  return (
    <main className="mx-auto min-h-screen max-w-[44rem] px-6 py-12 md:px-8 md:py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-base text-slate-300">
          LookUpTonight — Is tonight worth it?
        </p>
        <p className="mt-4 rounded-md border border-slate-700/70 bg-slate-900/40 px-4 py-3 text-sm text-slate-300">
          No account. No ads. Location is used only for weather and sky forecasts at spots you choose.
        </p>
        <div className="mt-5 space-y-1 text-sm text-slate-400">
          <p>Effective date: May 30, 2026</p>
          <p>Last updated: May 30, 2026</p>
        </div>
      </header>

      <article className="space-y-8 text-[15px] leading-7 text-slate-300">
        <section aria-labelledby="intro">
          <h2 id="intro" className="text-xl font-semibold text-slate-100">
            Privacy Policy — LookUpTonight
          </h2>
          <p className="mt-3">
            LookUpTonight (“the App”) is a stargazing score app for iOS (and Android-ready) published by Tezo
            Gogaladze (“we,” “us,” or “our”).
          </p>
          <p className="mt-3">
            This Privacy Policy explains what information the App collects, how we use it, and your choices. By using
            LookUpTonight, you agree to this policy.
          </p>
          <p className="mt-3">
            Contact:{" "}
            <a
              href="mailto:tezogogaladze@gmail.com"
              className="text-[color:var(--nav-hover-text)] underline decoration-slate-600 underline-offset-2 hover:decoration-[color:var(--nav-active-rule)]"
            >
              tezogogaladze@gmail.com
            </a>
          </p>
        </section>

        <section aria-labelledby="summary">
          <h2 id="summary" className="text-xl font-semibold text-slate-100">
            1. Summary
          </h2>
          <p className="mt-3">LookUpTonight helps you decide whether tonight is worth going outside to stargaze. The App:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Does not require an account</li>
            <li>Does not sell your personal data</li>
            <li>Does not use third-party advertising or analytics SDKs in the current version</li>
            <li>Uses your location only to provide forecasts and sky conditions for places you choose</li>
            <li>Sends coordinates to third-party weather services when loading forecast data</li>
          </ul>
          <p className="mt-3">Most data stays on your device.</p>
        </section>

        <section aria-labelledby="collect">
          <h2 id="collect" className="text-xl font-semibold text-slate-100">
            2. Information We Collect
          </h2>

          <h3 className="mt-5 text-base font-semibold text-slate-100">2.1 Location (optional)</h3>
          <p className="mt-2">
            If you choose “Use current location” or search for a city/address, the App uses geographic coordinates
            (latitude and longitude) to:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Fetch weather forecasts for your observing spot</li>
            <li>Compute astronomical conditions (moon, planets, night window)</li>
            <li>Look up light pollution context (Bortle scale) from an offline grid bundled with the App</li>
            <li>Estimate ISS pass timing (when available)</li>
          </ul>
          <p className="mt-3">
            Location access requires your permission through iOS. You can deny permission and still use the App by
            searching for or selecting a location manually.
          </p>
          <p className="mt-3">
            We do not track your location in the background. Location is used when you open the App, refresh data, or
            change your observing spot.
          </p>

          <h3 className="mt-5 text-base font-semibold text-slate-100">2.2 Location data you save on device</h3>
          <p className="mt-2">The App may store on your device:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Saved observing spots (name + coordinates)</li>
            <li>Recent location searches</li>
            <li>Your currently selected location</li>
            <li>Temporary GPS coordinates if you use current location</li>
          </ul>
          <p className="mt-3">
            This data is stored locally on your device (SQLite database and device preferences). We do not operate a
            user account server and do not receive your saved spots unless you contact us directly.
          </p>

          <h3 className="mt-5 text-base font-semibold text-slate-100">2.3 Data sent to third parties</h3>
          <p className="mt-2">When you use LookUpTonight, the App may send the following to external services:</p>
          <p className="mt-3 font-medium text-slate-200">
            OpenWeather (
            <a
              href="https://openweathermap.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--nav-hover-text)] underline decoration-slate-600 underline-offset-2 hover:decoration-[color:var(--nav-active-rule)]"
            >
              https://openweathermap.org/
            </a>
            )
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-6">
            <li>Latitude and longitude (and related query parameters) to retrieve weather forecasts and geocoding/search results</li>
            <li>Governed by OpenWeather’s terms and privacy practices</li>
          </ul>

          <p className="mt-3 font-medium text-slate-200">
            Open Notify (
            <a
              href="http://open-notify.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--nav-hover-text)] underline decoration-slate-600 underline-offset-2 hover:decoration-[color:var(--nav-active-rule)]"
            >
              http://open-notify.org/
            </a>
            )
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-6">
            <li>Latitude and longitude to retrieve predicted International Space Station pass times</li>
            <li>Used only for optional scoring/context; failures do not block core App functionality</li>
          </ul>
          <p className="mt-3">We do not send your name, email, or Apple ID to these services.</p>

          <h3 className="mt-5 text-base font-semibold text-slate-100">2.4 Data processed on device</h3>
          <p className="mt-2">The App processes the following locally without sending it to our servers:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Stargazing scores and checklists</li>
            <li>Astronomical calculations (moon phase, planet visibility, observing windows)</li>
            <li>Light pollution lookup from a bundled VIIRS-based grid (Earth Observation Group, CC-BY 4.0)</li>
            <li>Cached weather and ISS responses (stored on device to improve performance and offline use)</li>
          </ul>

          <h3 className="mt-5 text-base font-semibold text-slate-100">2.5 Information we do not collect</h3>
          <p className="mt-2">In the current version, LookUpTonight does not collect:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Email addresses or passwords (no account system)</li>
            <li>Payment information (the App is free; no in-app purchases in v1)</li>
            <li>Advertising identifiers</li>
            <li>Analytics or crash-reporting data via third-party SDKs</li>
            <li>Contacts, photos, microphone, or health data</li>
          </ul>
          <p className="mt-3">
            Apple may collect standard App Store / device diagnostics under Apple’s own policies. That is outside our
            control.
          </p>
        </section>

        <section aria-labelledby="use">
          <h2 id="use" className="text-xl font-semibold text-slate-100">
            3. How We Use Information
          </h2>
          <p className="mt-3">We use the information described above solely to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Show tonight’s stargazing score and verdict</li>
            <li>Display multi-night calendar forecasts</li>
            <li>Explain why a score was calculated (checklist, best window, visible objects)</li>
            <li>Remember your preferred observing locations</li>
            <li>Cache forecasts to reduce network requests</li>
          </ul>
          <p className="mt-3">We do not use your data for advertising, profiling, or sale to data brokers.</p>
        </section>

        <section aria-labelledby="legal-bases">
          <h2 id="legal-bases" className="text-xl font-semibold text-slate-100">
            4. Legal Bases (where applicable)
          </h2>
          <p className="mt-3">If you are in the EEA/UK, our legal bases may include:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Performance of a service you request (providing forecasts for your chosen location)</li>
            <li>Your consent (when you grant location permission or choose to use GPS)</li>
          </ul>
          <p className="mt-3">You may withdraw location permission at any time in iOS Settings.</p>
        </section>

        <section aria-labelledby="retention">
          <h2 id="retention" className="text-xl font-semibold text-slate-100">
            5. Data Retention
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>On-device saved spots and preferences remain until you delete them or uninstall the App</li>
            <li>Cached weather and ISS data expire automatically after a limited time (hours) and may be refreshed on next use</li>
            <li>We do not retain personal data on our own servers because we do not operate a backend account system in v1</li>
          </ul>
          <p className="mt-3">
            Uninstalling the App removes locally stored App data from your device (subject to iOS behavior).
          </p>
        </section>

        <section aria-labelledby="children">
          <h2 id="children" className="text-xl font-semibold text-slate-100">
            6. Children’s Privacy
          </h2>
          <p className="mt-3">
            LookUpTonight is not directed at children under 13 (or the applicable age in your country). We do not
            knowingly collect personal information from children. If you believe a child has provided us information,
            contact us and we will address it.
          </p>
        </section>

        <section aria-labelledby="rights">
          <h2 id="rights" className="text-xl font-semibold text-slate-100">
            7. Your Choices and Rights
          </h2>
          <p className="mt-3">You can:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Deny or revoke location permission in iOS Settings → LookUpTonight → Location</li>
            <li>Use manual search instead of GPS</li>
            <li>Delete saved spots inside the App</li>
            <li>Uninstall the App to remove local data</li>
          </ul>
          <p className="mt-3">
            Depending on your region, you may have rights to access, correct, or delete personal data. Because we do
            not operate user accounts, most data is already under your control on your device. Contact us at{" "}
            <a
              href="mailto:tezogogaladze@gmail.com"
              className="text-[color:var(--nav-hover-text)] underline decoration-slate-600 underline-offset-2 hover:decoration-[color:var(--nav-active-rule)]"
            >
              tezogogaladze@gmail.com
            </a>{" "}
            for privacy requests.
          </p>
        </section>

        <section aria-labelledby="transfers">
          <h2 id="transfers" className="text-xl font-semibold text-slate-100">
            8. International Transfers
          </h2>
          <p className="mt-3">
            Third-party providers (such as OpenWeather) may process requests on servers located outside your country.
            By using the App, you understand that coordinate-based API requests may be handled internationally subject
            to those providers’ policies.
          </p>
        </section>

        <section aria-labelledby="security">
          <h2 id="security" className="text-xl font-semibold text-slate-100">
            9. Security
          </h2>
          <p className="mt-3">
            We use reasonable measures appropriate to an app of this scope (local storage, HTTPS for network requests,
            no centralized user database in v1). No method of transmission or storage is 100% secure.
          </p>
        </section>

        <section aria-labelledby="third-party">
          <h2 id="third-party" className="text-xl font-semibold text-slate-100">
            10. Third-Party Links and Services
          </h2>
          <p className="mt-3">
            The App may link to third-party websites (for example, OpenWeather attribution). We are not responsible
            for their privacy practices. Review their policies separately.
          </p>
          <p className="mt-3">Attributions shown in the App:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Weather data: OpenWeather</li>
            <li>Light pollution data: Earth Observation Group VIIRS Nighttime Lights (VNL V2), Colorado School of Mines (CC-BY 4.0)</li>
          </ul>
        </section>

        <section aria-labelledby="changes">
          <h2 id="changes" className="text-xl font-semibold text-slate-100">
            11. Changes to This Policy
          </h2>
          <p className="mt-3">
            We may update this Privacy Policy from time to time (for example, if we add premium features,
            notifications, or analytics). We will post the updated policy at the same URL and change the “Last
            updated” date. Continued use after changes means you accept the updated policy.
          </p>
        </section>

        <section aria-labelledby="contact">
          <h2 id="contact" className="text-xl font-semibold text-slate-100">
            12. Contact
          </h2>
          <p className="mt-3">Tezo Gogaladze</p>
          <p className="mt-1">
            Email:{" "}
            <a
              href="mailto:tezogogaladze@gmail.com"
              className="text-[color:var(--nav-hover-text)] underline decoration-slate-600 underline-offset-2 hover:decoration-[color:var(--nav-active-rule)]"
            >
              tezogogaladze@gmail.com
            </a>
          </p>
          <p className="mt-1">
            Website:{" "}
            <a
              href="https://tezogogaladze.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--nav-hover-text)] underline decoration-slate-600 underline-offset-2 hover:decoration-[color:var(--nav-active-rule)]"
            >
              https://tezogogaladze.com
            </a>
          </p>
        </section>
      </article>

      <footer className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-400">
        <p>
          <Link href="/" className="hover:text-[color:var(--nav-hover-text)]">
            ← Back to portfolio home
          </Link>
        </p>
      </footer>
    </main>
  );
}
