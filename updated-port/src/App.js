import './App.css';
import mountain from './assets/mountain.jpg';

function App() {
  return (
    <>
      <header>
        <h1>Christian Asberry</h1>
        <nav>
          <ul>
            <li><a className="button" href="#section1">About Me</a></li>
            <li><a className="button" href="#section2">Work</a></li>
            <li><a className="button" href="#section3">Contact</a></li>
          </ul>
        </nav>
      </header>
      <figure>
        <p> </p>
      </figure>
      <div id="mainbody">
        <article className="my-row" id="section1">
          <h1>About Me</h1>
          <section>
            <p>Hi, I'm Christian. I studied film in Australia and have always been interested in the creative/tech industry. I enrolled in this program to start a career in software development. I love R&amp;B music, and I like to play games.</p>
          </section>
        </article>
        <main className="my-row" id="section2">
          <h1>Work</h1>
          <section className="words">
            <a target="_blank" href="https://cristian01021.github.io/hw329/">
              <img src={mountain} alt="hello" />
            </a>
            <p className="picturename">Coding Project</p>
            <a target="_blank" href="https://notalisk.github.io/my-movie-list/index.html">
              <img src={mountain} alt="hello" />
            </a>
            <p className="picturename1">ReelGood</p>
            <a target="_blank" href="https://quizify.herokuapp.com/">
              <img src={mountain} alt="hello" />
            </a>
            <p className="picturename2">Quizify</p>
            <a target="_blank" href="https://aqueous-eyrie-17361-72cd3ab22201.herokuapp.com/">
              <img src={mountain} alt="hello" />
            </a>
            <p className="picturename3">GoFit</p>
          </section>
        </main>
        <footer className="my-row" id="section3">
          <h1>Contact</h1>
          <section className="links">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="button">Google</a>
            <a href="https://github.com/Cristian01021/hw4-4" target="_blank" rel="noopener noreferrer" className="button">Github</a>
            <a href="https://blitz.gg/valorant/profile/Cristian1021-1021" target="_blank" rel="noopener noreferrer" className="button">Valorant</a>
          </section>
        </footer>
      </div>
    </>
  );
}

export default App;