import axios from 'axios';
import cheerio from 'react-native-cheerio';
import URL from 'url';

const BASE_URL = 'https://www.3-damja.com';

export type MenuItem = {
  title: string;
  link: string;
  subItems?: Array<{
    title: string;
    link: string;
  }>;
}

export type DescriptionItem = {
  title: string;
  content: string;
}

export type AppData = {
  menuItems: Array<MenuItem>;
  descriptionItems: Array<DescriptionItem>;
  sliderImageUrls: Array<string>
}

const getMenuItems = ($: any): Array<MenuItem> => {
  const items = $('#menu-3-damja-websayty > li').toArray();

  const result = items.map((item: any) => {
    const anchor = $(item).find('> a');

    return {
      title: $(anchor).text(),
      link: URL.resolve(BASE_URL, $(anchor).attr('href')),
      subItems: $(item).find('ul li').toArray().map((subItem: any) => {
        const subItemAnchor = $(subItem).find('> a');
        return {
          title: $(subItemAnchor).text(),
          link: URL.resolve(BASE_URL, $(subItemAnchor).attr('href')),
        }
      }),
    };
  });

  return result;
};

const getDescriptionItems = ($: any): Array<DescriptionItem> => {
  const items = $('.smue-code-obj').toArray();

  const result = items.map((item: any) => ({
    title: $(item).find('h5').text(),
    content: $(item).find('h6').text(),
  }));

  return result;
}

const getSliderImageUrls = ($: any): Array<string> => {
  const firstSlider = $('.smue-image-slider-obj').toArray()[0];

  const images = $(firstSlider).find('li img').toArray();
  const imageUrls = images.map((img: any) => {
    const url = URL.resolve(BASE_URL, $(img).attr('src'));
    return url;
  });

  return imageUrls;
}

export const getAppData = async (): Promise<AppData> => {
  const html = await axios
    .get(`${BASE_URL}/sargyt.html`)
    .then((res) => res.data)

  const $ = cheerio.load(html);

  return {
    menuItems: getMenuItems($),
    descriptionItems: getDescriptionItems($),
    sliderImageUrls: getSliderImageUrls($),
  };
};
