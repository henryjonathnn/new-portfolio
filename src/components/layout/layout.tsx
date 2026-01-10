import { component$, Slot } from '@builder.io/qwik';
import { Nav } from '../nav/nav';

export const Layout = component$(() => {
  return (
    <div class="flex flex-col items-center justify-center min-h-screen p-6 pt-20 sm:pt-32">
      <Nav />
      <main class="container-premium w-full">
        <Slot />
      </main>
    </div>
  );
});
