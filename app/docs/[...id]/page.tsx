export default function IDpage({ params }) {
  console.log(params.id);
  return <div>Id : {params.id}</div>;
}
