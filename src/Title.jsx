function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? 'count limit reached' : 'Fancy Counter'}
    </h1>
  );
}

export default Title;
