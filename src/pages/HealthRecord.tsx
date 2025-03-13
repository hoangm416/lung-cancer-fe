import { useState, useMemo } from 'react';
import { createColumnHelper, type ColumnDef } from '@tanstack/react-table';
// import { useTranslation } from 'react-i18next';
import { BaseTable } from '@/components/BaseTable';
import { useGetRecords } from '@/api/LungRecordApi'; 

const HealthRecord = () => {
    // const { t } = useTranslation();
    const [offset, setOffset] = useState<number>(0);
    const { records, isLoading } = useGetRecords(); // Sử dụng hook để lấy dữ liệu

    console.log("Records", records);
    const [rowSelection, setRowSelection] = useState({});
    const rowSelectionKey = Object.keys(rowSelection);

    const columnHelper = createColumnHelper<any>();
    const columns = useMemo<ColumnDef<any, any>[]>(
    () => [
      columnHelper.display({
        id: 'stt',
        cell: info => info.row.index + 1,
        header: () => <span>STT</span>,
        footer: info => info.column.id,
      }),
      columnHelper.accessor(row => row["Patient ID"], {
        id: 'patient_id',
        header: () => <span>Patient ID</span>,
        cell: info => info.getValue() ?? 'N/A',
        footer: info => info.column.id,
      }),
      columnHelper.accessor(row => row["Diagnosis Age"], {
        id: 'diagnosis_age',
        header: () => <span>Diagnosis Age</span>,
        cell: info => info.getValue() ?? 'N/A',
        footer: info => info.column.id,
      }),
      columnHelper.accessor(row => row["Cancer Type"], {
        id: 'cancer_type',
        header: () => <span>Cancer Type</span>,
        cell: info => info.getValue() ?? 'N/A',
        footer: info => info.column.id,
      }),
      columnHelper.accessor(row => row["Primary Diagnosis"], {
        id: 'primary_diagnosis',
        header: () => <span>Primary Diagnosis</span>,
        cell: info => info.getValue() ?? 'N/A',
        footer: info => info.column.id,
      }),
      columnHelper.accessor(row => row["AJCC Pathologic Stage"], {
        id: 'ajcc_stage',
        header: () => <span>AJCC Stage</span>,
        cell: info => info.getValue() ?? 'N/A',
        footer: info => info.column.id,
      }),
      columnHelper.accessor(row => row["Biopsy Site"], {
        id: 'biopsy_site',
        header: () => <span>Biopsy Site</span>,
        cell: info => info.getValue() ?? 'N/A',
        footer: info => info.column.id,
      }),
      columnHelper.accessor(row => row["Mutation Count"], {
        id: 'mutation_count',
        header: () => <span>Mutation Count</span>,
        cell: info => info.getValue() ?? 'N/A',
        footer: info => info.column.id,
      }),
      columnHelper.accessor(row => row["Overall Survival (Months)"], {
        id: 'survival_months',
        header: () => <span>Overall Survival (Months)</span>,
        cell: info => info.getValue() ?? 'N/A',
        footer: info => info.column.id,
      }),
      columnHelper.accessor(row => row["Patient's Vital Status"], {
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
          data={records}
          columns={columns}
          rowSelection={rowSelection}
          setRowSelection={setRowSelection}
          offset={offset}
          setOffset={setOffset}
          isPreviousData={false}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default HealthRecord;