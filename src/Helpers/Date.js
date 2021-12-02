export const FormatDate = (d, format) => {
    if (!d) return '';
    if (!format) format = 'DD/MM/YYYY';

    let date = new Date(d);

    format = format.replace(/YYYY/g, date.getFullYear());
    format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
    format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));
    return format;
}
