import Head from 'next/head'

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-black"
      style={{
        'background-image':
          'linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(/bg-img.jpeg)',
      }}>
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-5xl font-bold text-white max-w-lg">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className="text-2xl text-white mt-4 mb-8">Watch anywhere. Cancel anytime.</h2>
        <p className="text-white text-lg">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="flex mt-4">
          <input placeholder="Email address" className="bg-white p-4 min-w-[400px]" />
          <button className="flex items-center bg-[#e50914] text-white text-xl px-4">
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>

      </main>
    </div>
  )
}
