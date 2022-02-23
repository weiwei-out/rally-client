function App() {
  // function postItem(item) {
  //   fetch("http://localhost:9292/items", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(item),
  //   })
  //     .then((res) => res.json())
  //     .then((newItem) => {
  //       setItems([newItem, ...items]);
  //     });
  // }
  function cb(obj) {
    fetch("http://localhost:3000/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then(console.log(obj));
  }

  return (
    <div>
      <form onSubmi={cb}>
        <input type="text" placeholder="username" />
        <p></p>
        <input type="text" placeholder="password" />
        <p></p>
        <button id="submit1" type="submit">
          login
        </button>
      </form>
    </div>
  );
}

export default App;
