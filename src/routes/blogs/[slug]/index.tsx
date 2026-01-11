import { component$, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";
import { Layout } from "~/components/layout/layout";
import { BenchmarkChart } from "~/components/benchmark-chart/benchmark-chart";
import { ElysiaBenchmarkChart } from "~/components/benchmark-chart/elysia-benchmark-chart";
import { BunComparisionBenchmarkChart } from "~/components/benchmark-chart/bun-comparison-benchmark-chart";
import { FeeComparisonChart } from "~/components/blog-components/fee-comparison";
import { TrustlessLogic } from "~/components/blog-components/trustless-logic";
import { TechStackBento } from "~/components/blog-components/tech-stack-bento";
import { getBlogBySlug, getRelatedBlogs } from "~/data/blogs";

export default component$(() => {
  const location = useLocation();
  const slug = location.params.slug;

  const blog = getBlogBySlug(slug);
  const relatedBlogs = getRelatedBlogs(slug, 2);

  const blogUrl = typeof window !== "undefined" ? window.location.href : "";
  
  const handleShare = $(() => {
    if (typeof window !== "undefined" && navigator.share) {
      navigator.share({
        title: blog?.title,
        text: blog?.description,
        url: blogUrl,
      }).catch(() => {
        navigator.clipboard.writeText(blogUrl);
        alert("Link copied to clipboard!");
      });
    } else if (typeof window !== "undefined") {
      navigator.clipboard.writeText(blogUrl);
      alert("Link copied to clipboard!");
    }
  });

  const twitterShare = $(() => {
    if (typeof window !== "undefined") {
      const text = `Check out this article: "${blog?.title}"`;
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(blogUrl)}&hashtags=engineering,coding`;
      window.open(url, "_blank", "width=550,height=420");
    }
  });

  const linkedinShare = $(() => {
    if (typeof window !== "undefined") {
      const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blogUrl)}`;
      window.open(url, "_blank", "width=550,height=420");
    }
  });

  if (!blog) {
    return (
      <Layout>
        <div class="text-center space-y-4 w-full max-w-2xl mx-auto">
          <h1 class="text-2xl font-bold">Blog Post Not Found</h1>
          <p class="text-zinc-600">The blog post you're looking for doesn't exist.</p>
          <a href="/blogs" class="text-blue-600 hover:underline">
            Back to Blogs
          </a>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article class="w-full max-w-2xl mx-auto">
        {/* Back Button */}
        <a
          href="/blogs"
          class="group inline-flex items-center gap-2 text-zinc-400 hover:text-black transition-colors mb-8"
        >
          <i class="fas fa-arrow-left text-[10px] transition-transform group-hover:-translate-x-1"></i>
          <span class="text-[11px] font-bold uppercase tracking-widest">
            Back to Blogs
          </span>
        </a>

        {/* Header */}
        <header class="mb-12 space-y-6">
          {/* Thumbnail */}
          <img
            src={blog.thumbnail}
            alt={blog.title}
            width={1200}
            height={630}
            class="w-full h-auto rounded-xl border border-zinc-100 object-cover"
          />

          <div class="flex items-center gap-3 text-[11px] font-bold font-mono text-zinc-400 uppercase tracking-widest">
            <span>{blog.category}</span>
            <span class="w-1 h-1 rounded-full bg-zinc-200"></span>
            <span>{blog.readTime}</span>
          </div>

          <h1 class="text-3xl md:text-5xl font-bold tracking-tighter leading-[1.1]">
            {blog.title}
          </h1>

          <div class="flex items-center gap-4 pt-4">
            <img
              src={blog.author.image}
              alt={blog.author.name}
              class="w-10 h-10 rounded-full grayscale border border-zinc-100"
            />
            <div class="flex flex-col">
              <span class="text-sm font-bold">{blog.author.name}</span>
              <span class="text-xs text-zinc-500">{blog.author.date}</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <section class="prose space-y-6">
          {blog.content.map((section, idx) => {
            const isList = section.type === "paragraph" && (section.content.includes("•") || section.content.match(/^\d+\./m));

            
            return (
              <div key={idx}>
                {section.type === "paragraph" && isList && (
                  <div class="text-[15px] leading-relaxed text-zinc-600 mb-6 space-y-2">
                    {section.content.split('\n').filter(line => line.trim()).map((line, i) => (
                      <div key={i} class="flex gap-3">
                        {line.trim().startsWith("•") ? (
                          <>
                            <span class="text-black font-bold flex-shrink-0">•</span>
                            <span>{line.trim().replace(/^•\s*/, "")}</span>
                          </>
                        ) : line.match(/^\d+\./) ? (
                          <>
                            <span class="text-black font-bold flex-shrink-0 min-w-fit">{line.match(/^\d+\./)![0]}</span>
                            <span>{line.replace(/^\d+\.\s*/, "")}</span>
                          </>
                        ) : (
                          <span>{line}</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {section.type === "paragraph" && !isList && (
                  <p class="text-[15px] leading-relaxed text-zinc-600 mb-6 whitespace-pre-wrap">
                    {section.content}
                  </p>
                )}

                {section.type === "heading" && (
                  <h2 class="text-[1.25rem] font-bold mt-10 mb-4 tracking-tight text-black">
                    {section.content}
                  </h2>
                )}

                {section.type === "blockquote" && (
                  <blockquote class="border-l-2 border-black pl-6 py-2 italic text-zinc-600 my-8 bg-zinc-50 rounded-r-lg">
                    "{section.content}"
                  </blockquote>
                )}

                {section.type === "code" && (
                  <div class="my-8 rounded-xl border border-zinc-200 overflow-hidden bg-white">
                    {section.language && (
                      <div class="bg-zinc-100 px-6 py-3 border-b border-zinc-200">
                        <span class="text-xs font-mono font-bold text-zinc-600 uppercase tracking-wider">
                          {section.language}
                        </span>
                      </div>
                    )}
                    <div class="p-6 bg-zinc-900 overflow-x-auto">
                      <pre class="text-zinc-300 whitespace-pre-wrap break-words font-mono text-xs leading-relaxed">
                        <code>{section.content}</code>
                      </pre>
                    </div>
                  </div>
                )}

                {section.type === "benchmark" && section.benchmarkType === "elysia" && (
                  <ElysiaBenchmarkChart />
                )}

                {section.type === "benchmark" && section.benchmarkType === "bun-comparison" && (
                  <BunComparisionBenchmarkChart />
                )}

                {section.type === "benchmark" && section.benchmarkType !== "elysia" && section.benchmarkType !== "bun-comparison" && section.benchmarkData && (
                  <BenchmarkChart
                    title={section.benchmarkData.title}
                    subtitle={section.benchmarkData.subtitle}
                    data={section.benchmarkData.data}
                  />
                )}

                {section.type === "component" && section.componentType === "fee-comparison" && (
                  <FeeComparisonChart />
                )}

                {section.type === "component" && section.componentType === "trustless-logic" && (
                  <TrustlessLogic />
                )}

                {section.type === "component" && section.componentType === "tech-stack-bento" && (
                  <TechStackBento />
                )}
              </div>
            );
          })}
        </section>

        {/* Footer with Likes and Related Posts */}
        <footer class="mt-20 border-t border-zinc-100 pt-10">
          <div class="flex items-center justify-between mb-8">
            <div class="flex gap-4">
              <button class="flex items-center gap-2 text-zinc-400 hover:text-black transition-colors">
                <i class="fa-regular fa-heart"></i>
                <span class="text-xs font-bold">{blog.likes || 0}</span>
              </button>
              <button 
                onClick$={handleShare}
                class="flex items-center gap-2 text-zinc-400 hover:text-black transition-colors cursor-pointer"
              >
                <i class="fa-regular fa-share-from-square"></i>
                <span class="text-xs font-bold">Share</span>
              </button>
            </div>

            <div class="flex gap-3">
              <button 
                onClick$={twitterShare}
                class="text-zinc-300 hover:text-black transition-colors cursor-pointer"
                title="Share on Twitter"
              >
                <i class="fab fa-twitter"></i>
              </button>
              <button 
                onClick$={linkedinShare}
                class="text-zinc-300 hover:text-black transition-colors cursor-pointer"
                title="Share on LinkedIn"
              >
                <i class="fab fa-linkedin"></i>
              </button>
            </div>
          </div>

          {/* Related Posts */}
          {relatedBlogs.length > 0 && (
            <div class="mt-16 space-y-8">
              <h2 class="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em]">
                Read Next
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedBlogs.map((relatedBlog) => (
                  <a
                    key={relatedBlog.slug}
                    href={`/blogs/${relatedBlog.slug}`}
                    class="group space-y-2 hover:opacity-80 transition-opacity"
                  >
                    <h3 class="text-sm font-bold group-hover:underline">
                      {relatedBlog.title}
                    </h3>
                    <p class="text-xs text-zinc-500 line-clamp-2">
                      {relatedBlog.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </footer>

        <div class="mt-20 pb-10 flex justify-center">
          <span class="text-[10px] text-zinc-300 font-mono">--- End of Article ---</span>
        </div>
      </article>
    </Layout>
  );
});

export const head: DocumentHead = ({ params }) => {
  const blog = getBlogBySlug(params.slug);
  return {
    title: blog ? `${blog.title} — Henry Jonathan` : "Blog — Henry Jonathan",
    meta: [
      {
        name: "description",
        content: blog?.description || "Blog post",
      },
    ],
  };
};
