
import Link from "next/link";
import { Logo } from "./logo";

type FooterProps = {
  copyrightText: string;
  developerText: string;
  contactText: string;
  contactUrl: string;
};

export function Footer({ copyrightText, developerText, contactText, contactUrl }: FooterProps) {
  return (
    <footer className="w-full py-6 mt-auto bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Logo className="w-6 h-6 text-primary" />
            <span className="font-bold text-foreground">QMenu</span>
          </div>
          
          <div className="text-center">
            <p>{copyrightText.replace('{year}', new Date().getFullYear().toString())}</p>
            <p>{developerText}</p>
          </div>

          <Link href={contactUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">
            {contactText}
          </Link>
        </div>
      </div>
    </footer>
  );
}
