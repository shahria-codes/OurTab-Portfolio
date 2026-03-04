
export function Footer() {
  return (
    <footer className="py-20 relative overflow-hidden bg-black/80">
      <div className="absolute inset-0 bg-emerald-500/10 -z-10 translate-y-1/2 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center pt-12 border-t border-white/10 gap-4">
          <div className="text-2xl font-bold font-headline text-primary tracking-tight">
            OurTab<span className="text-emerald-400">.</span>
          </div>
          <p className="text-sm text-muted-foreground/60 font-light">
            © {new Date().getFullYear()} OurTab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
