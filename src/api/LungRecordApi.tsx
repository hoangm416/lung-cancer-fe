import { useQuery } from "react-query";
import { Record } from "@/types"; 

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetRecords = () => {
  // Định nghĩa kiểu trả về của hàm getRecordsRequest
  const getRecordsRequest = async (): Promise<Record[]> => {
    const response = await fetch(`${API_BASE_URL}/api/record`);

    if (!response.ok) {
      throw new Error("Lấy thông tin thất bại");
    }

    const result = await response.json();
    return result.data; // Trả về mảng Record[]
  };

  // Sử dụng kiểu dữ liệu cho records
  const { data: records = [], isLoading } = useQuery<Record[]>(
    "fetchRecords",
    getRecordsRequest
  );

  return { records, isLoading };
};