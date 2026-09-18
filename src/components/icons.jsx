const base = "w-5 h-5 shrink-0";

export function IconCheck({ className = base }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function IconShield({ className = base }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
    </svg>
  );
}

export function IconLeaf({ className = base }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 19c8 1 13-4 14-14-9 0-14 5-14 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18c2-3 5-6 12-11" />
    </svg>
  );
}

export function IconBowl({ className = base }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 11h16c0 4.5-3.6 8-8 8s-8-3.5-8-8z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 11c0-2 1-4 3-4s3 2 3 4" />
    </svg>
  );
}

export function IconClock({ className = base }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="8.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IconMapPin({ className = base }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

export function IconPhone({ className = base }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h3l2 5-2.5 1.8a11 11 0 0 0 5.7 5.7L15.9 13l5 2v3a2 2 0 0 1-2.2 2C10.5 19.6 4.4 13.5 4 5.2A2 2 0 0 1 6 3z" />
    </svg>
  );
}

export function IconWhatsApp({ className = base }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.35 5.08L2 22l5.1-1.33A9.94 9.94 0 0 0 12.02 22C17.5 22 22 17.52 22 12S17.5 2 12.02 2zm5.87 14.14c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.1.11-1.77-.11-.4-.13-.93-.3-1.6-.6-2.8-1.2-4.63-4-4.77-4.19-.14-.19-1.14-1.52-1.14-2.9s.72-2.06.98-2.34c.26-.28.56-.35.75-.35h.54c.17 0 .4-.06.63.48.24.55.8 1.9.87 2.03.07.14.12.3.02.48-.09.19-.14.3-.28.46-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.17-.19.7-.81.89-1.09.19-.28.37-.23.63-.14.26.1 1.63.77 1.91.91.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
    </svg>
  );
}

export function IconInstagram({ className = base }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.31.975.976 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.335 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.335-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.335-2.633 1.31-3.608C4.518 2.499 5.784 2.225 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.053.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.856.601 3.698 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.856-.085 3.698-.601 5.038-1.942 1.341-1.34 1.857-3.182 1.942-5.038C23.986 15.668 24 15.259 24 12c0-3.259-.014-3.667-.072-4.947-.085-1.857-.601-3.699-1.942-5.04C20.646.673 18.804.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

export function IconChevronDown({ className = base }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function IconMenu({ className = base }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose({ className = base }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function IconFlame({ className = base }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c1.5 2.5-.5 3.5-.5 5.5A2.5 2.5 0 0 0 14 11c1.5-1.5 2-3.5 2-5 1.5 1.5 2 3.5 2 5.5 0 3.3-2.7 6-6 6s-6-2.7-6-6c0-4 3-5.5 6-8.5z" />
    </svg>
  );
}

export function IconUsers({ className = base }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="9" cy="8" r="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 6.5a3 3 0 0 1 0 6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 14c2.8.3 5 2.7 5 6" />
    </svg>
  );
}

export function IconBed({ className = base }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v2M21 18v2M3 12V8h6v4" />
      <circle cx="6.5" cy="9.5" r="1" />
    </svg>
  );
}

export function IconRoute({ className = base }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 6h6a3 3 0 0 1 3 3v3a3 3 0 0 0 3 3h-2" />
    </svg>
  );
}

export function IconCompass({ className = base }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 9.5L13 13l-3.5 1.5L11 11z" />
    </svg>
  );
}
