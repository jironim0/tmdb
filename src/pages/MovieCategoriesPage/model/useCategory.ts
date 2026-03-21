import { useState } from "react";
import { useParams, useSearchParams } from "react-router";


export const useCategory = () => {
    const { queryCategory } = useParams();
    const [searchParams] = useSearchParams({ page: "1" });

    const [currentCategory, setCurrentCategory] = useState(() => {
        if (queryCategory) return queryCategory;
        return "popular";
      });

    const queryParams = {
        category: currentCategory,
        page: Number(searchParams.get("page")) || 1,
    }

    return {
        currentCategory,
        setCurrentCategory,
        queryParams
    }
}