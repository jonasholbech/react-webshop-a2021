import Product from "./Product";
import { Tabs, Popover, Button } from "antd";

const { TabPane } = Tabs;

export default function ProductList(props) {
  const mapped = props.products.map((product) => (
    <Product addToBasket={props.addToBasket} key={product.id} {...product} />
  ));
  const myContent = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  return (
    <section>
      <h1>Product List {props.break}</h1>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Tab 1" key="1">
          <p>here we go</p>
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          <Popover content={myContent} title="Title">
            <Button type="primary">Hover me</Button>
          </Popover>
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
      <section className="ProductList">{mapped}</section>
    </section>
  );
}
//<Product {...props.product} />
