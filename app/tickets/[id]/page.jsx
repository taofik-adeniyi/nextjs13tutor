// for pages that havent been loaded yet false for if not loaded yet true for default and its loaded
export const dynamicParams = true
import ShowError from '@/app/components/ShowError'
import {notFound} from 'next/navigation'

export async function generateStaticParams(){
    const res = await fetch('http://localhost:4000/tickets')
    const tickets = await res.json()

    return tickets.map(ticket => ({
        id: ticket.id
    }))
}

async function getTicket(id){

    // imitate delay
    await new Promise(resolve => setTimeout(resolve, 3000))

    const res = await fetch('http://localhost:4000/tickets/' + id, {
        next: {
            revalidate: 60
        }
    })

    if(!res.ok){
        notFound()
    }
    return res.json()
}


export default async function TicketDetails({params}) {
    const id = params.id;
    const ticket = await getTicket(id)
    
  return (
    <main>
        <nav>
            <h2>Ticket Details</h2>
        </nav>
        <div className='card'>
            <h3>{ticket.title}</h3>
            <small>Created by {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
        </div>
        {/* <ShowError /> */}
        </main>
  )
}
