import Body from "./Body";
import BlogPost from "./BlogPost";
import "./Main.css"
export default function Main({pageBody, links}){
        return (
        <main>
            <nav>
                <ul>
                    { links.map((link) => (
                        <li>
                            <a href="{ link }">{ link }</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="main-body">
                <Body body={pageBody} />
            </div>
            <p>Frase a elección</p>
            <BlogPost 
                title={'Newells: Heinze le dio un fuerte respaldo a Guillermo Ortiz y encendió la polémica'}
                body={'El DT dijo que "es uno de los mejores centrales del fútbol argentino" con el afán de bancarlo y, quizás, centrar las críticas en su figura'}
            />
        </main>
    )}