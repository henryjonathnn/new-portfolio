import { component$ } from '@builder.io/qwik';

interface FooterProps {
    variant?: 'home' | 'default';
}

export const Footer = component$<FooterProps>(({ variant = 'default' }) => {
    if (variant === 'home') {
        return (
            <footer class="w-full max-w-[750px] flex justify-between items-center -mt-5">
                <div class="flex items-center gap-2">
                    <span class="text-[10px] text-zinc-400 font-mono tracking-widest uppercase">
                        © 2026
                    </span>
                    <span class="text-[11px] text-zinc-500 font-medium tracking-tight">
                        Henry Jonathan
                    </span>
                </div>

                <div class="flex gap-5 items-center">
                    <a
                        href="mailto:henryjonathnn@atomicmail.io" target='blank'
                        class="text-zinc-300 hover:text-black transition-colors"
                        title="Email"
                    >
                        <i class="fa-regular fa-envelope text-[13px]"></i>
                    </a>
                    <a
                        href="https://github.com/henryjonathnn" target='blank'
                        class="text-zinc-300 hover:text-black transition-colors"
                        title="GitHub"
                    >
                        <i class="fa-brands fa-github text-[13px]"></i>
                    </a>
                    <a
                        href="https://linkedin.com/in/henryjonathn" target='blank'
                        class="text-zinc-300 hover:text-black transition-colors"
                        title="LinkedIn"
                    >
                        <i class="fa-brands fa-linkedin-in text-[13px]"></i>
                    </a>
                    <a
                        href="https://instagram.com/henryjonathnn" target='blank'
                        class="text-zinc-300 hover:text-black transition-colors"
                        title="Instagram"
                    >
                        <i class="fa-brands fa-instagram text-[13px]"></i>
                    </a>
                </div>
            </footer>
        );
    }

    return (
        <footer class="mt-8 pt-6 w-full text-[10px] font-medium text-zinc-400 uppercase tracking-widest">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <span>© 2026 Henry Jonathan</span>
                <div class="flex gap-5">
                    <a href="https://github.com" class="hover:text-black transition-colors">
                        GitHub
                    </a>
                    <a href="https://linkedin.com" class="hover:text-black transition-colors">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
});
