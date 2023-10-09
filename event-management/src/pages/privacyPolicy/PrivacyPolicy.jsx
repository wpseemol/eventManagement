const PrivacyPolicy = () => {
    return (
        <section className="myContainer py-10 text-lg font-medium">
            <div>
                <h2 className="md:text-6xl text-3xl font-bold mb-5">
                    Privacy Policy
                </h2>
            </div>
            <div>
                <div>
                    <h2 className='className="md:text-5xl text-3xl font-semibold mb-5'>
                        Who we are
                    </h2>
                    <p>
                        <span className="font-bold"> Suggested text:</span>
                        We are a learner we try to programming.
                    </p>
                </div>
                <div>
                    <h2 className='className="md:text-5xl text-3xl font-semibold mb-5'>
                        Comments
                    </h2>
                    <p>
                        <span className="font-bold"> Suggested text:</span>
                        When visitors leave comments on the site we collect the
                        data shown in the comments form, and also the visitor’s
                        IP address and browser user agent string to help spam
                        detection.
                    </p>
                    <br />
                    <p>
                        An anonymized string created from your email address
                        (also called a hash) may be provided to the Gravatar
                        service to see if you are using it. The Gravatar service
                        privacy policy is available here:
                        https://automattic.com/privacy/. After approval of your
                        comment, your profile picture is visible to the public
                        in the context of your comment.
                    </p>
                </div>
                <div>
                    <h2 className='className="md:text-5xl text-3xl font-semibold mb-5'>
                        Media
                    </h2>
                    <p>
                        <span className="font-bold"> Suggested text:</span>
                        If you upload images to the website, you should avoid
                        uploading images with embedded location data (EXIF GPS)
                        included. Visitors to the website can download and
                        extract any location data from images on the website.
                    </p>
                </div>
                <div>
                    <h2 className='className="md:text-5xl text-3xl font-semibold mb-5'>
                        Cookies
                    </h2>
                    <p>
                        <span className="font-bold"> Suggested text:</span>
                        If you leave a comment on our site you may opt-in to
                        saving your name, email address and website in cookies.
                        These are for your convenience so that you do not have
                        to fill in your details again when you leave another
                        comment. These cookies will last for one year. If you
                        visit our login page, we will set a temporary cookie to
                        determine if your browser accepts cookies. This cookie
                        contains no personal data and is discarded when you
                        close your browser.
                        <br />
                        {`When you log in, we will also set up several cookies to
                        save your login information and your screen display
                        choices. Login cookies last for two days, and screen
                        options cookies last for a year. If you select "Remember
                        Me", your login will persist for two weeks. If you log
                        out of your account, the login cookies will be removed.
                        <br />
                        If you edit or publish an article, an additional cookie
                        will be saved in your browser. This cookie includes no
                        personal data and simply indicates the post ID of the
                        article you just edited. It expires after 1 day.`}
                    </p>
                </div>
                <div>
                    <h2 className='className="md:text-5xl text-3xl font-semibold mb-5'>
                        Embedded content from other websites
                    </h2>
                    <p>
                        <span className="font-bold"> Suggested text:</span>
                        Articles on this site may include embedded content (e.g.
                        videos, images, articles, etc.). Embedded content from
                        other websites behaves in the exact same way as if the
                        visitor has visited the other website. <br /> These
                        websites may collect data about you, use cookies, embed
                        additional third-party tracking, and monitor your
                        interaction with that embedded content, including
                        tracking your interaction with the embedded content if
                        you have an account and are logged in to that website.
                    </p>
                </div>
                <div>
                    <h2 className='className="md:text-5xl text-3xl font-semibold mb-5'>
                        Who we share your data with
                    </h2>
                    <p>
                        <span className="font-bold"> Suggested text:</span>
                        If you request a password reset, your IP address will be
                        included in the reset email.
                    </p>
                </div>
                <div>
                    <h2 className='className="md:text-5xl text-3xl font-semibold mb-5'>
                        How long we retain your data
                    </h2>
                    <p>
                        <span className="font-bold"> Suggested text:</span>
                        If you leave a comment, the comment and its metadata are
                        retained indefinitely.
                        <br /> This is so we can recognize and approve any
                        follow-up comments automatically instead of holding them
                        in a moderation queue. For users that register on our
                        website (if any), we also store the personal information
                        they provide in their user profile. All users can see,
                        edit, or delete their personal information at any time
                        (except they cannot change their username). Website
                        administrators can also see and edit that information.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
