import { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CategoryBox from "../../Components/CategoryBox";
import ProductCard from "../../Components/productCard";
import "./Homepage.css";
import { useProducts } from "../..";
// import { catbox } from "../../img";

export default function HomePage() {
  const { productData, searchWord } = useContext(useProducts);

  // const addProduct = () => {

  // };

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
      <div className="category-design">
        <div className="category-heading">CATEGORY</div>
        <div className="category-content">
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
          backgroundColor: "#38d02a",
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
