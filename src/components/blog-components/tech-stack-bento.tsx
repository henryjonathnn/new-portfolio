interface TechStackItem {
  name: string;
  desc: string;
  icon: string; // SVG path
}

const techStack: TechStackItem[] = [
  {
    name: "Bun",
    desc: "Runtime",
    icon: "/svg/bun.svg",
  },
  {
    name: "Elysia",
    desc: "Backend",
    icon: "/svg/elysia.svg",
  },
  {
    name: "Qwik",
    desc: "Frontend",
    icon: "/svg/qwik.svg",
  },
  {
    name: "PostgreSQL",
    desc: "Database",
    icon: "/svg/postgresql.svg",
  },
  {
    name: "Redis",
    desc: "Cache",
    icon: "/svg/redis.svg",
  },
  {
    name: "BullMQ",
    desc: "Queue",
    icon: "/svg/nats.svg",
  },
  {
    name: "Tailwind",
    desc: "Styling",
    icon: "/svg/tailwindcss.svg",
  },
  {
    name: "VPS",
    desc: "100-200k/mo",
    icon: "/svg/docker.svg",
  },
];

export const TechStackBento = () => {
  return (
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3 my-8">
      {techStack.map((tech) => (
        <div
          class="p-4 rounded-xl border border-zinc-200 flex flex-col items-center text-center transition-all hover:shadow-md hover:border-zinc-400 bg-white"
        >
          <img 
            src={tech.icon} 
            alt={tech.name}
            class="w-6 h-6 mb-2 object-contain"
            style={{ filter: "grayscale(100%)" }}
          />
          <span class="text-[10px] font-bold tracking-tighter uppercase text-black">{tech.name}</span>
          <span class="text-[7px] opacity-60 font-mono mt-1 text-zinc-600">{tech.desc}</span>
        </div>
      ))}
    </div>
  );
};
