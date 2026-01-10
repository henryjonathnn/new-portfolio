import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Layout } from "~/components/layout/layout";
import { Footer } from "~/components/footer/footer";

export default component$(() => {
    const experiences = [
        {
            title: "Software Engineer",
            company: "Luwes Nganjuk",
            period: "2025 — Present",
            description:
                "Leading the migration from monolithic to microservices using Golang and Bun. Optimized database queries resulting in 40% faster response times.",
            tags: ["Golang", "PostgreSQL"],
        },
        {
            title: "Intern Software Engineer",
            company: "RSU Daha Husada Kediri",
            period: "2024 — 2025",
            description:
                "Developed real-time notification systems using ElysiaJS and Redis. Maintained 99.9% uptime for core API services.",
            tags: ["ElysiaJS", "Redis"],
        },
    ];

    const education = [
        {
            school: "Universitas Terbuka",
            program: "Bachelor of Systems Information",
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
                    I am a <span class="text-black font-semibold">Software Engineer</span> based in Nganjuk, specializing in building high-performance backend systems. Beyond coding, I am passionate about minimalist design and efficient architecture.
                </p>
            </header>

            <div class="divider"></div>

            {/* Work Experience Section */}
            <section class="space-y-8 w-full">
                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <h2 class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                        Work Experience
                    </h2>
                    <i class="fas fa-briefcase text-[10px] text-zinc-300"></i>
                </div>

                <div class="space-y-1">
                    {experiences.map((exp) => (
                        <div key={exp.title} class="timeline-item">
                            <div class="flex justify-between items-start mb-1">
                                <div class="space-y-0.5">
                                    <h3 class="text-sm font-bold text-black">{exp.title}</h3>
                                    <p class="text-[13px] text-zinc-500">{exp.company}</p>
                                </div>
                                <span class="text-[10px] font-mono text-zinc-500 font-medium">
                                    {exp.period}
                                </span>
                            </div>
                            <p class="text-[13px] text-zinc-600 leading-relaxed mb-3">
                                {exp.description}
                            </p>
                            <div class="flex gap-2 flex-wrap">
                                {exp.tags.map((tag) => (
                                    <span key={tag} class="badge">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education Section */}
            <section class="space-y-8 pt-8 w-full">
                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <h2 class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                        Education
                    </h2>
                    <i class="fas fa-graduation-cap text-[10px] text-zinc-300"></i>
                </div>

                <div class="space-y-1">
                    {education.map((edu) => (
                        <div key={edu.school} class="timeline-item">
                            <div class="flex justify-between items-start">
                                <div>
                                    <h3 class="text-sm font-bold text-black">{edu.school}</h3>
                                    <p class="text-[13px] text-zinc-600">{edu.program}</p>
                                </div>
                                <span class="text-[10px] font-mono text-zinc-500 font-medium">
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
            content: "Software Engineer specializing in high-performance backend systems",
        },
    ],
};