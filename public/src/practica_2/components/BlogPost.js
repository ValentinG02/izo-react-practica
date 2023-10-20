import Body from "./Body";
import Title from "./Title";
import "./BlogPost.css"
export default function BlogPost ({ title, body }) {
    return (
        <article>
            <Title title={title} />
            <Body body={body} />
        </article>
    )
}