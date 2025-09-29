import Badge from "./components/Badge";
import Banner from "./components/Banner";
import Card from "./components/Card";
import { IoCloudUploadOutline } from "react-icons/io5";

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

      <Banner status="">
        <h1>Heads up!</h1>
        <p>This is a custom warning message.</p>
      </Banner>
      <Banner status="success">
        <h1>Congratulations!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam.
        </p>
      </Banner>
      <Banner status="warning">
        <h1>Attention</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
        </p>
      </Banner>
      <Banner status="error">
        <h1>There is a problem with your application</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
        </p>
      </Banner>
      <Banner status="neutral">
        <h1>Update available</h1>
      </Banner>
      <Card>
        <i>
          <IoCloudUploadOutline
            style={{
              height: "48px",
              width: "48px",
              background: "#3f75fe",
              color: "#fff",
              borderRadius: "6px",
              padding: "12px",
            }}
          />
        </i>
        <h1>Easy Deployment</h1>
        <p>
          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
          magna sit morbi lobortis.
        </p>
      </Card>
    </>
  );
}
