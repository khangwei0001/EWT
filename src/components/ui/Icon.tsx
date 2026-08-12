import {
  ArrowRightLeft,
  BarChart3,
  Blocks,
  Building2,
  ClipboardList,
  Cpu,
  FolderOpen,
  Globe,
  Network,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

/**
 * The only icon set on the site: Lucide line icons, 1.5px stroke, no fill,
 * no duotone, no gradient (docs/02 §7). Icons are always decorative — the
 * adjacent label carries the meaning.
 */
const ICONS: Record<string, LucideIcon> = {
  'arrow-right-left': ArrowRightLeft,
  'bar-chart-3': BarChart3,
  blocks: Blocks,
  'building-2': Building2,
  'clipboard-list': ClipboardList,
  cpu: Cpu,
  'folder-open': FolderOpen,
  globe: Globe,
  network: Network,
  'shield-check': ShieldCheck,
  workflow: Workflow,
};

export function Icon({
  name,
  size = 24,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Glyph = ICONS[name];
  if (!Glyph) return null;
  return (
    <Glyph
      size={size}
      strokeWidth={1.5}
      className={className}
      aria-hidden="true"
      focusable="false"
    />
  );
}
