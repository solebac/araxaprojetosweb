const PostsSendCommets = () => {
  return (
    <>
      <div className="bc-widget">
        <h4>Leave a comment</h4>
        <form action="#" className="leave-comment-form">
          <div className="group-input">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Website" />
          </div>
          <textarea placeholder="Comment"></textarea>
          <button type="submit" className="site-btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default PostsSendCommets;
