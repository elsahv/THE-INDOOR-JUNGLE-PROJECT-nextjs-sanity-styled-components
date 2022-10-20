import MailchimpForm from "./MailchimpForm";
import Link from "next/link";
import styled from "styled-components";

const MailchimpWrapper = styled.div`
  // background: aquamarine;

  border-top: solid 2px black;
  padding-top: 50px;
  padding-bottom: 650px;
  grid-area: right;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "a"
    "b";

  @media only screen and (max-width: 834px) {
    padding: 20px 40px;
    grid-template-rows: 1fr;
    grid-template-areas: "a b";
  }
  @media only screen and (max-width: 600px) {
    padding: 20px 10px;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "a"
      "b";
  }
`;

const ContentParagraph = styled.p`
  font-size: 18px;
  padding: 20px 30px 5px;
  color: #000;
  a {
    color: aquamarine;
    padding: 0 6px;
  }

  @media only screen and (max-width: 531px) {
    font-size: 17px;
    padding-top: 10px;
    padding-bottom: 0;
  }
`;

const MailchimpContainer = styled.div``;

const SubscribeCTA = () => {
  return (
    <MailchimpWrapper
      style={{ backgroundImage: "url(../images/jake.jpg)" }}
      id="subscribe"
    >
      <ContentParagraph>
        A weekly newsletter regarding: food, plants, and other writings...
        Subscribe for post updates! You can also read it for free
        <Link href="/newsletter">here</Link>
      </ContentParagraph>
      <MailchimpContainer>
        <MailchimpForm />
      </MailchimpContainer>
    </MailchimpWrapper>
  );
};

export default SubscribeCTA;