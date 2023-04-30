import "./search-box.styles.css";

const SearchBox = ({ className, onChangeHandler, placeholder }) => {
  // this needs destrucrure bcs the props got here in an object, keys: attributes, values: values of the attributes
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
