import "./index.css";
import { Card } from "antd";
import type React from "react";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const { Meta } = Card;

interface CardProps {
  image: string;
  title: string;
  description: string;
  link:string
}

const AntCardWithDisabledLint: React.FC<CardProps> = ({
  image,
  description,
  title,
  link
}) => (
  <Card
    style={{ width: 400 }}
    variant="outlined"
    cover={
      <a className="overflow-hidden" target="_blank" href={link}>
        <img
        alt={title}
        className="h-[100px] w-full"
        src={image || "/placeholder.svg"}
      />
      </a>
    }
    className="no-padding-card"
  >
    <Meta title={title} description={description} className="w-[200px]" />
  </Card>
);

export default AntCardWithDisabledLint;
