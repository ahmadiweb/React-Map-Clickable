import wiki from 'wikipedia'
async function fetchData(country) {
    const page = await wiki.page(country);
    const data = await page.summary();
    const info = await page.infobox()
    const body = await page.intro()
    return data, info, body
}
export default fetchData;