function Education({ education }) {
  return (
    <div>
      <p>
        <strong>{education.school}</strong>
        {` · ${education.year}`}
      </p>
      <i>
        <p>{education.address}</p>
        <p>{education.program}</p>
      </i>
    </div>
  );
}

export default Education;
