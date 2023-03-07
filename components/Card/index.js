import Link from "next/link";
import { urlFor } from "../../utils/image";
import { PostTitle, Content, ImgWrapper, Button } from "./styled";

const Card = ({ post }) => {
  return (
    <>
      <Content>
        <PostTitle>{post.title}</PostTitle>
        <p>date</p>
      </Content>

      <Link href={`post/${post.slug.current}`}>
        <ImgWrapper>
          <img src={urlFor(post.image)} alt="" className="img" />
        </ImgWrapper>
      </Link>

      <Content>
        <p>{post.description}</p>
        <Button>
          <Link href={`post/${post.slug.current}`}>read more</Link>
        </Button>
      </Content>
    </>
  );
};

export default Card;