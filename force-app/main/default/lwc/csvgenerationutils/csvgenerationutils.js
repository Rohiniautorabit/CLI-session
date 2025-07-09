export default function exportcsvfile(headers, totalData, fileTitle) {
    if (!totalData || totalData.length === 0) {
        console.error("No data to export");
        return;
    }

    const csv = convertToCSV(totalData, headers);
    const filename = fileTitle ? `${fileTitle}.csv` : 'export.csv';
    const BOM = '\uFEFF'; // Excel-compatible UTF-8 BOM

    const blob = new Blob([BOM + csv], { type: 'text/csv;charset=utf-8;' });

    // Handle IE 11
    if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, filename);
    } 
    // iOS Safari fallback
    else if (navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('iPad')) {
       const csvData = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
        const link = document.createElement('a');
        link.href = csvData;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    // Standard modern browsers
    else {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    

}
function convertToCSV(dataArray, headers) {
    const columnDelimiter = ',';
    const lineDelimiter = '\r\n';
    const keys = Object.keys(headers);
    const headerRow = Object.values(headers).join(columnDelimiter);

    let csvString = headerRow + lineDelimiter;

    dataArray.forEach(record => {
        let row = keys.map(key => {
            let value = record[key] || '';
            return `"${String(value).replace(/"/g, '""')}"`; // Escape quotes
        }).join(columnDelimiter);
        csvString += row + lineDelimiter;
    });

    return csvString;
}