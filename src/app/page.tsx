const howToPlay = [
  {
    step: "Fill",
    title: "Water or sand",
    copy: "Add weight to the pails so the game stays put.",
  },
  {
    step: "Place",
    title: "Play almost anywhere",
    copy: "Beach, grass, cottage, park, campsite, tailgate, basement, garage, or wherever it makes sense to throw safely.",
  },
  {
    step: "Pace",
    title: "7 paces / 21 feet",
    copy: "Regulation distance is simple enough to measure without a tape.",
  },
  {
    step: "Play",
    title: "Throw 3 rocks",
    copy: "Hit the side, rim, or instant-win hole. Call it loud.",
  },
];

const reasons = [
  "No assembly required",
  "Portable outdoor setup",
  "Built around the metal-pail DING",
  "Simple rules people understand fast",
  "Game to 21 - win by 2",
  "Beach, backyard, cottage, park, camping, and tailgate ready",
];

const rules = [
  "3 rocks per turn",
  "No ground hits - dead rock",
  "Underhand or overhand allowed",
  "1v1 and 2v2 cancel out points",
  "3-player games count all points",
  "If you did not hear the side hit, it does not count",
];

const faqs = [
  {
    question: "Can I use my own pails?",
    answer:
      "Sure, but then you are missing the instant-win hole and the original RockPail look. The pails are the game board - and official RockPail pails are built to make the game feel like RockPail.",
  },
  {
    question: "Do rocks come with RockPail?",
    answer:
      "No. That is intentional. You get to choose the rocks that feel right to you - the right weight, the right grip, the right throw.",
  },
  {
    question: "What are the pouches for?",
    answer:
      "The pouches help stop your rocks from disappearing in the sand or grass. They are thin enough to preserve the authentic rock-on-pail **DING!**",
  },
  {
    question: "Can I change the distance?",
    answer:
      "Yes. Regulation is 7 paces / 21 feet, but the main rule is that everyone plays the same distance.",
  },
  {
    question: "Do I have to play on the beach?",
    answer:
      "Nope. Beach, grass, backyard, cottage, park, campsite, tailgate, garage, basement - play wherever you have enough room and can throw safely.",
  },
  {
    question: "Do side hits count?",
    answer: "Only if you heard it. No DING, no point.",
  },
];

function renderAnswer(answer: string) {
  if (!answer.includes("**DING!**")) {
    return answer;
  }

  const [before, after] = answer.split("**DING!**");
  return (
    <>
      {before}
      <strong>DING!</strong>
      {after}
    </>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden pt-24 sm:pt-28">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-[var(--pail-purple)]/15 bg-[var(--rockpail-yellow)] shadow-sm">
        <div className="container flex h-24 items-center justify-between text-[var(--pail-purple)] sm:h-28">
          <a href="#top" className="block" aria-label="RockPail home">
            <img
              src="/Purple_Logo.png"
              alt="RockPail"
              className="h-16 w-auto object-contain sm:h-20"
            />
          </a>
          <div className="hidden items-center gap-7 text-sm font-black uppercase tracking-[0.18em] sm:flex">
            <a href="#how">How to Play</a>
            <a href="#rules">Rules</a>
            <a href="#contact">Wholesale</a>
          </div>
        </div>
      </nav>

      <section id="top" className="hero-grid relative isolate bg-[var(--rockpail-yellow)]">
        <div className="absolute inset-x-0 top-0 h-3 bg-[var(--pail-purple)]" />
        <div className="container grid gap-10 pb-12 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:pb-14 lg:pt-10">
          <div className="pt-0 lg:pt-3">
            <p className="section-kicker mb-4">No assembly required</p>
            <h1 className="max-w-4xl text-6xl font-black uppercase leading-[0.9] tracking-[-0.07em] text-[var(--pail-purple)] sm:text-7xl lg:text-8xl">
              Keep Fun Simple
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-[var(--rock-black)] sm:text-2xl">
              The simple, portable outdoor throwing game built around rocks, metal pails, and the perfect DING.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#how"
                className="rounded-full bg-[var(--pail-purple)] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-[var(--rockpail-yellow)] shadow-xl shadow-purple-950/20 transition hover:-translate-y-0.5"
              >
                See How It Works
              </a>
              <a
                href="#contact"
                className="rounded-full border-2 border-[var(--pail-purple)] bg-white/70 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-[var(--pail-purple)] transition hover:-translate-y-0.5"
              >
                Get RockPail
              </a>
            </div>
          </div>

          <div className="brand-card mx-auto w-full max-w-lg overflow-hidden rounded-[2rem] p-3 text-center sm:p-4 lg:mx-0 lg:ml-auto">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-white">
              <img
                src="/Beach%20kids.png?v=20260701"
                alt="RockPail being played outside on the beach"
                className="w-full object-contain"
              />
            </div>
            <div className="px-5 pb-5 pt-5">
              <img
                src="/Purple_Logo.png"
                alt="RockPail logo"
                className="mx-auto w-full max-w-xs"
              />
              <p className="mt-4 max-w-sm text-base font-semibold leading-7">
                Fill the pails. Place them 7 paces apart. Throw the rocks. Call it loud.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--sand-white)] py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker mb-4">What it is</p>
            <h2 className="text-4xl font-black uppercase tracking-[-0.05em] text-[var(--pail-purple)] sm:text-5xl">
              Rocks. Metal pails. Loud outdoor fun.
            </h2>
          </div>
          <div className="text-xl font-semibold leading-9 text-neutral-800">
            <p>
              RockPail is an easy outdoor game for beaches, backyards, cottages, parks, tailgates, and camping.
            </p>
            <p className="mt-5">
              No complicated setup. No fragile boards. No overthinking. Just fill the pails, throw the rocks, and play to 21.
            </p>
          </div>
        </div>
      </section>

      <section id="how" className="bg-white py-20 scroll-mt-28">
        <div className="container">
          <div className="max-w-3xl">
            <p className="section-kicker mb-4">How to play</p>
            <h2 className="text-4xl font-black uppercase tracking-[-0.05em] text-[var(--pail-purple)] sm:text-6xl">
              Fill. Place. Pace. Play.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {howToPlay.map((item) => (
              <article key={item.step} className="rounded-[1.5rem] border-2 border-neutral-100 bg-[var(--sand-white)] p-6">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--pail-purple)]">
                  {item.step}
                </p>
                <h3 className="mt-4 text-2xl font-black tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-3 text-base font-medium leading-7 text-neutral-700">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--pail-purple)] py-20 text-white">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <img
              src="/Yellow_logo.png"
              alt="RockPail"
              className="mb-8 h-auto w-52"
            />
            <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[var(--rockpail-yellow)]">
              Why it works
            </p>
            <h2 className="text-4xl font-black uppercase tracking-[-0.05em] sm:text-6xl">
              The DING is the whole point.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="rounded-2xl bg-white/10 p-5 text-lg font-black">
                {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rules" className="bg-[var(--sand-white)] py-20 scroll-mt-28">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-kicker mb-4">Rules preview</p>
            <h2 className="text-4xl font-black uppercase tracking-[-0.05em] text-[var(--pail-purple)] sm:text-6xl">
              Game to 21. Win by 2.
            </h2>
            <p className="mt-5 text-xl font-semibold leading-8">
              Keep the rules clear, loud, and argument-free. If you did not hear the side hit, it does not count.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {rules.map((rule) => (
              <div key={rule} className="rounded-2xl bg-white p-5 text-lg font-black shadow-sm">
                {rule}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <p className="section-kicker mb-4">FAQ</p>
            <h2 className="text-4xl font-black uppercase tracking-[-0.05em] text-[var(--pail-purple)] sm:text-6xl">
              Don&apos;t overthink it.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-[1.5rem] border-2 border-neutral-100 p-6">
                <h3 className="text-xl font-black tracking-[-0.03em] text-[var(--pail-purple)]">
                  {faq.question}
                </h3>
                <p className="mt-3 text-base font-medium leading-7 text-neutral-700">
                  {renderAnswer(faq.answer)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[var(--rock-black)] py-20 text-white scroll-mt-28">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <img
              src="/Yellow_logo.png"
              alt="RockPail"
              className="mb-8 h-auto w-48"
            />
            <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[var(--rockpail-yellow)]">
              Coming soon
            </p>
            <h2 className="text-4xl font-black uppercase tracking-[-0.05em] sm:text-6xl">
              Ready to keep fun simple?
            </h2>
            <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-white/80">
              RockPail is getting built now. For retail, wholesale, supplier, or early customer interest, reach out directly.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white p-7 text-[var(--rock-black)]">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--pail-purple)]">
              Contact
            </p>
            <a
              href="mailto:info@rockpail.com?subject=RockPail%20Inquiry"
              className="mt-4 block break-words text-2xl font-black tracking-[-0.04em] text-[var(--pail-purple)]"
            >
              info@rockpail.com
            </a>
            <a href="tel:+15198352374" className="mt-3 text-xl font-black">
              519-835-2374
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
