import { component$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';

export const Nav = component$(() => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about/' },
    { label: 'Projects', href: '/projects/' },
    { label: 'Blogs', href: '/blogs/' },
  ];

  return (
    <nav class="nav-dock">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          class={{
            'nav-item': true,
            active: location.url.pathname === item.href,
          }}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
});
