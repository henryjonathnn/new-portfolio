import { component$, useSignal, useVisibleTask$, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Layout } from "~/components/layout/layout";
import { Footer } from "~/components/footer/footer";
import { TechCard } from "~/components/tech-card/tech-card";

export default component$(() => {
  const isModalOpen = useSignal(false);
  const showToast = useSignal(false);

  const triggerToast = $(() => {
    showToast.value = true;
    setTimeout(() => {
      showToast.value = false;
    }, 3000);
  })

  useVisibleTask$(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const popup = document.getElementById('contactPopup');
      const contactBtn = event.target as HTMLElement;

      if (popup && !popup.contains(contactBtn) && !contactBtn.closest('button')?.textContent?.includes('Contact')) {
        isModalOpen.value = false;
      }
    };

    if (isModalOpen.value) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  });

  const techStack = [
    { name: "Bun", src: "/svg/bun.svg", description: "Fast all-in-one JavaScript runtime", syntax: "bun run app.ts", syntaxLang: "bash" as const },
    { name: "Elysia", src: "/svg/elysia.svg", class: "elysia-icon", description: "Type-safe web framework for Bun", syntax: "app.get('/', () => 'Hi')", syntaxLang: "js" as const },
    { name: "Go", src: "/svg/golang.svg", class: "golang-icon", description: "Compiled language for backend systems", syntax: "func main() { fmt.Println(\"Go\") }", syntaxLang: "go" as const },
    { name: "Qwik", src: "/svg/qwik.svg", description: "Resumable JavaScript framework", syntax: "export default component$(() => (...))", syntaxLang: "tsx" as const },
    { name: "PostgreSQL", src: "/svg/postgresql.svg", class: "postgresql-icon", description: "Reliable relational database", syntax: "SELECT * FROM users WHERE id = $1", syntaxLang: "sql" as const },
    { name: "Tailwind", src: "/svg/tailwindcss.svg", class: "tailwind-icon", description: "Utility-first CSS framework", syntax: "class=\"flex items-center gap-4\"", syntaxLang: "js" as const },
    { name: "TypeScript", src: "/svg/typescript.svg", description: "Typed superset of JavaScript", syntax: "interface User { id: number; name: string }", syntaxLang: "tsx" as const },
    { name: "Node.js", src: "/svg/nodejs.svg", class: "nodejs-icon", description: "JavaScript runtime environment", syntax: "const express = require('express')", syntaxLang: "js" as const },
    { name: "Express", src: "/svg/expressjs.svg", class: "expressjs-icon", description: "Minimal web framework for Node", syntax: "app.get('/api/users', handler)", syntaxLang: "js" as const },
    { name: "Hono", src: "/svg/hono.svg", class: "hono-icon", description: "Lightweight web framework", syntax: "app.get('/', (c) => c.text('Hi'))", syntaxLang: "js" as const },
    { name: "Astro", src: "/svg/astro.svg", class: "astro-icon", description: "Static site builder with islands", syntax: "---\\nconst title = 'Home'\\n---", syntaxLang: "tsx" as const },
    { name: "Vue.js", src: "/svg/vuejs.svg", class: "vue-icon", description: "Progressive JavaScript framework", syntax: "<script setup>\\nconst count = ref(0)\\n</script>", syntaxLang: "js" as const },
    { name: "MySQL", src: "/svg/mysql.svg", class: "mysql-icon", description: "Open-source SQL database", syntax: "CREATE TABLE users (id INT PRIMARY KEY)", syntaxLang: "sql" as const },
    { name: "Supabase", src: "/svg/supabase.svg", description: "Open source Firebase alternative", syntax: "const { data } = await supabase.from('users').select()", syntaxLang: "js" as const },
    { name: "Docker", src: "/svg/docker.svg", class: "docker-icon", description: "Container platform for apps", syntax: "docker run -p 3000:3000 myapp", syntaxLang: "bash" as const },
    { name: "Flutter", src: "/svg/flutter.svg", description: "Cross-platform mobile framework", syntax: "Text('Hello World')", syntaxLang: "js" as const },
    { name: "Laravel", src: "/svg/laravel.svg", class: "laravel-icon", description: "PHP web application framework", syntax: "Route::get('/', [HomeController::class])", syntaxLang: "php" as const },
    { name: "Sentry", src: "/svg/sentry.svg", class: "sentry-icon", description: "Error tracking and monitoring", syntax: "Sentry.captureException(error)", syntaxLang: "js" as const },
    { name: "Kafka", src: "/svg/kafka.svg", class: "kafka-icon", description: "Distributed event streaming platform", syntax: "producer.send({ topic: 'events', messages })", syntaxLang: "js" as const },
    { name: "Drizzle", src: "/svg/drizzle.svg", class: "drizzle-icon", description: "Lightweight ORM for TypeScript", syntax: "db.select().from(users).where(...)", syntaxLang: "tsx" as const },
    { name: "Redis", src: "/svg/redis.svg", class: "redis-icon", description: "In-memory data store cache", syntax: "redis.set('key', 'value', 'EX', 3600)", syntaxLang: "bash" as const },
    { name: "FrankenPHP", src: "/svg/frankenphp.svg", class: "frankenphp-icon", description: "Modern PHP application server", syntax: "<?php echo 'Hello World'; ?>", syntaxLang: "php" as const },
  ];

  return (
    <Layout>
      {/* Toast */}
      <div
        class={`fixed top-6 sm:top-10 left-1/2 -translate-x-1/2 z-[200] transition-all duration-500 w-[max-content] max-w-[90vw] ${showToast.value
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <div class="bg-black/90 backdrop-blur-md text-white text-[9px] sm:text-[11px] font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-full sm:rounded-xl shadow-2xl border border-zinc-800 flex items-center gap-2 tracking-wider uppercase">
          <span class="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
          <span class="whitespace-nowrap">Platform launching soon</span>
        </div>
      </div>
      <header class="flex flex-col md:flex-row justify-between items-stretch gap-6 md:gap-8 w-full">
        {/* Avatar Section */}
        <div class="w-full md:w-auto flex flex-row md:flex-col items-center md:items-end justify-between md:py-1 border-l-0 md:border-l border-zinc-100 md:pl-10 order-first md:order-last">
          <img
            src="/me.jpeg"
            alt="Henry Jonathan"
            width={128}
            height={128}
            class="w-24 h-24 md:w-32 md:h-32 rounded-xl grayscale border border-zinc-100 shadow-sm object-cover"
          />

          <div class="flex flex-col items-start md:items-end gap-4 mt-0 md:mt-auto">
            {/* Status Badge */}
            <div class="status-badge">
              <span class="status-badge-dot"></span>
              <span class="status-badge-text">Available</span>
            </div>

            {/* Social Links Desktop */}
            <div class="hidden md:flex gap-5 text-zinc-300">
              <a
                href="https://github.com/henryjonathnn"
                target="_blank"
                class="social-link"
                title="GitHub"
                aria-label="GitHub"
              >
                <i class="fab fa-github text-lg"></i>
              </a>
              <a
                href="https://linkedin.com/in/henryjonathn" target="_blank"
                class="social-link"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <i class="fab fa-linkedin-in text-lg"></i>
              </a>
              <a
                href="https://instagram.com/henryjonathnn" target="_blank"
                class="social-link"
                title="Instagram"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div class="flex-1 space-y-4 md:space-y-6 w-full order-last md:order-first flex flex-col justify-center -mt-4 md:mt-0">
          <div class="space-y-1">
            <h1 class="text-2xl md:text-4xl font-bold tracking-tighter">
              Henry Jonathan
            </h1>

            <div class="flex flex-col gap-2 text-sm font-medium text-zinc-400">
              <span class="flex items-center gap-1.5">
                <i class="fas fa-code text-[10px]"></i> Software Engineer
              </span>

              <div class="flex items-center gap-3">
                <span class="flex items-center gap-1.5">
                  <i class="fas fa-location-dot text-[10px]"></i> Nganjuk, ID
                </span>
                <div class="flex md:hidden items-center gap-3 border-l border-zinc-200 pl-3 ml-1 text-zinc-300">
                  <a
                    href="https://github.com/henryjonathnn" target="_blank"
                    class="hover:text-black transition-colors"
                    title="GitHub"
                    aria-label="GitHub"
                  >
                    <i class="fab fa-github text-[14px]"></i>
                  </a>
                  <a
                    href="https://linkedin.com/in/henryjonathn" target="_blank"
                    class="hover:text-black transition-colors"
                    title="LinkedIn"
                    aria-label="LinkedIn"
                  >
                    <i class="fab fa-linkedin-in text-[14px]"></i>
                  </a>
                  <a
                    href="https://instagram.com/henryjonathnn" target="_blank"
                    class="hover:text-black transition-colors"
                    title="Instagram"
                    aria-label="Instagram"
                  >
                    <i class="fab fa-instagram text-[14px]"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Summarize Profile */}
          <p class="text-[14px] md:text-[15px] leading-relaxed text-zinc-500 max-w-md">
            I'm a Software Engineer with 2+ years of experience. Now Building
            <button
              type="button"
              onClick$={triggerToast}
              class="text-black ml-1 underline hover:text-zinc-600 transition-colors"
            >
              Middleplays
            </button>
            {/* <a href="#">
              <span class="text-black ml-1 underline">
                Middleplays
              </span>
            </a> */}
            , a secure digital e-commerce platform for game account trading with advanced automation. Launch soon!
          </p>

          <div class="flex flex-row gap-3 w-full sm:w-auto pt-2">
            <a href="/cv.pdf" class="btn-primary">
              Resume
            </a>
            <button
              onClick$={() => isModalOpen.value = true}
              class="btn-secondary"
            >
              Contact
            </button>
          </div>
        </div>
      </header>

      <div class="divider"></div>

      {/* Contact Popup Overlay */}
      {isModalOpen.value && (
        <div
          class="fixed inset-0 z-[140]"
          onClick$={() => isModalOpen.value = false}
        ></div>
      )}

      {/* Contact Popup */}
      <div
        id="contactPopup"
        class={`fixed bottom-24 sm:bottom-auto sm:top-24 left-1/2 -translate-x-1/2 z-[150] transition-all duration-300 ${isModalOpen.value
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 pointer-events-none translate-y-2'
          }`}
      >
        <div class="bg-white/80 backdrop-blur-xl border border-zinc-200/50 shadow-2xl shadow-black/5 rounded-2xl p-2 flex flex-col sm:flex-row gap-1">

          <a
            href="https://wa.me/6281234567890?text=Halo%20Henry%2C%20bisa%20diskusi%20terkait%20projek%3F"
            target="_blank"
            class="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-white transition-all group"
          >
            <div class="w-8 h-8 flex items-center justify-center bg-zinc-950 text-white rounded-lg group-hover:scale-110 transition-transform">
              <i class="fab fa-whatsapp text-sm"></i>
            </div>
            <div class="flex flex-col pr-4">
              <span class="text-[11px] font-bold tracking-tight">WhatsApp</span>
              <span class="text-[9px] text-zinc-400 font-medium">Fast Response</span>
            </div>
          </a>

          <div class="hidden sm:block w-[1px] bg-zinc-200/50 my-2"></div>
          <div class="sm:hidden h-[1px] bg-zinc-200/50 mx-2"></div>

          <a
            href="mailto:hello@hjonathan.com"
            class="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-white transition-all group"
          >
            <div class="w-8 h-8 flex items-center justify-center bg-white border border-zinc-200 text-zinc-950 rounded-lg group-hover:scale-110 transition-transform">
              <i class="fa-regular fa-envelope text-sm"></i>
            </div>
            <div class="flex flex-col pr-4">
              <span class="text-[11px] font-bold tracking-tight">Email</span>
              <span class="text-[9px] text-zinc-400 font-medium">Project Inquiry</span>
            </div>
          </a>
        </div>
      </div>

      <div class="divider"></div>

      {/* Tech Stack Section */}
      <section class="w-full space-y-6">
        <h2 class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
          Tech Stack
        </h2>

        <div class="flex justify-center w-full">
          <div class="grid grid-cols-8 sm:grid-cols-12 md:grid-cols-12 gap-1 w-full">
            {techStack.map((tech) => (
              <TechCard
                key={tech.name}
                name={tech.name}
                src={tech.src}
                description={tech.description}
                syntax={tech.syntax}
                syntaxLang={tech.syntaxLang}
                iconClass={tech.class}
              />
            ))}
          </div>
        </div>
      </section>

      <div class="divider mt-16"></div>

      <Footer variant="home" />
    </Layout>
  );
});

export const head: DocumentHead = {
  title: "Henry Jonathan — Software Engineer",
  meta: [
    {
      name: "description",
      content: "Software Engineer building high-performance systems with type-safe architectures",
    },
  ],
};
