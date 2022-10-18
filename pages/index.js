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
          What is <span className='highlight'>xSync</span>
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
              Permanence
            </h3>
            <p><span className='italic'>IPFS + Blockchain</span> </p>

            <p>Get rid of maintaining numerous copies. Sync once, record is permanently on-chain, content is duplicated worldwide.
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
        <div className='power-footer'>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 235.3 235.3" className="w-2 h-2 ">
            <path d="M30.3 164l84 48.5 84-48.5V67l-84-48.5-84 48.5v97z" fill="#469ea2"></path>
            <path d="M105.7 30.1l-61 35.2a18.19 18.19 0 010 3.3l60.9 35.2a14.55 14.55 0 0117.3 0l60.9-35.2a18.19 18.19 0 010-3.3L123 30.1a14.55 14.55 0 01-17.3 0zm84 48.2l-61 35.6a14.73 14.73 0 01-8.6 15l.1 70a15.57 15.57 0 012.8 1.6l60.9-35.2a14.73 14.73 0 018.6-15V79.9a20 20 0 01-2.8-1.6zm-150.8.4a15.57 15.57 0 01-2.8 1.6v70.4a14.38 14.38 0 018.6 15l60.9 35.2a15.57 15.57 0 012.8-1.6v-70.4a14.38 14.38 0 01-8.6-15L38.9 78.7z" fill="#6acad1"></path>
            <path d="M114.3 29l75.1 43.4v86.7l-75.1 43.4-75.1-43.4V72.3L114.3 29m0-10.3l-84 48.5v97l84 48.5 84-48.5v-97l-84-48.5z" fill="#469ea2"></path>
            <path d="M114.9 132h-1.2A15.66 15.66 0 0198 116.3v-1.2a15.66 15.66 0 0115.7-15.7h1.2a15.66 15.66 0 0115.7 15.7v1.2a15.66 15.66 0 01-15.7 15.7zm0 64.5h-1.2a15.65 15.65 0 00-13.7 8l14.3 8.2 14.3-8.2a15.65 15.65 0 00-13.7-8zm83.5-48.5h-.6a15.66 15.66 0 00-15.7 15.7v1.2a15.13 15.13 0 002 7.6l14.3-8.3V148zm-14.3-89a15.4 15.4 0 00-2 7.6v1.2a15.66 15.66 0 0015.7 15.7h.6V67.2L184.1 59zm-69.8-40.3L100 26.9a15.73 15.73 0 0013.7 8.1h1.2a15.65 15.65 0 0013.7-8l-14.3-8.3zM44.6 58.9l-14.3 8.3v16.3h.6a15.66 15.66 0 0015.7-15.7v-1.2a16.63 16.63 0 00-2-7.7zM30.9 148h-.6v16.2l14.3 8.3a15.4 15.4 0 002-7.6v-1.2A15.66 15.66 0 0030.9 148z" fill="#469ea2"></path>
            <path d="M114.3 213.2v-97.1l-84-48.5v97.1z" fill-opacity=".15" fill="#083b54"></path>
            <path d="M198.4 163.8v-97l-84 48.5v97.1z" fill-opacity=".05" fill="#083b54"></path>
          </svg>
          <span className='text'> IPFS powered by</span>
          <a href="https://4everland.org/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 674.33 92.58" className='w-210 h-50' >
              <path d="M440.8,515.94V503.61H408a4.16,4.16,0,0,1-4.16-4.16V487.89h3.39v12.33H440.8V487.89h3.38v28.05Z" transform="translate(-183.45 -455.56)" class="cls-1"></path>
              <path d="M469.21,515.86a14,14,0,0,1,0-28l26.27.12,0,3.39-26.26-.12a10.62,10.62,0,0,0,0,21.24l26.27.11,0,3.39Zm2-12.18v-3.39l24.27.11,0,3.38Z" transform="translate(-183.45 -455.56)" class="cls-1"></path>
              <path d="M528,515.94a4.17,4.17,0,0,1-3-1.27l-.12-.13-16-25.1,2.86-1.82L528,513.13l16.27-25.5,2.86,1.82-16,25.09-.11.13A4.21,4.21,0,0,1,528,515.94Z" transform="translate(-183.45 -455.56)" class="cls-1"></path>
              <path d="M570.87,515.82a14,14,0,0,1,0-28l26.28.11,0,3.39-26.26-.11a10.62,10.62,0,1,0,0,21.23l26.28.12,0,3.38Zm2-12.18v-3.39l24.27.11,0,3.39Z" transform="translate(-183.45 -455.56)" class="cls-1"></path>
              <path d="M626.87,516a4.16,4.16,0,0,1-4.15-4.16v-7.44a4.15,4.15,0,0,1,4.15-4.15h13.49a4.54,4.54,0,0,0,4.52-4.56v-.15a4.34,4.34,0,0,0-4.34-4.34H611.33V516h-3.39V492a4.17,4.17,0,0,1,4.16-4.16h28.44a7.73,7.73,0,0,1,7.73,7.73v.15a7.94,7.94,0,0,1-7.91,7.95H626.11v9h21V516Z" transform="translate(-183.45 -455.56)" class="cls-1"></path>
              <path d="M664.5,515.93a4.16,4.16,0,0,1-4.16-4.16V487.9h3.39v24.64h36.78v3.39Z" transform="translate(-183.45 -455.56)" class="cls-1"></path>
              <path d="M749.53,515.93V505H724.9v-3.39h24.63V491.28H716v24.65h-3.39V492.05a4.16,4.16,0,0,1,4.16-4.15h32a4.16,4.16,0,0,1,4.16,4.15v23.88Z" transform="translate(-183.45 -455.56)" class="cls-1"></path>
              <path d="M801.16,516.07a4.19,4.19,0,0,1-1.92-.47l-.16-.08-30.7-25.16v25.58H765v-24a4.14,4.14,0,0,1,6.08-3.68l.15.08,30.71,25.16V487.89h3.39v24a4.12,4.12,0,0,1-2,3.55A4.18,4.18,0,0,1,801.16,516.07Z" transform="translate(-183.45 -455.56)" class="cls-1"></path>
              <path d="M817.39,515.94V501.47h3.39v11.09h23a10.62,10.62,0,1,0,0-21.24H817.39v-3.39h26.38a14,14,0,1,1,0,28Z" transform="translate(-183.45 -455.56)" class="cls-1"></path>
              <path d="M281.69,548.14A46.29,46.29,0,1,1,328,501.85,46.34,46.34,0,0,1,281.69,548.14Zm0-91.08a44.79,44.79,0,1,0,44.79,44.79A44.84,44.84,0,0,0,281.69,457.06Z" transform="translate(-183.45 -455.56)" class="cls-2"></path>
              <path d="M281.7,545.21V543.7c27.55,0,50-18.77,50-41.85S309.25,460,281.69,460s-50,18.77-50,41.85,22.42,41.86,50,41.86v1.51c-28.39,0-51.49-19.46-51.49-43.37s23.1-43.36,51.48-43.36,51.5,19.46,51.5,43.37S310.08,545.21,281.7,545.21Z" transform="translate(-183.45 -455.56)" class="cls-3"></path>
              <path d="M281.7,542.28h0c-31.25,0-56.68-18.14-56.68-40.44s25.42-40.43,56.67-40.43,56.69,18.14,56.69,40.44S313,542.28,281.7,542.28Zm0-79.37c-30.43,0-55.18,17.47-55.18,38.93s24.76,38.93,55.18,38.93h0c30.42,0,55.17-17.46,55.17-38.92S312.11,462.91,281.69,462.91Z" transform="translate(-183.45 -455.56)" class="cls-4"></path>
              <path d="M281.71,539.35h0c-34.12,0-61.88-16.83-61.88-37.51s27.75-37.5,61.86-37.5,61.89,16.83,61.89,37.51S315.82,539.35,281.71,539.35Zm0-73.51c-33.3,0-60.37,16.15-60.37,36s27.08,36,60.37,36h0c33.28,0,60.35-16.15,60.35-36S315,465.84,281.69,465.84Z" transform="translate(-183.45 -455.56)" class="cls-5"></path>
              <path d="M281.73,536.42h0c-37,0-67.07-15.52-67.07-34.59s30.07-34.57,67-34.57,67.1,15.52,67.1,34.59S318.69,536.42,281.73,536.42Zm0-1.5c17.52,0,34-3.53,46.52-9.94,12.26-6.29,19-14.5,19-23.13s-6.76-16.85-19-23.14c-12.49-6.41-29-9.94-46.55-9.94s-34.08,3.52-46.56,9.93c-12.26,6.29-19,14.51-19,23.13s6.76,16.85,19,23.15c12.49,6.41,29,9.94,46.55,9.94" transform="translate(-183.45 -455.56)" class="cls-6"></path>
              <path d="M281.74,533.49h-.05c-39.85,0-72.26-14.2-72.26-31.66s32.39-31.64,72.21-31.64S354,484.4,354,501.85,321.56,533.49,281.74,533.49Zm0-1.5c38.33,0,70.71-13.8,70.71-30.14s-32.4-30.16-70.76-30.16-70.76,13.8-70.76,30.14S243.33,532,281.69,532" transform="translate(-183.45 -455.56)" class="cls-7"></path>
              <path d="M281.77,530.56h-.08c-42.71,0-77.46-12.89-77.46-28.74s34.72-28.7,77.39-28.7,77.53,12.89,77.53,28.73S324.44,530.56,281.77,530.56Zm-.08-55.94c-41.2,0-76,12.46-76,27.2s34.79,27.24,76,27.24h.08c41.13,0,75.88-12.46,75.88-27.21S322.86,474.62,281.69,474.62Z" transform="translate(-183.45 -455.56)" class="cls-8"></path>
              <path d="M281.79,527.63h-.1c-21.76,0-42.41-2.69-58.14-7.57S199,508.68,199,501.82s8.69-13.32,24.48-18.22,36.33-7.55,58.07-7.55h.1c21.77,0,42.41,2.68,58.14,7.57s24.51,11.38,24.51,18.24-8.69,13.31-24.48,18.21S303.53,527.63,281.79,527.63Zm-.2-50.08c-43.18,0-81,11.34-81,24.27s37.92,24.31,81.15,24.31h.1c43.18,0,81-11.35,81-24.27s-37.92-24.31-81.15-24.31Z" transform="translate(-183.45 -455.56)" class="cls-9"></path> <path d="M281.83,524.7h-.14c-23.07,0-45-2.39-61.77-6.73s-26.08-10.09-26.08-16.15,9.25-11.79,26-16.13S258.52,479,281.56,479h.13c23.07,0,45,2.39,61.78,6.73s26.07,10.09,26.07,16.16-9.24,11.78-26,16.12S304.87,524.7,281.83,524.7Zm-.27-44.22c-50.81,0-86.22,11.24-86.22,21.34s35.47,21.38,86.35,21.38h.14c50.8,0,86.21-11.25,86.21-21.34s-35.46-21.38-86.35-21.38Z" transform="translate(-183.45 -455.56)" class="cls-10"></path>
              <path d="M281.88,521.77h-.18c-50.44,0-93-9.14-93-20s42.52-19.91,92.86-19.91h.19c50.43,0,93,9.14,93,20S332.21,521.77,281.88,521.77Zm-.37-38.37c-24.21,0-47.29,2.08-65,5.85-16.52,3.52-26.38,8.21-26.38,12.56s9.88,9.07,26.44,12.6c17.73,3.78,40.85,5.86,65.11,5.86h.18c24.2,0,47.28-2.08,65-5.85,16.52-3.52,26.38-8.21,26.38-12.56s-9.88-9.07-26.44-12.6c-17.73-3.77-40.85-5.86-65.09-5.86Z" transform="translate(-183.45 -455.56)" class="cls-11"></path>
              <path d="M282,518.84h-.25c-53.26,0-98.25-7.8-98.25-17s44.88-17,98-17h.25c53.24,0,98.23,7.8,98.23,17S335.06,518.84,282,518.84Zm-.5-32.51c-25.47,0-49.84,1.78-68.65,5-20.53,3.54-27.84,7.72-27.84,10.46s7.33,6.94,27.93,10.49c18.85,3.25,43.29,5,68.81,5H282c25.45,0,49.83-1.78,68.63-5,20.53-3.54,27.85-7.72,27.85-10.46s-7.34-6.94-27.93-10.49c-18.86-3.25-43.29-5-68.8-5Z" transform="translate(-183.45 -455.56)" class="cls-12"></path>
            </svg>
          </a></div>
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

        .power-footer {
          display: flex;
          margin: 0.8rem;
        }

        .power-footer span, svg {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: space-around;
          margin: 3px;
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

        .w-2 {
          width: 3rem;
        }

        .w-210 {
          width: 13rem;
        }

        .h-2 {
          height: 3rem;
        }

        .h-50 {
          height: 3rem;
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
