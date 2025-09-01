
type FooterProps = {
  copyrightText: string;
};

export function Footer({ copyrightText }: FooterProps) {
  return (
    <footer className="w-full py-6 mt-auto">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>{copyrightText}</p>
      </div>
    </footer>
  );
}
