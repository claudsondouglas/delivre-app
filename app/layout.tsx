import './globals.css'
import { Work_Sans } from 'next/font/google';


const work_sans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
})

export const metadata = {
  title: 'Delivre.',
  description: 'Cardápio digital, os clientes podem fazer seus pedidos de forma rápida e fácil, sem precisar aguardar o atendimento de um atendente.',
  icons: {
    icon: "/favicon.ico",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${work_sans.variable}`}>{children}</body>
    </html>
  )
}
