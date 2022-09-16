export default {
  fetch: async (req, ctx) => {
    const data = fetch('https://unicode.org/Public/UNIDATA/UnicodeData.txt').then(res => res.json())
    const rows = data.split('\n')
    const [ value, nam, category, className, bidirectionalCategory, mapping, decimalDigitValue, digitValue, 
            numericValue, mirrored, unicodeName, comment, uppercaseMapping, lowercaseMapping, titlecaseMapping] = rows.split(';')
    
}
