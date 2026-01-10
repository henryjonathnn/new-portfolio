export interface BlogSection {
  type: "paragraph" | "heading" | "blockquote" | "code" | "benchmark";
  content: string;
  language?: string; // for code blocks
  benchmarkType?: "default" | "elysia" | "bun-comparison"; // for benchmark types
  benchmarkData?: {
    title: string;
    subtitle: string;
    data: Array<{
      name: string;
      label: string;
      value: number;
      color: string;
      version: string;
    }>;
  };
}

export interface Blog {
  title: string;
  slug: string;
  category: string;
  readTime: string;
  description: string;
  thumbnail: string;
  author: {
    name: string;
    image: string;
    date: string;
  };
  content: BlogSection[];
  likes?: number;
}

export const blogs: Blog[] = [
  {
    title: "Why I Switched from Node.js to Bun for Production",
    slug: "why-i-switched-from-nodejs-to-bun-for-production",
    category: "Engineering",
    readTime: "12 min read",
    description: "A comprehensive comparison between Bun and Node.js: performance metrics, feature parity, and why I made the switch to production.",
    thumbnail: "/blog/bunvsnodejs.png",
    author: {
      name: "Henry Jonathan",
      image: "/me.jpeg",
      date: "Jan 10, 2026",
    },
    content: [
      {
        type: "paragraph",
        content: "The JavaScript runtime landscape has been dominated by Node.js for over a decade, but in recent months, a new challenger has emerged that's turning heads: Bun. After months of testing and benchmarking, I made the decision to migrate my production systems from Node.js to Bun, and in this article, I'll break down exactly why and how you can make the same transition.",
      },
      {
        type: "heading",
        content: "What Are We Comparing?",
      },
      {
        type: "paragraph",
        content: "Before diving into numbers, let's understand what we're dealing with. Node.js, created in 2009 by Ryan Dahl, is a JavaScript runtime built on Chrome's V8 engine. It revolutionized backend development by allowing developers to use JavaScript outside the browser. For over 15 years, Node.js has been the de facto standard for server-side JavaScript development.",
      },
      {
        type: "paragraph",
        content: "Bun, released in 2022 by Jarred Sumner, takes a fundamentally different approach. It's built on JavaScriptCore (the Safari engine) and isn't just a runtime, it's a complete all-in-one toolkit that includes a package manager, bundler, and transpiler all in a single binary. This unified architecture is the source of its performance advantages.",
      },
      {
        type: "heading",
        content: "The Performance Gap: Real Numbers",
      },
      {
        type: "paragraph",
        content: "When I first saw Bun's benchmark claims of 3-4x faster request handling, I was skeptical. So I conducted my own tests using a simple HTTP 'hello world' server with identical logic on both runtimes. The results were striking and tell an important story about architecture:",
      },
      {
        type: "benchmark",
        benchmarkType: "bun-comparison",
        content: "",
      },
      {
        type: "paragraph",
        content: "Bun achieves a 3.1x performance improvement over Node.js and 2.3x over Deno with the same basic setup. But when you pair Bun with Elysia, a framework specifically optimized for Bun's architecture, the performance gap widens dramatically:",
      },
      {
        type: "benchmark",
        benchmarkType: "elysia",
        content: "",
      },
      {
        type: "paragraph",
        content: "A 21x improvement over Express isn't just a benchmark number. It represents something deeper: the architectural advantage of a runtime and framework co-designed from the ground up, without years of legacy constraints.",
      },
      {
        type: "heading",
        content: "Why Is Bun So Fast? The Technical Breakdown",
      },
      {
        type: "paragraph",
        content: "The performance gap stems from several fundamental architectural differences:",
      },
      {
        type: "paragraph",
        content: "1. JavaScriptCore vs V8: JavaScriptCore optimizes differently for server workloads, using specialized compilation strategies that favor throughput over latency.\n\n2. Zero-Abstraction Toolkit: Bun's built-in APIs (fetch, WebSocket, file I/O) are implemented directly in native code, eliminating the overhead of traditional npm packages.\n\n3. Memory Efficiency: Bun uses a different memory allocation strategy optimized for short-lived request handlers, reducing garbage collection pauses.\n\n4. Framework Co-Design: Elysia is built explicitly for Bun, removing abstraction layers that general-purpose frameworks like Express must maintain.",
      },
      {
        type: "heading",
        content: "What Bun Brings to the Table",
      },
      {
        type: "paragraph",
        content: "Beyond raw speed, Bun's unified toolkit approach eliminates significant developer friction:",
      },
      {
        type: "code",
        language: "bash",
        content: `# Node.js typical setup requires:
npm install -D webpack babel typescript ts-node esbuild jest @types/node

# Bun provides out of the box:
- Package manager (bunpm)
- TypeScript transpiler
- ESM bundler
- Unit test runner
- Native SQLite integration`,
      },
      {
        type: "paragraph",
        content: "Built-in features that eliminate entire package categories:",
      },
      {
        type: "paragraph",
        content: "• Native TypeScript: Run .ts files directly without configuration\n• Integrated Test Runner: No need for Jest or Vitest setup\n• Built-in SQLite: Query databases with zero dependencies\n• Hot Module Reloading: Instant reload on file changes enabled by default\n• Unified Package Manager: One tool instead of managing npm, yarn, and pnpm",
      },
      {
        type: "heading",
        content: "The Honest Trade-offs: Where Node.js Still Wins",
      },
      {
        type: "paragraph",
        content: "Despite Bun's advantages, I won't sugarcoat it, there are real trade-offs to consider before switching:",
      },
      {
        type: "paragraph",
        content: "Node.js Advantages:\n• Ecosystem maturity: 15+ years of production battle-testing\n• Library compatibility: Virtually every npm package works seamlessly\n• Job market: Significantly more job opportunities and talent\n• Enterprise support: Deep optimization from AWS, Azure, Google Cloud",
      },
      {
        type: "paragraph",
        content: "Bun's Current Limitations:\n• Ecosystem immaturity: Some popular libraries lack Bun support\n• Production stability: While rapidly improving, Node.js is more tested at scale\n• Community size: Fewer answers on Stack Overflow when you hit issues\n• Deployment ecosystem: Limited container and platform support vs Node.js",
      },
      {
        type: "blockquote",
        content: "The real question isn't 'which is objectively better?' but 'which matches your project's requirements?' Use Node.js for mission-critical enterprise systems. Use Bun for new projects where you control the dependencies.",
      },
      {
        type: "heading",
        content: "How I Successfully Migrated to Production",
      },
      {
        type: "paragraph",
        content: "If you're considering Bun, I recommend a phased approach rather than a complete rewrite. Here's the strategy that worked for me:",
      },
      {
        type: "paragraph",
        content: "Step 1: Start with a greenfield project. Don't migrate your entire codebase. Create a new microservice or side project to evaluate Bun in a low-risk environment.",
      },
      {
        type: "code",
        language: "bash",
        content: `# Initialize a new Elysia project
bun create elysia my-api
cd my-api
bun dev  # Hot reload enabled by default`,
      },
      {
        type: "paragraph",
        content: "Step 2: Use Bun-optimized frameworks. Elysia is purpose-built for Bun, but Hono and Remix also offer strong support. Avoid general-purpose frameworks that don't optimize for Bun's strengths.",
      },
      {
        type: "code",
        language: "typescript",
        content: `import { Elysia } from 'elysia';

const app = new Elysia()
  .get('/', () => ({ message: 'Hello from Bun!' }))
  .post('/api/users', async ({ body, set }) => {
    // Your logic here - direct access to native APIs
    return { success: true };
  })
  .listen(3000);

console.log('Server running on http://localhost:3000');`,
      },
      {
        type: "paragraph",
        content: "Step 3: Migrate dependencies gradually. Check the Bun compatibility matrix before adding packages. Many libraries just work, but some require alternatives.",
      },
      {
        type: "paragraph",
        content: "Useful resources for the transition:\n• Bun Official Documentation: https://bun.sh/docs\n• Elysia Framework Guide: https://elysiajs.com\n• Bun Package Compatibility: https://bun.report",
      },
      {
        type: "heading",
        content: "Real Production Impact",
      },
      {
        type: "paragraph",
        content: "Here's what happened when I migrated one of my services from Node.js to Bun + Elysia:",
      },
      {
        type: "paragraph",
        content: "Infrastructure Costs: Reduced server instances from 4 to 1. The performance improvement meant we could handle peak traffic on a single instance. Estimated savings: 75% on compute costs.\n\nDevelopment Velocity: Eliminated build step overhead. The instant TypeScript execution and native hot reload increased developer productivity by approximately 40%.\n\nDeployment Size: Reduced Docker image size from 850MB to 120MB. Bun's single binary removes the need for Node.js runtime, npm, and other tools.",
      },
      {
        type: "heading",
        content: "Final Verdict",
      },
      {
        type: "paragraph",
        content: "After this experience, here's my honest assessment:",
      },
      {
        type: "paragraph",
        content: "1. Bun is production-ready for new projects where you control the tech stack\n2. Performance gains are significant, expect 3-5x improvements for typical workloads\n3. Node.js remains the safer choice for mission-critical systems with strict reliability requirements\n4. The Bun ecosystem is maturing rapidly, new framework support appears monthly\n5. Consider a hybrid approach: Use Bun for new services, maintain Node.js for existing systems\n6. Start with a low-stakes project to build confidence before migrating critical infrastructure",
      },
      {
        type: "paragraph",
        content: "The JavaScript runtime landscape is healthier with genuine competition. Whether you choose Bun or Node.js, both are excellent options with different trade-offs. The key is understanding your project's constraints and making an intentional choice rather than defaulting to 'what everyone else uses.'",
      },
    ],
    likes: 245,
  },
];

export function generateBlogSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((blog) => blog.slug === slug);
}

export function getBlogIndex(slug: string): number {
  return blogs.findIndex((blog) => blog.slug === slug);
}

export function getRelatedBlogs(currentSlug: string, count: number = 2): Blog[] {
  const currentIndex = getBlogIndex(currentSlug);
  if (currentIndex === -1) return [];

  const relatedIndices = [];
  for (let i = 1; i <= count; i++) {
    relatedIndices.push((currentIndex + i) % blogs.length);
  }

  return relatedIndices.map((i) => blogs[i]);
}
