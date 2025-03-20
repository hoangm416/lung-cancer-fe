import { Button } from '@/components/ui/button';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { LucideMoveLeft } from 'lucide-react';

const RecordDetail = () => {
  const { sample_id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const record = location.state?.record;

  return (
    <div>
      <Button
        className="flex items-center gap-2 rounded-md leading-none"
        variant="ghost"
        size="default"
        onClick={() =>
          navigate('/record')
        }
      >
        <LucideMoveLeft className="h-6 w-8" />
        <span className="align-middle">Trở về</span>
      </Button>

      <div className="w-30 mt-4 grid grid-cols-2 gap-7 p-4">
        <div className=" col-span-1 border-2">
          <p className=" bg-[#F2F1F1] px-2 py-2 text-lg font-semibold">
            Thông tin chi tiết
          </p>
          <div className="my-auto mt-3 grid grid-cols-2 grid-rows-8 px-2 text-base font-normal">
            <span className="mb-5 py-1.5">
              Mã bệnh nhân
            </span>
            <span className="py-1.5 text-right">{record.Patient_ID}</span>
            <span className="py-1.5">
              Mã mẫu bệnh phẩm
            </span>
            <span className="py-1.5 text-right">
              {sample_id}
            </span>
            <span className="py-1.5">
              Tuổi chẩn đoán
            </span>
            <span className="break-all py-1.5 text-right">
              {record.Diagnosis_Age}
            </span>
            <span className="py-1.5">
              Giới tính
            </span>
            <span className="py-1.5 text-right">
              {record.Sex}
            </span>
            <span className="py-1.5">
              Loại ung thư
            </span>
            <span className="py-1.5 text-right">
              {record.Cancer_Type}
            </span>
            <span className="py-1.5">
              Giai đoạn ung thư
            </span>
            <span className="py-1.5 text-right">
              {record.AJCC_Pathologic_Stage}
            </span>
            <span className="py-1.5">
              Vị trí sinh thiết
            </span>
            <span className="py-1.5 text-right">
              {record.Biopsy_Site}
            </span>
            <span className="py-1.5">
              Mã ICD-10
            </span>
            <p className="break-all py-1.5 text-right">
              {record.ICD_10_Classification}
            </p>
            <span className="py-1.5">
              Loại mô bệnh học
            </span>
            <span className=" break-all py-1.5 text-right">
              {record.Primary_Diagnosis}
            </span>
          </div>
        </div>

        <div className=" col-span-1 border-2">
          <p className=" bg-[#F2F1F1] px-2 py-2 text-lg font-semibold">
            Thông tin chi tiết
          </p>
          <div className="my-auto mt-3 grid grid-cols-2 grid-rows-8 px-2 text-base font-normal">
            <span className="mb-5 py-1.5">
              M-TNM
            </span>
            <span className="py-1.5 text-right">
              {record.AJCC_Pathologic_M_Stage}
            </span>
            <span className="py-1.5">
              N-TNM
            </span>
            <span className="py-1.5 text-right">
              {record.AJCC_Pathologic_N_Stage}
            </span>
            <span className="py-1.5">
              T-TNM
            </span>
            <span className="py-1.5 text-right">
              {record.AJCC_Pathologic_T_Stage}
            </span>
            <span className="py-1.5">
              Tỷ lệ bộ gen bị biến đổi
            </span>
            <span className="py-1.5 text-right">
              {record.Fraction_Genome_Altered}
            </span>
            <span className="py-1.5">
              Số lượng đột biến
            </span>
            <span className="py-1.5 text-right">
              {record.Mutation_Count}
            </span>
            <span className="py-1.5">
              Tình trạng bệnh nhân
            </span>
            <span className="py-1.5 text-right">
              {record.Patients_Vital_Status}
            </span>
            <span className="py-1.5">
              Số tháng sống sót
            </span>
            <span className="py-1.5 text-right">
              {record.Overall_Survival_Months}
            </span>
            <span className="py-1.5">
              Tiền sử ung thư trước đó
            </span>
            <span className="py-1.5 text-right">
              {record.Prior_Malignancy}
            </span>
            <span className="py-1.5">
              Tiền sử điều trị trước đó
            </span>
            <span className="py-1.5 text-right">
              {record.Prior_Treatment}
            </span>
            <span className="py-1.5">
              Năm chẩn đoán
            </span>
            <span className="py-1.5 text-right">
              {record.Year_of_Diagnosis}
            </span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordDetail;
