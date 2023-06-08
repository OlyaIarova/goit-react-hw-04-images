import { useState } from "react";
import { FcSearch } from "react-icons/fc";
import PropTypes from 'prop-types';
import {
  SearchbarWrp,
  SearchForm,
  SearchInput,
  SearchButton,
  SearchSpan,
} from './Searchdar.styled.jsx';

const SearchBar = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState(''); // значення введеного пошукового запиту
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => setInputValue(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchName(inputValue.trim()); // отримання пошукового запиту видалення пробілів
    onSubmit(searchName); // передача запиту батьківському компоненту
    event.target.reset(); //збирання значення в полі введення
  };

  return (
    <SearchbarWrp>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <FcSearch width={90} height={90} />
          <SearchSpan>Search</SearchSpan>
        </SearchButton>
        <SearchInput
          name="searchName"
          type="text"
          id="search"
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </SearchForm>
    </SearchbarWrp>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;






// class Searchdar extends Component {
//   state = {
//     searchName: '', // значення введеного пошукового запиту
//     inputValue: '',
//   };

//   handleChange = event => {
//     this.setState({ inputValue: event.target.value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const searchQuery = event.target.elements.searchName.value.trim(); // отримання пошукового запиту видалення пробілів
//     this.props.onSubmit(searchQuery); // передача запиту батьківському компоненту
//     event.currentTarget.reset(); //збирання значення в полі введення
//   };

//   render() {
//     return (
//       <SearchbarWrp>
//         <SearchForm onSubmit={this.handleSubmit}>
//           <SearchButton type="submit">
//             <FcSearch width={90} height={90} />
//             <SearchSpan>Search</SearchSpan>
//           </SearchButton>
//           <SearchInput
//             name="searchName"
//             type="text"
//             // autocomplete="off"
//             id="search"
//             placeholder="Search images and photos"
//             onChange={this.handleChange}
//           />
//         </SearchForm>
//       </SearchbarWrp>
//     );
//   }
// }

// Searchdar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default Searchdar;
