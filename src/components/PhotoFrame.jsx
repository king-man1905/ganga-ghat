import { useState } from "react";

/**
 * Renders a real photo when present at /public/images/<src>.
 * Falls back to a labeled placeholder panel so the layout still
 * reads intentionally before the client drops in real photography.
 */
export default function PhotoFrame({ src, alt, caption, className = "", eager = false }) {
  const [errored, setErrored] = useState(false);

  return (
    <div className={`photo-frame ${className}`}>
      {!errored && (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          onError={() => setErrored(true)}
        />
      )}
      {errored && (
        <div className="photo-fallback">
          <p className="font-display text-ivory/90 text-sm leading-snug italic">{caption}</p>
        </div>
      )}
    </div>
  );
}
