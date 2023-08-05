import { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CategoryBox from "../../Components/CategoryBox";
import ProductCard from "../../Components/productCard";
import "./Homepage.css";
import { useProducts } from "../..";
import { freeDel, prodBox } from "../../img";

export default function HomePage() {
  const { productData, searchWord } = useContext(useProducts);

  const searchFilter = productData.filter(
    (item) =>
      item.name?.toLowerCase().includes(searchWord.toLowerCase()) ||
      item.category?.toLowerCase().includes(searchWord.toLowerCase())
  );

  return (
    <>
      <div className="home-carousel">
        <Carousel>
          <div className="home-carousel-layout">
            <img
              src="https://res.cloudinary.com/dbehxf29s/image/upload/v1686486216/gungun3img_pheggp.png"
              alt="Carousel Image 1"
              className="Image-carousel
            "
            />
          </div>
          <div className="home-carousel-layout">
            <img
              src="https://res.cloudinary.com/dbehxf29s/image/upload/v1686486216/gungun2img_wuj6ng.png"
              alt="Carousel Image 2"
              className="Image-carousel
            "
            />
          </div>
          <div className="home-carousel-layout">
            <img
              src="https://res.cloudinary.com/dbehxf29s/image/upload/v1686486347/img1gungun_j5wgfy.png"
              alt="Carousel Image 3"
              className="Image-carousel
            "
            />
          </div>
        </Carousel>
      </div>
      <div className="about-us-sec">
        <h2>About us</h2>
        <div>
          <p>
            Welcome to Gungun Boutique, your one-stop destination for all your
            tailoring needs. Whether you are looking for a blouse paper cutting
            pattern, a dress paper cutting pattern, or any other tailoring
            material, we have it all for you.
          </p>
          <p>
            At Gungun Boutique, we believe that everyone deserves to wear
            clothes that fit them perfectly and express their unique style.
            That’s why we offer a wide range of paper cutting patterns for
            different types of garments, such as saree blouses, kurtis, salwar
            suits, lehengas, gowns, and more. You can choose from various
            designs, sizes, and fabrics to suit your preferences and budget.
          </p>
          <p>
            We also provide quality tailoring materials, such as scissors,
            needles, threads, buttons, zippers, laces, and embellishments. You
            can find everything you need to create your own custom-made outfits
            at home or at your local tailor shop.
          </p>
          <p>
            Gungun Boutique is more than just an online store. It is a community
            of passionate sewers and fashion enthusiasts who love to share their
            creations and tips with each other. You can join our Facebook group
            or follow us on Instagram to get inspired by our latest collections
            and customer reviews. You can also contact us anytime via email or
            phone if you have any questions or feedback.
          </p>
          <p>
            We hope you enjoy shopping with us and find what you are looking
            for. Thank you for choosing Gungun Boutique as your trusted partner
            in tailoring. Happy sewing! 😊
          </p>
        </div>
      </div>
      <marquee direction="right" className="sec-free-del">
        <img src={freeDel} alt="free delivery" className="free-del" />
      </marquee>

      <div className="category-design">
        {/* <div className="category-heading">CATEGORY</div> */}
        <div className="category-content">
          <CategoryBox categoryName={"Youtube Tutorials"} />
          {productData
            ?.reduce(
              (acc, { category }) =>
                acc.find((item) => item.category === category)
                  ? [...acc]
                  : [...acc, { category }],
              []
            )
            .map((items) => {
              const { category } = items;
              return (
                <CategoryBox
                  key={category}
                  categoryName={category}
                  isTrue={true}
                />
              );
            })}
        </div>
        <div className="category-trian"></div>
        <div className="category-trian1"></div>
        <div className="category-trian2"></div>
      </div>
      {/* <div className="home-category">
        <CategoryBox categoryName={"Youtube"} />
        {productData
          ?.reduce(
            (acc, { category }) =>
              acc.find((item) => item.category === category)
                ? [...acc]
                : [...acc, { category }],
            []
          )
          .map((items) => {
            const { category } = items;
            return (
              <CategoryBox
                key={category}
                categoryName={category}
                isTrue={true}
              />
            );
          })}
      </div> */}

      <h1
        style={{
          textAlign: "center",
          // backgroundColor: "#38d02a",
          background: `url(${prodBox})`,
          color: "white",
          fontSize: "40px",
          padding: "30px",
        }}
      >
        Products
      </h1>

      {searchFilter
        ?.reduce(
          (acc, { category }) =>
            acc.find((item) => item.category === category)
              ? [...acc]
              : [...acc, { category }],
          []
        )
        .map((items) => {
          const { category } = items;
          return (
            <>
              <div
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "25px",
                  color: "green",
                }}
              >
                {category.toUpperCase()}
              </div>
              <div className="home-products" key={category} id={`${category}`}>
                {productData
                  ?.filter((item) => item.category === category)
                  .map((items) => {
                    const {
                      _id,
                      name,
                      category,
                      description1,
                      description2,
                      manufactureYear,
                      price,
                      edition,
                      numberOfPages,
                      language,
                      image1,
                    } = items;
                    return (
                      <ProductCard
                        key={_id}
                        _id={_id}
                        name={name}
                        category={category}
                        description1={description1}
                        description2={description2}
                        price={price}
                        edition={edition}
                        manufactureYear={manufactureYear}
                        numberOfPages={numberOfPages}
                        language={language}
                        image1={image1}
                      />
                    );
                  })}
              </div>
            </>
          );
        })}
    </>
  );
}
