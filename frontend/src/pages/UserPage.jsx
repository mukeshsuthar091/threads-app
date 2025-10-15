import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return <>
    <UserHeader />
    <UserPost likes={1200} replies={481} postImg="/post1.png" postTitle="Let's talk about threads." />
    <UserPost likes={451} replies={354} postImg="/post2.png" postTitle="Nice Tutorials" />
    <UserPost likes={321} replies={243} postImg="/post3.png" postTitle="I love this guy." />
    <UserPost likes={667} replies={200} postTitle="Let's talk about threads." />
  </>;
};

export default UserPage;
