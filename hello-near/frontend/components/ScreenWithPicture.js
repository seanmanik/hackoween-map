const ScreenWithPicture = ({ children, picture, ...props }) => {

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between w-full max-w-6xl mx-auto px-8 lg:px-12 py-8 lg:py-12" {...props}>
      <div className="w-full lg:w-1/2">
        {children}
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <img src={picture} alt="Picture" />
      </div>
    </div>
  );

};

export default ScreenWithPicture;