import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import type { HomeTile } from '@/content/home';

/**
 * Compact tile for the ten Home capability items (docs/03 §8). The whole tile
 * is the link, deep-linking to the matching card on /capabilities.
 */
export function CapabilityTile({ tile }: { tile: HomeTile }) {
  return (
    <Link href={tile.href} className="card card-hover cap-tile">
      <span className="icon-chip" aria-hidden="true">
        <Icon name={tile.icon} size={24} />
      </span>
      <span className="type-h4 cap-tile__label">{tile.label}</span>
    </Link>
  );
}
