import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
        <main className="text-center">
            <h2 className='text-3xl'>There was a problem.</h2>
            <h2>No ticket found!</h2>
            <p>We could not find the page you were looking for.</p>
            <p>Go back to all tickets <Link href="/tickets">Tickets</Link></p>
        </main>
    </div>
  )
}
