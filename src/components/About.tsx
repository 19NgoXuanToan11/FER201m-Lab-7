export default function About(): JSX.Element {
    return (
        <>
            <div className="container">
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header">
                            <i className="material-icons">filter_drama</i>First
                        </div>
                        <div className="collapsible-body">
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header">
                            <i className="material-icons">place</i>Second
                        </div>
                        <div className="collapsible-body">
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header">
                            <i className="material-icons">whatshot</i>Third
                        </div>
                        <div className="collapsible-body">
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}
