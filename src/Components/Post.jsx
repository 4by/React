import Logo from '../assets/js.webp';

const Post = ({ num }) => (
  <div className="m-5 d-flex align-items-center">
    <div className="flex-shrink-0">
      <img
        width={150}
        height={150}
        className="mr-3"
        src={Logo}
      />
    </div>
    <div className="flex-grow-1 ms-3">
      <h5>
        Blog post #
        {num}
      </h5>
      <p> lorem ipsum dolor </p>
    </div>
  </div>
);

export default Post;
