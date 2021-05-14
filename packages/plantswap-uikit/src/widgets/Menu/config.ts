import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.plantswap.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.plantswap.finance/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Garden",
    icon: "PoolIcon",
    href: "/gardens",
    status: status.LIVE,
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Project",
    icon: "ProjectIcon",
    href: "/project",
  },
  {
    label: "Gouvernance",
    icon: "VoteIcon",
    href: "/vote",
    status: status.NEW,
  },
  {
    label: "Roadmap",
    icon: "RoadmapIcon",
    href: "/roadmap",
    status: status.NEW,
  },
  {
    label: "Beta dev.",
    icon: "BetaIcon",
    items: [
        {
          label: "Beta 1",
          href: "/Beta1",
        },
        {
          label: "Beta 2",
          href: "/Beta2",
        },
        {
          label: "Beta 3",
          href: "/Beta3",
        },
        {
          label: "Beta 4",
          href: "/Beta4",
        },
        {
          label: "Beta 5",
          href: "/Beta5",
        },
      ],
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://plantswap.info",
      },
      {
        label: "Tokens",
        href: "https://plantswap.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://plantswap.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://plantswap.info/accounts",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Github",
        href: "https://github.com/plantswapfinance",
      },
      {
        label: "Docs",
        href: "https://docs.plantswap.finance",
      },
      {
        label: "Blog",
        href: "https://plantswapfinance.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/plantswapfinance",
      },
      {
        label: "Accouncement - En",
        href: "https://t.me/plantswapfinance_announcement",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/plantswapdefi",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
