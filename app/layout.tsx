import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import '../css/global.css'
import '../css/new_projects.css'
import { Martian_Mono } from 'next/font/google'



const martian = Martian_Mono({
    weight: ['300','400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-martian',
})

export default function RootLayout({

    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${martian.variable}`}>
            <body className="font-martian">
                <NavBar active="Home" search="False" />
                {children}
                <Footer />
            </body>
        </html>
    )
}
