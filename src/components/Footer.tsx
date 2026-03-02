
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="py-20 relative overflow-hidden bg-black/80">
      <div className="absolute inset-0 bg-emerald-500/10 -z-10 translate-y-1/2 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="glass p-12 md:p-20 rounded-[3rem] text-center space-y-8 mb-20 border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] bg-black/40 backdrop-blur-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-emerald-500/10 blur-[100px] rounded-full" />

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight relative z-10">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-400">Elevate</span> Your <br className="hidden md:block" /> Digital Workspace?
          </h2>
          <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto font-light relative z-10">
            Join thousands of professionals already using OurTab to streamline their productivity.
          </p>
          <div className="flex justify-center pt-8 relative z-10">
            <Button size="lg" className="rounded-full bg-emerald-500 hover:bg-emerald-400 text-black px-12 h-16 text-xl font-semibold shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_0_50px_-10px_rgba(16,185,129,0.7)] transition-all duration-300 hover:-translate-y-1" asChild>
              <Link href="https://app.ourtab.online">Get Started for Free</Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 gap-8">
          <div className="text-2xl font-bold font-headline text-primary tracking-tight">
            OurTab<span className="text-emerald-400">.</span>
          </div>

          <div className="flex gap-8 text-sm font-medium text-muted-foreground/80">
            <Link href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-emerald-400 transition-colors">Documentation</Link>
          </div>

          <div className="text-sm text-muted-foreground/60 flex flex-col items-center md:items-end gap-1 font-light">
            <span>© {new Date().getFullYear()} OurTab. All rights reserved.</span>
            <span>
              Developed by:{" "}
              <Link
                href="https://github.com/sria-the-fury"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              >
                sria-the-fury
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
