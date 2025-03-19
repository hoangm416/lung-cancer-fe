import { useState, useMemo } from 'react';
import { createColumnHelper, type ColumnDef } from '@tanstack/react-table';
// import { useTranslation } from 'react-i18next';
import { BaseTable } from '@/components/BaseTable';
import { useGetRecords } from '@/api/LungRecordApi'; 
// import { Record } from '@/types';

const HealthRecord = () => {
    // const { t } = useTranslation();
    const [offset, setOffset] = useState<number>(0);
    const { records, isLoading } = useGetRecords(); // Sử dụng hook để lấy dữ liệu

    console.log("Records", records);
    
    const [rowSelection, setRowSelection] = useState({});
    const rowSelectionKey = Object.keys(rowSelection);

    const formatExcel = records.reduce(
      (acc, curr, index) => {
        const isSelected =
        rowSelectionKey.length > 0
          ? rowSelectionKey.includes(index.toString()) : true;
          
        if (isSelected) {
          const temp = {
            "STT": index + 1,
            "Mã bệnh nhân": curr.Patient_ID,
            "Mã mẫu bệnh phẩm": curr.Sample_ID,
            "Tuổi chẩn đoán": curr.Diagnosis_Age,
            "Giới tính": curr.Sex,
            "Loại ung thư": curr.Cancer_Type,
            "Giai đoạn ung thư (AJCC)": curr.AJCC_Pathologic_Stage,
            "Vị trí sinh thiết": curr.Biopsy_Site,
            "M-TNM": curr.AJCC_Pathologic_M_Stage,
            "N-TNM": curr.AJCC_Pathologic_N_Stage,
            "T-TNM": curr.AJCC_Pathologic_T_Stage,
            "Mã ICD-10": curr.ICD_10_Classification,
            "Loại mô bệnh học": curr.Primary_Diagnosis,
            "Tỷ lệ bộ gen bị biến đổi": curr.Fraction_Genome_Altered,
            "Số lượng đột biến": curr.Mutation_Count,
            "Tình trạng bệnh nhân": curr.Patients_Vital_Status,
            "Số tháng sống sót": curr.Overall_Survival_Months,
            "Tiền sử ung thư trước đó": curr.Prior_Malignancy,
            "Tiền sử điều trị trước đó": curr.Prior_Treatment,
            "Số năm hút thuốc": curr.Years_Smoked,
            "Số gói thuốc/năm": curr.Person_Cigarette_Smoking_History_Pack_Year_Value,
            "Năm chẩn đoán": curr.Year_of_Diagnosis,
          }
          acc.push(temp)
        }
        return acc
      },
      [] as Array<{ [key: string]: unknown }>,
    )
  

    const columnHelper = createColumnHelper<any>();
    const columns = useMemo<ColumnDef<any, any>[]>(
    () => [
      columnHelper.display({
        id: 'stt',
        cell: info => info.row.index + 1,
        header: () => <span>STT</span>,
        footer: info => info.column.id,
      }),
      columnHelper.accessor('Patient_ID', {
        id: 'patient_id',
        header: () => <span>Patient ID</span>,
        cell: info => info.getValue() ?? 'N/A',
        footer: info => info.column.id,
      }),
      columnHelper.accessor('Sample_ID', {
        id: 'sample_id',
        header: () => <span>Sample ID</span>,
        cell: info => info.getValue() ?? 'N/A',
        footer: info => info.column.id,
      }),
      columnHelper.accessor('Diagnosis_Age', {
        id: 'diagnosis_age',
        header: () => <span>Diagnosis Age</span>,
        cell: info => info.getValue() ?? 'N/A',
        footer: info => info.column.id,
      }),
      columnHelper.accessor('Cancer_Type', {
        id: 'cancer_type',
        header: () => <span>Cancer Type</span>,
        cell: info => info.getValue() ?? 'N/A',
        footer: info => info.column.id,
      }),
      columnHelper.accessor('Primary_Diagnosis', {
        id: 'primary_diagnosis',
        header: () => <span>Primary Diagnosis</span>,
        cell: info => info.getValue() ?? 'N/A',
        footer: info => info.column.id,
      }),
      columnHelper.accessor('AJCC_Pathologic_Stage', {
        id: 'ajcc_stage',
        header: () => <span>AJCC Stage</span>,
        cell: info => info.getValue() ?? 'N/A',
        footer: info => info.column.id,
      }),
      columnHelper.accessor('Biopsy_Site', {
        id: 'biopsy_site',
        header: () => <span>Biopsy Site</span>,
        cell: info => info.getValue() ?? 'N/A',
        footer: info => info.column.id,
      }),
      columnHelper.accessor('Mutation_Count', {
        id: 'mutation_count',
        header: () => <span>Mutation Count</span>,
        cell: info => info.getValue() ?? 'N/A',
        footer: info => info.column.id,
      }),
      columnHelper.accessor('Overall_Survival_Months', {
        id: 'survival_months',
        header: () => <span>Overall Survival (Months)</span>,
        cell: info => info.getValue() ?? 'N/A',
        footer: info => info.column.id,
      }),
      columnHelper.accessor('Patients_Vital_Status', {
        id: 'vital_status',
        header: () => <span>Vital Status</span>,
        cell: info => info.getValue() ?? 'N/A',
        footer: info => info.column.id,
      }),
    ],
    [columnHelper],
  );
    
  return (
    <div>
      Bản ghi dữ liệu ung thư phổi
      <div className="mt-5 w-full">
        <BaseTable
          data={records ?? []}
          columns={columns}
          rowSelection={rowSelection}
          setRowSelection={setRowSelection}
          offset={offset}
          setOffset={setOffset}
          isPreviousData={false}
          isLoading={isLoading}
          formatExcel={formatExcel}
        />
      </div>
    </div>
  );
};

export default HealthRecord;