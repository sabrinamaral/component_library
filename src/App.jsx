import Badge from "./components/Badge";
import Banner from "./components/Banner";

export default function App() {
  return (
    <>
      <section className="badges">
        <Badge color="grey" pill={true} />
        <Badge color="red" pill={true} />
        <Badge color="yellow" pill={true} />
        <Badge color="green" pill={true} />
        <Badge color="blue" pill={false} />
        <Badge color="indigo" pill={false} />
        <Badge color="purple" pill={false} />
        <Badge color="pink" pill={false} />
      </section>
      <section className="banners">
        <Banner>
          {{
            status: "success",
            title: "Congratulations!",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquidpariatur, ipsum similique veniam.",
          }}
        </Banner>
        <Banner>
          {{
            status: "warning",
            title: "Attention",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
          }}
        </Banner>
        <Banner>
          {{
            status: "error",
            title: "There is a problem with your application",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
          }}
        </Banner>
        <Banner>
          {{
            status: "neutral",
            title: "Update available",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquidpariatur, ipsum similique veniam.",
          }}
        </Banner>
      </section>
    </>
  );
}
