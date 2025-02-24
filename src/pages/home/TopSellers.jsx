import { useState } from "react";
import BooksCard from "../books/BooksCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination , Navigation} from "swiper/modules";
import { useGetBooksQuery } from "../../redux/features/books/booksApi";

const categories = [
  "Choose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
];
const TopSellers = () => {
const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

const { data: booksData = {} } = useGetBooksQuery();
const books = booksData.book || [];
  const filteredBooks =
    selectedCategory === "Choose a genre"
      ? books
      : books.filter (
          (book) => book.category === selectedCategory.toLowerCase()
        );
  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
      <div>
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-[#EAEAEA] border-gray-300  rounded-md focus:outline-none px-4 py-2"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="pt-3">
        <Swiper
        navigation={true}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1180:{
              slidesPerView: 3,
              spaceBetween: 50,
            }
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {filteredBooks.length > 0 && filteredBooks.map((book, index) => (
            <SwiperSlide key={index}>
              <BooksCard book={book} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopSellers;
