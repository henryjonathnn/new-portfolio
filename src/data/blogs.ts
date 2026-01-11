export interface BlogSection {
  type: "paragraph" | "heading" | "blockquote" | "code" | "benchmark" | "component";
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
  componentType?: "fee-comparison" | "trustless-logic" | "tech-stack-bento";
  componentData?: Record<string, any>;
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
    title: "Introducing Middleplays: The Game Account Trading Platform Built on Intelligent Systems",
    slug: "introducing-middleplays-game-trading-platform",
    category: "Entrepreneurship",
    readTime: "15 min read",
    description: "From frustration with traditional employment to building a game e-commerce platform with zero-fee listings and automated trading systems. Here's why I built Middleplays and the architecture that powers it.",
    thumbnail: "/blog/middleplays-intro.png",
    author: {
      name: "Henry Jonathan",
      image: "/me.jpeg",
      date: "Jan 11, 2026",
    },
    content: [
      {
        type: "paragraph",
        content: "Four years of coding experience. One and a half years in the workforce. And a crushing realization that the programmer's path I was sold—the one about six-figure salaries and flexible work—wasn't matching reality. After watching my opportunities narrow with each job application, stiffer qualifications, and wages barely above minimum, I made a decision: I wasn't going to ask the market for permission anymore. I was going to build something that would create my own opportunity. That decision led to Middleplays.",
      },
      {
        type: "heading",
        content: "The Crisis That Became Opportunity",
      },
      {
        type: "paragraph",
        content: "Let me be honest about where I was. Nine-to-five employment, one day off per week, proprietary methodologies changing every job, and compensation that made me grateful just to earn UMR (Upah Minimum Regional). Meanwhile, I was watching the job market become increasingly hostile to junior developers. Everyone wants seniors. Everyone has a checklist of frameworks you must know. And everyone pays the same disappointing salary.",
      },
      {
        type: "paragraph",
        content: "But here's what the frustration revealed: I wasn't just a code executor. I had spent four years building a different kind of skillset. I wasn't just good at writing code—I was obsessed with system design, with algorithms that actually solved problems efficiently, with architectures that scaled. And more importantly, I could see business opportunities where others saw only technical challenges.",
      },
      {
        type: "paragraph",
        content: "That's when I realized: I needed to stop being employed. I needed to be an entrepreneur. Not the kind with $500k in venture capital, but the kind who could build something valuable with discipline, smart decisions, and intelligent engineering. Something that didn't require an army of employees I couldn't afford to pay.",
      },
      {
        type: "heading",
        content: "Identifying the Opportunity: The Game Trading Market",
      },
      {
        type: "paragraph",
        content: "The opportunity I identified was in a space I understood intimately: the game trading market. Game accounts and in-game items are constantly being bought and sold, but the existing infrastructure is primitive—a mix of Instagram DMs, Discord servers, and shady middlemen. It's inefficient, it's dangerous, and it leaves billions on the table for someone willing to build the proper infrastructure.",
      },
      {
        type: "paragraph",
        content: "The current process is painful: Sellers post on Instagram, spend 10,000 Rupiah per post to get visibility, manage all communication through DMs, and have no systematic way to verify accounts or transfer credentials safely. Buyers have no guarantee their credentials won't be taken back, no protection if something goes wrong. There's immense friction, immense risk, and immense opportunity.",
      },
      {
        type: "paragraph",
        content: "Middleplays would solve this by creating what didn't exist: a centralized, automated, trustless platform where game accounts and items could be traded with certainty, speed, and—most importantly—zero friction.",
      },
      {
        type: "heading",
        content: "The Platform: How Middleplays Works",
      },
      {
        type: "paragraph",
        content: "Middleplays is fundamentally a matching engine between buyers and sellers, but with several critical features that eliminate traditional friction:",
      },
      {
        type: "paragraph",
        content: "Game Coverage: We're launching with five games that represent different market segments: Mobile Legends (competitive mobile), Free Fire (casual mobile gaming), PUBG Mobile (hardcore mobile shooter), eFootball (sports simulation), and Roblox (the fastest-growing platform with both account and item trading opportunities).",
      },
      {
        type: "paragraph",
        content: "Two Service Tiers:\n• Account Trading: Buy and sell complete game accounts with all progression, skins, heroes, and cosmetics intact\n• Item Trading: Focus on digital goods within games, particularly Roblox where item trading has become a substantial economy",
      },
      {
        type: "heading",
        content: "The Architecture That Changes Everything",
      },
      {
        type: "paragraph",
        content: "Here's where most game trading platforms fail: they're built as simple listing sites without understanding that transactions require trust infrastructure. Middleplays was built with transaction automation at its core.",
      },
      {
        type: "paragraph",
        content: "The Role System: Every user starts as neutral. You can be a buyer, a seller, both, or neither—the choice is yours. Sellers must verify identity (KTP + facial verification) to ensure accountability, which takes about a minute and happens automatically. Buyers need nothing—the system itself protects them.",
      },
      {
        type: "paragraph",
        content: "Credential Management: This is the critical innovation. When an account is sold, the seller provides credentials, but they never touch the buyer directly until payment is secured. Instead, the system generates an encrypted credential file sent directly to the buyer's device as an image. The seller never knows what happened next—they can't revoke access. This is security through architecture, not trust.",
      },
      {
        type: "component",
        componentType: "trustless-logic",
        content: "",
      },
      {
        type: "paragraph",
        content: "Automated Settlement: This is perhaps the most important part. When a buyer completes a purchase, they test the account, change the credentials to ensure it's theirs, then confirm. But here's the intelligent part: if they don't confirm within 3 hours and no complaint has been filed, the system automatically marks the transaction as complete. Why? Because if someone spent 3 hours with an account and didn't file a complaint, the transaction is fundamentally complete. No human intervention needed.",
      },
      {
        type: "paragraph",
        content: "The moment a transaction is confirmed, the system instantly triggers a payment transfer to the seller—but not the full amount. Here's the economic model:",
      },
      {
        type: "code",
        language: "text",
        content: `Account selling price:                   Rp 150,000
Platform fee (3%):                       -Rp 4,500
Imburse fee (transfer fee):              -Rp 2,500
Seller receives:                         Rp 143,000 (95.33% of listing price)`,
      },
      {
        type: "component",
        componentType: "fee-comparison",
        content: "",
      },
      {
        type: "paragraph",
        content: "Compare this to traditional game account resellers who charge 10-15% fees for the same service. More importantly, the seller's post is completely free. No Instagram promotion fees. No middleman markup. Just post the account, get visibility for free through intelligent ranking, and get paid within seconds when someone buys.",
      },
      {
        type: "heading",
        content: "Intelligent Defaults That Scale",
      },
      {
        type: "paragraph",
        content: "Every platform faces the problem of maintaining data quality. Middleplays solves this with automated systems that require zero moderation:",
      },
      {
        type: "paragraph",
        content: "Posts expire automatically after 30 days if unsold—keeping the platform fresh and preventing stale listings from clogging the feed. Sold accounts are delisted after 30 days from the posting date—encouraging quick turnover and high-quality listings. Sellers aren't confused about what information is required because the system provides intelligent fields for each game—ML needs level, rank, and hero count, while Roblox needs different attributes entirely. All field requirements are standardized in the database, not left to sellers' guesses.",
      },
      {
        type: "paragraph",
        content: "This eliminates moderation overhead entirely. No humans reviewing listings. No complaints about 'missing information.' The system enforces quality through smart defaults.",
      },
      {
        type: "heading",
        content: "Why This Business Model Works When Others Would Fail",
      },
      {
        type: "paragraph",
        content: "I didn't have the luxury of hiring a team of engineers, designers, and operations people. I'm building this alone initially. That constraint forced me to make intelligent decisions that actually make the platform better:",
      },
      {
        type: "paragraph",
        content: "1. Zero Seller Verification Beyond Identity: Unlike traditional marketplaces that require sellers to provide lengthy histories and ratings, Middleplays only verifies identity because transaction structure itself prevents fraud. Sellers can't abuse the system through false credentials because the system manages the credentials, not them.",
      },
      {
        type: "paragraph",
        content: "2. Automated Moderation: Most platforms I've studied employ dozens of moderators. Middleplays has zero. Expiring listings, automatic settlement windows, and transaction structure create incentives for quality that remove the need for human oversight.",
      },
      {
        type: "paragraph",
        content: "3. Self-Healing Economics: The 3% fee + imburse costs aren't extracted arbitrarily—they're calculated to cover the actual cost of running the platform while remaining cheaper than any alternative. This isn't a revenue grab; it's economic necessity presented as fair pricing.",
      },
      {
        type: "paragraph",
        content: "4. Intelligent Matching: Buyers don't need to scroll through thousands of listings. The system learns what accounts are being searched for, which ones succeed, which ones linger. Accounts that match buyer search patterns get promoted algorithmically. This is technology replacing marketing spend.",
      },
      {
        type: "heading",
        content: "The Tech Stack: Building for Efficiency, Not Legacy",
      },
      {
        type: "paragraph",
        content: "The platform runs on a carefully chosen stack optimized for performance and low resource consumption. This wasn't about using trendy tech—it was about building something that could serve thousands of concurrent transactions without expensive infrastructure:",
      },
      {
        type: "paragraph",
        content: "Backend: Elysia JS (optimized for extreme performance on Bun runtime)\nDatabase: PostgreSQL (proven, scalable relational data)\nCaching Layer: Redis (for real-time inventory and user state)\nMessage Queue: BullMQ (handling notifications and async operations)\nFrontend: Qwik JS (zero JavaScript hydration—pages load instantly)\nStyling: Tailwind CSS (rapid UI iteration without writing CSS)\nRuntime: Bun (3-5x faster than Node.js with integrated tooling)\nInfrastructure: Budget VPS (100-200k monthly)",
      },
      {
        type: "component",
        componentType: "tech-stack-bento",
        content: "",
      },
      {
        type: "paragraph",
        content: "Why this matters: A traditional tech stack would require 4-8 server instances to handle the projected traffic (1,000-10,000 daily visitors, 500-5,000 daily transactions). This stack handles the same load on a single instance. That's the difference between a 200k/month hobby project and a 800k+/month operation consuming resources and costs.",
      },
      {
        type: "paragraph",
        content: "The Bun runtime doesn't just make code faster—it eliminates entire categories of tools I'd otherwise need to purchase or configure. TypeScript runs natively. Tests execute without a framework. SQLite integrates without dependencies. What would require 15-20 npm packages and complex configuration in a Node.js setup is built-in.",
      },
      {
        type: "heading",
        content: "The Real Challenge: Why Most People Would Fail Here",
      },
      {
        type: "paragraph",
        content: "Building Middleplays requires solving problems that most companies would throw money at:",
      },
      {
        type: "paragraph",
        content: "• Building a secure credential storage system that can't be breached or misused\n• Creating an identity verification pipeline that works automatically\n• Engineering transaction logic that doesn't require human arbitration\n• Designing a payment system that handles splits and deposits reliably\n• Building notification systems that feel instant across dozens of concurrent transactions\n• Creating fraud detection that improves over time",
      },
      {
        type: "paragraph",
        content: "Most companies would assign a team to each problem. I'm building this alone because I had to solve each of these problems without hiring anyone. That constraint forced elegant solutions. And elegant solutions, once built, are actually cheaper to maintain than the inelegant alternatives that require teams to manage them.",
      },
      {
        type: "heading",
        content: "Beyond Launch: The Vision",
      },
      {
        type: "paragraph",
        content: "Middleplays isn't a side project that will stay stalled at launch. The roadmap includes game expansion (adding 10+ more titles), international expansion (gaming is global), and new trading categories (cosmetics, NFTs, pre-orders for unreleased content).",
      },
      {
        type: "paragraph",
        content: "But the core principle remains: build systems smart enough to eliminate the need for constant human intervention. Scale through optimization, not through hiring. Create leverage through technology, not through capital.",
      },
      {
        type: "heading",
        content: "Why I'm Sharing This",
      },
      {
        type: "paragraph",
        content: "I'm publishing this because there's a narrative about entrepreneurship that says you need money, you need teams, you need connections. And yeah, those help. But they're not necessary. What's necessary is understanding that technology is leverage. A smart system designed once saves you from hiring people to manage it forever. An efficient architecture lets you scale traffic with minimal cost. And constraint, when embraced, often produces better solutions than unlimited resources ever could.",
      },
      {
        type: "paragraph",
        content: "Middleplays proves that you can build something valuable, something that solves a real problem, something that generates real income—alone, without outside capital, without employees, and without compromising on quality. All it takes is understanding the problem deeply enough to build systems that solve it automatically.",
      },
      {
        type: "paragraph",
        content: "The game trading market didn't need another marketplace. It needed a platform that thought differently about what a marketplace could be. It needed to be automated, fair, and efficient. That's what Middleplays does. And it was built by someone who couldn't afford not to build it right.",
      },
      {
        type: "heading",
        content: "The Solopreneur Mindset",
      },
      {
        type: "blockquote",
        content: "Constraint is not a limitation; it's a design tool. Building Middleplays alone taught me that a single well-architected line of code can replace a thousand dollars of marketing spend. The scarcity of resources forces elegance. The absence of a team forces clarity. And the pressure of not being able to afford failure forces excellence.",
      },
    ],
    likes: 0,
  },
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
