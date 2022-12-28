const SubscribeDiscound = () => {
    return (
        <div className="present">
            <div className="container">
                <div className="row">
                <div className="col-6 d-flex">
                    <div className="present-logo">
                        <img src="images/discount/discount-present.svg" alt="discount" />
                    </div>
                    <div className="present-details">
                        <h4>Enjoy 10% OFF</h4>
                        <p>Stay informed about the latest product launches and news. Learn more about our emails and </p>
                    </div>
                </div>
                <div className="col-6 d-flex align-items-center">
                    <form action="#" name="discount-subscribe" className="forn-discount__subscribe">
                        <input type="email" placeholder="Enter your email" name="" id="" />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
}

export default SubscribeDiscound;