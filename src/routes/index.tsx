import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import logo from "@/assets/orvo-logo.png.asset.json";
import isologo from "@/assets/orvo-isologo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ORVO — Más reservas. Menos caos. Restaurantes en automático." },
      { name: "description", content: "Bot de reservas 24/7, respuesta automática en Instagram, gestión de reseñas y más. Sistemas que trabajan por tu restaurante mientras tú descansas." },
    ],
  }),
  component: Landing,
});

// Pequeño hook para animaciones de entrada en scroll
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Landing() {
  useReveal();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nombre = String(data.get("nombre") || "").trim();
    const restaurante = String(data.get("restaurante") || "").trim();
    const telefono = String(data.get("telefono") || "").trim();
    if (!nombre || !restaurante || !telefono) return;
    // Validaciones mínimas
    if (nombre.length > 100 || restaurante.length > 120 || telefono.length > 30) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center">
            <img src={isologo.url} alt="ORVO AI Automation Solutions" style={{ height: 56 }} className="w-auto" />
          </a>
          <a
            href="#contacto"
            className="hidden rounded-full bg-electric px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-electric-hover sm:inline-flex"
          >
            Quiero una demo gratuita
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:pt-24 md:pb-28 md:pt-32">
            <div className="max-w-3xl">
              <span className="fade-in-up inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-electric" />
                Automatización con IA para hostelería
              </span>
              <h1 className="fade-in-up mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-5xl md:text-6xl">
                Tu restaurante perdiendo reservas a las 11 de la noche mientras tú duermes.
                <span className="block text-electric"> Nosotros lo arreglamos.</span>
              </h1>
              <p className="fade-in-up mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                Ayudamos a restaurantes y negocios de hostelería a conseguir más reservas, más clientes
                recurrentes y una reputación online impecable — con sistemas que trabajan por ti las 24 horas.
              </p>
              <div className="fade-in-up mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full bg-electric px-7 py-4 text-base font-semibold text-white shadow-lg shadow-electric/20 transition hover:bg-electric-hover"
                >
                  Quiero una demo gratuita
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-4 text-base font-semibold text-navy transition hover:bg-muted"
                >
                  Ver qué hacemos
                </a>
              </div>
            </div>

            {/* Isologo decorativo */}
            <img
              src={isologo.url}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 top-6 hidden h-[580px] w-[580px] opacity-[0.06] md:block"
            />
          </div>
        </section>

        {/* DOLOR */}
        <section className="bg-muted/60 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-5">
            <h2 className="reveal text-3xl font-extrabold tracking-tight text-navy sm:text-4xl md:text-5xl">
              ¿Te suena esto?
            </h2>
            <p className="reveal mt-3 text-muted-foreground">Lo vemos cada semana. Probablemente hoy mismo.</p>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "El teléfono suena mientras estás en cocina. La reserva se pierde. El cliente ya fue a otro sitio.",
                "Tienes 12 mensajes de Instagram sin responder preguntando el horario. Desde hace tres días.",
                "Tu última reseña de Google lleva dos semanas sin respuesta. La dejó alguien muy enfadado.",
                "Le mandas el menú a los clientes por WhatsApp. Uno a uno. A mano. Cada día.",
                "El cliente no sabe si su pedido está listo y te llama al móvil mientras sirves la mesa 6.",
              ].map((t, i) => (
                <li
                  key={i}
                  className="reveal flex gap-4 rounded-2xl border border-border bg-background p-5 shadow-sm"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-electric/10 text-electric">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </span>
                  <p className="text-base text-navy/90 sm:text-lg">{t}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SOLUCIÓN */}
        <section id="servicios" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-2xl">
              <h2 className="reveal text-3xl font-extrabold tracking-tight text-navy sm:text-4xl md:text-5xl">
                ORVO trabaja mientras tú descansas
              </h2>
              <p className="reveal mt-4 text-lg text-muted-foreground">
                Cinco automatizaciones pensadas para hostelería. Se montan en días, no en meses.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Bot de reservas por WhatsApp 24/7",
                  desc: "Reserva mesas a cualquier hora, confirma automáticamente y reduce los no-shows.",
                  icon: (
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  ),
                },
                {
                  title: "Respuesta automática en Instagram",
                  desc: "Horarios, ubicación, menú y reservas respondidos al instante, en tu tono.",
                  icon: (
                    <>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </>
                  ),
                },
                {
                  title: "Follow-up post-visita con cupón",
                  desc: "Mensaje automático tras la visita con un incentivo para que vuelvan. Más recurrencia, menos esfuerzo.",
                  icon: (
                    <>
                      <path d="M20 12V8H6a2 2 0 0 1 0-4h12v4"/>
                      <path d="M4 6v12a2 2 0 0 0 2 2h14v-4"/>
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4z"/>
                    </>
                  ),
                },
                {
                  title: "Gestión automática de reseñas",
                  desc: "Respondemos cada reseña de Google con tu voz, en minutos. Tu reputación, cuidada de verdad.",
                  icon: (
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  ),
                },
                {
                  title: "Carta QR actualizable en tiempo real",
                  desc: "Cambia precios, platos o disponibilidad en un clic. Sin reimprimir nada.",
                  icon: (
                    <>
                      <rect x="3" y="3" width="7" height="7"/>
                      <rect x="14" y="3" width="7" height="7"/>
                      <rect x="14" y="14" width="7" height="7"/>
                      <rect x="3" y="14" width="7" height="7"/>
                    </>
                  ),
                },
                {
                  title: "Y lo que necesites",
                  desc: "Si es repetitivo, lo automatizamos. Te lo contamos en la llamada gratuita.",
                  icon: (
                    <>
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="8" x2="12" y2="16"/>
                      <line x1="8" y1="12" x2="16" y2="12"/>
                    </>
                  ),
                },
              ].map((s, i) => (
                <article
                  key={i}
                  className="reveal group rounded-2xl border border-border bg-background p-6 transition hover:-translate-y-0.5 hover:border-electric/40 hover:shadow-lg"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-electric/10 text-electric transition group-hover:bg-electric group-hover:text-white">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {s.icon}
                    </svg>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROPUESTA DE VALOR */}
        <section className="border-y border-border bg-muted/40 py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <p className="reveal text-sm font-semibold uppercase tracking-[0.18em] text-electric">
              Lo que de verdad vendemos
            </p>
            <p className="reveal mt-6 text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl md:text-5xl">
              No vendemos tecnología.
              <span className="block text-electric">Vendemos tiempo libre y mesas llenas.</span>
            </p>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="contacto" className="relative bg-navy py-20 text-white sm:py-28">
          <img
            src={isologo.url}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 bottom-0 hidden h-[420px] w-[420px] opacity-[0.08] md:block"
          />
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center">
            <div className="reveal">
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                ¿Cuántas reservas más necesitas para que esto se pague solo?
              </h2>
              <p className="mt-5 text-lg text-white/70">
                Primera consulta gratuita. Sin compromiso. Sin tecnicismos.
              </p>
              <ul className="mt-8 space-y-3 text-white/80">
                {[
                  "Diagnóstico en 20 minutos",
                  "Te decimos qué automatizar primero",
                  "Si no es para ti, te lo decimos también",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-electric text-white">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal">
              {submitted ? (
                <div className="rounded-2xl bg-white p-8 text-navy shadow-xl">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-electric/10 text-electric">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold">Recibido. Te llamamos hoy.</h3>
                  <p className="mt-2 text-muted-foreground">
                    En menos de 24h te escribimos por WhatsApp para agendar la llamada.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="rounded-2xl bg-white p-6 text-navy shadow-2xl sm:p-8"
                  noValidate
                >
                  <div className="space-y-4">
                    <Field label="Tu nombre" name="nombre" placeholder="María García" maxLength={100} />
                    <Field label="Nombre del restaurante" name="restaurante" placeholder="Bar La Esquina" maxLength={120} />
                    <Field label="Teléfono" name="telefono" type="tel" placeholder="+34 600 00 00 00" maxLength={30} pattern="[0-9+\s\-()]{6,30}" />
                  </div>
                  <button
                    type="submit"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-electric px-6 py-4 text-base font-semibold text-white shadow-lg shadow-electric/30 transition hover:bg-electric-hover"
                  >
                    Hablar con ORVO
                  </button>
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    Sin spam. Solo te contactamos por este tema.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-navy py-10 text-white/70">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-5 sm:flex-row sm:items-center sm:justify-between">
          <img src={logo.url} alt="ORVO" style={{ height: 32 }} className="w-auto" />
          <div className="flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:gap-6">
            <a href="mailto:polperez@orvo.es" className="hover:text-white">polperez@orvo.es</a>
            <a href="https://www.orvo.es" className="hover:text-white">www.orvo.es</a>
            <span className="text-white/50">© 2026 ORVO AI Automation Solutions</span>
          </div>
        </div>
      </footer>

      {/* STICKY CTA mobile */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur sm:hidden">
        <a
          href="#contacto"
          className="flex w-full items-center justify-center rounded-full bg-electric px-5 py-3.5 text-base font-semibold text-white shadow-lg shadow-electric/20"
        >
          Quiero una demo gratuita
        </a>
      </div>
      {/* Spacer para el sticky CTA en mobile */}
      <div className="h-20 sm:hidden" aria-hidden="true" />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  maxLength,
  pattern,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  maxLength?: number;
  pattern?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-navy">{label}</span>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        pattern={pattern}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-[15px] text-navy outline-none transition focus:border-electric focus:ring-4 focus:ring-electric/15"
      />
    </label>
  );
}
