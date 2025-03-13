import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetRecords = () => {
  const getRecordsRequest = async () => {
    const response = await fetch(`${API_BASE_URL}/api/record`);

    if (!response.ok) {
      throw new Error("Lấy thông tin thất bại");
    }

    return response.json();
  };

  const { data: records, isLoading } = useQuery("fetchRecords", getRecordsRequest);

  return { records, isLoading };
};