const ErrorExample = () => {
  let count = 0;

  return (
    <div>
      <h2>{count}</h2>
      <button className='btn' type='button' onClick={() => count++}>
        Increase
      </button>
    </div>
  );
};

export default ErrorExample;
