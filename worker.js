export default {
  fetch: async (req, env) => {
    const { data } = env.CSV.fetch('https://csv.do/delimiter=;&fields=value,name,category,className,bidirectionalCategory,mapping,decimalDigitValue,digitValue,numericValue,mirrored,unicodeName,comment,uppercaseMapping,lowercaseMapping,titlecaseMapping/unicode.org/Public/UNIDATA/UnicodeData.txt').then(res => res.json())
    const symbols = data.map(row => ({symbol: String.fromCharCode(parseInt(row.value,16)),...row}))
    return new Response(JSON.stringify({symbols}, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
  }
}
