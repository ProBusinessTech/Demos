const environment = process.env.ELEVENTY_ENV;
const PROD_ENV = 'prod';
const baseUrl = 'https://probusinesstech.com';
const prodUrl = 'https://demos.probusinesstech.com';
const devUrl = 'http://localhost:8080';
const currUrl = environment === PROD_ENV ? prodUrl : devUrl;
const isProd = environment === PROD_ENV;

const folder = {
  assets: 'assets',
  input: 'src',
  output: 'dist'
};

const dir = {
  img: `/${folder.assets}/images/`,
  favicons: `/${folder.assets}/images/favicon/`,
  css: `/${folder.assets}/styles/`,
  icons: `/${folder.assets}/images/icons/`,
}

module.exports = {
  siteName: 'ProBusinessTech-Demos',
  themeColor: '#000000',
  author: 'David Walker',
  environment,
  isProd,
  folder,
  base: {
    site: currUrl,
    url: baseUrl,
    img: `${currUrl}${dir.img}`,
    favicons: `${currUrl}${dir.favicons}`,
    css: `${currUrl}${dir.css}`,
    icons: `${currUrl}${dir.icons}`,        
  },
  flags: {
    prism:0,
  },
  tracking: {
    gtag: 'UA-91383659-1'
  }
};
