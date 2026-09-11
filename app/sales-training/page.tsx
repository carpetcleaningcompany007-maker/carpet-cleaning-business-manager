import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
const items = [
 ['Reply quickly and professionally','Use the five-minute first response while the enquiry is still warm.'],
 ['Ask the right questions','Get the rooms, upholstery, access details and cleaning level you need.'],
 ['Explain the right clean','Give customers clear options between a standard clean and a deeper professional clean.'],
 ['Follow up and rebook','Use helpful follow-ups, review requests and rebooking messages that sound like you.']
];
function Brand() { return <Link href="/" className="brand brand-light"><Image className="brand-logo" src="/business-manager-badge.png" alt="Carpet Cleaning Business Manager" width={58} height={58}/><span><b>Carpet Cleaning</b><strong>Business Manager</strong></span></Link>; }
export default function SalesTraining() { return <main className="sales-page"><header className="site-header"><nav><Brand/><div className="links"><Link href="/how-it-works">How it works</Link><Link href="/system">System tour</Link><Link href="/features">What’s included</Link></div><Link className="button gold" href="/#demo">Request a demo</Link></nav></header><section className="sales-hero"><p className="eyebrow">INCLUDED SALES TRAINING</p><h1>Help your cleaner turn more enquiries into booked work.</h1><p>Practical sales videos designed for carpet cleaners: what to ask, how to explain the right clean, how to quote and how to follow up.</p></section><section className="training-flow">{items.map(([title,text],i) => <article key={title}><span>0{i+1}</span><h2>{title}</h2><p>{text}</p></article>)}</section><section className="sales-strip"><div><p className="eyebrow">A PRACTICAL ADD-ON</p><h2>Use the system and sales training together to create more good bookings.</h2></div><Link className="button gold" href="/#demo">Talk through your setup <ArrowRight size={16}/></Link></section></main>; }
