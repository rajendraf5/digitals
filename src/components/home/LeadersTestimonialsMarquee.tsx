type Review = {
  name: string
  username: string
  body: string
  imageUrl: string
}

const reviews: Review[] = [
  {
    name: 'Rajesh Kumar',
    username: '@rajeshk',
    body: 'The ERP solution provided by Digitalls transformed our operations. Highly recommended.',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=72&h=72&q=80'
  },
  {
    name: 'Anita Sharma',
    username: '@anitasharma',
    body: 'Their RTI eFiling system is intuitive and has saved us countless hours.',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=72&h=72&q=80'
  },
  {
    name: 'Vikram Singh',
    username: '@vikram_s',
    body: "The most secure and reliable eNotary service we've used in the public sector.",
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=72&h=72&q=80'
  },
  {
    name: 'Priya Patel',
    username: '@priyapatel',
    body: "Digitalls' judicial systems have significantly improved our court management efficiency.",
    imageUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=72&h=72&q=80'
  },
  {
    name: 'Amit Desai',
    username: '@amitdesai',
    body: 'Incredible implementation and support. The HRMS system is flawless.',
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=72&h=72&q=80'
  },
  {
    name: 'Neha Gupta',
    username: '@nehagupta',
    body: "A vital partner for our department's digital transformation journey.",
    imageUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=72&h=72&q=80'
  }
]

const leftReviews = reviews.slice(0, reviews.length / 2)
const rightReviews = reviews.slice(reviews.length / 2)

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="digitalls-review-card">
      <div className="digitalls-review-header">
        <img src={review.imageUrl} alt={review.name} />
        <div>
          <h3>{review.name}</h3>
          <p>{review.username}</p>
        </div>
      </div>
      <blockquote>{review.body}</blockquote>
    </article>
  )
}

function VerticalColumn({ items, reverse = false }: { items: Review[]; reverse?: boolean }) {
  const loopItems = [...items, ...items]

  return (
    <div className="digitalls-leaders-column">
      <div className={`digitalls-leaders-track${reverse ? ' reverse' : ''}`}>
        {loopItems.map((review, index) => (
          <ReviewCard key={`${review.username}-${index}`} review={review} />
        ))}
      </div>
    </div>
  )
}

export default function LeadersTestimonialsMarquee() {
  return (
    <>      
      <section id="testimonials" className="digitalls-leaders-section">
        <div className="container pb-lg-5 pb-3">
          <div className="heading-content pb-lg-3 pb-3 text-center">
              <div className="heading-subtitle">Our Leaders</div>
                <h2 className='heading-title'>Trusted by Leaders</h2>
                <p>Discover how our digital legal infrastructure solutions are transforming government operations.
                </p>
            </div>
            <div className="digitalls-leaders-shell">
              <VerticalColumn items={leftReviews} />
              <VerticalColumn items={rightReviews} reverse />
              <div className="digitalls-leaders-overlay top" />
              <div className="digitalls-leaders-overlay bottom" />
            </div>
        </div>    
      </section>
    </>  
  )
}
