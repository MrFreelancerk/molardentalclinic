import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Molar Dental Hospital | Dental Hospital in Indresham, Patancheru",
  description:
    "Molar Dental Hospital is a trusted multi-speciality dental hospital in Indresham, Patancheru, Hyderabad — dental implants, single-sitting root canals, braces, clear aligners, zirconia crowns, teeth whitening and emergency dental care. Open all seven days.",
  icons: {
    icon: "/molar-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Applies the saved/system theme before first paint to avoid a flash */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('molar-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}}catch(e){}})();",
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Sora:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen bg-[var(--page)] text-[var(--ink)] selection:bg-[#2675D8] selection:text-white">
        {children}
      </body>
    </html>
  );
}
