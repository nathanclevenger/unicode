export default {
  fetch: async (req, ctx) => {
    const data = fetch('https://unicode.org/Public/UNIDATA/UnicodeData.txt').then(res => res.json())
    const rows = data.split('\n')
    const categories = rows.reduce((acc, row) => {
      const [ value, nam, category, className, bidirectionalCategory, mapping, decimalDigitValue, digitValue, 
              numericValue, mirrored, unicodeName, comment, uppercaseMapping, lowercaseMapping, titlecaseMapping] = row.split(';')
      const symbol = decodeURIComponent('%' + value)
      return {...acc, [category]: { symbol, value, nam, category, className, bidirectionalCategory, mapping, decimalDigitValue, digitValue, 
                                    numericValue, mirrored, unicodeName, comment, uppercaseMapping, lowercaseMapping, titlecaseMapping }}
    }, {})
    return new Response(JSON.stringify({categories}, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
}
