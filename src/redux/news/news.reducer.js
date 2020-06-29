import NewsActionTypes from "./news.types";

const INITIAL_STATE = {
  collections: [
    {
    "source": {
    "id": null,
    "name": "Sputnik International"
    },
    "author": null,
    "title": "Russian National Sergey Medvedev Pleads Guilty for Involvement in Cybercrime Organisation",
    "description": "Medvedev was detained in Thailand in 2018 upon the request of the FBI on the grounds that the security service suspects him of hacking activities and the use of cryptocurrencies, such as Bitcoin, for illegal trade.",
    "url": "https://sputniknews.com/world/202006261079731849-russian-national-sergey-medvedev-pleads-guilty-for-involvement-in-cybercrime-organisation/",
    "urlToImage": "https://cdn1.img.sputniknews.com/images/105409/31/1054093190.jpg",
    "publishedAt": "2020-06-26T21:41:41Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "Memeorandum.com"
    },
    "author": null,
    "title": "Feds Point to Daily Caller Writer as Part of Abramoff Payola Scheme (Will Sommer/The Daily Beast)",
    "description": "Will Sommer / The Daily Beast:\nFeds Point to Daily Caller Writer as Part of Abramoff Payola Scheme  —  Derek Hunter says he wasn't paid by the disgraced lobbyist to plug his bitcoin project.  But the SEC cites his article, among others, in their complaint.  —…",
    "url": "https://www.memeorandum.com/200626/p118",
    "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_675,w_1200,x_0,y_0/dpr_2.0/c_limit,w_600/f_jpg/fl_lossy,q_auto/v1593200968/200626-Sommer-Jack-Abramoff-tease_dmmpxl",
    "publishedAt": "2020-06-26T21:15:02Z",
    "content": "memeorandum is an auto-generated summary of the stories that US political commentators are discussing online right now.\r\nUnlike sister sites Techmeme and Mediagazer, it is not a human-edited news out… [+72 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "newsBTC"
    },
    "author": "Tony Spilotro",
    "title": "This Trend Measuring Tool Says Bitcoin Drop Is Only Just Getting Started",
    "description": "After a series of higher lows above the current support level, Bitcoin looked primed for a move higher. However, a recent drop setting a lower low on daily timeframes has potentially started a short-term downtrend. And according to a trend measuring tool, thi…",
    "url": "https://www.newsbtc.com/2020/06/26/bitcoin-average-directional-index-trend/",
    "urlToImage": "https://www.newsbtc.com/wp-content/uploads/2020/06/bitcoin-trend-measuring-tool-shutterstock_288081992-860x571.jpg",
    "publishedAt": "2020-06-26T21:00:18Z",
    "content": "After a series of higher lows above the current support level, Bitcoin looked primed for a move higher. However, a recent drop setting a lower low on daily timeframes has potentially started a short-… [+2855 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Raw Story"
    },
    "author": "Sky Palma",
    "title": "Senate Republicans revive investigation of Hunter Biden: report",
    "description": "According to a report from POLITICO, a Senate committee is targeting former Obama administration officials once again in an investigation targeting Joe Biden’s son, demanding transcribed interviews and documents. “The renewed scrutiny from the Senate Homeland…",
    "url": "https://www.rawstory.com/2020/06/senate-republicans-revive-investigation-of-hunter-biden-report/",
    "urlToImage": "https://www.rawstory.com/wp-content/uploads/2020/05/Joe-Biden-1.png",
    "publishedAt": "2020-06-26T20:57:12Z",
    "content": "According to a report from The Daily Beast, when former Washington lobbyist Jack Abramoff was charged with an illicit conspiracy to promote a cryptocurrency this Thursday, they included the accusatio… [+728 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Raw Story"
    },
    "author": "Sky Palma",
    "title": "Jack Abramoff’s latest crime has entangled writer at the right-wing website The Daily Caller: report",
    "description": "According to a report from The Daily Beast, when former Washington lobbyist Jack Abramoff was charged with an illicit conspiracy to promote a cryptocurrency this Thursday, they included the accusation that he had hired writers to help him with his scheme. Whi…",
    "url": "https://www.rawstory.com/2020/06/jack-abramoffs-latest-crime-has-entangled-writer-at-the-right-wing-website-the-daily-caller-report/",
    "urlToImage": "https://www.rawstory.com/wp-content/uploads/2017/01/Jack-Abramoff-Facebook.png",
    "publishedAt": "2020-06-26T20:40:11Z",
    "content": "According to a report from The Daily Beast, when former Washington lobbyist Jack Abramoff was charged with an illicit conspiracy to promote a cryptocurrency this Thursday, they included the accusatio… [+3323 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Zack Voell",
    "title": "Market Wrap: Bitcoin Still Stuck in a Rut, Trading Below $10K",
    "description": "Traditional markets slide as coronavirus cases spike, and crypto follows because its correlation is still unbroken.",
    "url": "https://finance.yahoo.com/news/market-wrap-bitcoin-still-stuck-203838314.html",
    "urlToImage": "https://s.yimg.com/uu/api/res/1.2/EHuNfYYXUUilpJ5aZt5FDw--~B/aD0xMDI0O3c9MTUzNjtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-US/coindesk_75/906b88c8c332472ee8b8d5ad9682fbfb",
    "publishedAt": "2020-06-26T20:38:38Z",
    "content": "After the largest options expiry in history, bitcoin ended its fifth week of bouncing around the $9,000s price range.\r\nBitcoin (BTC) was trading around $9,180 as of 20:00 UTC (4 p.m. ET), slipping al… [+4365 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CoinDesk"
    },
    "author": "Zack Voell",
    "title": "Market Wrap: Bitcoin Still Stuck in a Rut, Trading Below $10K",
    "description": "Traditional markets slide as coronavirus cases spike, and crypto follows because its correlation is still unbroken.",
    "url": "https://www.coindesk.com/market-wrap-bitcoin-still-stuck-in-a-rut-trading-below-10k",
    "urlToImage": "https://static.coindesk.com/wp-content/uploads/2020/06/10921926126_1c15b89202_h.jpg",
    "publishedAt": "2020-06-26T20:38:38Z",
    "content": "After the largest options expiry in history, bitcoin ended its fifth week of bouncing around the $9,000s price range.\r\nBitcoin (BTC) was trading around $9,180 as of 20:00 UTC (4 p.m. ET), slipping al… [+4493 chars]"
    }],
  isFetching: false,
  errMessage: undefined,
  pageUrl: {
    category: "",
    country: "ua",
  },
};


const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NewsActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case NewsActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false
      };
    case NewsActionTypes.SET_PAGE_URL:
      return {
        ...state,
        pageUrl: { ...state.pageUrl, ...action.payload }
      };
    case NewsActionTypes.SET_COUNTRY:
      return {
        ...state,
        pageUrl: { ...state.pageUrl, ...action.payload }
      };
    case NewsActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errMessage: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default newsReducer;
