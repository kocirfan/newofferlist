var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest,
  streamTimeout: () => streamTimeout
});
var import_stream = require("stream"), import_server2 = require("react-dom/server"), import_react = require("@remix-run/react"), import_node2 = require("@remix-run/node"), import_isbot = require("isbot");

// app/shopify.server.js
var import_node = require("@shopify/shopify-app-remix/adapters/node"), import_server = require("@shopify/shopify-app-remix/server"), import_shopify_app_session_storage_prisma = require("@shopify/shopify-app-session-storage-prisma");

// app/db.server.js
var import_client = require("@prisma/client"), prisma = global.prismaGlobal ?? new import_client.PrismaClient(), db_server_default = prisma;

// app/shopify.server.js
var shopify = (0, import_server.shopifyApp)({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  apiVersion: import_server.ApiVersion.January25,
  scopes: process.env.SCOPES?.split(","),
  appUrl: process.env.SHOPIFY_APP_URL || "",
  authPathPrefix: "/auth",
  sessionStorage: new import_shopify_app_session_storage_prisma.PrismaSessionStorage(db_server_default),
  distribution: import_server.AppDistribution.AppStore,
  future: {
    unstable_newEmbeddedAuthStrategy: !0,
    removeRest: !0
  },
  ...process.env.SHOP_CUSTOM_DOMAIN ? { customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN] } : {}
});
var apiVersion = import_server.ApiVersion.January25, addDocumentResponseHeaders = shopify.addDocumentResponseHeaders, authenticate = shopify.authenticate, unauthenticated = shopify.unauthenticated, login = shopify.login, registerWebhooks = shopify.registerWebhooks, sessionStorage = shopify.sessionStorage;

// app/entry.server.jsx
var import_jsx_runtime = require("react/jsx-runtime"), streamTimeout = 5e3;
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  addDocumentResponseHeaders(request, responseHeaders);
  let userAgent = request.headers.get("user-agent"), callbackName = (0, import_isbot.isbot)(userAgent ?? "") ? "onAllReady" : "onShellReady";
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server2.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
      {
        [callbackName]: () => {
          let body = new import_stream.PassThrough(), stream = (0, import_node2.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App
});
var import_react2 = require("@remix-run/react"), import_jsx_runtime2 = require("react/jsx-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("link", { rel: "preconnect", href: "https://cdn.shopify.com/" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "link",
        {
          rel: "stylesheet",
          href: "https://cdn.shopify.com/static/fonts/inter/v4/styles.css"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {})
    ] })
  ] });
}

// app/routes/webhooks.app.scopes_update.jsx
var webhooks_app_scopes_update_exports = {};
__export(webhooks_app_scopes_update_exports, {
  action: () => action
});
var action = async ({ request }) => {
  let { payload, session, topic, shop } = await authenticate.webhook(request);
  console.log(`Received ${topic} webhook for ${shop}`);
  let current = payload.current;
  return session && await db_server_default.session.update({
    where: {
      id: session.id
    },
    data: {
      scope: current.toString()
    }
  }), new Response();
};

// app/routes/webhooks.app.uninstalled.jsx
var webhooks_app_uninstalled_exports = {};
__export(webhooks_app_uninstalled_exports, {
  action: () => action2
});
var action2 = async ({ request }) => {
  let { shop, session, topic } = await authenticate.webhook(request);
  return console.log(`Received ${topic} webhook for ${shop}`), session && await db_server_default.session.deleteMany({ where: { shop } }), new Response();
};

// app/routes/app.additional.jsx
var app_additional_exports = {};
__export(app_additional_exports, {
  default: () => AdditionalPage
});
var import_polaris = require("@shopify/polaris"), import_app_bridge_react = require("@shopify/app-bridge-react"), import_jsx_runtime3 = require("react/jsx-runtime");
function AdditionalPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_polaris.Page, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_app_bridge_react.TitleBar, { title: "Additional page" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_polaris.Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_polaris.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_polaris.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_polaris.BlockStack, { gap: "300", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_polaris.Text, { as: "p", variant: "bodyMd", children: [
          "The app template comes with an additional page which demonstrates how to create multiple pages within app navigation using",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_polaris.Link,
            {
              url: "https://shopify.dev/docs/apps/tools/app-bridge",
              target: "_blank",
              removeUnderline: !0,
              children: "App Bridge"
            }
          ),
          "."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_polaris.Text, { as: "p", variant: "bodyMd", children: [
          "To create your own page and have it show up in the app navigation, add a page inside ",
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Code, { children: "app/routes" }),
          ", and a link to it in the ",
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Code, { children: "<NavMenu>" }),
          " component found in ",
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Code, { children: "app/routes/app.jsx" }),
          "."
        ] })
      ] }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_polaris.Layout.Section, { variant: "oneThird", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_polaris.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_polaris.BlockStack, { gap: "200", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_polaris.Text, { as: "h2", variant: "headingMd", children: "Resources" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_polaris.List, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_polaris.List.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_polaris.Link,
          {
            url: "https://shopify.dev/docs/apps/design-guidelines/navigation#app-nav",
            target: "_blank",
            removeUnderline: !0,
            children: "App nav best practices"
          }
        ) }) })
      ] }) }) })
    ] })
  ] });
}
function Code({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_polaris.Box,
    {
      as: "span",
      padding: "025",
      paddingInlineStart: "100",
      paddingInlineEnd: "100",
      background: "bg-surface-active",
      borderWidth: "025",
      borderColor: "border",
      borderRadius: "100",
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("code", { children })
    }
  );
}

// app/routes/app.home-page.jsx
var app_home_page_exports = {};
__export(app_home_page_exports, {
  default: () => HomePage
});
var import_react3 = require("react"), import_polaris2 = require("@shopify/polaris"), import_jsx_runtime4 = require("react/jsx-runtime");
function HomePage() {
  let [data, setData] = (0, import_react3.useState)([]), [loading, setLoading] = (0, import_react3.useState)(!0);
  return (0, import_react3.useEffect)(() => {
    fetch("https://cehaeu.mailsender.mazakayazilim.com/api/data").then((res) => res.json()).then((result) => {
      setData(result), setLoading(!1);
    }).catch((err) => {
      console.error("API error", err), setLoading(!1);
    });
  }, []), loading ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_polaris2.Page, { title: "Teklif Listesi", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_polaris2.Card, { sectioned: !0, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_polaris2.Spinner, { accessibilityLabel: "Y\xFCkleniyor", size: "large" }) }) }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_polaris2.Page, { title: "Teklif Listesi", children: data.map((quotation) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_polaris2.Card, { title: `Teklif No: ${quotation.quotationNo}`, sectioned: !0, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_polaris2.TextContainer, { spacing: "loose", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_polaris2.Text, { variant: "bodyMd", as: "p", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("strong", { children: "Tarih:" }),
      " ",
      quotation.dateStr
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_polaris2.Text, { variant: "bodyMd", as: "p", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("strong", { children: "M\xFC\u015Fteri:" }),
      " ",
      quotation.deliveryInfo.firstName,
      " ",
      quotation.deliveryInfo.lastName,
      " - ",
      quotation.deliveryInfo.email
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_polaris2.Text, { variant: "bodyMd", as: "p", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("strong", { children: "Adres:" }),
      " ",
      quotation.deliveryInfo.address,
      ", ",
      quotation.deliveryInfo.city,
      ", ",
      quotation.deliveryInfo.country
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_polaris2.Divider, {}),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_polaris2.DataTable,
      {
        columnContentTypes: ["text", "text", "numeric", "numeric", "text", "text"],
        headings: ["G\xF6rsel", "\xDCr\xFCn", "Fiyat", "Birim Fiyat", "Adet", "Se\xE7enekler"],
        rows: quotation.offers.map((offer) => [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: offer.image, alt: offer.title, width: 50 }),
          offer.title,
          `${offer.price} \u20BA`,
          `${offer.unitPrice} \u20BA`,
          offer.quantity,
          offer.options
        ])
      }
    )
  ] }) }, quotation.quotationNo)) });
}

// app/routes/app._index.jsx
var app_index_exports = {};
__export(app_index_exports, {
  action: () => action3,
  default: () => Index,
  loader: () => loader
});
var import_react4 = require("react"), import_react5 = require("@remix-run/react"), import_polaris3 = require("@shopify/polaris"), import_app_bridge_react2 = require("@shopify/app-bridge-react");
var import_jsx_runtime5 = require("react/jsx-runtime"), loader = async ({ request }) => (await authenticate.admin(request), null), action3 = async ({ request }) => {
  let { admin } = await authenticate.admin(request), color = ["Red", "Orange", "Yellow", "Green"][Math.floor(Math.random() * 4)], responseJson = await (await admin.graphql(
    `#graphql
      mutation populateProduct($product: ProductCreateInput!) {
        productCreate(product: $product) {
          product {
            id
            title
            handle
            status
            variants(first: 10) {
              edges {
                node {
                  id
                  price
                  barcode
                  createdAt
                }
              }
            }
          }
        }
      }`,
    {
      variables: {
        product: {
          title: `${color} Snowboard`
        }
      }
    }
  )).json(), product = responseJson.data.productCreate.product, variantId = product.variants.edges[0].node.id, variantResponseJson = await (await admin.graphql(
    `#graphql
    mutation shopifyRemixTemplateUpdateVariant($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
      productVariantsBulkUpdate(productId: $productId, variants: $variants) {
        productVariants {
          id
          price
          barcode
          createdAt
        }
      }
    }`,
    {
      variables: {
        productId: product.id,
        variants: [{ id: variantId, price: "100.00" }]
      }
    }
  )).json();
  return {
    product: responseJson.data.productCreate.product,
    variant: variantResponseJson.data.productVariantsBulkUpdate.productVariants
  };
};
function Index() {
  let fetcher = (0, import_react5.useFetcher)(), shopify2 = (0, import_app_bridge_react2.useAppBridge)(), isLoading = ["loading", "submitting"].includes(fetcher.state) && fetcher.formMethod === "POST", productId = fetcher.data?.product?.id.replace(
    "gid://shopify/Product/",
    ""
  );
  (0, import_react4.useEffect)(() => {
    productId && shopify2.toast.show("Product created");
  }, [productId, shopify2]);
  let generateProduct = () => fetcher.submit({}, { method: "POST" });
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_polaris3.Page, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { children: "Uygulama \xC7al\u0131\u015Ft\u0131" }) });
}

// app/routes/auth.login/route.jsx
var route_exports = {};
__export(route_exports, {
  action: () => action4,
  default: () => Auth,
  links: () => links,
  loader: () => loader2
});
var import_react6 = require("react"), import_react7 = require("@remix-run/react"), import_polaris4 = require("@shopify/polaris"), import_en = __toESM(require("@shopify/polaris/locales/en.json"), 1), import_styles = __toESM(require("@shopify/polaris/build/esm/styles.css?url"), 1);

// app/routes/auth.login/error.server.jsx
var import_server3 = require("@shopify/shopify-app-remix/server");
function loginErrorMessage(loginErrors) {
  return loginErrors?.shop === import_server3.LoginErrorType.MissingShop ? { shop: "Please enter your shop domain to log in" } : loginErrors?.shop === import_server3.LoginErrorType.InvalidShop ? { shop: "Please enter a valid shop domain to log in" } : {};
}

// app/routes/auth.login/route.jsx
var import_jsx_runtime6 = require("react/jsx-runtime"), links = () => [{ rel: "stylesheet", href: import_styles.default }], loader2 = async ({ request }) => ({ errors: loginErrorMessage(await login(request)), polarisTranslations: import_en.default }), action4 = async ({ request }) => ({
  errors: loginErrorMessage(await login(request))
});
function Auth() {
  let loaderData = (0, import_react7.useLoaderData)(), actionData = (0, import_react7.useActionData)(), [shop, setShop] = (0, import_react6.useState)(""), { errors } = actionData || loaderData;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_polaris4.AppProvider, { i18n: loaderData.polarisTranslations, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_polaris4.Page, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_polaris4.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react7.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_polaris4.FormLayout, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_polaris4.Text, { variant: "headingMd", as: "h2", children: "Log in" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      import_polaris4.TextField,
      {
        type: "text",
        name: "shop",
        label: "Shop domain",
        helpText: "example.myshopify.com",
        value: shop,
        onChange: setShop,
        autoComplete: "on",
        error: errors.shop
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_polaris4.Button, { submit: !0, children: "Log in" })
  ] }) }) }) }) });
}

// app/routes/_index/route.jsx
var route_exports2 = {};
__export(route_exports2, {
  default: () => App2,
  loader: () => loader3
});
var import_node3 = require("@remix-run/node"), import_react8 = require("@remix-run/react");

// app/routes/_index/styles.module.css
var styles_module_default = { index: "LQCYp", heading: "bVg-E", text: "_5LEJl", content: "IjJz7", form: "sI1Wg", label: "py2aZ", input: "k8y5b", button: "DcRe8", list: "qyGLW" };

// app/routes/_index/route.jsx
var import_jsx_runtime7 = require("react/jsx-runtime"), loader3 = async ({ request }) => {
  let url = new URL(request.url);
  if (url.searchParams.get("shop"))
    throw (0, import_node3.redirect)(`/app?${url.searchParams.toString()}`);
  return { showForm: Boolean(login) };
};
function App2() {
  let { showForm } = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: styles_module_default.index, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: styles_module_default.content, children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h1", { className: styles_module_default.heading, children: "A short heading about [your app]" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: styles_module_default.text, children: "A tagline about [your app] that describes your value proposition." }),
    showForm && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react8.Form, { className: styles_module_default.form, method: "post", action: "/auth/login", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { className: styles_module_default.label, children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: "Shop domain" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { className: styles_module_default.input, type: "text", name: "shop" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: "e.g: my-shop-domain.myshopify.com" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { className: styles_module_default.button, type: "submit", children: "Log in" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("ul", { className: styles_module_default.list, children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("strong", { children: "Product feature" }),
        ". Some detail about your feature and its benefit to your customer."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("strong", { children: "Product feature" }),
        ". Some detail about your feature and its benefit to your customer."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("strong", { children: "Product feature" }),
        ". Some detail about your feature and its benefit to your customer."
      ] })
    ] })
  ] }) });
}

// app/routes/auth.$.jsx
var auth_exports = {};
__export(auth_exports, {
  loader: () => loader4
});
var loader4 = async ({ request }) => (await authenticate.admin(request), null);

// app/routes/app.jsx
var app_exports = {};
__export(app_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App3,
  headers: () => headers,
  links: () => links2,
  loader: () => loader5
});
var import_react9 = require("@remix-run/react"), import_server4 = require("@shopify/shopify-app-remix/server"), import_react10 = require("@shopify/shopify-app-remix/react"), import_app_bridge_react3 = require("@shopify/app-bridge-react"), import_styles2 = __toESM(require("@shopify/polaris/build/esm/styles.css?url"), 1);
var import_jsx_runtime8 = require("react/jsx-runtime"), links2 = () => [{ rel: "stylesheet", href: import_styles2.default }], loader5 = async ({ request }) => (await authenticate.admin(request), { apiKey: process.env.SHOPIFY_API_KEY || "" });
function App3() {
  let { apiKey } = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_react10.AppProvider, { isEmbeddedApp: !0, apiKey, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_app_bridge_react3.NavMenu, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react9.Link, { to: "/app", rel: "home", children: "Home" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react9.Link, { to: "/app/additional", children: "Additional page" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react9.Link, { to: "/app/home-page", children: "Home page" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react9.Outlet, {})
  ] });
}
function ErrorBoundary() {
  return import_server4.boundary.error((0, import_react9.useRouteError)());
}
var headers = (headersArgs) => import_server4.boundary.headers(headersArgs);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-HWH2YYNK.js", imports: ["/build/_shared/chunk-NMKT4FWM.js", "/build/_shared/chunk-TQC3RT7F.js", "/build/_shared/chunk-Q3IECNXJ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SQGTN7FR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-HIXNKAB7.js", imports: ["/build/_shared/chunk-WK3XIJ7S.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/app": { id: "routes/app", parentId: "root", path: "app", index: void 0, caseSensitive: void 0, module: "/build/routes/app-P3564KIC.js", imports: ["/build/_shared/chunk-WF3ETG76.js", "/build/_shared/chunk-5LFJ7ZD4.js", "/build/_shared/chunk-BNHA5ZJ3.js", "/build/_shared/chunk-FIPJSFTH.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/app._index": { id: "routes/app._index", parentId: "routes/app", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/app._index-HRFDSSRX.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/app.additional": { id: "routes/app.additional", parentId: "routes/app", path: "additional", index: void 0, caseSensitive: void 0, module: "/build/routes/app.additional-45EWYC4R.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/app.home-page": { id: "routes/app.home-page", parentId: "routes/app", path: "home-page", index: void 0, caseSensitive: void 0, module: "/build/routes/app.home-page-COKCE7U7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/auth.$": { id: "routes/auth.$", parentId: "root", path: "auth/*", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.$-JID2MVQG.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/auth.login": { id: "routes/auth.login", parentId: "root", path: "auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.login-TGO4F4V3.js", imports: ["/build/_shared/chunk-WK3XIJ7S.js", "/build/_shared/chunk-BNHA5ZJ3.js", "/build/_shared/chunk-FIPJSFTH.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/webhooks.app.scopes_update": { id: "routes/webhooks.app.scopes_update", parentId: "root", path: "webhooks/app/scopes_update", index: void 0, caseSensitive: void 0, module: "/build/routes/webhooks.app.scopes_update-W6YB5UDE.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/webhooks.app.uninstalled": { id: "routes/webhooks.app.uninstalled", parentId: "root", path: "webhooks/app/uninstalled", index: void 0, caseSensitive: void 0, module: "/build/routes/webhooks.app.uninstalled-I5ERYZQE.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "2b2473ce", hmr: void 0, url: "/build/manifest-2B2473CE.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/webhooks.app.scopes_update": {
    id: "routes/webhooks.app.scopes_update",
    parentId: "root",
    path: "webhooks/app/scopes_update",
    index: void 0,
    caseSensitive: void 0,
    module: webhooks_app_scopes_update_exports
  },
  "routes/webhooks.app.uninstalled": {
    id: "routes/webhooks.app.uninstalled",
    parentId: "root",
    path: "webhooks/app/uninstalled",
    index: void 0,
    caseSensitive: void 0,
    module: webhooks_app_uninstalled_exports
  },
  "routes/app.additional": {
    id: "routes/app.additional",
    parentId: "routes/app",
    path: "additional",
    index: void 0,
    caseSensitive: void 0,
    module: app_additional_exports
  },
  "routes/app.home-page": {
    id: "routes/app.home-page",
    parentId: "routes/app",
    path: "home-page",
    index: void 0,
    caseSensitive: void 0,
    module: app_home_page_exports
  },
  "routes/app._index": {
    id: "routes/app._index",
    parentId: "routes/app",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: app_index_exports
  },
  "routes/auth.login": {
    id: "routes/auth.login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: route_exports2
  },
  "routes/auth.$": {
    id: "routes/auth.$",
    parentId: "root",
    path: "auth/*",
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/app": {
    id: "routes/app",
    parentId: "root",
    path: "app",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
