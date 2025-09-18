import React from "react";

// Replace these with your actual links
const FORM_URL = "https://example.com/join"; // TODO: paste your form link
const SLACK_URL = "https://cornelltech.slack.com/archives/C09FRPDKZEV";

export default function CornellTechAISociety() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 antialiased selection:bg-neutral-900 selection:text-white">
      {/* Top Border */}
      <div className="h-0.5 w-full bg-neutral-200" />

      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <img src="/images/CTAIS-logo.png" alt="Cornell Tech AI Society Logo" className="h-10 w-auto" />
            <img src="/images/CTAIS-text.png" alt="Cornell Tech AI Society Text" className="h-6 w-auto" />
          </div>
          <nav className="hidden gap-6 md:flex text-sm">
            <a href="#mission" className="text-neutral-600 hover:text-neutral-900 transition">Mission</a>
            <a href="#what" className="text-neutral-600 hover:text-neutral-900 transition">What We Do</a>
            <a href={FORM_URL} className="text-neutral-600 hover:text-neutral-900 transition">Join</a>
          </nav>
        </div>
        <div className="h-px w-full bg-neutral-200" />
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-5 md:py-24">
          <div className="md:col-span-3">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] leading-[1.1]">
              Where humans and machines learn <span className="inline-block border-b border-neutral-300 pb-1">together</span>.
            </h2>
            <p className="mt-5 max-w-2xl text-neutral-600">
              The Cornell Tech AI Society is a student‑run community where students from all backgrounds
              learn, discuss, and build with AI — exploring both the technical and human sides of artificial intelligence.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={FORM_URL}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-900 px-5 py-2.5 text-sm font-medium hover:bg-neutral-900 hover:text-white transition"
              >
                Join the Society
                <ArrowRight />
              </a>
              <a
                href={SLACK_URL}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-sm text-neutral-700 hover:border-neutral-900 hover:text-neutral-900 transition"
              >
                Visit our Slack
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="rounded-2xl border border-neutral-200 p-5">
              <h3 className="text-sm font-medium text-neutral-700">Next Up</h3>
              <div className="mt-3 space-y-3 text-sm">
                <div className="flex items-start justify-between gap-4">
                  <div className="max-w-[75%]">
                    <p className="font-medium">Club Fair</p>
                    <p className="text-neutral-600">Stop by our table to say hi, meet the team, and sign up.</p>
                  </div>
                  <span className="rounded-full border border-neutral-200 px-2.5 py-1 text-xs text-neutral-600">Thurs 4:30pm</span>
                </div>
                <div className="h-px w-full bg-neutral-200" />
                <div className="flex items-start justify-between gap-4">
                  <div className="max-w-[75%]">
                    <p className="font-medium">Kickoff Talk</p>
                    <p className="text-neutral-600">Lightning talks + demos; all skill levels welcome.</p>
                  </div>
                  <span className="rounded-full border border-neutral-200 px-2.5 py-1 text-xs text-neutral-600">TBA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-neutral-200" />
      </section>

      {/* Mission */}
      <section id="mission" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold tracking-wider text-neutral-500">Mission</h3>
            <div className="mt-3 h-px w-10 bg-neutral-300" />
          </div>
          <div className="md:col-span-3">
            <p className="text-lg leading-relaxed text-neutral-700">
              We foster an interdisciplinary community connecting science, technology, arts, and humanities.
              We engage with academic, startup, and industry leaders; we create hands‑on opportunities to
              explore innovation at the frontier of AI; and we strive to extend the human experience while
              aligning with pro‑social goals and the greater good of humanity.
            </p>
          </div>
        </div>
        <div className="mt-12 h-px w-full bg-neutral-200" />
      </section>

      {/* What We Do */}
      <section id="what" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold tracking-wider text-neutral-500">What We Do</h3>
            <div className="mt-3 h-px w-10 bg-neutral-300" />
            <p className="mt-4 text-neutral-600">Programming that balances rigor, creativity, and community.</p>
          </div>
          <div className="md:col-span-8">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Talks & panels with AI experts",
                  desc: "Conversations with researchers, builders, and thought leaders.",
                },
                {
                  title: "Hands‑on technical workshops & demos",
                  desc: "Bring your laptop; leave with a prototype or new skill.",
                },
                {
                  title: "Open discussions & debates on ethics & philosophy",
                  desc: "Interrogate implications, risks, and governance.",
                },
                {
                  title: "Creative galleries (GenAI art, media)",
                  desc: "Showcase student work at the intersection of AI and art.",
                },
                {
                  title: "Hackathons & collaborative builds",
                  desc: "Team up to ship useful or provocative projects.",
                },
                {
                  title: "Reading groups & office hours",
                  desc: "Paper clubs, tool walkthroughs, and peer mentorship.",
                },
              ].map((item) => (
                <li key={item.title} className="rounded-2xl border border-neutral-200 p-5 hover:border-neutral-900 transition">
                  <p className="font-medium tracking-tight">{item.title}</p>
                  <p className="mt-1 text-sm text-neutral-600">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 h-px w-full bg-neutral-200" />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="rounded-2xl border border-neutral-200 p-8 md:p-12">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold tracking-tight">Join the Cornell Tech AI Society</h3>
              <p className="mt-2 max-w-2xl text-neutral-600">
                Add your name and interests — we’ll reach out with upcoming events, workshops, and project opportunities.
              </p>
            </div>
            <div className="md:col-span-1 md:justify-self-end">
              <a
                href={FORM_URL}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-neutral-900 px-6 py-3 text-sm font-medium hover:bg-neutral-900 hover:text-white transition"
              >
                Fill Out the Interest Form
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
          <p className="text-xs text-neutral-500">© {new Date().getFullYear()} Cornell Tech AI Society. Student‑run club at Cornell Tech, NYC.</p>
          <div className="flex items-center gap-3 text-xs text-neutral-600">
            <a href="#mission" className="hover:text-neutral-900">Mission</a>
            <span className="h-3 w-px bg-neutral-300" />
            <a href="#what" className="hover:text-neutral-900">What We Do</a>
            <span className="h-3 w-px bg-neutral-300" />
            <a href={FORM_URL} className="hover:text-neutral-900">Join</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 4.5L21 12l-7.5 7.5M21 12H3" />
    </svg>
  );
}
