import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { GetUser, PostUser } from "../actions";
import "./Css/login.css";

export default function User() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  let users = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    dispatch(GetUser());
  }, [dispatch]);

  const validate = (data) => {
    const { name, mail, password, birthDate, country } = data;

    if (mail === users.mail && password === users.password) {
      history.push("/welcome");
    } else {
      if (!name || !birthDate || !country) {
        alert("fill in the necessary fields");
      } else {
        dispatch(PostUser(data));
        history.push("welcome");
      }
    }
  };

  return (
    <div className="body">
      <br />

      <div className="encabezado">
        <p>
          If you registered log in, otherwise fill in the necessary fields and
          register
        </p>
      </div>
      <br />
      <div className="login">
        <form onSubmit={handleSubmit(validate)}>
          <br />
          <input
            type="text"
            className="inputm"
            {...register("mail")}
            autoComplete="off"
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
            placeholder="Email"
          />
          <br />
          <br />

          <input
            type="password"
            className="inputm"
            {...register("password")}
            pattern="^[A-Za-z0-9._%+-]{8}$"
            placeholder="Password: 8 dig. 'aA-zZ,0-9'"
            max="8"
          />
          <br />
          <input type="submit" value="Log in" className="btn" />
          <br />
          <br />
          <br />
          <br />

          <input
            type="text"
            className="inputm"
            placeholder="Name"
            {...register("name")}
            autoComplete="off"
          />
          <br />
          <br />

          <label className="inputm">Birthdate: </label>
          <input type="date" {...register("birthDate")} />
          <br />
          <br />
          <input
            type="text"
            className="inputm"
            {...register("country")}
            placeholder="Postal Code "
            autoComplete="off"
          />
          <br />
          <input type="submit" value="Sing in" className="btn" />
          <br />
        </form>
      </div>
    </div>
  );
}
