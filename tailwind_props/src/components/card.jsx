import react from "react";

function Card(props) { // sometimes we can remove the props and directly destructure the values we want to use in the component. Like this: function Card({username, someObject, someArr}) { ... }
  console.log(props.username)
  return (
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
      <div>
        <img
          className="size-48 shadow-xl rounded-md"
          alt=""
          src="https://images.pexels.com/photos/2680270/pexels-photo-2680270.jpeg"
        />
      </div>
      <div className="flex flex-col items-center md:items-start">
        <span className="text-2xl font-medium">Class Warfare</span>
        <span className="font-medium text-sky-500">{props.username}</span>
        <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
          <span>No. 4</span>
          <span>·</span>
          <span>2025</span>
        </span>
      </div>
    </div>
  );
}


export default Card;