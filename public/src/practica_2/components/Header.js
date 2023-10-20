import Title from './Title';
import "./Header.css"
export default function Header ({ pageTitle }) {
    return (
        <div className="page-header"><Title Title={pageTitle} /></div>
    )}