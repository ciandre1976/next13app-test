import style from "./style.module.css";
export default function IDpage({ params }) {
  console.log(params.id);
  return <div className={style.color}>Id : {params.id}</div>;
}
