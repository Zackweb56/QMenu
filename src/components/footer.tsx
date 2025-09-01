
type FooterProps = {
  copyrightText: string;
};

export function Footer({ copyrightText }: FooterProps) {
  return (
    <footer className="w-full py-6 mt-auto">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>{copyrightText}</p>
      </div>
    </footer>
  );
}
