import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MD. Rafsan Jamil | DevOps & Cloud Engineer",
  description:
    "DevOps Engineer portfolio featuring Kubernetes, Docker, CI/CD, cloud infrastructure, monitoring and DevSecOps projects.",
  keywords: [
    "DevOps Engineer",
    "Kubernetes",
    "Docker",
    "Azure DevOps",
    "Terraform",
    "AWS",
    "CI/CD",
    "DevSecOps",
  ],
  authors: [{ name: "MD. Rafsan Jamil" }],
  openGraph: {
    title: "MD. Rafsan Jamil | DevOps & Cloud Engineer",
    description:
      "I build reliable platforms, automate deployments and operate production infrastructure.",
    type: "website",
    images: ["/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
