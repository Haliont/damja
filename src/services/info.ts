import axios from 'axios';
import cheerio from 'react-native-cheerio';
import URL from 'url';

const getMenuInfo = ($: any) => {
  const origin = 'https://www.3-damja.com';
  const items = $('#menu-3-damja-websayty > li').toArray();

  const result = items.map((item: any) => {
    const anchor = $(item).find('> a');

    return {
      title: $(anchor).text(),
      link: URL.resolve(origin, $(anchor).attr('href')),
      subItems: $(item).find('ul li').toArray().map((subItem: any) => {
        const subItemAnchor = $(subItem).find('> a');
        return {
          title: $(subItemAnchor).text(),
          link: URL.resolve(origin, $(subItemAnchor).attr('href')),
        }
      }),
    };
  });

  return result;
};

export const getSiteInfo = async () => {
  const html = await axios
    .get('https://www.3-damja.com/sargyt.html')
    .then((res) => res.data)

  const $ = cheerio.load(html);

  return {
    menuInfo: getMenuInfo($),
  };
};
