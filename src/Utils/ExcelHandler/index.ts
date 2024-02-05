import ExcelJS from "exceljs";

export class ExcelHandler {
  constructor() {}

  async execute<T>(fileData: Buffer): Promise<T[]> {
    try {
      const workbook = new ExcelJS.Workbook();
      const columnNames = [];
      const data = [];
      await workbook.xlsx.load(fileData).then((workbook) => {
        const worksheet = workbook.getWorksheet(1);

        const headerRow = worksheet.getRow(3);

        headerRow.eachCell((cell) => {
          columnNames.push(cell.value);
        });

        for (let rowNum = 4; rowNum <= worksheet.rowCount; rowNum++) {
          const row = worksheet.getRow(rowNum);
          const rowData = {};

          headerRow.eachCell((headerCell, colNum) => {
            const columnName = columnNames[colNum - 1];
            rowData[columnName] = row.getCell(colNum).value;
          });

          data.push(rowData);
        }
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
