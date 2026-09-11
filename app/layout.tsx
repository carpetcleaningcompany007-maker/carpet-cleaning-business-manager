import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Carpet Cleaning Business Manager',description:'Professional websites and business systems for carpet cleaners.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
