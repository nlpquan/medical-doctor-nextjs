'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/'},
  {
    name: 'Find Doctor',
    href: '/doctors',
  },
  { name: 'Customer Feedback', href: '/feedback'},
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

{/* form */}
<div className="relative flex gap-x-[10px]">
<label className="group flex items-center justify-center">
  <User className="text-2xl text-accent" />
</label>
<input
  type="text"
  placeholder="Doctor..."
  className="w-[100px] outline-none transition-all duration-150 placeholder:text-base placeholder:italic focus:w-[180px] focus:border-b-2 focus:border-accent" // Normal input style
/>
<label className="group flex items-center justify-center">
  <MapPin className="text-2xl text-accent" />
</label>
<input
  type="text"
  placeholder="Location..."
  className="w-[100px] outline-none transition-all duration-150 placeholder:text-base placeholder:italic focus:w-[180px] focus:border-b-2 focus:border-accent" // Normal input style
/>
<button
  type="submit"
  className="btn-accent rounded-full bg-accent px-4 py-2 text-white"
>
  Search
</button>
</div>