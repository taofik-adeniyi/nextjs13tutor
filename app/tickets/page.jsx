import React, { Suspense } from 'react'
import TicketList from './TicketList'
import Loading from '../loading'

const News = () => {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
      <TicketList />
      </Suspense>
    </main>
  )
}

export default News