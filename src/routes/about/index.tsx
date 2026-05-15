import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Layout } from "~/components/layout/layout";
import { Footer } from "~/components/footer/footer";

export default component$(() => {
    const experiences = [
        {
            title: "Sales Executive",
            company: "Astra Otoparts",
            period: "Jan 2026 — Present",
            description: "Building a career in the sales division at Astra Otoparts, a subsidiary of Astra International. Focused on sales strategy, relationship building, and market development. Bringing a data-driven approach and structured problem-solving from an engineering background into a sales context.",
            tags: ["Sales Strategy", "B2B", "Relationship Building", "Market Development", "Data-Driven"],
        },
        {
            title: "Founder & Builder",
            company: "Middleplays (Side Project)",
            period: "Jan 2026 — Present",
            description: "Independently building Middleplays—an e-commerce and escrow platform for game account trading. Architecting the system, designing business workflows, and implementing end-to-end transaction automation. Treating programming as leverage, not just a day job.",
            tags: ["Bun", "Elysia", "PostgreSQL", "BullMQ", "Redis", "Qwik", "System Design"],
        },
        {
            title: "Software Engineer",
            company: "Luwes Nganjuk",
            period: "May 2025 — Jan 2026",
            description: "Migrated legacy systems to a modern architecture utilizing Golang and Bun, boosting performance by up to 30%. Spearheaded the development of RESTful APIs and microservices with a strong emphasis on scalability.",
            tags: ["Golang", "Typescript", "PostgreSQL", "Bun", "Hono", "Docker", "Vue", "Astro"],
        },
        {
            title: "Intern Software Engineer",
            company: "RSU Daha Husada Kediri",
            period: "Jul 2024 — Jan 2025",
            description: "Developed and maintained internal web applications (SIMRS) using Laravel and FrankenPHP. Enhanced overall system reliability through automated testing and CI/CD pipelines.",
            tags: ["Laravel", "FrankenPHP", "React", "Vue", "Jquery", "MySQL"],
        },
    ];

    const education = [
        {
            school: "Universitas Terbuka",
            program: "Bachelor of Information Systems",
            period: "2025 — Present",
        },
        {
            school: "SMK TI Pelita Nusantara Kediri",
            program: "Software Engineering",
            period: "2022 — 2025",
        },
    ];

    return (
        <Layout>
            <header class="space-y-4 w-full">
                <h1 class="text-2xl font-bold tracking-tighter">About Me</h1>
                <p class="text-[14px] leading-relaxed text-zinc-600 max-w-2xl">
                    A <span class="text-black font-semibold">Sales Executive at Astra Otoparts</span> with a 4-year background in IT. I view programming as more than just a career track—it's an incredible leverage when paired with business and sales acumen. Outside of my day job, I'm building{" "}
                    <span class="underline text-black">Middleplays</span>, a game account trading platform designed from the ground up as a long-term passive income stream.
                </p>
            </header>

            <div class="divider"></div>

            {/* Work Experience Section */}
            <section class="space-y-8 w-full">
                <div class="flex items-center justify-between border-b border-zinc-100 pb-2">
                    <h2 class="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Experience</h2>
                    <i class="fas fa-briefcase text-[10px] text-zinc-300"></i>
                </div>

                <div class="space-y-6">
                    {experiences.map((exp) => (
                        <div key={exp.title} class="group relative">
                            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                                <div class="space-y-0.5">
                                    <h3 class="text-sm font-bold text-black group-hover:text-zinc-600 transition-colors">{exp.title}</h3>
                                    <p class="text-[13px] text-zinc-500">{exp.company}</p>
                                </div>
                                <span class="text-[10px] font-mono text-zinc-400 font-medium whitespace-nowrap bg-zinc-50 px-2 py-0.5 rounded sm:bg-transparent sm:p-0">
                                    {exp.period}
                                </span>
                            </div>
                            <p class="text-[13px] text-zinc-600 leading-relaxed mb-3 max-w-xl">
                                {exp.description}
                            </p>
                            <div class="flex gap-2 flex-wrap">
                                {exp.tags.map((tag) => (
                                    <span key={tag} class="text-[9px] font-bold uppercase tracking-tight px-2 py-1 bg-zinc-50 border border-zinc-100 text-zinc-500 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education Section */}
            <section class="space-y-8 pt-12 w-full">
                <div class="flex items-center justify-between border-b border-zinc-100 pb-2">
                    <h2 class="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Education</h2>
                    <i class="fas fa-graduation-cap text-[10px] text-zinc-300"></i>
                </div>

                <div class="space-y-6">
                    {education.map((edu) => (
                        <div key={edu.school} class="group relative">
                            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                                <div class="space-y-0.5">
                                    <h3 class="text-sm font-bold text-black group-hover:text-zinc-600 transition-colors">{edu.school}</h3>
                                    <p class="text-[13px] text-zinc-600 italic">{edu.program}</p>
                                </div>
                                <span class="text-[10px] font-mono text-zinc-400 font-medium whitespace-nowrap bg-zinc-50 px-2 py-0.5 rounded sm:bg-transparent sm:p-0">
                                    {edu.period}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div class="divider mt-16"></div>

            <Footer variant="home" />
        </Layout>
    );
});

export const head: DocumentHead = {
    title: "About — Henry Jonathan",
    meta: [
        {
            name: "description",
            content: "Sales Executive at Astra Otoparts with an IT background, building Middleplays as a side project.",
        },
    ],
};
