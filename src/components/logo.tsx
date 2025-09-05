import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <img
      src="/assets/qmenu_logo_brand.svg"
      alt="QMenu Logo"
      className="w-40 h-40 rounded-full border-2 object-cover" style={{ border: '2px solid #ffaa00' }}
    />
  );
}
