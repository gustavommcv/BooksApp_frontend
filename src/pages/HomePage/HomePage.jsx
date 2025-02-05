import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLoaderData } from 'react-router';
import Button from '../../components/Button/Button';
import './HomePage.scss';
import Spinner from '../../components/Spinner/Spinner';
import { useMemo, useState, useEffect } from 'react';
import BookHome from '../../components/BookHome/BookHome';
import Slider from "react-slick";

export default function HomePage() {
    const data = useLoaderData();
    const books = useMemo(() => data?.books || [], [data]);
    const [loadingImages, setLoadingImages] = useState(true);
    const totalImages = books.length;

    useEffect(() => {
        let loadedImages = 0;

        if (totalImages === 0) {
            setLoadingImages(false);
            return;
        }

        books.forEach((book) => {
            const img = new Image();
            img.src = book.cover;
            img.onload = () => {
                loadedImages += 1;
                if (loadedImages === totalImages) {
                    setLoadingImages(false);
                }
            };
            img.onerror = () => {
                loadedImages += 1;
                if (loadedImages === totalImages) {
                    setLoadingImages(false);
                }
            };
        });
    }, [books, totalImages]);

    const sliderSettings = {
        dots: false,
        infinite: true,
        slidesToScroll: 4,
        speed: 500,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToScroll: 2,
                }
            },
        ],
        arrows: true,
    };
    
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
                    <Button className={'home-page__button'}>Start reviewing</Button>
                </section>

                <section className="home-page__books">
                    <h3>Explore Our Book Collection</h3>
                    <p>A wide selection of books, with ratings and user reviews to help guide your next great read.</p>

                    <Button className={'home-page__button'}>Discover More Books</Button>

                    {loadingImages || books.length === 0 ? (
                        <Spinner />
                    ) : (
                        <Slider {...sliderSettings}>
                            {books.map((book) => (
                                <BookHome key={book._id} id={book._id} cover={book.cover} title={book.title} author={book.author} />
                            ))}
                        </Slider>
                    )}
                </section>
            </div>
        </div>
    );
}
