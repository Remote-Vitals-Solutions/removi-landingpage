import Image from 'next/image';
import AnimateIn from './components/AnimateIn';
import StickyProduct from './components/StickyProduct';
import Navbar from './components/Navbar';
import { ContactForm, Newsletter } from './components/Forms';

const LINKEDIN = {
  company: 'https://www.linkedin.com/company/removi/',
  asger: 'https://www.linkedin.com/in/asger-hannibal-villadsen-858494161',
  rasmus: 'https://www.linkedin.com/in/rasmus-faber-nørgaard-aa3043279',
  mads: 'https://www.linkedin.com/in/mads-christian-tofte-gregers-22061919',
};

function LinkedInIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Product />
        <Technology />
        <Team />
        <News />
        <Partners />
        <Newsletter />
        <Regulatory />
      </main>
      <Footer />
    </div>
  );
}


function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white">
      <div className="max-w-3xl flex flex-col items-center gap-7">
        <AnimateIn direction="fade" delay={0}>
          <p className="text-xs font-medium uppercase tracking-[0.18em]" style={{ color: '#27B9B6' }}>
            Remote Vitals Care
          </p>
        </AnimateIn>
        <AnimateIn direction="up" delay={100}>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight" style={{ color: '#1d1d1f' }}>
            The heart,<br />
            <span style={{ color: '#27B9B6' }}>monitored continuously.</span>
          </h1>
        </AnimateIn>
        <AnimateIn direction="up" delay={200}>
          <p className="text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: '#6e6e73' }}>
            Removi develops a wrist-worn ECG device enabling continuous cardiac monitoring
            and early detection of atrial fibrillation — wherever the patient is.
          </p>
        </AnimateIn>
        <AnimateIn direction="up" delay={320}>
          <a
            href="#contact"
            className="mt-2 px-9 py-3.5 rounded-full font-medium text-sm text-white transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#E151B2' }}
          >
            Get in touch
          </a>
        </AnimateIn>
        <AnimateIn direction="fade" delay={500} className="mt-16 w-full max-w-2xl">
          <div style={{ opacity: 0.15 }}>
            <EkgLine />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

function EkgLine() {
  return (
    <svg viewBox="0 0 800 60" className="w-full" preserveAspectRatio="none">
      <path
        d="M 0,30 L 60,30 C 70,30 72,22 82,22 C 92,22 94,30 100,30 L 114,30 L 118,34 L 124,2 L 130,42 L 136,30 L 152,30 C 162,30 165,19 177,19 C 189,19 192,30 202,30 L 332,30 C 342,30 344,22 354,22 C 364,22 366,30 372,30 L 386,30 L 390,34 L 396,2 L 402,42 L 408,30 L 424,30 C 434,30 437,19 449,19 C 461,19 464,30 474,30 L 600,30 C 610,30 612,22 622,22 C 632,22 634,30 640,30 L 654,30 L 658,34 L 664,2 L 670,42 L 676,30 L 692,30 C 702,30 705,19 717,19 C 729,19 732,30 742,30 L 800,30"
        fill="none"
        stroke="#27B9B6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Problem() {
  return (
    <section className="py-32 px-6" style={{ backgroundColor: '#f5f5f7' }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <AnimateIn direction="left">
              <p className="text-xs font-medium uppercase tracking-[0.18em] mb-6" style={{ color: '#27B9B6' }}>
                The problem
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6" style={{ color: '#1d1d1f' }}>
                Atrial fibrillation is the silent epidemic of cardiology.
              </h2>
              <p className="leading-relaxed mb-4 text-base" style={{ color: '#6e6e73' }}>
                AFib is the most common cardiac arrhythmia — and one of the leading causes of stroke.
                The challenge: it is episodic. Patients are asymptomatic during clinical visits,
                yet experience dangerous episodes at home.
              </p>
              <p className="leading-relaxed text-base" style={{ color: '#6e6e73' }}>
                Current diagnostic tools require scheduled appointments and short monitoring windows.
                Meanwhile, hospitals face increasing pressure to discharge patients earlier —
                creating a growing population of home-hospitalized patients who need continuous care.
              </p>
            </AnimateIn>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { stat: '~30%', label: 'of strokes are caused by undetected atrial fibrillation', delay: 0 },
              { stat: '1 in 3', label: 'people over 55 will develop AFib in their lifetime', delay: 100 },
              { stat: '72h', label: 'maximum current standard ECG monitoring window', delay: 200 },
            ].map((item) => (
              <AnimateIn key={item.stat} direction="right" delay={item.delay}>
                <div
                  className="p-7 rounded-2xl bg-white"
                  style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                >
                  <div className="text-3xl font-bold mb-1.5" style={{ color: '#27B9B6' }}>
                    {item.stat}
                  </div>
                  <p className="text-sm" style={{ color: '#6e6e73' }}>{item.label}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Product() {
  return (
    <section id="product" className="scroll-mt-24 py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto mb-20">
        <AnimateIn direction="up">
          <p className="text-xs font-medium uppercase tracking-[0.18em] mb-6" style={{ color: '#27B9B6' }}>
            The product
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 max-w-2xl" style={{ color: '#1d1d1f' }}>
            Continuous ECG. Wrist-worn. Clinically actionable.
          </h2>
          <p className="leading-relaxed max-w-xl text-base" style={{ color: '#6e6e73' }}>
            Removi&rsquo;s device captures ECG data continuously and streams it securely to
            clinical staff — enabling remote monitoring and automated arrhythmia detection.
          </p>
        </AnimateIn>
      </div>
      <StickyProduct />
    </section>
  );
}

const techSteps = [
  {
    step: '01',
    title: 'Capture',
    body: 'A medical-grade ECG sensor on the wrist records the heart’s electrical signal continuously, sampling every heartbeat day and night without disrupting daily life.',
  },
  {
    step: '02',
    title: 'Analyse',
    body: 'On-device algorithms process the raw signal in real time, filtering noise and screening rhythm patterns for the irregularities that characterise atrial fibrillation.',
  },
  {
    step: '03',
    title: 'Transmit',
    body: 'Findings stream securely and encrypted to a clinical dashboard, where staff review the data remotely and receive automated alerts the moment an episode is detected.',
  },
];

const techPillars = [
  { title: 'Medical-grade signal', body: 'Single-lead ECG quality validated against clinical reference standards.' },
  { title: 'Edge processing', body: 'Arrhythmia screening runs on the device to minimise latency and data load.' },
  { title: 'Secure by design', body: 'End-to-end encryption and privacy built to meet healthcare data requirements.' },
  { title: 'Clinical integration', body: 'Data delivered in a format that fits existing hospital and remote-care workflows.' },
];

function Technology() {
  return (
    <section id="technology" className="scroll-mt-24 py-32 px-6" style={{ backgroundColor: '#f5f5f7' }}>
      <div className="max-w-5xl mx-auto">
        <AnimateIn direction="up">
          <p className="text-xs font-medium uppercase tracking-[0.18em] mb-6" style={{ color: '#27B9B6' }}>
            Technology
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 max-w-2xl" style={{ color: '#1d1d1f' }}>
            How it works.
          </h2>
          <p className="leading-relaxed max-w-xl mb-16 text-base" style={{ color: '#6e6e73' }}>
            From the patient’s wrist to the clinician’s screen — three steps that turn
            continuous heart signals into actionable insight.
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {techSteps.map((s, i) => (
            <AnimateIn key={s.step} direction="up" delay={i * 100}>
              <div
                className="h-full rounded-3xl p-8 bg-white flex flex-col gap-4"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <span className="text-xs font-medium uppercase tracking-[0.18em]" style={{ color: '#27B9B6' }}>
                  {s.step}
                </span>
                <h3 className="text-xl font-bold" style={{ color: '#1d1d1f' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6e6e73' }}>{s.body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {techPillars.map((p, i) => (
            <AnimateIn key={p.title} direction="up" delay={i * 80}>
              <div className="h-full rounded-2xl p-6 bg-white" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <p className="font-semibold text-sm mb-2" style={{ color: '#1d1d1f' }}>{p.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: '#6e6e73' }}>{p.body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

const team = [
  {
    name: 'Asger Villadsen',
    role: 'MSc. Mechanical Engineer',
    tag: 'Founder',
    linkedin: LINKEDIN.asger,
  },
  {
    name: 'Rasmus Nørgaard',
    role: 'MSc. Biomedical Engineer',
    tag: 'Founder',
    linkedin: LINKEDIN.rasmus,
  },
  {
    name: 'Mads Tofte Gregers',
    role: 'PhD · Medical Health Advisor',
    tag: 'Advisor',
    linkedin: LINKEDIN.mads,
  },
];

function Team() {
  return (
    <section id="team" className="scroll-mt-24 py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <AnimateIn direction="up">
          <p className="text-xs font-medium uppercase tracking-[0.18em] mb-6" style={{ color: '#27B9B6' }}>
            The team
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: '#1d1d1f' }}>
            Built at DTU.
          </h2>
          <p className="leading-relaxed max-w-xl mb-16 text-base" style={{ color: '#6e6e73' }}>
            We are a cross-disciplinary team from the Technical University of Denmark,
            combining expertise in medical technology, software engineering, and healthcare systems.
          </p>
        </AnimateIn>
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((person, i) => (
            <AnimateIn key={person.name} direction="up" delay={i * 100}>
              <div
                className="rounded-3xl p-8 bg-white flex flex-col items-center text-center gap-4"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-lg font-semibold"
                  style={{ backgroundColor: '#27B9B6' }}
                >
                  {person.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <p className="font-semibold text-base" style={{ color: '#1d1d1f' }}>{person.name}</p>
                  <p className="text-sm mt-1" style={{ color: '#6e6e73' }}>{person.role}</p>
                </div>
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{ backgroundColor: '#27B9B615', color: '#27B9B6' }}
                >
                  {person.tag}
                </span>
                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${person.name} on LinkedIn`}
                    className="transition-opacity hover:opacity-60"
                    style={{ color: '#6e6e73' }}
                  >
                    <LinkedInIcon className="w-5 h-5" />
                  </a>
                )}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

const news = [
  {
    date: 'June 2026',
    tag: 'Milestone',
    title: 'Removi joins DTU Skylab',
    body: 'We have moved into DTU Skylab, DTU’s innovation hub, to accelerate development of our wrist-worn ECG device.',
  },
  {
    date: 'Coming soon',
    tag: 'Product',
    title: 'First prototype in testing',
    body: 'Our early hardware prototype is entering internal bench testing — more details to follow as we validate the signal quality.',
  },
  {
    date: 'Coming soon',
    tag: 'Partnerships',
    title: 'Seeking clinical collaborators',
    body: 'We are in conversation with clinicians and institutions interested in piloting continuous remote cardiac monitoring.',
  },
];

function News() {
  return (
    <section id="news" className="scroll-mt-24 py-32 px-6" style={{ backgroundColor: '#f5f5f7' }}>
      <div className="max-w-5xl mx-auto">
        <AnimateIn direction="up">
          <p className="text-xs font-medium uppercase tracking-[0.18em] mb-6" style={{ color: '#27B9B6' }}>
            News &amp; updates
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 max-w-2xl" style={{ color: '#1d1d1f' }}>
            Where we are right now.
          </h2>
          <p className="leading-relaxed max-w-xl mb-16 text-base" style={{ color: '#6e6e73' }}>
            Follow our progress as we build toward continuous, clinically actionable cardiac monitoring.
          </p>
        </AnimateIn>
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <AnimateIn key={item.title} direction="up" delay={i * 100}>
              <div
                className="h-full rounded-3xl p-8 bg-white flex flex-col gap-4"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#27B9B615', color: '#27B9B6' }}
                  >
                    {item.tag}
                  </span>
                  <span className="text-xs" style={{ color: '#6e6e73' }}>{item.date}</span>
                </div>
                <h3 className="text-lg font-bold leading-snug" style={{ color: '#1d1d1f' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6e6e73' }}>{item.body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section id="contact" className="scroll-mt-24 py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <AnimateIn direction="left">
          <p className="text-xs font-medium uppercase tracking-[0.18em] mb-6" style={{ color: '#27B9B6' }}>
            Partners & contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 max-w-2xl" style={{ color: '#1d1d1f' }}>
            We are looking for clinical and institutional partners.
          </h2>
          <p className="leading-relaxed max-w-xl mb-10 text-base" style={{ color: '#6e6e73' }}>
            If you are a clinician, hospital, investor, or research institution interested
            in remote cardiac monitoring — we would like to hear from you.
          </p>
          <ContactForm />
        </AnimateIn>

        <AnimateIn direction="up" delay={150}>
          <div
            className="mt-20 rounded-3xl p-12"
            style={{ backgroundColor: '#f5f5f7' }}
          >
            <p className="text-xs uppercase tracking-widest mb-10 text-center" style={{ color: '#6e6e73' }}>Partners</p>
            <div className="flex flex-wrap justify-center items-center gap-10">
              <div
                className="bg-white rounded-2xl px-8 py-6 flex items-center gap-4"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)', minWidth: '180px' }}
              >
                <Image
                  src="/dtu-skylab.png"
                  alt="DTU Skylab"
                  width={56}
                  height={56}
                  className="object-contain rounded-xl"
                />
                <div className="text-left">
                  <p className="font-semibold text-sm" style={{ color: '#1d1d1f' }}>DTU Skylab</p>
                  <p className="text-xs mt-0.5" style={{ color: '#6e6e73' }}>DTU&rsquo;s Innovation Hub</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

function Regulatory() {
  return (
    <section id="regulatory" className="scroll-mt-24 py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <AnimateIn direction="up">
          <p className="text-xs font-medium uppercase tracking-[0.18em] mb-5" style={{ color: '#27B9B6' }}>
            Regulatory
          </p>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-5" style={{ color: '#1d1d1f' }}>
            A medical device in development.
          </h2>
          <p className="leading-relaxed text-sm md:text-base mb-4" style={{ color: '#6e6e73' }}>
            Removi is developing a medical device, and we are early in that journey. We are
            actively working toward the regulatory approvals required to bring continuous
            cardiac monitoring safely to patients and clinicians.
          </p>
          <p className="leading-relaxed text-sm md:text-base" style={{ color: '#6e6e73' }}>
            Our device is currently in development and is not yet certified or approved for
            clinical use. We are committed to meeting the applicable medical device regulations
            and clinical standards as we progress, and we will not make claims about clinical
            performance until they have been properly validated.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#e8e8ed]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-xs" style={{ color: '#6e6e73' }}>
        <span className="font-semibold" style={{ color: '#1d1d1f' }}>Removi</span>
        <span>Remote Vitals Solutions</span>
        <div className="flex items-center gap-4">
          <a
            href={LINKEDIN.company}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Removi on LinkedIn"
            className="transition-opacity hover:opacity-60 flex items-center gap-1.5"
            style={{ color: '#6e6e73' }}
          >
            <LinkedInIcon className="w-4 h-4" />
            LinkedIn
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
