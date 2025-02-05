import Button from '../../components/Button/Button';
import './HomePage.scss';

export default function HomePage() {
    return (
        <div className="home-page">
            <div className="home-page__sections">
                <section className="home-page__about">
                    <h3>Discover and Share Insights on Your Favorite Books</h3>
                    <p>
                        Join a community of book enthusiasts! Leave reviews for your favorite books, explore feedback from other readers, and engage in meaningful discussions.
                    </p>
                </section>

                <section className="home-page__recommendations">
                    <h3>Personalized Book Recommendations Just for You</h3>
                    <p>
                        Unlock tailored suggestions by leaving reviews on books you’ve read. The more you review, the better your recommendations become!
                    </p>
                </section>

                <section className="home-page__books">
                    <h3>Explore Our Book Collection</h3>
                    <p>A wide selection of books, with ratings and user reviews to help guide your next great read.</p>

                    {/* Placeholder for book previews */}
                    
                    <Button>Discover More Books</Button>
                </section>
            </div>
        </div>
    );
}
