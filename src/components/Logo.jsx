export default function LogoMark({ className = "h-9 w-9" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="22.5" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" />
      {/* diya flame */}
      <path
        d="M24 10c1.8 2.8-0.6 4.2-0.6 6.6 0 1.8 1.4 3 3 3s3-1.2 3-3c1.8 1.8 2.6 4.4 2.6 6.6 0 3.9-3.3 7-7.4 7s-7.4-3.1-7.4-7c0-4.6 3.5-6.6 6.8-13.2z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* om glyph */}
      <text
        x="24"
        y="35"
        textAnchor="middle"
        fontSize="13"
        fontFamily="'Noto Sans Devanagari', sans-serif"
        fill="currentColor"
      >
        ॐ
      </text>
      {/* leaf accents flanking the base */}
      <path
        d="M11 33c4-1 6.5-3 8-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M37 33c-4-1-6.5-3-8-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}
