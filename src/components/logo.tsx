
import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2a10 10 0 00-9.8 11.3 10 10 0 0019.6 0A10 10 0 0012 2zm0 18a8 8 0 110-16 8 8 0 010 16z" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
