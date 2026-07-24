const sectionHeading =
  'pt-2 text-lg font-semibold text-easycube-navy'
const subHeading = 'pt-2 font-semibold text-easycube-navy'
const listClass = 'list-disc space-y-2 pl-5'
const linkClass = 'font-medium text-easycube-blue hover:underline'

export default function PrivacyPage() {
  return (
    <main className="bg-easycube-bg py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <article className="rounded-2xl border border-easycube-border bg-white p-6 shadow-sm sm:p-10">
          <header className="border-b border-easycube-border pb-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-easycube-blue">
              Legal
            </p>
            <h1 className="mt-2 text-3xl font-bold text-easycube-navy sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-easycube-text-secondary">
              Last updated: 24 July 2026
            </p>
          </header>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-easycube-text-secondary">
            <p>
              This Privacy Policy describes how Easycube SG (&ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and handles
              information when you use our mobile application, Easycube TAG (the
              &ldquo;App&rdquo;).
            </p>
            <p>
              By using the App, you agree to the collection and use of information
              in accordance with this policy.
            </p>

            <h2 className={sectionHeading}>1. About the App</h2>
            <p>
              Easycube is an enterprise operational tool designed to enhance last
              mile delivery service with connected Internet of Things (IoT)
              hardware devices and innovative design.
            </p>

            <h2 className={sectionHeading}>2. Information We Collect</h2>

            <h3 className={subHeading}>A. Provisioned Account Data</h3>
            <ul className={listClass}>
              <li>
                <strong className="text-easycube-navy">No In-App Registration:</strong>{' '}
                Users cannot self-register inside the App.
              </li>
              <li>
                <strong className="text-easycube-navy">Administrator-Created Accounts:</strong>{' '}
                Accounts are provisioned by our administrative team using your
                assigned corporate or personal email address. This email is used
                strictly for authentication, system security, and account
                management.
              </li>
            </ul>

            <h3 className={subHeading}>B. Usage &amp; Operational Data</h3>
            <p>
              To evaluate system performance and improve operational workflows,
              we collect information about how and when the App is used:
            </p>
            <ul className={listClass}>
              <li>
                <strong className="text-easycube-navy">Task Timestamps:</strong>{' '}
                Logs of when specific tasks are performed (e.g., time and date of
                parcel scans or IoT device searches).
              </li>
              <li>
                <strong className="text-easycube-navy">Usage Patterns &amp; System Telemetry:</strong>{' '}
                Information regarding feature usage frequency, session duration,
                workflow completion rates, and system diagnostic logs.
              </li>
            </ul>

            <h3 className={subHeading}>C. Local Device Storage</h3>
            <p>
              <strong className="text-easycube-navy">No Local Personal Data:</strong>{' '}
              The App does not store personal data or parcel logs locally on your
              mobile device. All task and usage data is securely transmitted to
              and stored on our servers.
            </p>

            <h3 className={subHeading}>D. System &amp; Hardware Permissions</h3>
            <p>
              To perform core functions, the App requires access to the following
              permissions:
            </p>
            <ul className={listClass}>
              <li>
                <strong className="text-easycube-navy">Camera:</strong> Used
                exclusively for scanning parcel barcodes or QR codes.
              </li>
              <li>
                <strong className="text-easycube-navy">Bluetooth / Location Services:</strong>{' '}
                Required by the Android operating system to perform Bluetooth Low
                Energy (BLE) scanning to discover and connect with nearby IoT
                parcel-locating devices. We do not track, record, or store your
                physical GPS location history.
              </li>
            </ul>

            <h2 className={sectionHeading}>3. How We Use Your Information</h2>
            <p>
              We use the collected information solely for legitimate operational
              and business purposes:
            </p>
            <ul className={listClass}>
              <li>
                <strong className="text-easycube-navy">Core Functionality &amp; Access Control:</strong>{' '}
                Authenticating provisioned user accounts and executing parcel
                activities via IoT hardware.
              </li>
              <li>
                <strong className="text-easycube-navy">Internal Evaluation &amp; Workflow Optimization:</strong>{' '}
                Analyzing task completion timestamps and usage patterns to measure
                efficiency, optimize application workflows, and improve operational
                tools.
              </li>
              <li>
                <strong className="text-easycube-navy">System Diagnostics &amp; Maintenance:</strong>{' '}
                Monitoring app stability, resolving technical issues, and ensuring
                platform security.
              </li>
            </ul>

            <h2 className={sectionHeading}>4. Third-Party Services &amp; Data Sharing</h2>
            <ul className={listClass}>
              <li>
                <strong className="text-easycube-navy">No Data Monetization:</strong>{' '}
                We do not sell, rent, trade, or share your personal credentials,
                usage patterns, or operational logs with third parties for
                marketing or advertising purposes.
              </li>
              <li>
                <strong className="text-easycube-navy">System Infrastructure:</strong>{' '}
                Data may be processed by secure cloud hosting and infrastructure
                providers acting strictly on our behalf under strict confidentiality
                agreements.
              </li>
            </ul>

            <h2 className={sectionHeading}>5. Data Security &amp; Storage</h2>
            <p>
              We implement strict technical and organizational safeguards to
              protect your information:
            </p>
            <ul className={listClass}>
              <li>
                <strong className="text-easycube-navy">Encryption in Transit:</strong>{' '}
                All data transmitted between the App, backend servers, and connected
                IoT devices is encrypted using modern protocols (TLS/HTTPS).
              </li>
              <li>
                <strong className="text-easycube-navy">Access Control:</strong>{' '}
                Usage logs and account information are accessible only by authorized
                internal administrators for operational evaluation and system
                support.
              </li>
            </ul>

            <h2 className={sectionHeading}>6. Account Deletion and Data Retention</h2>

            <h3 className={subHeading}>A. Data Retention</h3>
            <p>
              We retain usage data and task timestamps only as long as necessary to
              conduct internal evaluations, fulfill operational needs, or comply
              with record-keeping obligations.
            </p>

            <h3 className={subHeading}>B. Account Deletion Requests</h3>
            <p>
              In compliance with Google Play Developer Policies, you have the right
              to request the deletion of your account and associated personal
              identifiers:
            </p>
            <ul className={listClass}>
              <li>
                <strong className="text-easycube-navy">How to Request Deletion:</strong>{' '}
                Email us at{' '}
                <a href="mailto:easycubesg@gmail.com" className={linkClass}>
                  easycubesg@gmail.com
                </a>{' '}
                with the subject line &ldquo;Account &amp; Data Deletion
                Request.&rdquo;
              </li>
              <li>
                <strong className="text-easycube-navy">Processing:</strong> Upon
                receiving your request, we will deactivate your account and purge
                your email address and direct account associations from our active
                user database within 14 business days.
              </li>
            </ul>

            <h2 className={sectionHeading}>7. Children&rsquo;s Privacy</h2>
            <p>
              The App is an enterprise operational tool and is not intended for use
              by children under the age of 13 (or 16 in certain jurisdictions). We
              do not knowingly collect personal data from or provision accounts for
              children.
            </p>

            <h2 className={sectionHeading}>8. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy to reflect changes in our
              operational practices. Any updates will be posted on this page with an
              updated &ldquo;Last Updated&rdquo; date.
            </p>

            <h2 className={sectionHeading}>9. Contact Us</h2>
            <p>
              If you have questions regarding this Privacy Policy or internal data
              practices, please contact:
            </p>
            <ul className={listClass}>
              <li>
                <strong className="text-easycube-navy">Developer / Company Name:</strong>{' '}
                Easycube SG
              </li>
              <li>
                <strong className="text-easycube-navy">Email:</strong>{' '}
                <a href="mailto:easycubesg@gmail.com" className={linkClass}>
                  easycubesg@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </main>
  )
}
