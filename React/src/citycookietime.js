import axios from "axios";
export default function CookieTime() {
  const addCookie = (event) => {
    event.preventDefault();
    axios
      .get(
        `/cookie/setcookiewithtime/${event.target.item.value}/${event.target.itemvalue.value}/${event.target.time.value}`
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="cookie">
      <form onSubmit={addCookie}>
        <div>
          <b>Enter Item:</b>
        </div>
        <input type="text" placeholder="enter Item" name="item" />
        <br />
        <div>
          <b>Enter value:</b>
        </div>
        <input type="text" placeholder="enter value" name="itemvalue" />
        <br />
        <div>
          <b>Enter Time:</b>
        </div>
        <input type="number" placeholder="enter time" name="time" />
        <br />
        <button type="submit">Add Cookie</button>
      </form>
    </div>
  );
}
