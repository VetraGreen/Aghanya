import './globals.css'
import { Inter, Architects_Daughter  } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
// const architects_Daughter = Architects_Daughter({
//   subsets: ['latin'],
//   weight: '400'
// })

export const metadata = {
  title: 'Aghanya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
