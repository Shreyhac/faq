"use client";

import { useState, useRef } from "react";

type FaqTopic =
  | "purchase"
  | "delivery"
  | "refunds"
  | "usage"
  | "expiry"
  | "transfer"
  | "security"
  | "support";

interface FaqCard {
  id: FaqTopic;
  title: string;
  description: string;
  answer: string;
  videoSrc?: string;
}

const faqCards: FaqCard[] = [
  {
    id: "purchase",
    title: "Purchase",
    description: "How to buy game top-ups or gift cards on Swag.",
    answer:
      "You can purchase top-ups and gift cards directly from the Swag dashboard. Choose a product, confirm the denomination, and complete the payment. Once successful, the code or credit will be added to your account or shared with the recipient.",
    videoSrc: "/Purchase.mp4",
  },
  {
    id: "delivery",
    title: "Delivery",
    description: "When and how your top-ups or gift cards are delivered.",
    answer:
      "Digital products are usually delivered instantly. In rare cases, it can take up to 15 minutes while we confirm payment and inventory. You’ll see delivery status in the Orders section, and we’ll also send you an email notification.",
    videoSrc: "/Delivery.mp4",
  },
  {
    id: "refunds",
    title: "Refunds",
    description: "Refund and cancellation rules for digital purchases.",
    answer:
      "Most digital purchases are final once the code is revealed or the credit is applied. If there’s an issue like a failed delivery or an unusable code, contact support within 24 hours and we’ll investigate and process a refund where eligible.",
    videoSrc: "/Refunds.mp4",
  },
  {
    id: "usage",
    title: "Usage",
    description: "Where and how your gift cards or top-ups can be used.",
    answer:
      "Each product page lists supported platforms, regions, and any usage restrictions. Always check these details before purchasing to make sure the code is compatible with your account region and device.",
    videoSrc: "/Usage vid.mp4",
  },
  {
    id: "expiry",
    title: "Expiry",
    description: "Validity and expiration details of purchases.",
    answer:
      "Some gift cards and offers have an expiry date, which we surface in the product details and on your confirmation email. We’ll remind you before high-value items expire so that you have time to redeem them.",
    videoSrc: "/Expiry.mp4",
  },
  {
    id: "transfer",
    title: "Transfer",
    description: "Sharing or gifting your purchased gift cards.",
    answer:
      "You can gift certain products by entering the recipient’s email during checkout. For security reasons, not all items are transferable after purchase. If gifting is supported, you’ll see a dedicated option on the product page.",
    videoSrc: "/Transfer.mp4",
  },
  {
    id: "security",
    title: "Security",
    description: "How Swag keeps your payments and data safe.",
    answer:
      "We use PCI-compliant payment providers, encrypt sensitive data in transit and at rest, and continuously monitor for unusual activity. Never share your full codes or one-time passwords with anyone claiming to be from support.",
    videoSrc: "/Security.mp4",
  },
  {
    id: "support",
    title: "Support",
    description: "Get help if something goes wrong with a purchase.",
    answer:
      "If you face an issue, open an in-app ticket or email support with your order ID, product name, and a short description. Our team typically responds within one business day and will guide you through the resolution.",
    videoSrc: "/Support.mp4",
  },
];

export default function Home() {
  const [activeCard, setActiveCard] = useState<FaqCard | null>(null);
  const [showFeedbackPrompt, setShowFeedbackPrompt] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [feedbackChoice, setFeedbackChoice] = useState<"yes" | "no" | null>(
    null
  );
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0b0b12] via-[#11111c] to-[#0b0b12] text-slate-50">
      {/* Background Image - Full Page */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("/bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.7,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="pointer-events-none fixed inset-0 z-[1] bg-gradient-to-b from-[#0d0f24]/55 via-[#0b0b12]/45 to-[#0d0f24]/65" />
      
      {/* Shooting Stars */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="shooting-star pointer-events-none fixed z-0 h-[2px] w-[100px] bg-gradient-to-r from-transparent via-yellow-300 to-transparent"
          style={{
            top: `${Math.random() * 30}%`,
            left: `${Math.random() * 30}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
      
      {/* Smoke Particles - More and More Visible */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`smoke-${i}`}
          className="smoke-particle pointer-events-none fixed z-0 rounded-full"
          style={{
            width: `${40 + Math.random() * 60}px`,
            height: `${40 + Math.random() * 60}px`,
            background: `radial-gradient(circle, rgba(150,150,150,0.6) 0%, rgba(100,100,100,0.3) 40%, transparent 70%)`,
            bottom: `${Math.random() * 30}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.6}s`,
            animationDuration: `${6 + Math.random() * 6}s`,
            opacity: 0.4,
            filter: "blur(8px)",
          }}
        />
      ))}
      
      {/* Additional Smoke Trails */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`smoke-trail-${i}`}
          className="smoke-particle pointer-events-none fixed z-0 rounded-full"
          style={{
            width: `${60 + Math.random() * 80}px`,
            height: `${60 + Math.random() * 80}px`,
            background: `radial-gradient(ellipse, rgba(120,120,120,0.5) 0%, rgba(80,80,80,0.2) 50%, transparent 80%)`,
            bottom: `${Math.random() * 25}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${10 + Math.random() * 8}s`,
            opacity: 0.35,
            filter: "blur(12px)",
          }}
        />
      ))}
      
      {/* Floating Light Elements */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`light-${i}`}
          className="float-element pointer-events-none fixed z-0 h-2 w-2 rounded-full bg-yellow-300/60 blur-sm"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
            animationDelay: `${i * 1.5}s`,
            boxShadow: "0 0 20px rgba(250, 204, 21, 0.6)",
          }}
        />
      ))}
      
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <header className="rounded-3xl bg-gradient-to-r from-[#ff8b5f] via-[#c55bff] to-[#6e6bff] p-[1px] shadow-[0_24px_80px_rgba(10,10,20,0.8)]">
          <div className="relative flex flex-col gap-4 overflow-hidden rounded-[1.4rem] bg-gradient-to-r from-[#161524] via-[#17172b] to-[#11111c] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6">
            <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-gradient-to-tr from-[#ffb347]/30 via-[#c55bff]/12 to-transparent blur-2xl" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8de7ff]">
                Swag Help Center
              </p>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-white drop-shadow-[0_2px_18px_rgba(255,255,255,0.35)] sm:text-3xl">
                Gift Cards &amp; Top‑ups FAQ
          </h1>
              <p className="mt-2 max-w-xl text-sm text-slate-200">
                Learn how purchases, delivery, security, and support work for
                Swag gift cards and gaming top‑ups.
              </p>
            </div>
          </div>
        </header>

        <main className="mt-8 flex-1">
          <section className="mx-auto max-w-4xl rounded-[28px] border border-white/8 bg-gradient-to-br from-[#121124] via-[#141428] to-[#0f0f1f] p-4 shadow-[0_30px_120px_rgba(8,8,20,0.85)] backdrop-blur-xl sm:p-6 lg:p-8">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8de7ff]">
                Browse topics
              </p>
              <p className="mt-1 text-sm text-slate-200">
                Pick a card to watch a quick walkthrough and read the detailed
                FAQ in full screen.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
              {faqCards.map((card) => (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => {
                    setActiveCard(card);
                    setShowFeedbackPrompt(true);
                    setVideoEnded(false);
                    setFeedbackChoice(null);
                  }}
                  className="group relative flex h-36 flex-col justify-center overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-br from-[#1d1730] via-[#1b1735] to-[#151425] px-4 py-4 text-left shadow-[0_18px_60px_rgba(8,8,20,0.9)] transition hover:-translate-y-1 hover:border-[#ff8b5f]/80 hover:shadow-[0_26px_90px_rgba(255,139,95,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8b5f]/80 sm:h-40"
                >
                  <div className="pointer-events-none absolute inset-px rounded-[1.05rem] border border-[#ffb347]/40 opacity-0 shadow-[0_0_40px_rgba(255,179,71,0.65)] transition-opacity group-hover:opacity-100" />
                  <div className="pointer-events-none absolute -right-8 -top-6 h-28 w-28 rounded-full bg-[#ff5fff]/30 blur-2xl group-hover:bg-[#ffb347]/40" />
                  {card.id === "purchase" && (
                    <div
                      className="pointer-events-none absolute inset-0 opacity-50 mix-blend-screen"
                      style={{
                        backgroundImage: 'url("/Purchase%20img.png")',
                        backgroundSize: "cover",
                        backgroundPosition: "right center",
                      }}
                    />
                  )}
                  {card.id === "delivery" && (
                    <div
                      className="pointer-events-none absolute inset-0 opacity-50 mix-blend-screen"
                      style={{
                        backgroundImage: 'url("/Delivery%20img.png")',
                        backgroundSize: "cover",
                        backgroundPosition: "right center",
                      }}
                    />
                  )}
                  {card.id === "refunds" && (
                    <div
                      className="pointer-events-none absolute inset-0 opacity-50 mix-blend-screen"
                      style={{
                        backgroundImage: 'url("/Refunds%20img.png")',
                        backgroundSize: "cover",
                        backgroundPosition: "right center",
                      }}
                    />
                  )}
                  {card.id === "expiry" && (
                    <div
                      className="pointer-events-none absolute inset-0 opacity-50 mix-blend-screen"
                      style={{
                        backgroundImage: 'url("/Expiry%20img.png")',
                        backgroundSize: "cover",
                        backgroundPosition: "right center",
                      }}
                    />
                  )}
                  {card.id === "transfer" && (
                    <div
                      className="pointer-events-none absolute inset-0 opacity-50 mix-blend-screen"
                      style={{
                        backgroundImage: 'url("/Transfer%20img.png")',
                        backgroundSize: "cover",
                        backgroundPosition: "right center",
                      }}
                    />
                  )}
                  {card.id === "security" && (
                    <div
                      className="pointer-events-none absolute inset-0 opacity-50 mix-blend-screen"
                      style={{
                        backgroundImage: 'url("/Security%20img.png")',
                        backgroundSize: "cover",
                        backgroundPosition: "right center",
                      }}
                    />
                  )}
                  {card.id === "usage" && (
                    <div
                      className="pointer-events-none absolute inset-0 opacity-50 mix-blend-screen"
                      style={{
                        backgroundImage: 'url("/Usage.png")',
                        backgroundSize: "cover",
                        backgroundPosition: "right center",
                      }}
                    />
                  )}
                  {card.id === "support" && (
                    <div
                      className="pointer-events-none absolute inset-0 opacity-50 mix-blend-screen"
                      style={{
                        backgroundImage: 'url("/Support%20img.png")',
                        backgroundSize: "cover",
                        backgroundPosition: "right center",
                      }}
                    />
                  )}
                  <div className="relative flex w-full items-center justify-center px-2 text-center">
                    <h2 className="text-xl sm:text-lg font-semibold tracking-wide text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
                      {card.title}
                    </h2>
                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#ff8b5f] to-[#c55bff] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow-[0_8px_24px_rgba(0,0,0,0.55)] group-hover:brightness-110">
                      Tap to view
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        </main>

        <footer className="mt-6 text-center text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Swag. All rights reserved.</p>
        </footer>
      </div>

      {activeCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-3 py-4 sm:px-6"
          onClick={() => {
            setActiveCard(null);
            setShowFeedbackPrompt(false);
            setVideoEnded(false);
            setFeedbackChoice(null);
          }}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#121124] via-[#141428] to-[#0f0f1f] shadow-[0_32px_100px_rgba(4,4,12,0.9)] sm:flex-row"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => {
                setActiveCard(null);
                setShowFeedbackPrompt(false);
                setVideoEnded(false);
                setFeedbackChoice(null);
              }}
              className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-xs text-zinc-300 shadow-md shadow-black/80 hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
            >
              ✕
            </button>

            {!videoEnded && activeCard.videoSrc && (
              <div className="relative w-full bg-black sm:w-1/2">
                <video
                  ref={videoRef}
                  className="h-full w-full object-cover"
                  src={activeCard.videoSrc}
                  autoPlay
                  playsInline
                  onEnded={() => {
                    setVideoEnded(true);
                    setShowFeedbackPrompt(true);
                    setFeedbackChoice(null);
                  }}
                >
                  Your browser does not support the video tag.
                </video>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/40" />
              </div>
            )}
            {!videoEnded && !activeCard.videoSrc && (
              <div className="relative w-full bg-black sm:w-1/2">
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                    Video coming soon
          </p>
        </div>
              </div>
            )}

            <div className={`flex w-full flex-1 flex-col gap-3 bg-transparent p-5 sm:p-6 ${videoEnded ? "sm:w-full" : "sm:w-1/2"}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8de7ff]">
                {activeCard.title}
              </p>
              <h2 className="text-lg font-semibold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
                {activeCard.description}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-slate-200">
                {activeCard.answer}
              </p>
              {!videoEnded && (
                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-300">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Step‑by‑step walkthrough with a short explainer video.</span>
                </div>
              )}

              {showFeedbackPrompt && (
                <div className="mt-5 rounded-2xl border border-white/10 bg-gradient-to-br from-[#15162e]/90 via-[#0f1024]/90 to-[#0b0c1d]/95 p-4 text-xs text-slate-100 shadow-[0_10px_40px_rgba(4,4,12,0.55)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8de7ff]">
                    Quick check‑in
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Is your issue resolved after watching this video?
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeCard.videoSrc && (
                      <button
                        type="button"
                        onClick={() => {
                          setVideoEnded(false);
                          setShowFeedbackPrompt(true);
                          setFeedbackChoice(null);
                          if (videoRef.current) {
                            videoRef.current.currentTime = 0;
                            videoRef.current.play();
                          }
                        }}
                        className="inline-flex items-center justify-center rounded-full border border-[#b388ff]/50 bg-gradient-to-r from-[#8a63ff] to-[#f14cff] px-4 py-1.5 text-xs font-semibold text-white shadow-[0_6px_24px_rgba(241,76,255,0.35)] transition hover:brightness-110"
                      >
                        Replay video
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => setFeedbackChoice("yes")}
                      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1bd96a] to-[#14c45a] px-4 py-1.5 text-xs font-semibold text-white shadow-[0_6px_24px_rgba(20,196,90,0.35)] transition hover:brightness-110"
                    >
                      Yes, all good
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setFeedbackChoice("no");
                        if (typeof window !== "undefined") {
                          window.open("https://example.com/ai-chatbot", "_blank");
                        }
                      }}
                      className="inline-flex items-center justify-center rounded-full border border-slate-500/60 bg-gradient-to-r from-[#1f243a] via-[#2c3148] to-[#ff874f] px-4 py-1.5 text-xs font-semibold text-slate-100 shadow-[0_6px_24px_rgba(0,0,0,0.35)] transition hover:brightness-110"
                    >
                      Need more help (AI assistant)
                    </button>
                  </div>

                  {feedbackChoice === "yes" && (
                    <p className="mt-2 text-xs text-emerald-700">
                      Great! Thanks for letting us know. You can close this
                      window or explore other topics.
                    </p>
                  )}
                  {feedbackChoice === "no" && (
                    <p className="mt-2 text-xs text-amber-700">
                      We&apos;re here to help. You can replay the video or
                      contact an agent for more detailed assistance.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
