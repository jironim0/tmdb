import { useState } from "react";
import { useNavigate } from "react-router";

export function useSearchNavigation(initialValue: string = "") {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(initialValue);
  
  const handleSearch = () => {
    if (inputValue.trim()) {
      navigate(`/search?value=${encodeURIComponent(inputValue.trim())}&page=1`);
    }
  };

  return {
    inputValue,
    setInputValue,
    handleSearch,
  };
}