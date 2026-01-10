import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";
import { Layout } from "~/components/layout/layout";
import { Footer } from "~/components/footer/footer";
import { getProjectBySlug, getRelatedProjects, generateSlug } from "~/data/projects";

export default component$(() => {
  const location = useLocation();
  const slug = location.params.slug;
  
  const project = getProjectBySlug(slug);
  const relatedProjects = getRelatedProjects(slug);

  if (!project) {
    return (
      <Layout>
        <div class="text-center space-y-4 w-full">
          <h1 class="text-2xl font-bold">Project Not Found</h1>
          <p class="text-zinc-600">The project you're looking for doesn't exist.</p>
          <a href="/projects" class="text-blue-600 hover:underline">
            Back to Projects
          </a>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div class="w-full">
        {/* Back Button */}
        <a
          href="/projects"
          class="group inline-flex items-center gap-2 text-zinc-400 hover:text-black transition-colors mb-8"
        >
          <i class="fas fa-arrow-left text-[10px] transition-transform group-hover:-translate-x-1"></i>
          <span class="text-[11px] font-bold uppercase tracking-widest">
            Back to Projects
          </span>
        </a>

        {/* Header Section */}
        <section class="space-y-4">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div class="space-y-1">
              <h1 class="text-3xl md:text-4xl font-bold tracking-tighter">
                {project.title}
              </h1>
              <p class="text-zinc-500 font-mono text-xs tracking-wider uppercase">
                {project.role} • {project.year}
              </p>
            </div>

            <div class="flex gap-3">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2.5 rounded-full border border-zinc-100 hover:bg-zinc-50 transition-colors"
                >
                  <i class="fab fa-github text-sm"></i>
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-5 py-2.5 bg-black text-white rounded text-[11px] font-bold uppercase tracking-wider hover:bg-zinc-800 transition"
                >
                  Live Demo <i class="fas fa-external-link-alt ml-2 text-[9px]"></i>
                </a>
              )}
            </div>
          </div>

          {/* Project Image */}
          <div class="w-full aspect-video rounded-2xl overflow-hidden border border-zinc-100 bg-zinc-50 mt-8">
            <img
              src={project.image}
              alt={project.title}
              class="w-full h-full object-cover transition-all duration-700"
            />
          </div>
        </section>

        {/* Main Content Grid */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {/* Left Column */}
          <div class="md:col-span-2 space-y-8">
            {/* Overview */}
            <div class="space-y-4">
              <h2 class="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400">
                Overview
              </h2>
              <p class="text-[15px] leading-relaxed text-zinc-600">
                {project.overview}
              </p>
            </div>

            {/* Key Features */}
            <div class="space-y-4">
              <h2 class="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400">
                Key Features
              </h2>
              <ul class="space-y-3 text-[14px] text-zinc-600">
                {project.keyFeatures.map((feature) => (
                  <li key={feature} class="flex items-start gap-3">
                    <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div class="space-y-8">
            {/* Tech Stack */}
            <div class="space-y-4">
              <h2 class="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400">
                Tech Stack
              </h2>
              <div class="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    class="px-3 py-1 bg-zinc-50 border border-zinc-100 rounded text-[10px] font-bold font-mono uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Role */}
            <div class="space-y-4">
              <h2 class="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400">
                Role
              </h2>
              <p class="text-[13px] font-medium text-zinc-600">
                {project.role}
              </p>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section class="mt-24 space-y-8">
            <div class="flex items-center justify-between">
              <h2 class="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em]">
                Other Projects
              </h2>
              <a
                href="/projects"
                class="text-[10px] font-bold text-black uppercase tracking-widest hover:underline"
              >
                View All
              </a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedProjects.map((relatedProject) => (
                <a
                  key={relatedProject.title}
                  href={`/projects/${generateSlug(relatedProject.title)}`}
                  class="group block p-4 rounded-xl border border-zinc-100 hover:border-zinc-300 hover:bg-zinc-50/50 transition-all duration-300"
                >
                  <div class="aspect-video w-full rounded-lg overflow-hidden bg-zinc-100 mb-4">
                    <img
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      class="w-full h-full object-cover transition-all duration-500"
                    />
                  </div>
                  <h3 class="text-sm font-bold tracking-tight group-hover:text-black">
                    {relatedProject.title}
                  </h3>
                  <p class="text-[11px] text-zinc-500 font-mono mt-1 uppercase">
                    {relatedProject.tags.join(" • ")}
                  </p>
                </a>
              ))}
            </div>
          </section>
        )}

        <div class="divider mt-16"></div>

        <Footer variant="home" />
      </div>
    </Layout>
  );
});

export const head: DocumentHead = ({ params }) => {
  const project = getProjectBySlug(params.slug);
  return {
    title: project ? `${project.title} — Henry Jonathan` : "Project — Henry Jonathan",
    meta: [
      {
        name: "description",
        content: project?.description || "Project details",
      },
    ],
  };
};
