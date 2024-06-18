import type { Metadata } from 'next'
import '../styles/globals.css'
import { Header } from './_components/Header'
import { Nav } from './_components/Nav'
import { Footer } from './_components/Footer'
import styles from './layout.module.css'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <div className={styles.container}>
          <Header />
          <div className={styles.content}>
            <Nav />
            <main className={styles.main}>{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
