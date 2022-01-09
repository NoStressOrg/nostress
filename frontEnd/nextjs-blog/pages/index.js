import Head from "next/head";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>NOSTRESS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to NOSTRESS!</h1>

        <p className="description">
          스트레스는 만병의 근원! 아무 생각 없이 끄적여보는 걸 추천드립니다.
        </p>

        <div className="main--content">
          <p className="main--content__imoji">&#x1F64B;</p>
          <p className="main--content__text">
            <a href="#" rel="noopener noreferrer">
              <span>로그인하고 끄적이러 가기</span>
              <span className="main--content__icon">
                <ArrowForwardIcon
                  fontSize="large"
                  style={{ verticalAlign: "text-bottom" }}
                />
              </span>
            </a>
          </p>
        </div>
      </main>

      <footer>
        <p>COPYRIGHT ⓒ 2022 NOSTRESS ALL RIGHTS RESERVED.</p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .main--content {
          text-align: center;
        }

        .main--content__imoji {
          font-size: 12rem;
          margin: 0;
        }

        .main--content__text {
          font-size: 2rem;
          font-weight: bold;
        }

        .main--content__icon {
          display: inline-block;
          transform: translateX(0);
          transition: all 0.4s;
        }

        .main--content__text:hover .main--content__icon {
          transform: translateX(12px);
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          word-break: keep-all;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
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
  );
}
