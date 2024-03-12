import { useNavigate } from "react-router-dom";

export default function useQueryParamsManager() {
  const navigate = useNavigate();

  const updateQueryParams = (queryParams: Record<string, string>, removeKeys: string[] = []) => {
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;

    // Update existing query parameters
    const existingParams = new URLSearchParams(currentSearch);
    Object.entries(queryParams).forEach(([key, value]) => {
      existingParams.set(key, value);
    });

    // Remove specified query parameters
    removeKeys.forEach((key) => {
      existingParams.delete(key);
    });

    // Build the new query string
    const newQueryString = existingParams.toString();

    // Navigate to the updated URL with the new query string
    navigate(currentPath + (newQueryString ? `?${newQueryString}` : ''));
  };

  return updateQueryParams;
}