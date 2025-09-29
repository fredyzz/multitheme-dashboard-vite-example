import { DataTable } from './components/data-table';

import data from './mocks/data-table-data.mock.json';

export function TableScreen() {
  return (
    <div className="flex min-h-svh flex-col p-4 gap-8">
      <h1>Table</h1>
      <DataTable data={data} />
    </div>
  );
}
