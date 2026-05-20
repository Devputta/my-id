export default function GlowOrb({ className }: { className: string }) {
  return (
    <div className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`} />
  );
}
