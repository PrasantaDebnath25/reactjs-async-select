import { useState } from "react";
import AsyncSelect from "react-select";

const SearchCasesInput = (props) => {
  const {
    caseListForSelect,
    selectCases,
    selectedCases,
    loadMoreCases,
    searchCases,
  } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (data) => {
    data= [data]
    const seeMore = data[data.length - 1];
    
    if (data.length > 0 && !seeMore?.id) {
      loadMoreCases();
      setIsMenuOpen(true);
    } else {
      selectCases(data);
    }
  };

  return (
    <AsyncSelect
      id="cases"
      
      isClearable={true}
      isLoading={false}
      isSearchable={true}
      options={caseListForSelect}
      onChange={handleChange}
      onInputChange={(value) => searchCases(value)}
      placeholder="Select Single Case..."
      value={selectedCases}
      menuIsOpen={isMenuOpen}
      onFocus={() => setIsMenuOpen(true)}
      onBlur={() => setIsMenuOpen(false)}
    />
  );
};

export default SearchCasesInput;
