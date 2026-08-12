import { COMPANY } from '@/config/company';

/**
 * Small, zoomable Google Maps embed on Contact (docs/03 §20).
 *
 * Kept deliberately quiet and placed last on the page so it never competes with
 * the WhatsApp conversion. If googleMapsQuery is unset it renders nothing — no
 * broken iframe, no grey box.
 */
export function MapEmbed() {
  if (!COMPANY.googleMapsQuery) return null;

  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    COMPANY.googleMapsQuery,
  )}&output=embed`;

  return (
    <div className="map-embed">
      <iframe
        src={src}
        title="Map showing Eastern World Technology’s location"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
