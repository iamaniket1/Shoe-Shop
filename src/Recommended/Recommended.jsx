import Button from "../components/Buttons";
import "./Recommended.css";
const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="Recommended-title">Recommended</h2>
        <div className="Recommended-btns">
          <button className="btns">All Products</button>
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
