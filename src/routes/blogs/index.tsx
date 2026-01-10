import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Layout } from "~/components/layout/layout";
import { Footer } from "~/components/footer/footer";
import { blogs } from "~/data/blogs";

export default component$(() => {
    return (
        <Layout>
            <header class="space-y-4 w-full">
                <h1 class="text-2xl font-bold tracking-tighter">Blogs</h1>
                <p class="text-[14px] leading-relaxed text-zinc-600 max-w-2xl">
                    Essays on <span class="text-black font-semibold">system design</span>, clean code, and the philosophy of building software that lasts.
                </p>
            </header>

            <div class="divider"></div>

            {/* Blog Posts */}
            <section class="space-y-2 w-full">
                {blogs.map((blog) => (
                    <a
                        key={blog.slug}
                        href={`/blogs/${blog.slug}`}
                        class="blogs-card group"
                    >
                        <img
                            src={blog.thumbnail}
                            alt={blog.title}
                            width={128}
                            height={80}
                            class="post-thumb"
                        />
                        <div class="flex-1 space-y-2 min-w-0">
                            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
                                <h3 class="text-[14px] font-bold text-black leading-tight group-hover:text-blue-600 transition-colors">
                                    {blog.title}
                                </h3>
                                <span class="text-[10px] font-mono text-zinc-400 shrink-0">
                                    {blog.author.date}
                                </span>
                            </div>
                            <p class="text-[12px] text-zinc-500 line-clamp-2 leading-relaxed">
                                {blog.description}
                            </p>
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
    title: "Blogs — Henry Jonathan",
    meta: [
        {
            name: "description",
            content: "Essays on system design, clean code, and building software that lasts",
        },
    ],
};