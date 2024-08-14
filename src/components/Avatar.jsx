const Avatar = ({ name, imgSrc, width = 200 }) => {
  return <img alt={name} src={imgSrc} width={width} />;
};

export default Avatar;
