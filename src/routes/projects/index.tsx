import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Layout } from "~/components/layout/layout";
import { Footer } from "~/components/footer/footer";
import { projects, generateSlug } from "~/data/projects";

export default component$(() => {
    const isFilterOpen = useSignal(false);
    const sortOrder = useSignal<"newest" | "oldest">("newest");
    const selectedYear = useSignal<string | null>(null);

    // Get unique years sorted in descending order
    const uniqueYears = [...new Set(projects.map((p) => p.year))].sort().reverse();

    // Filter and sort projects
    const filteredProjects = (() => {
        let filtered = selectedYear.value
            ? projects.filter((p) => p.year === selectedYear.value)
            : projects;

        return filtered.sort((a, b) => {
            const yearA = parseInt(a.year);
            const yearB = parseInt(b.year);
            return sortOrder.value === "newest" ? yearB - yearA : yearA - yearB;
        });
    })();

    const handleSortClick = $((order: "newest" | "oldest") => {
        sortOrder.value = order;
    });

    const handleYearClick = $((year: string | null) => {
        selectedYear.value = year;
    });

    const toggleFilter = $(() => {
        isFilterOpen.value = !isFilterOpen.value;
    });

    const closeFilter = $(() => {
        isFilterOpen.value = false;
    });

    return (
        <Layout>
            <header class="space-y-4 w-full">
                <div class="flex items-start justify-between gap-4">
                    <div class="space-y-4">
                        <h1 class="text-2xl font-bold tracking-tighter">Selected Work</h1>
                        <p class="text-[14px] leading-relaxed text-zinc-600 max-w-2xl">
                            Building <span class="text-black font-semibold">robust digital products</span> with a focus on speed and clarity. Each project is a deep dive into system efficiency.
                        </p>
                    </div>

                    {/* Filter Icon Button */}
                    <div class="relative">
                        <button
                            onClick$={toggleFilter}
                            class="p-2.5 rounded-lg border border-zinc-200 hover:bg-zinc-50 transition-colors"
                            title="Filter projects"
                        >
                            <i class="fas fa-sliders text-sm"></i>
                        </button>

                        {/* Backdrop - Close on outside click */}
                        {isFilterOpen.value && (
                            <div
                                class="fixed inset-0 z-40"
                                onClick$={closeFilter}
                            ></div>
                        )}

                        {/* Filter Popup */}
                        {isFilterOpen.value && (
                            <div class="absolute right-0 mt-2 w-56 bg-white border border-zinc-200 rounded-xl shadow-xl z-50 overflow-hidden">
                                {/* Header */}
                                <div class="px-4 py-3 border-b border-zinc-100 flex items-center justify-between">
                                    <h3 class="text-sm font-bold uppercase tracking-wider text-zinc-900">
                                        Filter
                                    </h3>
                                    <button
                                        onClick$={closeFilter}
                                        class="text-zinc-400 hover:text-black transition-colors"
                                    >
                                        <i class="fas fa-close text-xs"></i>
                                    </button>
                                </div>

                                {/* Sort Section */}
                                <div class="px-4 py-3.5 border-b border-zinc-100">
                                    <p class="text-[11px] font-bold uppercase tracking-widest text-zinc-500 mb-2.5">
                                        Sort By
                                    </p>
                                    <div class="space-y-2">
                                        <button
                                            onClick$={() => {
                                                handleSortClick("newest");
                                            }}
                                            class={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                                                sortOrder.value === "newest"
                                                    ? "bg-black text-white shadow-sm"
                                                    : "text-zinc-700 hover:bg-zinc-100"
                                            }`}
                                        >
                                            <i class="fas fa-arrow-down-short-wide text-xs mr-2"></i>
                                            Newest First
                                        </button>
                                        <button
                                            onClick$={() => {
                                                handleSortClick("oldest");
                                            }}
                                            class={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                                                sortOrder.value === "oldest"
                                                    ? "bg-black text-white shadow-sm"
                                                    : "text-zinc-700 hover:bg-zinc-100"
                                            }`}
                                        >
                                            <i class="fas fa-arrow-up-short-wide text-xs mr-2"></i>
                                            Oldest First
                                        </button>
                                    </div>
                                </div>

                                {/* Year Filter Section */}
                                <div class="px-4 py-3.5">
                                    <p class="text-[11px] font-bold uppercase tracking-widest text-zinc-500 mb-2.5">
                                        Year
                                    </p>
                                    <div class="space-y-2 max-h-40 overflow-y-auto">
                                        <button
                                            onClick$={() => {
                                                handleYearClick(null);
                                            }}
                                            class={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                                                selectedYear.value === null
                                                    ? "bg-black text-white shadow-sm"
                                                    : "text-zinc-700 hover:bg-zinc-100"
                                            }`}
                                        >
                                            <i class="fas fa-asterisk text-xs mr-2 opacity-50"></i>
                                            All Years
                                        </button>
                                        {uniqueYears.map((year) => (
                                            <button
                                                key={year}
                                                onClick$={() => {
                                                    handleYearClick(year);
                                                }}
                                                class={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                                                    selectedYear.value === year
                                                        ? "bg-black text-white shadow-sm"
                                                        : "text-zinc-700 hover:bg-zinc-100"
                                                }`}
                                            >
                                                <i class="fas fa-calendar-alt text-xs mr-2 opacity-50"></i>
                                                {year}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <div class="divider"></div>

            {/* Projects Grid */}
            <section class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {filteredProjects.map((project) => (
                    <a
                        key={project.title}
                        href={`/projects/${generateSlug(project.title)}`}
                        class="project-card group"
                    >
                        <div class="thumb-container">
                            <img
                                src={project.image}
                                alt={project.title}
                                width={800}
                                height={450}
                                class="thumb-img"
                            />
                        </div>
                        <div class="space-y-2 px-1">
                            <div class="flex items-center justify-between">
                                <h3 class="text-[14px] font-bold text-black tracking-tight">
                                    {project.title}
                                </h3>
                                <span class="text-[10px] font-mono text-zinc-400 uppercase">
                                    {project.year}
                                </span>
                            </div>
                            <p class="text-[12px] text-zinc-600 leading-snug">
                                {project.description}
                            </p>
                            <div class="flex gap-3 pt-1">
                                {project.tags.map((tag) => (
                                    <span key={tag} class="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </section>

            <div class="divider mt-16"></div>

            <Footer variant="home" />
        </Layout>
    );
});

export const head: DocumentHead = {
    title: "Projects — Henry Jonathan",
    meta: [
        {
            name: "description",
            content: "Robust digital products focusing on speed and clarity",
        },
    ],
};