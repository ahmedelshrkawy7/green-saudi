const SubmitBtn = ({ Post, text }) => {
  return (
    <div className="btn-wrap justify-content-between mt-20">
      <button
        type="submit"
        className="btn style4"
        // disabled={Post.isLoading}
      >
        {text}
      </button>
    </div>
  );
};

export default SubmitBtn;
