import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__form">
                    <form action="#" method="post" className="footer__form-element">
                        <div className="footer__form-row">
                            <label for="name" className="footer__label">Name:</label>
                            <input type="text" id="name" name="name" className="footer__input" required />
                        </div>
                        <div className="footer__form-row">
                            <label for="email" className="footer__label">Email:</label>
                            <input type="email" id="email" name="email" className="footer__input" required />
                        </div>
                        <div className="footer__form-row">
                            <label for="message" className="footer__label">Message:</label>
                            <textarea id="message" name="message" className="footer__textarea" rows="3" required></textarea>
                        </div>
                        <div className="footer__form-row">
                            <button type="submit" className="footer__button">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="social__container">

                    <div className="social__item">
                        <a target="_blank" href="https://www.linkedin.com/pub/steven-roberts/7a/707/409" className="social__icon--linkedin"><i className="icon--linkedin"></i></a>
                    </div>
                    <div className="social__item">
                        <a target="_blank" href="https://twitter.com/matchboxhero10" className="social__icon--twitter"><i className="icon--twitter"></i></a>
                    </div>
                    <div className="social__item">
                        <a target="_blank" href="https://plus.google.com/u/0/+StevenRoberts-mbh/posts" className="social__icon--googleplus"><i className="icon--googleplus"></i></a>
                    </div>
                    <div className="social__item">
                        <a target="_blank" href="https://soundcloud.com/matchboxhero" className="social__icon--soundcloud"><i className="icon--soundcloud"></i></a>
                    </div>
                    <div className="social__item">
                        <a target="_blank" href="https://vimeo.com/" className="social__icon--vimeo"><i className="icon--vimeo"></i></a>
                    </div>
                    <div className="social__item">
                        <a target="_blank" href="https://facebook.com" className="social__icon--facebook"><i className="icon--facebook"></i></a>
                    </div>
                    <div className="social__item">
                        <a target="_blank" href="http://pintrest.com" className="social__icon--pintrest"><i className="icon--pintrest"></i></a>
                    </div>
                    <div className="social__item">
                        <a target="_blank" href="http://dribbble.com" className="social__icon--dribble"><i className="icon--dribble"></i></a>
                    </div>
                    <div className="social__item">
                        <a target="_blank" href="http://stumbleupon.com" className="social__icon--stumbleupon"><i className="icon--stumbleupon"></i></a>
                    </div>
                    <div className="social__item">
                        <a target="_blank" href="http://last.fm" className="social__icon--lastfm"><i className="icon--lastfm"></i></a>
                    </div>
                    <div className="social__item">
                        <a target="_blank" href="http://flickr.com" className="social__icon--flickr"><i className="icon--flickr"></i></a>
                    </div>
                    <div className="social__item">
                        <a target="_blank" href="http://instagram.com" className="social__icon--instagram"><i className="icon--instagram"></i></a>
                    </div>
                    <div className="social__item">
                        <a target="_blank" href="https://dropbox.com" className="social__icon--dropbox"><i className="icon--dropbox"></i></a>
                    </div>
                    <div className="social__item">
                        <a target="_blank" href="http://behance.com" className="social__icon--behance"><i className="icon--behance"></i></a>
                    </div>
                    <div className="social__item">
                        <a target="_blank" href="http://skype.com" className="social__icon--skype"><i className="icon--skype"></i></a>
                    </div>
                    <div className="social__item">
                        <a target="_blank" href="https://github.com" className="social__icon--github"><i className="icon--github"></i></a>
                    </div>
                    <div className="social__item">
                        <a target="_blank" href="#" className="social__icon--rss"><i className="icon--rss"></i></a>
                    </div>

                </div>
            </footer>
        </>
    );
}

export default Footer;
