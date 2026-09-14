import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP, Noto_Sans_SC } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { htmlLang, ogLocale, routing, type AppLocale } from "@/i18n/routing";
import { alternateLanguages, localePath } from "@/lib/i18n/metadata";
import { robotsMetadata } from "@/lib/seo/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoSansSc = Noto_Sans_SC({
  variable: "--font-noto-sc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: requested } = await params;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: "meta" });
  const title = `${siteConfig.name} | ${t("tagline")}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description: t("description"),
    applicationName: siteConfig.name,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: localePath(locale),
      languages: alternateLanguages(),
    },
    icons: {
      icon: "/logo.png",
      apple: "/logo.png",
    },
    manifest: "/manifest.webmanifest",
    verification: siteConfig.googleSiteVerification
      ? { google: siteConfig.googleSiteVerification }
      : undefined,
    openGraph: {
      type: "website",
      locale: ogLocale[locale as AppLocale],
      url: siteConfig.url,
      siteName: siteConfig.name,
      title,
      description: t("description"),
      images: siteConfig.ogImage
        ? [
            {
              url: siteConfig.ogImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: t("shortDescription"),
      creator: siteConfig.twitter,
      site: siteConfig.twitter,
      images: siteConfig.ogImage ? [siteConfig.ogImage] : undefined,
    },
    robots: robotsMetadata(),
    category: "technology",
    classification: "Portfolio, Developer, Fullstack",
    appleWebApp: {
      capable: true,
      title: siteConfig.name,
      statusBarStyle: "black-translucent",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={htmlLang[locale]} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansJp.variable} ${notoSansSc.variable} antialiased bg-[var(--space-bg)] text-[var(--space-text)]`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
