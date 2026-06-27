interface Props {
  src: string;
  /** 'light' veils toward ivory, 'dark' veils toward ink */
  tone?: 'light' | 'dark';
  /** veil strength 0-100 (lower = video more visible) */
  veil?: number;
}

/**
 * Full-bleed lifestyle video behind a section. A lighter, gradient-based
 * veil keeps text readable while letting the footage clearly show through.
 */
export default function SectionVideoBg({ src, tone = 'light', veil = 55 }: Props) {
  const base = tone === 'light' ? '247,243,236' : '28,26,23';
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      >
        <source src={src} type="video/mp4" />
      </video>
      {/* light flat veil — keeps footage clearly visible */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(${base}, ${veil / 100})` }}
      />
      {/* soft top/bottom fade so sections blend into one another */}
      <div
        className="absolute inset-0"
        style={{
          background:
            tone === 'light'
              ? 'linear-gradient(180deg, rgba(247,243,236,0.92) 0%, rgba(247,243,236,0.15) 22%, rgba(247,243,236,0.15) 78%, rgba(247,243,236,0.92) 100%)'
              : 'linear-gradient(180deg, rgba(28,26,23,0.9) 0%, rgba(28,26,23,0.25) 25%, rgba(28,26,23,0.25) 75%, rgba(28,26,23,0.9) 100%)',
        }}
      />
    </div>
  );
}
