import ProductSwiper from "./ProductSwiper";
import "../../stylesheets/productPage/productPageTop.scss";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

function ProductPageTop({ product, relatedProducts }) {
  const [selectedSize, setSelectedSize] = useState([]);

  const onClickSize = useCallback(size => {
    setSelectedSize([...selectedSize, size]);
  }, [selectedSize]);

  const onClickDelete = useCallback(idx => {
    const _selectedSize = [...selectedSize];
    _selectedSize.splice(idx, 1);
    setSelectedSize(_selectedSize)
  }, [selectedSize]);

  const onClickToCart = useCallback(() => {
    window.confirm("장바구니로 이동하시겠습니까?");
  }, []);

  const onClickBuy = useCallback(() => {
  window.confirm("상품을 바로 구매하시겠습니까?");
  }, []);
  
  return (
    <div className="product-page-top">
      <div className="top__section top__section--left">
        <ProductSwiper images={product.images} />
      </div>
      <div className="top__section top__section--right">
        <div className="prod-info">
          <h2 className="prod-info__name">{product.name}</h2>
          <p className="prod-info__price">{product.price.toLocaleString()}원</p>
        </div>
        <div className="prod-sizes">
          <div className="prod-sizes__desc">상품 사이즈를 선택해주세요.</div>
          {product.sizes.map(size => <button key={product.name + "-" + size} className="prod-sizes__btn" onClick={() => onClickSize(size)}>{size}</button>)}
        </div>
        <div className="selected-products">
          {(selectedSize.length === 0
            ? (
              <div className="selected-products__empty">
                선택된 상품이 없습니다.
              </div>
            ) : (
              <>
              <ul className="selected-products__list">
                {selectedSize.map((size, i) => (
                  <li key={size + "-" + i} className="selected-products__item">
                    <span className="item__name">{product.name}</span>
                    <span className="item__size">{size}</span>
                    <span className="item__price">{product.price.toLocaleString()}원</span>
                    <span className="item__delete"><button onClick={() => onClickDelete(i)}>x</button></span>
                  </li>
                ))}
              </ul>
              <div className="selected-products__price">
                <span>{(product.price * selectedSize.length).toLocaleString()}원</span>
              </div>
              </>
            ))}
        </div>
        <div className="interaction">
          {selectedSize.length === 0 ?
            (
              <>
              <button className="interaction__btn" disabled>장바구니</button>
              <button className="interaction__btn" disabled>구매</button>
              </>
            ) : (
              <>
              <button className="interaction__btn" onClick={onClickToCart}>장바구니</button>
              <button className="interaction__btn" onClick={onClickBuy}>구매</button>
              </>
            )
          }
        </div>
        <div className="related">
          <div className="related__title">
            <span>관련 상품</span>
            <hr/>
          </div>
          <div className="related-list">
            {relatedProducts.map((prod, i) => (
              <div className="related-prod" key={prod.id}>
                <Link to={"/product/" + prod.id} className="related-prod__link">
                  <img src={prod.image} alt={prod.id} className="related-prod__img"/>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPageTop;