import { Link } from "react-router-dom";

export default function Footer(): JSX.Element {
    return (
        <footer className="page-footer purple darken-3">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Movies</h5>
                        <p className="grey-text text-lighten-4">
                            This my my website using ReactJS to show my favorite
                            movies.
                        </p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                            <li>
                                <Link
                                    to="/"
                                    className="grey-text text-lighten-3"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="grey-text text-lighten-3"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/news"
                                    className="grey-text text-lighten-3"
                                >
                                    News
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="grey-text text-lighten-3"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">© 2023 Copyright Text</div>
            </div>
        </footer>
    );
}
