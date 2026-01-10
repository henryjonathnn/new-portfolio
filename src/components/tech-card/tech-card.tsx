import { component$ } from "@builder.io/qwik";

interface TechCardProps {
  name: string;
  src: string;
  description: string;
  syntax: string;
  syntaxLang?: "js" | "sql" | "go" | "php" | "tsx" | "bash";
  iconClass?: string;
}

export const TechCard = component$<TechCardProps>(
  ({ name, src, description, syntax, syntaxLang = "js", iconClass = "" }) => {
    return (
      <div class="tech-card group" title={name}>
        <div class={`icon-box ${iconClass}`}>
          <img src={src} alt={name} />
        </div>
        <div class="tech-tooltip">
          <p class="tooltip-name">{name}</p>
          <p class="tooltip-desc">{description}</p>
          <code class={`tooltip-syntax lang-${syntaxLang}`}>{syntax}</code>
        </div>
      </div>
    );
  }
);
