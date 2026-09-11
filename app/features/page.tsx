import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
const items = [
  ['Enquiries and messages','Website enquiries, texts and emails stay together against the customer record.'],
  ['Automatic next steps','The system shows whether you need to reply, follow up, quote or book.'],
  ['Price book','Set your own carpet, upholstery, extras, fixed packages and cleaning methods.'],
  ['Automatic quotes','Turn a cleaning list into a draft quote that you can check and send.'],
  ['Booking and calendar','Move accepted work into the diary with notes, access details and deposit status.'],
  ['Reviews and rebooking','Ask for a review, then use six- and twelve-month reminders to win repeat work.']
];
function Brand() { return <Link href="/" className="brand brand-light"><Image className="brand-logo" src="/business-manager-badge.png" alt="Carpet Cleaning Business Manager" width={58} height={58}/><span><b>Carpet Cleaning</b><strong>Business Manager</strong></span></Link>; }
export default function Features() { return <main className="sales-page"><header className="site-header"><nav><Brand/><div className="links"><Link href="/how-it-works">How it works</Link><Link href="/system">System tour</Link><Link href="/sales-training">Sales training</Link></div><Link className="button gold" href="/#demo">Request a demo</Link></nav></header><section className="sales-hero"><p className="eyebrow">EVERYTHING IN ONE PLACE</p><h1>The tools a carpet cleaner needs to run the business properly.</h1><p>Built around winning enquiries, replying quickly, pricing jobs, booking work and making sure customers come back.</p></section><section className="tool-grid">{items.map(([title,text],i) => <article key={title}><span>0{i+1}</span><h2>{title}</h2><p>{text}</p></article>)}</section><section className="sales-strip"><div><p className="eyebrow">NOT A GENERIC CRM</p><h2>It understands rooms, upholstery, cleaning methods and repeat cleaning.</h2></div><Link className="button gold" href="/system">See the system screens <ArrowRight size={16}/></Link></section></main>; }
