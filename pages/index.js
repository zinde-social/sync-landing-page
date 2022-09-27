import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Start Sync on Crossbell</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <h1 className="title">
          What is <span className='highlight'>Sync</span>
        </h1>

        <p className="description">
          Sync your social media data on Crossbell
        </p>

        <div className="grid">
          <img className="img1" src='./what-is-sync.png' />
        </div>
      </section>
      <section>
        <h1 className="title">
          Sync to  <span className='highlight'>Own</span>
        </h1>

        <p className="description">
          Go from a user to an owner
        </p>

        <div className="grid">
          <div className='card'>
            <h3>
              Permanent Record
            </h3>
            <p><span className='italic'>IPFS + Blockchain</span> </p>

            <p>Get rid of maintaining numerous copies. Sync once, record permanently on-chain, content duplicated worldwide.
            </p>
          </div>
          <div className='card'>
            <h3>
              Monetization
            </h3>
            <p><span className='italic'>Built-in NFT and Royalty</span> </p>

            <p>
              First time to authentically own your created content. Monetization has never been easier than now.
            </p>
          </div>
          <div className='card'>
            <h3>
              Authorship
            </h3>
            <p><span className='italic'>Unalterable Proof</span> </p>
            <p>
              The immutability property of the blockchain suggests the authorship determination is less controversial.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h1 className="title">
          How Sync <span className='highlight'>Works</span>
        </h1>
        <div className="grid">
          <img className="img2" src='./how-sync-works.jpeg' />
        </div>
      </section>
      <h1 className="button"><a href='https://crossbell.io/sync'>Sync Now</a></h1>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        section {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .italic {
          font-style: italic;
        }

        .title .highlight {
          color: #ffcf55;
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          color: #2768e3;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          color: #082135;
        }

        .img1 {
          width: 100%;
          margin: -150px;
        }

        .img2 {
          max-width: 800px;
          width: 100%;
        }

        .grid {
          display: flex;
          overflow-x: clip;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 1200px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 30%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0.45rem 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .button {
          padding: 1rem 3rem;
          border-radius: 4rem;
          line-height: 1.15;
          font-size: 4rem;
          background-color: #5b89f7;
          color: #fff;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
          section {
            width: 100%;
          }
          .button {
            padding: 1rem 1.5rem;
          }
          .img1 {
            width: 120%;
            margin: -100px;
            overflow: hidden;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
