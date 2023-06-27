const fetchData= () => {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res('done');
    }, 1500);
  });
  return promise;
}

setTimeout(() => {
  console.log('Done!')
  fetchData(text => {
    console.log(text);
  });
}, 2000);


