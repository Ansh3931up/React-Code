/* eslint-disable react/prop-types */
export function Person(props){
  return (
    <>
    <p>Hello our first customer is {props.name} and his age is {props.age}</p>
    </>
  );
}
export function Button(props){
  return (<>
    <button onClick={props.onClick}>
      {props.text}
    </button>
    </>
  );

}
export function List(props){
  return (
    <>
    <ul>
      <li>{props.items} </li>
    </ul>
    </>

  );
}
export function Header(props){
  return (
  <>
  <h1>{props.title}</h1>
  </>
  );
}

