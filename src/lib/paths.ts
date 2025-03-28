const api = {};

const app = {
  public: {
    root: {
      label: "Home",
      url: "/",
    },
    best: {
      label: "Best Selling",
      url: "/best",
    },
    products: {
      label: "Products",
      url: "/products",
    },
    events: {
      label: "Events",
      url: "/events",
    },
    faq: {
      label: "FAQ",
      url: "/faq",
    },
  },
};

export const paths = {
  api,
  app,
};
