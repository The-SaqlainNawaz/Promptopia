import "@styles/global.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

function RootLayout({ children }) {
  return (
    // <BrowserRouter>
    <Provider>
      <html lang="en">
        <body>
          <div className="main">
            <div className="gradient" />
          </div>
          <main>
            <div className="app">
              <Nav />
              {children}
            </div>
          </main>
        </body>
      </html>
    </Provider>
    // </BrowserRouter>
  );
}

export default RootLayout;
