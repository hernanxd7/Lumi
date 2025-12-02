import { Camera, Bot, Wifi, Volume2, Sparkles, Users } from 'lucide-react'
import Reveal from './components/Reveal.jsx'
import ImageWithFallback from './components/ImageWithFallback.jsx'

function Section({ id, title, children }) {
  return (
    <section id={id} className="py-16 px-4 md:px-8 lg:px-12 text-slate-900 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-brand-600">{title}</h2>
        <div className="text-slate-600">{children}</div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen gradient-bg">
      <header className="px-4 md:px-8 lg:px-12 py-4 sticky top-0 bg-white/90 backdrop-blur border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="text-brand-600 animate-float" />
            <span className="text-slate-900 font-bold">LUMI</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#hero" className="text-slate-600 hover:text-slate-900 transition-colors">Inicio</a>
            <a href="#que-es" className="text-slate-600 hover:text-slate-900 transition-colors">¿Qué es LUMI?</a>
            <a href="#mision" className="text-slate-600 hover:text-slate-900 transition-colors">Misión y Visión</a>
            <a href="#caracteristicas" className="text-slate-600 hover:text-slate-900 transition-colors">Características</a>
            <a href="#equipo" className="text-slate-600 hover:text-slate-900 transition-colors">Equipo</a>
          </nav>
        </div>
      </header>

      <section id="hero" className="px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center py-16">
          <Reveal className="space-y-6" delay={0}>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              LUMI: <span className="text-brand-600">Tu mascota</span> nunca más estará sola.
            </h1>
            <p className="text-slate-600 text-lg">
              Resolvemos la ansiedad y el aburrimiento de tus mascotas. LUMI ofrece compañía autónoma y vigilancia remota para que tengas tranquilidad mientras no estás en casa.
            </p>
            <div className="flex items-center gap-4">
              <a href="#que-es" className="px-5 py-3 rounded-md bg-brand-600 hover:bg-brand-700 text-white font-medium shadow-sm hover:shadow-md active:scale-95 transition-all">Conocer LUMI</a>
              <a href="#caracteristicas" className="px-5 py-3 rounded-md border border-brand-600 text-brand-700 hover:bg-brand-50 font-medium active:scale-95 transition-all">Características</a>
            </div>
          </Reveal>
          <div className="flex justify-center">
            <Reveal className="relative w-full max-w-md" delay={150}>
              <div className="absolute -inset-4 rounded-2xl bg-brand-400/20 blur-xl" />
              <ImageWithFallback
                src="/img1.png"
                fallback="/vite.svg"
                alt="Robot LUMI junto a un cachorro"
                className="relative rounded-2xl border border-slate-200 animate-float animate-glow object-cover w-full h-auto pro-tilt pro-shine"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <Section id="que-es" title="¿Qué es LUMI?">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <p>
              Un robot interactivo con movimiento autónomo, cámara HD, audio bidireccional y un sistema único de hologramas. Su IA detecta estrés y ansiedad para actuar inmediatamente mediante entretenimiento y compañía.
            </p>
            <p className="mt-4 text-slate-800 font-medium">
              Objetivo: Reducir la ansiedad y soledad en perros y gatos, fomentando su bienestar emocional a través de la robótica.
            </p>
          </div>
          <div className="hidden md:block">
            <ImageWithFallback
              src="/img2.png"
              fallback="/vite.svg"
              alt="Interacción de holograma con LUMI"
              className="rounded-2xl border border-slate-200 w-full h-auto object-cover animate-fade-up pro-tilt pro-shine"
            />
          </div>
        </div>
      </Section>

      <Section id="mision" title="Misión y Visión">
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal delay={0}>
            <div className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Misión</h3>
              <p>
                Crear tecnología accesible que brinde seguridad, compañía y apoyo emocional a las mascotas en ausencia de sus dueños.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Visión</h3>
              <p>
                Ser el proyecto líder en innovación robótica enfocada al cuidado y bienestar animal.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="caracteristicas" title="Características Técnicas">
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <Reveal delay={0}>
              <div className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <Camera className="text-brand-400 mb-3" />
                <p className="font-medium text-slate-800">Monitoreo remoto vía App</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <Sparkles className="text-brand-400 mb-3" />
                <p className="font-medium text-slate-800">Sistema de Hologramas para interacción</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <Bot className="text-brand-400 mb-3" />
                <p className="font-medium text-slate-800">Movilidad autónoma con sensores</p>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <Wifi className="text-brand-400" />
                  <Volume2 className="text-brand-400" />
                </div>
                <p className="font-medium text-slate-800">Conexión WiFi y Audio bidireccional</p>
              </div>
            </Reveal>
          </div>
          <div>
            <ImageWithFallback
              src="/img3.png"
              fallback="/vite.svg"
              alt="Detalle de ruedas omni del robot"
              className="rounded-2xl border border-slate-200 w-full h-80 md:h-[420px] object-cover object-[50%_65%] animate-fade-up pro-tilt pro-shine"
            />
          </div>
        </div>
      </Section>

      <Section id="equipo" title="Equipo de desarrollo">
        <div className="grid md:grid-cols-3 gap-6">
          <Reveal delay={0}>
            <div className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <Users className="text-brand-400 mb-3" />
              <p className="font-medium text-slate-800">Nombre 1 — Rol</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <Users className="text-brand-400 mb-3" />
              <p className="font-medium text-slate-800">Nombre 2 — Rol</p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <Users className="text-brand-400 mb-3" />
              <p className="font-medium text-slate-800">Nombre 3 — Rol</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <footer className="border-t border-slate-200 py-8 px-4 md:px-8 lg:px-12 text-slate-600 bg-white/80">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} LUMI</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-900">Instagram</a>
            <a href="#" className="hover:text-slate-900">Twitter</a>
            <a href="#" className="hover:text-slate-900">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
